import seedrandom from 'seedrandom';

export const createSeededRng = (seed: string | number, page: number) =>
  seedrandom(`${seed}-${page}`);

export const generateFractionalCount = (rng: () => number, avg: number) => {
  const base = Math.floor(avg);
  return base + (rng() < avg % 1 ? 1 : 0);
};
