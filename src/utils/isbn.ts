export const generateFakeIsbn = (rng: () => number): string => {
  const prefix = rng() > 0.5 ? '978' : '979';
  const group = Math.floor(rng() * 10);
  const publisher = Math.floor(100 + rng() * 900);
  const item = Math.floor(10000 + rng() * 90000);
  const check = Math.floor(rng() * 10);

  return `${prefix}-${group}-${publisher}-${item}-${check}`;
};
