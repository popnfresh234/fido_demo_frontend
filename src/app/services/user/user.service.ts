import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  base_url = 'https://localhost:8080/user';
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<User[]>(this.base_url + '/all');
  }

  getUser(account: string) {
    return this.http.get<User>(this.base_url + `/?account=${account}`);
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
    formData.append('image', image);
    return this.http.post(
      this.base_url +
        `/?account=${account}&name=${name}&birthdate=${birthdate}&city=${city}&district=${district}&street=${street}&alley=${alley}&lane=${lane}&floor=${floor}`,
      formData
    );
  }
}
