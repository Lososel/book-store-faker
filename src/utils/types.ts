export interface Review {
  author: string;
  text: string;
}

export interface Book {
  index: number;
  isbn: string;
  title: string;
  authors: string[];
  publisher: string;
  likes: number;
  reviews: Review[];
}

export type LocaleOption = {
  code: string;
  label: string;
};
