import { Component, OnInit } from '@angular/core';
import { ICar } from '../../../constants/data.constants';
import { CarsService } from '../../shared/cars.service';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.scss'],
})
export class CarsPageComponent implements OnInit {
  isChecked = false;
  cars: ICar[] = [];
  constructor(private carsService: CarsService) {}

  async ngOnInit() {
    this.carsService.getAllCars().subscribe((cars) => (this.cars = cars));
  }
}
