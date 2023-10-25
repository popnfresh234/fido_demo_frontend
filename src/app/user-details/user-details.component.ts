import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorResponse } from '../models/error-response';
import { LocalStorageService } from '../services/local_storage/local-storage.service';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/user/user.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import formValidators from '../utilities/form-validators';

declare let TwCitySelector: any;
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  userService = inject(UserService);
  authService = inject(AuthService);
  user: User | undefined;
  error: String = '';
  localStorageService: LocalStorageService = inject(LocalStorageService);
  edit: boolean = false;
  twCitySelector;

  applyForm = new FormGroup({
    name: new FormControl('', formValidators.nameValidators),
    email: new FormControl('', formValidators.emailValidators),
    birthdate: new FormControl('', formValidators.birthdateValidators),
    street: new FormControl('', formValidators.streetValidatiors),
    alley: new FormControl('', formValidators.alleyValidatiors),
    lane: new FormControl('', formValidators.laneValidatiors),
    floor: new FormControl('', formValidators.floorValidatiors),
  });

  constructor() {
    this.twCitySelector = new TwCitySelector({ el: '.city-selector' });
  }

  ngOnInit() {
    const id = Number(
      this.authService.getIdFromToken(this.localStorageService.getData('token'))
    );
    this.userService
      .getUser(id)
      .pipe(
        catchError((errorResponse: ErrorResponse): Observable<any> => {
          console.log(errorResponse);
          this.error = errorResponse.error.message;
          return of();
        })
      )
      .subscribe((user) => {
        this.getDate(user.birthdate);
        this.error = '';
        this.user = user;
        this.twCitySelector.setValue(user.city, user.district);
        if (this.user) {
          this.patchValues(
            this.user?.name,
            this.user?.email,
            this.user?.birthdate,
            this.user?.street,
            this.user?.alley,
            this.user?.lane,
            this.user?.floor
          );
        }
      });
  }

  handleEdit() {
    this.edit = !this.edit;
  }

  handleSave(event: any) {
    if (this.user?.id) {
      this.userService
        .editUser(
          this.user.id,
          this.applyForm.value.name ?? '',
          this.applyForm.value.birthdate ?? '',
          event.target.county.value ?? '',
          event.target.district.value ?? '',
          this.applyForm.value.street ?? '',
          this.applyForm.value.alley ?? '',
          this.applyForm.value.lane ?? '',
          this.applyForm.value.floor ?? ''
        )
        .pipe(
          catchError((errorResponse: ErrorResponse): Observable<any> => {
            console.log(errorResponse);
            this.error = errorResponse.error.message;
            return of();
          })
        )
        .subscribe((user: User) => {
          this.user = user;
          this.edit = !this.edit;
        });
    }
  }

  handleCancel() {
    this.edit = !this.edit;
    if (this.user) {
      this.patchValues(
        this.user?.name,
        this.user?.email,
        this.user?.birthdate,
        this.user?.street,
        this.user?.alley,
        this.user?.lane,
        this.user?.floor
      );
    }
  }

  getDate(date: string | undefined) {
    if (date === undefined) {
      date = '1';
    }
    let bday = new Date(Date.parse(date));
    let formattedDate =
      bday.getFullYear() +
      '/' +
      ((bday.getMonth() + 1).toString().length == 2
        ? (bday.getMonth() + 1).toString()
        : '0' + (bday.getMonth() + 1).toString()) +
      '/' +
      ((bday.getDate() + 1).toString().length == 2
        ? (bday.getDate() + 1).toString()
        : '0' + (bday.getDate() + 1).toString());
    return formattedDate;
  }

  patchValues(
    name: string,
    email: string,
    birthdate: string,
    street: string,
    alley: string,
    lane: string,
    floor: string
  ) {
    this.applyForm.patchValue({
      name: name,
      email: email,
      birthdate: this.getDate(birthdate),
      street: street,
      alley: alley,
      lane: lane,
      floor: floor,
    });
  }
}
