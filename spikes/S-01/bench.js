// S-01 benchmark: submit orders from simulated tables and measure how long each
// takes to reach (a) a KDS that receives WebSocket pushes and (b) a KDS that polls.
// Everything runs in one process so submit and receive times share one clock.

const fs = require("node:fs");
const path = require("node:path");
const { performance } = require("node:perf_hooks");
const WebSocket = require("ws");
const { createOrderServer } = require("./server");
const { summarize } = require("./stats");

const config = {
  orders: Number(process.env.ORDERS ?? 50),
  tables: Number(process.env.TABLES ?? 20),
  spreadMs: Number(process.env.SPREAD_MS ?? 30_000), // window in which all orders are submitted
  pollMs: Number(process.env.POLL_MS ?? 3_000),
  hopMinMs: Number(process.env.HOP_MIN_MS ?? 5), // simulated one-way Wi-Fi delay per network hop
  hopMaxMs: Number(process.env.HOP_MAX_MS ?? 80),
  stallRate: Number(process.env.STALL_RATE ?? 0.02), // chance a hop stalls (retransmit, weak signal)
  stallMs: Number(process.env.STALL_MS ?? 1_000),
  thresholdMs: 5_000, // QAS-01 response measure
  seed: Number(process.env.SEED ?? 3354),
};

// Seeded PRNG (mulberry32) so a run can be reproduced exactly with the same SEED.
function seededRandom(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const random = seededRandom(config.seed);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function hopDelay() {
  const base = config.hopMinMs + random() * (config.hopMaxMs - config.hopMinMs);
  return random() < config.stallRate ? base + config.stallMs : base;
}

function startPushKds(port, receivedAt) {
  const socket = new WebSocket(`ws://localhost:${port}/kds`);
  socket.on("message", (data) => {
    const order = JSON.parse(data);
    setTimeout(() => receivedAt.set(order.clientRef, performance.now()), hopDelay());
  });
  return new Promise((resolve, reject) => {
    socket.once("open", () => resolve(socket));
    socket.once("error", reject);
  });
}

function startPollingKds(port, receivedAt) {
  let lastId = 0;
  let running = true;
  const loop = (async () => {
    while (running) {
      await sleep(hopDelay());
      const res = await fetch(`http://localhost:${port}/orders?after=${lastId}`);
      const batch = await res.json();
      await sleep(hopDelay());
      const now = performance.now();
      for (const order of batch) {
        receivedAt.set(order.clientRef, now);
        lastId = Math.max(lastId, order.id);
      }
      await sleep(config.pollMs);
    }
  })();
  return { stop: () => { running = false; return loop; } };
}

async function submitOrder(port, clientRef, sentAt) {
  sentAt.set(clientRef, performance.now());
  await sleep(hopDelay());
  const order = {
    clientRef,
    table: 1 + Math.floor(random() * config.tables),
    items: [{ name: "Item " + (1 + Math.floor(random() * 10)), qty: 1 + Math.floor(random() * 3) }],
  };
  const res = await fetch(`http://localhost:${port}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  if (res.status !== 201) throw new Error(`order ${clientRef} rejected with ${res.status}`);
}

async function waitForAll(maps, deadlineMs) {
  const start = performance.now();
  while (performance.now() - start < deadlineMs) {
    if (maps.every((m) => m.size >= config.orders)) return;
    await sleep(50);
  }
}

function latencies(sentAt, receivedAt) {
  const values = [];
  for (const [ref, sent] of sentAt) {
    if (receivedAt.has(ref)) values.push(Math.round(receivedAt.get(ref) - sent));
  }
  return values;
}

function report(name, values) {
  const s = summarize(values);
  const within = values.filter((v) => v <= config.thresholdMs).length;
  const missed = config.orders - values.length;
  return { variant: name, ...s, missed, withinThresholdPct: (100 * within) / config.orders };
}

async function main() {
  const server = createOrderServer();
  const port = await server.listen();
  const sentAt = new Map();
  const pushReceived = new Map();
  const pollReceived = new Map();

  const socket = await startPushKds(port, pushReceived);
  const poller = startPollingKds(port, pollReceived);

  const offsets = Array.from({ length: config.orders }, () => random() * config.spreadMs);
  await Promise.all(offsets.map((offset, ref) => sleep(offset).then(() => submitOrder(port, ref, sentAt))));
  await waitForAll([pushReceived, pollReceived], config.pollMs * 3 + config.stallMs * 2);

  socket.close();
  await poller.stop();
  await server.close();

  const results = [
    report("WebSocket push", latencies(sentAt, pushReceived)),
    report(`Polling every ${config.pollMs} ms`, latencies(sentAt, pollReceived)),
  ];
  console.log("Config:", config);
  console.table(results);
  for (const r of results) {
    const pass = r.withinThresholdPct >= 95 && r.missed === 0;
    console.log(`${r.variant}: ${r.withinThresholdPct.toFixed(1)}% within 5 s -> QAS-01 ${pass ? "MET" : "NOT MET"}`);
  }
  const outFile = path.join(__dirname, process.env.OUT ?? "results.json");
  fs.writeFileSync(outFile, JSON.stringify({ ranAt: new Date().toISOString(), config, results }, null, 2));
  console.log(`Saved ${outFile}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
