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
import { ErrorResponse } from '../models/error-response';
@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css', '../common-styles/recovery.css'],
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
      .submitRecovery(this.applyForm.value.account ?? '')
      .pipe(
        catchError((errorResponse: ErrorResponse): Observable<any> => {
          console.log(errorResponse);
          this.error = errorResponse.error.message;
          return of();
        })
      )
      .subscribe((result) => {
        this.error = '';
        console.log(result);
        this.router.navigateByUrl('/recovery/code');
      });
  }
}
