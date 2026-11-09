const test = require("node:test");
const assert = require("node:assert/strict");
const { percentile, summarize } = require("./stats");

test("p95 of 1..100 is 95 (nearest rank)", () => {
  const values = Array.from({ length: 100 }, (_, i) => i + 1);
  assert.equal(percentile(values, 95), 95);
});

test("p95 of 1..20 is 19, not the max", () => {
  const values = Array.from({ length: 20 }, (_, i) => i + 1);
  assert.equal(percentile(values, 95), 19);
});

test("unsorted input is sorted numerically, not as strings", () => {
  // A default .sort() would order these as 100, 25, 9 and return the wrong value.
  assert.equal(percentile([100, 9, 25], 50), 25);
});

test("a single value is every percentile", () => {
  assert.equal(percentile([42], 1), 42);
  assert.equal(percentile([42], 100), 42);
});

test("percentile rejects empty input and out-of-range p", () => {
  assert.throws(() => percentile([], 50));
  assert.throws(() => percentile([1, 2], 0));
  assert.throws(() => percentile([1, 2], 101));
});

test("summarize of empty input reports zero count instead of throwing", () => {
  assert.deepEqual(summarize([]), { count: 0, min: null, p50: null, p95: null, max: null });
});

test("percentile does not mutate the caller's array", () => {
  const values = [3, 1, 2];
  percentile(values, 50);
  assert.deepEqual(values, [3, 1, 2]);
});
