import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @Input() user!: User;
}
