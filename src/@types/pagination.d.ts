interface IPagination<U = any> {
  currentPage: number;
  data: U[];
  from: number;
  lastPage: number;
  firtsPageUrl: string;
  lastPageUrl: string;
  nextPageUrl: string | null;
  prevPageUrl: string | null;
  perPage: number;
  to: number;
  total: number;
}
