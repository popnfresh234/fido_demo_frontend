import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports:
    [
      RouterModule
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
      console.log(users);
    })
  }
}
