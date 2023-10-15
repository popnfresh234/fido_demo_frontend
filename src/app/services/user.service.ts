import { Injectable } from '@angular/core';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  base_url = 'http://localhost:8080/'

  async getAllUsers(): Promise<User[]> {
    const data = await fetch(this.base_url + "all");
    return await data.json() ?? {};
  }

  async getUser(username: String): Promise<User | undefined> {
    const data = await fetch(this.base_url + `user/?username=${username}`)
    return await data.json() ?? '';
  }

  async submitUser(name: String, email: String, password: String,) {
    const data = await fetch(this.base_url + `signup?name=${name}&email=${email}&password=${password}`, {
      method: "post",
      mode: "cors",

    });
    return await data.json() ?? '';
  }
}

