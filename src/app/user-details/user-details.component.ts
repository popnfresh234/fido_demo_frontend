import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { HttpService } from '../services/http.service';


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
  httpService = inject(HttpService);
  user: User | undefined;

  constructor() {
    const email = this.route.snapshot.params['email'];
    console.log(this.route.snapshot.params);
    console.log('email', email);
    this.httpService.getUser(email).subscribe((user) => {
      this.user = user;
    })
    // this.userSerrvice.getUser(username).then((user) => {
    //   this.user = user;
    // })
  };
}
