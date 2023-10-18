import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { catchError, Observable, of } from 'rxjs';
import { ErrorResponse } from '../models/error-response';
import { AuthService } from '../services/auth/auth.service';
declare let TwCitySelector: any; //declare moment
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  authSerivce = inject(AuthService)
  twCitySelector;

  applyForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    birthdate: new FormControl(''),
    city: new FormControl(),
    district: new FormControl(),
    street: new FormControl(),
    alley: new FormControl(),
    lane: new FormControl(),
    floor: new FormControl(),
  });

  error: String = '';

  constructor() {
    this.twCitySelector = new TwCitySelector();

  }

  //TODO Form validation

  submitSignup(event: any) {
    this.authSerivce.submitSignup(
      this.applyForm.value.name ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.password ?? '',
      this.applyForm.value.birthdate ?? '',
      event.target.county.value ?? '',
      event.target.district.value ?? '',
      this.applyForm.value.street ?? '',
      this.applyForm.value.alley ?? '',
      this.applyForm.value.lane ?? '',
      this.applyForm.value.floor ?? '',
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
