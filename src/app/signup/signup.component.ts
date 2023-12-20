import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { catchError, Observable, of } from 'rxjs';
import { ErrorResponse } from '../models/responses/error-response';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { ImageUploadComponent } from '../image-upload/image-upload.component';
import formValidators from '../utilities/form-validators';

declare let TwCitySelector: any; //declare moment
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ImageUploadComponent],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../common-styles/forms.css'],
})
export class SignupComponent {
  authSerivce = inject(AuthService);
  router = inject(Router);
  twCitySelector;
  file: File = new File([''], '');

  applyForm = new FormGroup({
    account: new FormControl('', formValidators.accountValidators),
    name: new FormControl('', formValidators.nameValidators),
    email: new FormControl('', formValidators.emailValidators),
    password: new FormControl('', formValidators.passwordValidators),
    birthdate: new FormControl('', formValidators.birthdateValidators),
    street: new FormControl('', formValidators.streetValidatiors),
    alley: new FormControl('', formValidators.alleyValidatiors),
    lane: new FormControl('', formValidators.laneValidatiors),
    floor: new FormControl('', formValidators.floorValidatiors),
  });

  error: String = '';

  constructor() {
    this.twCitySelector = new TwCitySelector();
  }

  //TODO Add Account Number

  submitSignup(event: any) {
    this.authSerivce
      .submitSignup(
        this.applyForm.value.account ?? '',
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
        this.file
      )
      .pipe(
        catchError((errorResponse: ErrorResponse): Observable<any> => {
          console.log(errorResponse);
          this.error = errorResponse.error.message;
          return of();
        })
      )
      .subscribe(() => {
        this.authSerivce
          .submitLogin(
            this.applyForm.value.account ?? '',
            this.applyForm.value.password ?? ''
          )
          .pipe(
            catchError((errorResponse: ErrorResponse): Observable<any> => {
              console.log(errorResponse);
              this.error = 'Something went wrong signing up!';
              return of();
            })
          )
          .subscribe((response) => {
            this.authSerivce.handleLogin(response, this.error);
          });
      });
  }

  handleCancel() {
    this.router.navigateByUrl('/');
  }

  onFileSelected(file: File) {
    if (file) {
      this.file = file;
    }
  }
}
