import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  base_url = 'http://localhost:8080/demo/'
  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<User[]>(this.base_url + "all")
  }

  getUser(username: String) {
    return this.http.get<User>(this.base_url + `user/?username=${username}`);
  }
}
