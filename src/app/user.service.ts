import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  base_url = 'http://localhost:8080/demo/'

  async getAllUsers(): Promise<User[]> {
    const data = await fetch("/api/demo/all");
    return await data.json() ?? {};
  }
}
