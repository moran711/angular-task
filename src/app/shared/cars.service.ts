import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICar } from '../../constants/data.constants';
import { HttpClient } from '@angular/common/http';
import { distinct, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  reqUri = 'http://localhost:4200/api/cars';
  constructor(private http: HttpClient) {}
  getAllCars(): Observable<ICar[]> {
    return this.http.get<ICar[]>(this.reqUri).pipe(
      map((car) => {
        if (!car) {
          return [];
        }
        return car;
      }),
    );
  }
  getCarById(id): Observable<ICar> {
    const uri = `${this.reqUri}/${id}`;
    return this.http.get<ICar>(uri);
  }
}
