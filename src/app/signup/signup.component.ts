import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { catchError, Observable, of } from 'rxjs';
import { ErrorResponse } from '../models/error-response';
import { AuthService } from '../services/auth/auth.service';
import { Validators } from '@angular/forms';


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
    name: new FormControl('', [
      Validators.minLength(1),
      Validators.maxLength(20),
      Validators.required]),
    email: new FormControl('', [
      Validators.email,
      Validators.max(50)]),
    password: new FormControl('', [
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$'),
      Validators.minLength(8),
      Validators.maxLength(12),
      Validators.required,
    ]),
    birthdate: new FormControl('', [
      Validators.required,
      Validators.pattern('^[12][0-9][0-9][0-9]/[01][0-9]/[0-3][0-9]$')
    ]),
    street: new FormControl('', Validators.required),
    alley: new FormControl('', Validators.required),
    lane: new FormControl('', Validators.required),
    floor: new FormControl('', Validators.required),
  });

  error: String = '';

  constructor() {
    this.twCitySelector = new TwCitySelector();
  }

  //TODO Add Account Number

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
