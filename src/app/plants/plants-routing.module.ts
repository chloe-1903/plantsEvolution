import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndoorListComponent} from './pages/indoor-list/indoor-list.component';
import {OutdoorListComponent} from './pages/outdoor-list/outdoor-list.component';

const appRoutes: Routes = [
  { path: 'indoor',
    component: IndoorListComponent
  },
  { path: 'outdoor',
    component: OutdoorListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class PlantsRoutingModule { }
