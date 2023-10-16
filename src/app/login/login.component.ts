import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { LocalStorageService } from '../services/local_storage/local-storage.service';
import { catchError, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorResponse } from '../models/error-response';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  router = inject(Router);
  authService = inject(AuthService);
  applyForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),

  });
  error: String = "";

  constructor(public localStorageService: LocalStorageService) {
  }

  submitLogin() {
    this.authService.submitLogin(
      this.applyForm.value.username ?? '',
      this.applyForm.value.password ?? '',
    ).pipe(catchError((errorResponse: ErrorResponse): Observable<any> => {
      console.log(errorResponse);
      this.error = errorResponse.error.message;
      return of();
    }))
      .subscribe((response) => {
        this.authService.handleLogin(response, this.error);
      })
  }

  submitLogout() {
    this.authService.submitLogout();
  }
}
