import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../models/user';
import { HttpService } from '../services/user/http.service';
import { CommonModule } from '@angular/common';
import { catchError, Observable, of } from 'rxjs';
import { ErrorResponse } from '../models/error-response';
import { UsersComponent } from '../users/users.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports:
    [
      CommonModule,
      RouterModule,
      UsersComponent,
    ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users: User[] = [];
  httpSerivce: HttpService = inject(HttpService);
  error: String = '';

  constructor() {
  }

  getAllUsers() {
    this.httpSerivce.getAllUsers()
      .pipe(catchError((errorResponse: ErrorResponse): Observable<any> => {
        console.log(errorResponse);
        this.error = errorResponse.error.message;
        return of();
      }))
      .subscribe((users) => {
        this.error = '';
        this.users = users;
      })
  }

  getUser(username: String) {
    this.httpSerivce.getUser(username)
      .pipe(catchError((errorResponse: ErrorResponse): Observable<any> => {
        console.log(errorResponse);
        this.users = [];
        this.error = errorResponse.error.message;
        return of();
      }))
      .subscribe((user) => {
        this.users = [];
        if (user && user.email) {
          this.error = '';
          this.users[0] = user;
        }
      })
  }

}
