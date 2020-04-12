import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public copyright: string;
  public version: string;

  constructor() { }

  ngOnInit() {
    this.copyright = 'Copyright 2020 Chloé';
    this.version = '1.0.0';
  }

}
