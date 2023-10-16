import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../models/user';
import { HttpService } from '../services/user/http.service';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../users/users.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports:
    [
      CommonModule,
      RouterModule,
      UsersComponent,
    ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users: User[] = [];
  httpSerivce: HttpService = inject(HttpService);

  constructor() {
  }

  getAllUsers() {
    this.httpSerivce.getAllUsers().subscribe((users) => {
      this.users = users;
    })
  }

  getUser(username: String) {
    this.httpSerivce.getUser(username).subscribe((user) => {
      this.users = [];
      if (user && user.email) {
        this.users[0] = user;
      }
    })
  }

}
