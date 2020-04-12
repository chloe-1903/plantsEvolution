import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewArticleComponent} from './pages/new-article/new-article.component';
import {ArticlesComponent} from './pages/articles/articles.component';
import {ArticleComponent} from './pages/article/article.component';

const appRoutes: Routes = [
  { path: '',
    component: ArticlesComponent
  },
  { path: 'add',
    component: NewArticleComponent
  },
  { path: 'details/:id',
    component: ArticleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class ArticlesRoutingModule { }
