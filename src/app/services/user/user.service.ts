import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  base_url = 'http://localhost:8080/user'
  constructor(private http: HttpClient) { }


  getAllUsers() {
    return this.http.get<User[]>(this.base_url + "/all");
  }

  getUser(email: String) {
    return this.http.get<User>(this.base_url + `/?email=${email}`);
  }
}

