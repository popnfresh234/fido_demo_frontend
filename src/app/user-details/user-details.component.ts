import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/user/http.service';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  httpService = inject(HttpService);
  user: User | undefined;

  constructor() {
    const email = this.route.snapshot.params['email'];
    console.log(this.route.snapshot.params);
    console.log('email', email);
    this.httpService.getUser(email).subscribe((user) => {
      this.user = user;
    })
  };
}
