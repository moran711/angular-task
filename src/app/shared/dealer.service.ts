import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDealer } from 'src/constants/data.constants';

@Injectable({
  providedIn: 'root',
})
export class DealerService {
  reqUri: string = 'http://localhost:4200/api/dealers';
  constructor(private http: HttpClient) {}
  getAllDealers(options = {}): Observable<IDealer[]> {
    return this.http.get<IDealer[]>(this.reqUri, {params: options}).pipe(
      map((dealer) => {
        if (!dealer) {
          return [];
        }
        return dealer;
      }),
    );
  }
}
