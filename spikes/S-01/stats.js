// Latency statistics for the S-01 spike.
// Percentiles use the nearest-rank method: the p-th percentile is the
// smallest value such that at least p% of the samples are <= it.

function percentile(values, p) {
  if (values.length === 0) {
    throw new Error("percentile() needs at least one value");
  }
  if (p <= 0 || p > 100) {
    throw new Error("p must be in (0, 100]");
  }
  const sorted = [...values].sort((a, b) => a - b);
  const rank = Math.ceil((p / 100) * sorted.length);
  return sorted[rank - 1];
}

function summarize(values) {
  if (values.length === 0) {
    return { count: 0, min: null, p50: null, p95: null, max: null };
  }
  return {
    count: values.length,
    min: Math.min(...values),
    p50: percentile(values, 50),
    p95: percentile(values, 95),
    max: Math.max(...values),
  };
}

module.exports = { percentile, summarize };
