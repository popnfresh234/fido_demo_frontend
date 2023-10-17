import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { News } from '../models/news';
import { NewsService } from '../services/news/news.service';
import { catchError, Observable, of } from 'rxjs';
import { ErrorResponse } from '../models/error-response';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  newsService: NewsService = inject(NewsService);
  news: News | undefined;
  error: String = '';

  constructor() {
    const id = this.route.snapshot.params['id'];
    this.newsService.getNews(id).pipe(catchError((errorResponse: ErrorResponse): Observable<any> => {
      console.log(errorResponse);
      this.error = errorResponse.error.message;
      return of();
    })).subscribe((news) => {
      this.error = '';
      this.news = news;
    })
  }
}
