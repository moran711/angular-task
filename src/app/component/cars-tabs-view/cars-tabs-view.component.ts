import { Component, OnDestroy, OnInit } from '@angular/core';
import { CarsService } from '../../shared/cars.service';
import { ICar } from '../../../constants/data.constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cars-tabs-view',
  templateUrl: './cars-tabs-view.component.html',
  styleUrls: ['./cars-tabs-view.component.scss'],
})
export class CarsTabsViewComponent implements OnInit, OnDestroy {
  carsByCategories = {};
  allCarsLoading: boolean = false;
  carInfoLoading: boolean = false;
  selectedCar: ICar | null = null;
  getAllCarsSubscription: Subscription | null = null;
  getCarByIdSubscription: Subscription | null = null;
  selectedCategoryIndex = 0;
  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.allCarsLoading = true;
    this.getAllCarsSubscription = this.carsService
      .getAllCars()
      .subscribe((cars) => {
        this.carsByCategories = this.getCarsByCategories(cars);
        this.allCarsLoading = false;
      });
  }
  ngOnDestroy(): void {
    this.getAllCarsSubscription.unsubscribe();
    this.getCarByIdSubscription.unsubscribe();
  }
  setSelectCarId(id: string): void {
    this.carInfoLoading = true;
    this.getCarByIdSubscription = this.carsService
      .getCarById(id)
      .subscribe((car) => {
        this.selectedCar = car;
        this.carInfoLoading = false;
      });
  }

  getCarsByCategories(cars: ICar[]) {
    return cars.reduce((acc, car) => {
      car.category
        ? acc[car.category]
          ? acc[car.category].push(car)
          : (acc[car.category] = [car])
        : null;
      return acc;
    }, {});
  }

  handleTabChange(): void {
    this.selectedCar = null;
  }
}
