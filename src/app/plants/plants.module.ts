import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlantsRoutingModule} from './plants-routing.module';
import { IndoorListComponent } from './pages/plants/indoor-list/indoor-list.component';
import { OutdoorListComponent } from './pages/plants/outdoor-list/outdoor-list.component';

@NgModule({
  declarations: [IndoorListComponent, OutdoorListComponent],
  imports: [
    CommonModule,
    PlantsRoutingModule
  ]
})
export class PlantsModule { }
