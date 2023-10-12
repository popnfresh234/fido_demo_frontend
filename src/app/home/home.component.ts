import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
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
  userService: UserService = inject(UserService);

  constructor() {
  }

  getAllUsers() {
    this.userService.getAllUsers().then((users: User[]) => {
      this.users = users;
    })
  }

  getUser(username: String) {
    this.userService.getUser(username).then((user) => {
      console.log(user);
      this.users = [];
      if (user && user.username) {
        this.users[0] = user;
      }
    })
  }
}
