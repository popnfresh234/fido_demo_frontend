import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  base_url = 'http://localhost:8080/demo/'

  async getAllUsers(): Promise<User[]> {
    const data = await fetch(this.base_url + "all");
    return await data.json() ?? {};
  }

  async getUser(username: String): Promise<User | undefined> {
    const data = await fetch(this.base_url + `user/?username=${username}`)
    return await data.json() ?? '';
  }
}
