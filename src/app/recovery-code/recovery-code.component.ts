import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { catchError, of, Observable } from 'rxjs';
import { ErrorResponse } from '../models/responses/error-response';
import { ActivatedRoute } from '@angular/router';

import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './recovery-code.component.html',
  styleUrls: [
    './recovery-code.component.css',
    '../common-styles/recovery.css',
    '../common-styles/forms.css',
  ],
})
export class RecoveryCodeComponent {
  error: string = '';
  authService = inject(AuthService);
  route: ActivatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  constructor() {}

  applyForm = new FormGroup({
    code: new FormControl('', [Validators.required]),
  });

  submitRecoveryCode() {
    const account = this.route.snapshot.params['account'];

    this.authService
      .submitRecoveryCode(this.applyForm.value.code ?? '', account)
      .pipe(
        catchError((errorResponse: ErrorResponse): Observable<any> => {
          console.log(errorResponse);
          this.error = errorResponse.error.message;

          return of();
        })
      )
      .subscribe((result) => {
        this.error = '';
        this.router.navigateByUrl(
          '/recovery/rest/' + account + '/' + this.applyForm.value.code
        );
      });
  }
}
