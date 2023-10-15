import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userService = inject(UserService);


  applyForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),

  });

  constructor() {

  }

  submitUser() {
    this.userService.submitUser(
      this.applyForm.value.name ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.password ?? '',

    ).then(() => {
      console.log('success');
    })
  }
}
