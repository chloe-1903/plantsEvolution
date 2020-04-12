import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlantsComponent} from './pages/plants/plants.component';

const appRoutes: Routes = [
  { path: '',
    component: PlantsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class PlantsRoutingModule { }
