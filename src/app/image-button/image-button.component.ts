import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-button.component.html',
  styleUrls: [
    './image-button.component.css',
    './login-buttons.css',
    '../common-styles/forms.css',
  ],
})
export class ImageButtonComponent {
  @Input() text = '';
  @Input() type = '';
  @Input() loginType = '';
  @Input() imgPath = '';
  @Input() iconStyle = '';
  @Output() setLoginTypeEvent = new EventEmitter<string>();

  setLoginType(type: string) {
    this.setLoginTypeEvent.emit(type);
  }
}
