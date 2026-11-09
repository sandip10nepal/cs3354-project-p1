// Minimal order service for the S-01 spike.
// POST /orders            -> stores an order and pushes it to every connected KDS socket
// GET  /orders?after=<id> -> returns orders with id > after (used by the polling KDS)
// Orders live in memory: persistence is out of scope for this spike (see ADR-03).

const http = require("node:http");
const { WebSocketServer } = require("ws");

const MAX_BODY_BYTES = 10_000;

function sendJson(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(body));
}

function isValidOrder(order) {
  return (
    order !== null &&
    typeof order === "object" &&
    Number.isInteger(order.table) &&
    order.table > 0 &&
    Array.isArray(order.items) &&
    order.items.length > 0
  );
}

function createOrderServer() {
  const orders = [];
  const server = http.createServer();
  const wss = new WebSocketServer({ server, path: "/kds" });

  function broadcast(order) {
    const message = JSON.stringify(order);
    for (const client of wss.clients) {
      if (client.readyState === client.OPEN) client.send(message);
    }
  }

  function handlePost(req, res) {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > MAX_BODY_BYTES) req.destroy();
    });
    req.on("end", () => {
      let order;
      try {
        order = JSON.parse(body);
      } catch {
        return sendJson(res, 400, { error: "body must be JSON" });
      }
      if (!isValidOrder(order)) {
        return sendJson(res, 400, { error: "order needs a positive integer table and at least one item" });
      }
      const saved = { ...order, id: orders.length + 1, status: "queued" };
      orders.push(saved);
      broadcast(saved);
      sendJson(res, 201, { id: saved.id });
    });
  }

  server.on("request", (req, res) => {
    const url = new URL(req.url, "http://localhost");
    if (req.method === "POST" && url.pathname === "/orders") return handlePost(req, res);
    if (req.method === "GET" && url.pathname === "/orders") {
      const after = Number(url.searchParams.get("after") ?? 0);
      return sendJson(res, 200, orders.filter((o) => o.id > after));
    }
    sendJson(res, 404, { error: "not found" });
  });

  return {
    listen: (port = 0) =>
      new Promise((resolve) => server.listen(port, () => resolve(server.address().port))),
    close: () =>
      new Promise((resolve) => {
        for (const client of wss.clients) client.terminate();
        wss.close(() => server.close(resolve));
      }),
  };
}

module.exports = { createOrderServer, isValidOrder };
