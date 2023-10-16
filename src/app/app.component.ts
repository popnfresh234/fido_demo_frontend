import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth/auth.service';
import { LocalStorageService } from './services/local_storage/local-storage.service';
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
      LoginComponent,
      RouterModule,
      ReactiveFormsModule,
      CommonModule
    ],
})
export class AppComponent {
  authService = inject(AuthService);
  localStoragService = inject(LocalStorageService)
  title = 'frontend';

  submitLogout() {
    this.authService.submitLogout();
  }
}
