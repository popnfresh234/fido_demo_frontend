import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/local-storage.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authService = inject(AuthService);
  applyForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),

  });

  constructor(public localStorageService: LocalStorageService) {
  }

  submitLogin() {
    this.authService.submitLogin(
      this.applyForm.value.username ?? '',
      this.applyForm.value.password ?? '',
    )
  }

  submitLogout() {
    this.authService.submitLogout();
  }
}
