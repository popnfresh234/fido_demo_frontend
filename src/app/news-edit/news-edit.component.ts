import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../services/news/news.service';
import { News } from '../models/news';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { catchError, Observable, of } from 'rxjs';
import { ErrorResponse } from '../models/responses/error-response';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NewsResponse } from '../models/responses/news-response';

//TODO Delete Items

@Component({
  selector: 'app-news-edit',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  templateUrl: './news-edit.component.html',
  styleUrls: ['../common-styles/table.css', './news-edit.component.css'],
})
export class NewsEditComponent {
  newsArray: News[] = [];
  newsService: NewsService = inject(NewsService);
  error: String = '';
  deleteAll: string = 'deleteAll';
  delete: boolean = false;
  currentIdx = 0;
  count = 0;
  page = 1;
  pageSize = 5;
  emptyEls: number[] = [];

  newsForm = new FormGroup({});

  ngOnInit() {
    this.getPaginatedNews();
    this.newsForm.addControl('deleteAll', new FormControl(false));
  }

  handlePageChange(event: number) {
    this.page = event;
    this.getPaginatedNews();
  }

  getRequestParams(page: number, pageSize: number) {
    let params: any = {};
    if (page) {
      params['pageNumber'] = page - 1;
    }

    if (pageSize) {
      params['pageSize'] = pageSize;
    }

    return params;
  }

  getPaginatedNews() {
    const params = this.getRequestParams(this.page, this.pageSize);
    this.newsService
      .getPaginatedNews(params)
      .pipe(
        catchError((errorResponse: ErrorResponse): Observable<any> => {
          console.log(errorResponse);
          this.error = 'Something went wrong fetching the news!';
          return of();
        })
      )
      .subscribe((response: NewsResponse) => {
        this.handleNewsResponse(response);
      });
  }

  setAll(event: Event) {
    this.newsArray.forEach((news) => {
      this.newsForm
        .get(news.id.toString())
        ?.setValue((event.target as HTMLInputElement).checked);
    });
  }

  showDelete() {
    this.delete = !this.delete;
  }

  cancel() {
    this.delete = !this.delete;
  }

  submitDelete() {
    this.delete = !this.delete;
    const deleteArr: number[] = [];
    const params = this.getRequestParams(this.page, this.pageSize);
    this.newsArray.forEach((news) => {
      const val = this.newsForm.get(news.id.toString())?.value;
      if (val) {
        deleteArr.push(news.id);
      }
    });
    if (deleteArr.length > 0) {
      this.newsService
        .deleteNews(params, deleteArr)
        .pipe(
          catchError((errorResponse: ErrorResponse): Observable<any> => {
            console.log(errorResponse);
            this.error = errorResponse.error.message;
            return of();
          })
        )
        .subscribe((response: NewsResponse) => {
          this.handleNewsResponse(response);
          this.newsForm.get(this.deleteAll)?.setValue(false);
        });
    }
  }

  handleNewsResponse(response: NewsResponse) {
    this.count = response.totalItems;
    this.newsArray = response.newsItems;
    let missingEls = this.pageSize - response.newsItems.length;
    this.emptyEls = Array(missingEls).fill(1);

    // Create form controls
    this.newsArray.forEach((news) => {
      this.newsForm.addControl(news.id.toString(), new FormControl(false));
    });
  }
}
