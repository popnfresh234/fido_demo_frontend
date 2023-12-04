import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { LocalStorageService } from '../services/local_storage/local-storage.service';
import { catchError, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorResponse } from '../models/error-response';
import { RouterModule } from '@angular/router';
import formValidators from '../utilities/form-validators';
import fido from '../utilities/fido';
import { WebauthService } from '../services/webauth/webauth.service';

declare function preformatGetAssertReq(getAssert: any): any;
declare function publicKeyCredentialToJSON(credential: any): any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  router = inject(Router);
  authService = inject(AuthService);
  webAuthService = inject(WebauthService);
  localStorageService = inject(LocalStorageService);
  applyForm = new FormGroup({
    account: new FormControl('', formValidators.accountValidators),
    password: new FormControl('', formValidators.passwordValidators),
  });

  quickLogin = new FormGroup({
    quick_username: new FormControl('', formValidators.accountValidators),
  });

  error: String = '';

  constructor() {}

  submitLogin() {
    this.authService
      .submitLogin(
        this.applyForm.value.account ?? '',
        this.applyForm.value.password ?? ''
      )
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
  }

  submitQuickLogin() {
    this.webAuthService
      .requestAuth(this.quickLogin.value.quick_username ?? '')
      .pipe(
        catchError((errorResponse: ErrorResponse): Observable<any> => {
          console.log(errorResponse);
          this.error = errorResponse.error.message;
          return of();
        })
      )
      .subscribe((requestAuthResponse) => {
        console.log('Request Auth Response');
        if (requestAuthResponse.header.code == 1200) {
          this.doAuth(requestAuthResponse);
        } else {
          this.error = 'Webauthn 登入失敗';
        }
      });
  }

  doAuth(fido2requestAuthResponse: any) {
    var publicKeyCredentialRequestOptions = preformatGetAssertReq(
      fido2requestAuthResponse.body
    );

    console.log('publicKeyCredentialRequestOptions:');
    console.log(JSON.stringify(publicKeyCredentialRequestOptions));

    navigator.credentials
      .get({
        publicKey: publicKeyCredentialRequestOptions,
      })
      .then((credential) => {
        console.log('credential:');
        console.log(JSON.stringify(credential));
        console.log(credential);

        var publicKeyCredential = publicKeyCredentialToJSON(credential);

        var fido2doAuthReq = {
          header: fido.getFidoHeader(),
          body: {
            publicKeyCredential: publicKeyCredential,
            username: this.quickLogin.value.quick_username,
          },
        };

        console.log('fido2DoAuthReq:');
        console.log(JSON.stringify(fido2doAuthReq));

        this.webAuthService
          .doAuth(fido2doAuthReq)
          .pipe(
            catchError((errorResponse: ErrorResponse): Observable<any> => {
              console.log(errorResponse);
              this.error = errorResponse.error.message;
              return of();
            })
          )
          .subscribe((fido2doAuthResp) => {
            console.log('fido2DoAuthResp');
            console.log(JSON.stringify(fido2doAuthResp));
            if (fido2doAuthResp.header.code == 1200) {
              console.log('Webauthn 登入成功');
              this.authService.handleLogin(
                fido2doAuthResp.loginResponse,
                this.error
              );
            } else {
              this.error = 'Webauthn 登入失敗';
            }
          });
      })
      .catch((error) => {
        if (!error.exists) {
          console.error(error);
          this.error = 'Webauthn 登入失敗';
        }
        return;
      });
  }

  submitLogout() {
    this.authService.submitLogout();
  }
}
