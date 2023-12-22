import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NewsTableComponent } from '../news-table/news-table.component';
import { UserService } from '../services/user/user.service';
import { NewsService } from '../services/news/news.service';
import { catchError, Observable, of } from 'rxjs';
import { ErrorResponse } from '../models/responses/error-response';
import { News } from '../models/news';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgxPaginationModule,
    CommonModule,
    RouterModule,
    NewsTableComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {}

  httpSerivce: UserService = inject(UserService);
  newsService: NewsService = inject(NewsService);
  newsArray: News[] = [];
  error: String = '';
  currentIdx = 0;
  count = 0;
  page = 1;
  pageSize = 5;
  emptyEls: number[] = [];

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

  handlePageChange(event: number) {
    this.page = event;
    this.getPaginatedNews();
  }
}
