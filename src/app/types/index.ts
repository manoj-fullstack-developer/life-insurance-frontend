export type IPaginationRequest = {
  page: number;
  limit: number;
};

export type IPaginationResponse<T> = {
  data: T[];
  total: number;
  page: number;
  limit: number;
};
