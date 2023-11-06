import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  base_url = environment.apiUrl + '/user';
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<User[]>(this.base_url + '/all');
  }

  getUser(account: string) {
    return this.http.get<User>(this.base_url);
  }

  editUser(
    account: string,
    name: string,
    birthdate: string,
    city: string,
    district: string,
    street: string,
    alley: string,
    lane: string,
    floor: string,
    image: File
  ) {
    const formData: FormData = new FormData();
    formData.append('account', account);
    formData.append('name', name);
    formData.append('birthdate', birthdate);
    formData.append('city', city);
    formData.append('district', district);
    formData.append('street', street);
    formData.append('alley', alley);
    formData.append('lane', lane);
    formData.append('floor', floor);
    formData.append('image', image);
    return this.http.post(this.base_url + '/', formData);
  }
}
