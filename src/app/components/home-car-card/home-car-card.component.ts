import { Component, Input, OnInit } from '@angular/core';

import { ICar } from 'src/constants/data.constants';

@Component({
  selector: 'app-home-car-card',
  templateUrl: './home-car-card.component.html',
  styleUrls: ['./home-car-card.component.scss'],
})
export class HomeCarCardComponent implements OnInit {
  @Input() car: ICar | null;
  constructor() {}

  ngOnInit(): void {}
}
