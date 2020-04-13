import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantListItemComponent } from './components/plant-list-item/plant-list-item.component';

@NgModule({
    declarations: [PlantListItemComponent],
    exports: [
        PlantListItemComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
