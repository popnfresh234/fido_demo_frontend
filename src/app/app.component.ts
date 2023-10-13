import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:
    [
      HomeComponent,
      UsersComponent,
      UserDetailsComponent,
      SignupComponent,
      RouterModule
    ],
})
export class AppComponent {
  title = 'frontend';
}
