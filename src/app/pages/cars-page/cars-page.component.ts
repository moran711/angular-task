import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICar } from '../../../constants/data.constants';
import { CarsService } from '../../shared/cars.service';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.scss'],
})
export class CarsPageComponent implements OnInit, OnDestroy {
  isChecked = false;
  cars: ICar[] = [];
  getAllCarsSubscription: Subscription | null = null;
  constructor(private carsService: CarsService) {}
  ngOnDestroy(): void {
    this.getAllCarsSubscription?.unsubscribe();
  }
 ngOnInit(): void {
    this.getAllCarsSubscription = this.carsService.getAllCars().subscribe((cars) => (this.cars = cars));
  }
}
