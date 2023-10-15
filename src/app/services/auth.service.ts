import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Injectable, inject } from '@angular/core';
import { LoginResponse } from '../login-response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  router = inject(Router);
  base_url = 'http://localhost:8080/'
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  submitLogin(username: String, password: String) {
    this.http.post<LoginResponse>(this.base_url + "auth/login", { "email": username, "password": password }).subscribe((response) => {
      if (response && response.accessToken) {
        this.localStorageService.saveData("token", response.accessToken);
        this.localStorageService.saveData("auth", "true");
        this.router.navigateByUrl('/');
      } else {
        console.log("error");
      }
    })
  }
  submitLogout() {
    this.localStorageService.clearData();
  }
}

