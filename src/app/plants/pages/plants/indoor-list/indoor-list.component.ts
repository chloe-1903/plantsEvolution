import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indoor-list',
  templateUrl: './indoor-list.component.html',
  styleUrls: ['./indoor-list.component.scss']
})
export class IndoorListComponent implements OnInit {

  public itemList = [];

  constructor() { }

  ngOnInit() {
    this.itemList.push({name: 'Marble queen', imagePath: 'https://images-na.ssl-images-amazon.com/images/I/81FFMheS05L._AC_SY550_.jpg'});
    this.itemList.push({name: 'Spider plant', imagePath: 'https://img.crocdn.co.uk/images/products2/pl/20/00/02/72/pl2000027236.jpg?width=940&height=940'});
  }

}
