import {Component, OnInit} from '@angular/core';
import {Plant} from '../../../../shared/models/plant.model';
import {PlantKind} from '../../../../shared/enums/plant-kind.enum';

@Component({
  selector: 'app-indoor-list',
  templateUrl: './indoor-list.component.html',
  styleUrls: ['./indoor-list.component.scss']
})
export class IndoorListComponent implements OnInit {

  public itemList: Array<Plant> = new Array<Plant>();

  constructor() { }

  ngOnInit() {
    const p1 = new Plant('Marble queen', 'https://images-na.ssl-images-amazon.com/images/I/81FFMheS05L._AC_SY550_.jpg', PlantKind.INDOOR);
    const p2 = new Plant('Spider plant', 'https://img.crocdn.co.uk/images/products2/pl/20/00/02/72/pl2000027236.jpg?width=940&height=940', PlantKind.INDOOR);
    this.itemList.push(p1);
    this.itemList.push(p2);
  }

}
