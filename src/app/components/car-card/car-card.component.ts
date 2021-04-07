import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CarsService } from 'src/app/shared/cars.service';
import { ICar } from 'src/constants/data.constants';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
})
export class CarCardComponent implements OnInit, OnDestroy {
  @Input() car: ICar | null;
  updateCarSubscription: Subscription | null = null;
  constructor(private carsService: CarsService) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.updateCarSubscription?.unsubscribe();
  }
  toggleLike(car: ICar): void {
    this.updateCarSubscription = this.carsService
      .updateCar({ ...car, liked: !car.liked })
      .subscribe((car) => {
        this.car = { ...this.car, liked: !this.car.liked };
      });
  }
}
