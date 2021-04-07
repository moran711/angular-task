import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material/tabs';

import { CarsService } from '../../shared/cars.service';
import { ICar } from '../../../constants/data.constants';

@Component({
  selector: 'app-cars-tabs-view',
  templateUrl: './cars-tabs-view.component.html',
  styleUrls: ['./cars-tabs-view.component.scss'],
})
export class CarsTabsViewComponent implements OnInit, OnDestroy {
  carsByCategories = {};
  allCarsLoading: boolean = false;
  selectedCar: ICar | null = null;
  getAllCarsSubscription: Subscription | null = null;
  selectedCategoryIndex = 0;
  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.allCarsLoading = true;
    this.getAllCarsSubscription = this.carsService
      .getAllCars()
      .subscribe((cars) => {
        this.carsByCategories = this.getCarsByCategories(cars);
        const firstCategory = Object.keys(this.carsByCategories).sort()[0];
        const carId = this.carsByCategories[firstCategory][0].id;
        this.setSelectedCar(firstCategory, carId);
        this.allCarsLoading = false;
      });
  }
  ngOnDestroy(): void {
    this.getAllCarsSubscription?.unsubscribe();
  }
  setSelectedCar(category: string, id: string): void {
    this.selectedCar = this.carsByCategories[category].find(
      (car) => car.id === id,
    );
  }

  checkCategoriesIsEmpty(): boolean {
    for (var prop in this.carsByCategories) {
      if (this.carsByCategories.hasOwnProperty(prop)) return false;
    }

    return true;
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

  handleTabChange(event: MatTabChangeEvent): void {
    this.selectedCar = null;
    const category = event.tab.textLabel;
    const carId = this.carsByCategories[category][0].id;
    this.setSelectedCar(category, carId);
  }
}
