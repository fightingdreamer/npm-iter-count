export function count<T>(iterator: Iterable<T>): number {
  let size = 0;
  for (const _ of iterator) size += 1;
  return size;
}

export function countUnique<T>(iterator: Iterable<T>): Map<T, number> {
  const count = new Map<T, number>();
  for (const item of iterator) {
    const prev = count.get(item) ?? 0;
    const next = prev + 1;
    count.set(item, next);
  }
  return count;
}
