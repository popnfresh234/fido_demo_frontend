import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../services/news/news.service';
import { News } from '../models/news';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { catchError, Observable, of } from 'rxjs';
import { ErrorResponse } from '../models/error-response';


@Component({
  selector: 'app-news-edit',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxPaginationModule],
  templateUrl: './news-edit.component.html',
  styleUrls: ['../home/home.component.css', './news-edit.component.css']
})
export class NewsEditComponent {
  newsArray: News[] = [];
  newsService: NewsService = inject(NewsService);
  error: String = '';


  currentIdx = 0;
  count = 0;
  page = 1;
  pageSize = 5;
  emptyEls: number[] = [];

  ngOnInit() {
    this.getPaginatedNews();
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
      params['pageSize'] = pageSize
    }

    return params;
  }

  getPaginatedNews() {
    const params = this.getRequestParams(this.page, this.pageSize);
    this.newsService.getPaginatedNews(params)
      .pipe(catchError((errorResponse: ErrorResponse): Observable<any> => {
        console.log(errorResponse);
        this.error = errorResponse.error.message;
        return of();
      }))
      .subscribe((response) => {
        this.count = response.totalItems;
        this.newsArray = response.newsItems;
        let missingEls = this.pageSize - response.newsItems.length
        this.emptyEls = Array(missingEls).fill(1);
      })
  }
}
