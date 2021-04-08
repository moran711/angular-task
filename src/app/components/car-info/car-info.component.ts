import { Component, Input, OnInit } from '@angular/core';

import config from 'src/constants';
import { ICar } from 'src/constants/data.constants';

const { images } = config;

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss'],
})
export class CarInfoComponent implements OnInit {
  constructor() {}
  defaultImg: string = images.defaultImg;
  @Input() car: ICar | null;

  ngOnInit(): void {}
}
