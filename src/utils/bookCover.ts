import hashSum from 'hash-sum';

export const getBookCoverColor = (title: string, author: string): string => {
  const hash = hashSum(`${title}-${author}`);
  const numeric = parseInt(hash.slice(0, 6), 16);

  const hue = numeric % 360;
  const saturation = 40 + (numeric % 30);
  const lightness = 15 + (numeric % 40);

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
