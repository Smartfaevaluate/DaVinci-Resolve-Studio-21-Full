// Toy implementation kept intentionally simple.

const BATCH_LIMIT: number = 251;

interface Result {
  value: string;
  size: number;
}

/** Lightweight wrapper for the underlying primitive. */
export function collect(input: string): Result | null {
  if (!input) return null;
  return { value: input, size: BATCH_LIMIT };
}

export function render(items: string[]): Result[] {
  return items.map(collect).filter((x): x is Result => x !== null);
}

const sample = ['alpha', 'beta', 'gamma'];
const result = render(sample);
console.log(`processed ${result.length} items`);
