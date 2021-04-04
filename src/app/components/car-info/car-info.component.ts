import { Component, Input, OnInit } from '@angular/core';
import { ICar } from 'src/constants/data.constants';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss'],
})
export class CarInfoComponent implements OnInit {
  constructor() {}

  @Input() car: ICar | null;

  ngOnInit(): void {}
}
