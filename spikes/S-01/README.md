# S-01: Push vs polling for kitchen order delivery

**Question (yes/no):** Does pushing new orders to the KDS over a WebSocket meet QAS-01 (a submitted order appears on the KDS within 5 s for at least 95% of 50 orders from 20 active tables on restaurant Wi-Fi), and does 3-second polling also meet it?

**Answer:** Push: **yes** in both scenarios. Polling: **yes on normal Wi-Fi, no on degraded Wi-Fi** (82% within 5 s). This confirms ADR-02 (push, with polling only as a fallback).

Owner: Manideep Pendyala. Addresses QAS-01 / QR-01 / FR-09 / FR-11, ADR-02, risk R6.

## Set-up

- Node.js 24, one dependency (`ws` 8.18.0). No database, no credentials.
- `server.js`: the order service. `POST /orders` validates and stores an order in memory, then pushes it to every socket connected on `/kds`. `GET /orders?after=<id>` serves the polling variant.
- `bench.js`: starts the server in-process, connects one push KDS and one polling KDS (3 s interval), then submits 50 orders from 20 simulated tables at random times within a 30 s window (a dinner rush).
- Restaurant Wi-Fi is simulated by delaying every network hop by 5 to 80 ms, with a chance that a hop stalls (a retransmit on a weak signal). Normal Wi-Fi: 2% of hops stall for 1 s. Degraded Wi-Fi: 20% of hops stall for 2 s.
- Latency for each order = time the KDS has it − time the waitstaff device started submitting it. Both timestamps come from the same process clock (`performance.now()`), so no clock-sync error.
- The random generator is seeded (`SEED=3354`), so a run is reproducible.

## How to run

```
cd spikes/S-01
npm install
npm test                                                   # unit tests for the percentile maths
OUT=results-nominal.json npm run bench                     # normal Wi-Fi
STALL_RATE=0.2 STALL_MS=2000 OUT=results-degraded-wifi.json npm run bench
```

Each run takes about 35 s and writes its numbers to the named JSON file.

## Results (measured 2026-11-07, MacBook, Node 24.13.0)

Latency in ms, n = 50 orders per variant, 0 orders missed in every run.

| Scenario | Variant | p50 | p95 | max | Within 5 s | QAS-01 |
|---|---|---|---|---|---|---|
| Normal Wi-Fi | WebSocket push | 86 | 138 | 150 | 100% | Met |
| Normal Wi-Fi | Polling every 3 s | 1506 | 2997 | 3112 | 100% | Met |
| Degraded Wi-Fi | WebSocket push | 118 | 4082 | 4124 | 100% | Met |
| Degraded Wi-Fi | Polling every 3 s | 3036 | 6188 | 7111 | 82% | **Not met** |

Raw output: [results-nominal.json](results-nominal.json), [results-degraded-wifi.json](results-degraded-wifi.json).

## What it means

- On a healthy network both designs pass, but push uses about 3% of the 5 s budget at p95 while polling uses about 60%. Polling's delay is dominated by the poll interval, not the network.
- When the Wi-Fi degrades, the poll interval and the network stalls add up and polling fails QAS-01. Push still passes, though its p95 (4.1 s) shows the margin shrinks when stalls hit both hops.
- Shortening the poll interval would narrow the gap, but every KDS and server screen would then hit the server several times a second whether or not anything changed.

## Limits (what this spike does not show)

- Wi-Fi is simulated on localhost, not measured in a real restaurant. Real numbers are an open question for P3.
- Orders are kept in memory. The database write that ADR-03 adds to this path is not measured here.
- One push KDS and one polling KDS; it does not test 20 tablets connected at once or a dropped socket reconnecting.
