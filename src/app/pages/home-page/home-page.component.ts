import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarsService } from 'src/app/shared/cars.service';
import { DealerService } from 'src/app/shared/dealer.service';
import { ICar, IDealer } from 'src/constants/data.constants';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  likedCars: ICar[] | null = null; 
  loading: boolean = true;
  newlyAddedCars: ICar[] | null = null; 
  newlyAddedDealers: IDealer[] | null = null; 
  constructor(private carsService: CarsService, private dealersService: DealerService) {}

  ngOnInit(): void {
    this.subscriptions.push(this.carsService
      .getAllCars({liked: true})
      .subscribe((cars) => {
        this.likedCars = cars;
        this.loading = false;
      }))
      this.subscriptions.push(this.carsService
        .getAllCars({newItem: true})
        .subscribe((cars) => {
          this.newlyAddedCars = cars;
          this.loading = false;
        }))
       this.subscriptions.push( this.dealersService.getAllDealers({newRecord: true}).subscribe(dealer => {this.newlyAddedDealers = dealer; this.loading = false;}))
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
