import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { catchError, of, Observable } from 'rxjs';
import { ErrorResponse } from '../models/error-response';
import { ActivatedRoute } from '@angular/router';
import formValidators from '../utilities/form-validators';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './recovery-reset.component.html',
  styleUrls: [
    './recovery-reset.component.css',
    '../common-styles/recovery.css',
    '../common-styles/forms.css',
  ],
})
export class RecoveryResetComponent {
  error: string = '';
  authService = inject(AuthService);
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {}

  applyForm = new FormGroup(
    {
      password: new FormControl('', formValidators.passwordValidators),
      confirm: new FormControl('', formValidators.passwordValidators),
    },
    this.passwordMatchValidator
  );

  submitRecoveryPassword() {
    const account = this.route.snapshot.params['account'];
    const code = this.route.snapshot.params['code'];

    this.authService
      .submitPasswordReset(account, code, this.applyForm.value.password ?? '')
      .pipe(
        catchError((errorResponse: ErrorResponse): Observable<any> => {
          console.log(errorResponse);
          this.error = errorResponse.error.message;

          return of();
        })
      )
      .subscribe((result) => {
        this.authService
          .submitLogin(account, this.applyForm.value.password ?? '')
          .pipe(
            catchError((errorResponse: ErrorResponse): Observable<any> => {
              console.log(errorResponse);
              this.error = errorResponse.error.message;
              return of();
            })
          )
          .subscribe((response) => {
            this.authService.handleLogin(response, this.error);
          });
      });
  }
  private passwordMatchValidator(g: AbstractControl) {
    return g.get('password')?.value === g.get('confirm')?.value
      ? null
      : { mismatch: true };
  }
}
