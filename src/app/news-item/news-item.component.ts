import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { News } from '../models/news';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsComponent {
  @Input() news!: News;
}
