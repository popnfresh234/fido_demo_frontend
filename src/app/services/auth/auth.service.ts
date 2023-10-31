import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../local_storage/local-storage.service';
import { Injectable, inject } from '@angular/core';
import { LoginResponse } from '../../models/login-response';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { TokenModel } from 'src/app/models/token_model';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  router = inject(Router);
  base_url = 'http://localhost:8080/auth';
  user?: User;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  submitLogin(account: String, password: String) {
    return this.http.post<LoginResponse>(this.base_url + '/login', {
      account: account,
      password: password,
    });
  }

  submitLogout() {
    this.localStorageService.clearData();
    this.router.navigateByUrl('/login');
  }

  submitSignup(
    account: String,
    name: String,
    email: String,
    password: String,
    birthdate: String,
    city: String,
    district: String,
    street: String,
    alley: String,
    lane: String,
    floor: String,
    image: File
  ) {
    const formData: FormData = new FormData();
    if (image.size > 0) {
      formData.append('image', image);
    }
    return this.http.post<LoginResponse>(
      this.base_url +
        `/signup?account=${account}&name=${name}&email=${email}&password=${password}&birthdate=${birthdate}&city=${city}&district=${district}&street=${street}&alley=${alley}&lane=${lane}&floor=${floor}`,
      formData
    );
  }

  handleLogin(response: LoginResponse, error: String) {
    if (response && response.accessToken) {
      this.localStorageService.saveData('token', response.accessToken);
      this.localStorageService.saveData('auth', 'true');
      this.localStorageService.saveData('role', JSON.stringify(response.role));
      error = '';
      this.router.navigateByUrl('/');
    } else {
      console.log('error');
    }
  }
  getAccountFromToken(token: string | null) {
    const jwt = jwtDecode<TokenModel>(token ? token : '');
    return jwt.account;
  }

  submitRecovery(account: string) {
    return this.http.post<Response>(
      this.base_url + `/recovery?account=${account}`,
      {}
    );
  }

  submitRecoveryCode(code: string, account: string) {
    return this.http.post<Response>(this.base_url + `/recovery/verify`, {
      code,
      account,
    });
  }

  submitPasswordReset(account: string, code: string, password: string) {
    return this.http.post<Response>(this.base_url + '/recovery/reset', {
      account,
      code,
      password,
    });
  }
}
