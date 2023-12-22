import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { News } from '../models/news';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-news-table',
  standalone: true,
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.css', '../common-styles/table.css'],
})
export class NewsTableComponent {
  @Input() page = 2;
  @Input() newsArray: News[] = [];
  @Input() pageSize = 5;
  @Input() count = 0;
  @Input() emptyEls: number[] = [];
  @Input() error: String = '';
  @Output() pageChangeEvent = new EventEmitter<number>();

  // For Editing
  @Input() edit: boolean = false;
  @Input() newsForm = new FormGroup({});
  @Input() deleteAll = 'deleteAll';
  @Input() delete: boolean = false;
  @Output() cancelEvent = new EventEmitter<boolean>();
  @Output() showDeleteEvent = new EventEmitter<boolean>();
  @Output() deleteEvent = new EventEmitter();
  ngOnInit() {
    this.newsForm.addControl('deleteAll', new FormControl(false));
  }

  handlePageChange(event: number) {
    this.pageChangeEvent.emit(event);
  }

  setAll(event: Event) {
    this.newsArray.forEach((news) => {
      this.newsForm
        .get(news.id.toString())
        ?.setValue((event.target as HTMLInputElement).checked);
    });
  }

  showDelete() {
    this.showDeleteEvent.emit(this.delete);
  }

  cancel() {
    this.cancelEvent.emit(this.delete);
  }

  submitDelete() {
    this.deleteEvent.emit();
  }
}
