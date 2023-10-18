import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../local_storage/local-storage.service';
import { Injectable, inject } from '@angular/core';
import { LoginResponse } from '../../models/login-response';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { TokenModel } from 'src/app/models/token_model';
import jwtDecode from 'jwt-decode';
import { Token } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  router = inject(Router);
  base_url = 'http://localhost:8080/auth'
  user?: User;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  submitLogin(username: String, password: String) {
    return this.http.post<LoginResponse>(this.base_url + "/login", { "email": username, "password": password })
  }

  submitLogout() {
    this.localStorageService.clearData();
    this.router.navigateByUrl('/login')
  }

  submitSignup(name: String, email: String, password: String) {
    return this.http.post<LoginResponse>(this.base_url + `/signup?name=${name}&email=${email}&password=${password}`, {})
  }

  handleLogin(response: LoginResponse, error: String) {

    if (response && response.accessToken) {

      this.localStorageService.saveData("token", response.accessToken);
      this.localStorageService.saveData("auth", "true");
      error = '';
      this.router.navigateByUrl('/');
    } else {

      console.log("error");
    }
  }
  getEmailFromToken(token: string | null) {
    const jwt = jwtDecode<TokenModel>(token ? token : '');
    return jwt.sub;
  }
}

