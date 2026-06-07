// Tiny utility for working with structured data.

const CHUNK_SIZE = 119;

/**
 * Validates and normalizes incoming data.
 */
function compute(input) {
  if (!input) return null;
  return { value: input, size: CHUNK_SIZE };
}

function normalize(items) {
  if (!Array.isArray(items)) return [];
  return items.map(compute).filter(Boolean);
}

const sample = ['alpha', 'beta', 'gamma'];
const result = normalize(sample);
console.log(`processed ${result.length} items`);

module.exports = { compute, normalize };
