import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  userSerrvice = inject(UserService);
  user: User | undefined;

  constructor() {
    const username = this.route.snapshot.params['username'];
    this.userSerrvice.getUser(username).then((user) => {
      this.user = user;
    })
  };
}
