import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../local_storage/local-storage.service';
import { Injectable, inject } from '@angular/core';
import { LoginResponse } from '../../models/login-response';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { TokenModel } from 'src/app/models/token_model';
import jwtDecode from 'jwt-decode';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  router = inject(Router);
  base_url = environment.apiUrl + '/auth';
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
    account: string,
    name: string,
    email: string,
    password: string,
    birthdate: string,
    city: string,
    district: string,
    street: string,
    alley: string,
    lane: string,
    floor: string,
    image: File
  ) {
    const formData: FormData = new FormData();
    if (image.size > 0) {
      formData.append('image', image);
    }

    formData.append('account', account);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('birthdate', birthdate);
    formData.append('city', city);
    formData.append('district', district);
    formData.append('street', street);
    formData.append('alley', alley);
    formData.append('lane', lane);
    formData.append('floor', floor);

    return this.http.post<LoginResponse>(this.base_url + '/signup', formData);
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
