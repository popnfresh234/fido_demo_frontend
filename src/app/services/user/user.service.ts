import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  base_url = 'http://localhost:8080/user';
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<User[]>(this.base_url + '/all');
  }

  getUser(id: number) {
    return this.http.get<User>(this.base_url + `/?id=${id}`);
  }

  editUser(
    id: number,
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
    if (image.size > 0) {
      formData.append('image', image);
    }
    return this.http.post(
      this.base_url +
        `/?id=${id}&name=${name}&birthdate=${birthdate}&city=${city}&district=${district}&street=${street}&alley=${alley}&lane=${lane}&floor=${floor}`,
      formData
    );
  }
}
