import { Component, inject } from '@angular/core';
import { ImageUploadComponent } from '../image-upload/image-upload.component';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorResponse } from '../models/responses/error-response';
import { LocalStorageService } from '../services/local_storage/local-storage.service';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/user/user.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import formValidators from '../utilities/form-validators';

declare let TwCitySelector: any;
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ImageUploadComponent,
  ],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css', '../common-styles/forms.css'],
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
  base64Image: string = '';
  file: File = new File([], '');
  fileName: string = '';

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
    const account = this.authService.getAccountFromToken(
      this.localStorageService.getData('token')
    );
    this.userService
      .getUser(account)
      .pipe(
        catchError((errorResponse: ErrorResponse): Observable<any> => {
          console.log(errorResponse);
          this.error = errorResponse.error.message;
          return of();
        })
      )
      .subscribe((user) => {
        if (user.image) {
          this.base64Image = 'data:image/jpeg;base64,' + user.image;
          this.fileName = user.imageName;
          const imageBlob = this.dataURItoBlob(user.image);
          this.file = new File([imageBlob], user.imageName, {
            type: 'image/jpeg',
          });
        }

        this.getDate(user.birthdate);
        this.error = '';
        this.user = user;
        this.twCitySelector.setValue(user.city, user.district);
        if (this.user) {
          this.patchValues(this.user);
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
          this.user.account,
          this.applyForm.value.name ?? '',
          this.applyForm.value.birthdate ?? '',
          event.target.county.value ?? '',
          event.target.district.value ?? '',
          this.applyForm.value.street ?? '',
          this.applyForm.value.alley ?? '',
          this.applyForm.value.lane ?? '',
          this.applyForm.value.floor ?? '',
          this.file,
          this.fileName
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
          this.base64Image = 'data:image/jpeg;base64,' + user.image;
          this.edit = !this.edit;
        });
    }
  }

  handleCancel() {
    this.edit = !this.edit;
    if (this.user) {
      this.patchValues(this.user);
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

  patchValues(user: any) {
    this.applyForm.patchValue({
      name: user.name,
      email: user.email,
      birthdate: this.getDate(user.birthdate),
      street: user.street,
      alley: user.alley,
      lane: user.lane,
      floor: user.floor,
    });
  }

  onFileSelected(file: File) {
    if (file) {
      this.file = file;
      this.fileName = file.name;
    }
  }

  dataURItoBlob(dataURI: any) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });
    return blob;
  }
}
