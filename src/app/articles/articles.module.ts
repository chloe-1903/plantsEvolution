import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './pages/article/article.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { NewArticleComponent } from './pages/new-article/new-article.component';
import {ArticlesRoutingModule} from './articles-routing.module';

@NgModule({
  declarations: [ArticleComponent, ArticlesComponent, NewArticleComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }
