import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  base_url = 'http://localhost:8080/news'
  constructor(private http: HttpClient) { }


  getAllNews() {
    return this.http.get<User[]>(this.base_url + "/all");
  }

  getNews(id: number) {
    return this.http.get<User>(this.base_url + `/?id=${id}`);
  }
}

