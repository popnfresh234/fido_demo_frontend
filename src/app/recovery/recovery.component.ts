import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { catchError, Observable, of } from 'rxjs';
import { ErrorResponse } from '../models/responses/error-response';
@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './recovery.component.html',
  styleUrls: [
    './recovery.component.css',
    '../common-styles/recovery.css',
    '../common-styles/forms.css',
    '../common-styles/controls.css',
  ],
})
export class RecoveryComponent {
  error: string = '';
  authService = inject(AuthService);
  router = inject(Router);

  constructor() {}

  applyForm = new FormGroup({
    account: new FormControl('', [
      Validators.minLength(2),
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z0-9]*$'),
      Validators.required,
    ]),
  });

  submitRecovery() {
    this.authService
      .submitRecovery({ account: this.applyForm.value.account ?? '' })
      .pipe(
        catchError((errorResponse: ErrorResponse): Observable<any> => {
          console.log(errorResponse);
          this.error = 'Something went wrong with recovery!';
          return of();
        })
      )
      .subscribe(() => {
        this.error = '';
        this.router.navigateByUrl(
          '/recovery/code/' + this.applyForm.value.account
        );
      });
  }
}
