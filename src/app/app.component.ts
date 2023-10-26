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
import { NgxPaginationModule } from 'ngx-pagination';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { RecoveryComponent } from './recovery/recovery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    NgxPaginationModule,
  ],
})
export class AppComponent {
  authService = inject(AuthService);
  localStorageService = inject(LocalStorageService);
  title = 'frontend';
  account = '';

  constructor() {
    if (this.localStorageService.getData('token')) {
      this.account = this.authService.getAccountFromToken(
        this.localStorageService.getData('token')
      );
    }
  }

  submitLogout() {
    this.authService.submitLogout();
  }
}
