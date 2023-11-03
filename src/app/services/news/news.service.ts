import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Injectable } from '@angular/core';
import { News } from 'src/app/models/news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  base_url = 'https://localhost:8080/news';
  constructor(private http: HttpClient) {}

  getAllNews() {
    return this.http.get<User[]>(this.base_url + '/all');
  }

  getPaginatedNews(params: any) {
    return this.http.get<any>(this.base_url + '/paging', { params });
  }

  getNews(id: number) {
    return this.http.get<User>(this.base_url + `/?id=${id}`);
  }

  deleteNews(params: any, deleteArr: number[]) {
    return this.http.post(this.base_url + '/delete', deleteArr, { params });
  }
}
