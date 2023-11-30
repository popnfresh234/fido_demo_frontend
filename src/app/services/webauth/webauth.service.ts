import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import fido from 'src/app/utilities/fido';
import { LoginResponse } from 'src/app/models/login-response';

@Injectable({
  providedIn: 'root',
})
export class WebauthService {
  router = inject(Router);
  base_url = environment.apiUrl + '/webauthn';
  user?: User;

  constructor(private http: HttpClient) {}

  // **************
  // WebAuthn
  // *************

  // *** Registration ***
  submitRegisterAuthenticator() {
    return this.http.post<LoginResponse>(this.base_url + '/requestReg', {
      header: fido.getFidoHeader(),
      body: {
        attestation: 'none',
        authenticatorSelection: {
          requireResidentKey: false,
          userVerification: 'preferred',
        },
      },
    });
  }

  doRegRequest(fido2DoRegReq: any) {
    return this.http.post<LoginResponse>(
      this.base_url + '/doReg',
      fido2DoRegReq
    );
  }

  // ** End Registration **

  // ** Authorization **
  requestAuth(username: String) {
    let requestAuthReq = {
      header: fido.getFidoHeader(),
      body: {
        username,
      },
    };

    return this.http.post<Response>(
      this.base_url + '/requestAuth',
      requestAuthReq
    );
  }

  doAuthRequest(fido2doAuthReq: any) {
    return this.http.post<Response>(this.base_url + '/doAuth', fido2doAuthReq);
  }

  // ** End Authorization *
}
