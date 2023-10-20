import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { catchError, Observable, of } from 'rxjs';
import { ErrorResponse } from '../models/error-response';
import { LocalStorageService } from '../services/local_storage/local-storage.service';
import { AuthService } from '../services/auth/auth.service';
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  userService = inject(UserService);
  authService = inject(AuthService);
  user: User | undefined;
  error: String = ''
  localStorageService: LocalStorageService = inject(LocalStorageService);

  constructor() {
    const id = Number(this.authService.getIdFromToken(this.localStorageService.getData("token")));
    this.userService.getUser(id)
      .pipe(catchError((errorResponse: ErrorResponse): Observable<any> => {
        console.log(errorResponse);
        this.error = errorResponse.error.message;
        return of();
      }))
      .subscribe((user) => {
        this.error = '';
        console.log(user);
        this.user = user;
      })
  };
}
