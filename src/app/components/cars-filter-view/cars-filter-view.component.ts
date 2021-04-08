import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { CarsService } from 'src/app/shared/cars.service';
import { ICar } from 'src/constants/data.constants';

@Component({
  selector: 'app-cars-filter-view',
  templateUrl: './cars-filter-view.component.html',
  styleUrls: ['./cars-filter-view.component.scss'],
})
export class CarsFilterViewComponent implements OnInit, OnDestroy {
  filter: FormControl = new FormControl('');
  loading: boolean = true;
  limit: number = 12;
  cars: ICar[] | null = null;
  getAllCarsSubscriptions: Subscription[] = [];
  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.getCars('');
  }
  ngOnDestroy(): void {
    this.getAllCarsSubscriptions.forEach((sub) => sub?.unsubscribe());
  }
  getCars(searchString) {
    this.getAllCarsSubscriptions.push(
      this.carsService.getAllCars().subscribe((cars) => {
        this.cars = searchString?.trim()
          ? cars
              .filter(
                (car) =>
                  car.model
                    .toLowerCase()
                    .includes(searchString.toLowerCase()) ||
                  car.brand.toLowerCase().includes(searchString.toLowerCase()),
              )
              .slice(0, this.limit)
          : cars.slice(0, this.limit);
        this.loading = false;
      }),
    );
  }
  filterOnChange(searchString: string): void {
    this.getCars(searchString);
  }
  loadMoreCars(): void {
    this.limit += 12;
    this.getCars(this.filter.value);
  }
  clearInput(): void {
    this.filter.setValue('');
  }
}
