import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { catchError, Observable, of } from 'rxjs';
import { ErrorResponse } from '../models/error-response';
@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './recovery-code.component.html',
  styleUrls: ['./recovery-code.component.css', '../common-styles/recovery.css'],
})
export class RecoveryCodeComponent {
  error: string = '';
  authService = inject(AuthService);

  constructor() {}

  applyForm = new FormGroup({
    code: new FormControl('', [Validators.required]),
  });

  submitRecoveryCode() {
    console.log(
      this.authService.submitRecoveryCode(this.applyForm.value.code ?? '')
    );
  }
}
