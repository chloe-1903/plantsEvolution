import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsComponent } from './pages/plants/plants.component';
import {PlantsRoutingModule} from './plants-routing.module';

@NgModule({
  declarations: [PlantsComponent],
  imports: [
    CommonModule,
    PlantsRoutingModule
  ]
})
export class PlantsModule { }
