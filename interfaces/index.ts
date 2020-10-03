export type ListsProps = {
  lists: ListsData[];
};

export type ListsData = {
  list_name_encoded: string;
  list_name: string;
  updated: string;
};

export type ListProps = {
  list: ListData[];
  title: string;
};

export type BookProps = {
  book: BookDetails;
};

type ListData = {
  list_name: string;
  display_name: string;
  rank: number;
  rank_last_week: number;
  weeks_on_list: number;
  amazon_product_url: string;
  isbns: isbn[];
  book_details: BookDetails[];
};

type BookDetails = {
  title: string;
  description: string;
  author: string;
};

type isbn = {
  isbn10: string;
  isbn13: string;
};
