import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-plant-list-item',
  templateUrl: './plant-list-item.component.html',
  styleUrls: ['./plant-list-item.component.scss']
})
export class PlantListItemComponent implements OnInit {

  @Input() name: string;
  @Input() imagePath: string;

  constructor() { }

  ngOnInit() {
  }

}
