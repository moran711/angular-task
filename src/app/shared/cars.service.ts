import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICar, ICarFilters } from '../../constants/data.constants';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  reqUri: string = 'http://localhost:4200/api/cars';
  constructor(private http: HttpClient) {}
  getAllCars(searchString?: string): Observable<ICar[]> {
    let uri = this.reqUri;
    if (searchString?.trim()) {
      uri = `${this.reqUri}/?model=${searchString}&brand=${searchString}`;
    }
    return this.http.get<ICar[]>(uri).pipe(
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
