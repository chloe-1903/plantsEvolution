import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/plants',
    pathMatch: 'full'
  },
  {
    path: 'plants',
    loadChildren: () => import('./plants/plants.module').then(mod => mod.PlantsModule),
  },
  {
    path: 'articles',
    loadChildren: () => import('./articles/articles.module').then(mod => mod.ArticlesModule),
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(mod => mod.PageNotFoundModule),
  }
];
@NgModule({
  imports: [RouterModule.forRoot
  (appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {}
