import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { catchError, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  base_url = 'http://localhost:8080/'
  constructor(private http: HttpClient) { }

  getTest() {
    this.http.get(this.base_url + "auth/test").subscribe((response) => {
      console.log(response);
    });
  }

  getAllUsers() {
    return this.http.get<User[]>(this.base_url + "all");
  }

  getUser(email: String) {
    return this.http.get<User>(this.base_url + `user/?email=${email}`);
  }
}

