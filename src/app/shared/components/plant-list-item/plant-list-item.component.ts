import {Component, Input, OnInit} from '@angular/core';
import {Plant} from '../../models/plant.model';

@Component({
  selector: 'app-plant-list-item',
  templateUrl: './plant-list-item.component.html',
  styleUrls: ['./plant-list-item.component.scss']
})
export class PlantListItemComponent implements OnInit {

  @Input() plant: Plant;

  constructor() {
    console.log(this.plant);
  }

  ngOnInit() {
  }

}
