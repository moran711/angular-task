import { Component, Input, OnInit } from '@angular/core';
import { CarsService } from 'src/app/shared/cars.service';
import { ICar } from 'src/constants/data.constants';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
})
export class CarCardComponent implements OnInit {
  @Input() car: ICar | null;
  constructor(private carsService: CarsService) {}

  ngOnInit(): void {}

  toggleLike(car: ICar) {
    this.carsService
      .updateCar({ ...car, liked: !car.liked })
      .subscribe((car) => {
        this.car = { ...this.car, liked: !this.car.liked };
      });
  }
}
