import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { ICar } from '../../constants/data.constants';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  reqUri: string = 'http://localhost:4200/api/cars';
  constructor(private http: HttpClient) {}
  getAllCars(filterOptions?: any): Observable<ICar[]> {
    return this.http
      .get<ICar[]>(this.reqUri, { params: filterOptions })
      .pipe(
        map((car) => {
          if (!car) {
            return [];
          }
          return car;
        }),
      );
  }
  updateCar(car: ICar): Observable<null> {
    return this.http.put<null>(this.reqUri, car);
  }
}
