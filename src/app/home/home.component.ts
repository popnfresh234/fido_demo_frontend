import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { News } from '../models/news';
import { UserService as UserService } from '../services/user/user.service';
import { NewsService } from '../services/news/news.service';
import { CommonModule } from '@angular/common';
import { catchError, Observable, of } from 'rxjs';
import { ErrorResponse } from '../models/responses/error-response';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxPaginationModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../common-styles/table.css'],
})
export class HomeComponent {
  newsArray: News[] = [];
  httpSerivce: UserService = inject(UserService);
  newsService: NewsService = inject(NewsService);
  error: String = '';

  currentIdx = 0;
  count = 0;
  page = 1;
  pageSize = 5;
  emptyEls: number[] = [];

  constructor() {}

  ngOnInit() {
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

  handlePageChange(event: number) {
    this.page = event;
    this.getPaginatedNews();
  }

  getAllNews() {
    this.newsService
      .getAllNews()
      .pipe(
        catchError((errorResponse: ErrorResponse): Observable<any> => {
          console.log(errorResponse);
          this.error = errorResponse.error.message;
          return of();
        })
      )
      .subscribe((newsArray) => {
        this.error = '';
        this.newsArray = newsArray;
      });
  }

  getPaginatedNews() {
    const params = this.getRequestParams(this.page, this.pageSize);
    this.newsService
      .getPaginatedNews(params)
      .pipe(
        catchError((errorResponse: ErrorResponse): Observable<any> => {
          console.log(errorResponse);
          this.error = errorResponse.error.message;
          return of();
        })
      )
      .subscribe((response) => {
        this.count = response.totalItems;
        this.newsArray = response.newsItems;
        let missingEls = this.pageSize - response.newsItems.length;
        this.emptyEls = Array(missingEls).fill(1);
      });
  }
}
