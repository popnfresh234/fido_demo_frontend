import { News } from '../news';

export interface NewsResponse {
  currentPage: number;
  newsItems: News[];
  totalItems: number;
  totalPages: number;
}
