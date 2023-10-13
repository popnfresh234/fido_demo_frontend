import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';

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
    username: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {

  }

  submitUser() {
    this.userService.submitUser(
      this.applyForm.value.name ?? '',
      this.applyForm.value.username ?? '',
      this.applyForm.value.email ?? '',
    ).then(() => {
      console.log('success');
    })
  }
}
