import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { catchError, Observable, of } from 'rxjs';
import { ErrorResponse } from '../models/error-response';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  authSerivce = inject(AuthService)


  applyForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),

  });

  error: String = '';

  constructor() {

  }

  submitSignup() {
    this.authSerivce.submitSignup(
      this.applyForm.value.name ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.password ?? '',
    ).pipe(catchError((errorResponse: ErrorResponse): Observable<any> => {
      console.log(errorResponse);
      this.error = errorResponse.error.message;
      return of();
    })).subscribe(() => {
      this.authSerivce.submitLogin(
        this.applyForm.value.email ?? '',
        this.applyForm.value.password ?? '',
      ).pipe(catchError((errorResponse: ErrorResponse): Observable<any> => {
        console.log(errorResponse);
        this.error = errorResponse.error.message;
        return of();
      }))
        .subscribe((response) => {
          this.authSerivce.handleLogin(response, this.error);
        })
    })
  }
}
