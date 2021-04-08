import { Component, Input, OnInit } from '@angular/core';

import config from 'src/constants';
import { ICar } from 'src/constants/data.constants';

const { images } = config;

@Component({
  selector: 'app-home-car-card',
  templateUrl: './home-car-card.component.html',
  styleUrls: ['./home-car-card.component.scss'],
})
export class HomeCarCardComponent implements OnInit {
  @Input() car: ICar | null;
  defaultImg: string = images.defaultImg;
  constructor() {}

  ngOnInit(): void {}
}
