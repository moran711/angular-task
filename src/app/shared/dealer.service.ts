import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, debounceTime } from 'rxjs/operators';

import { IDealer } from 'src/constants/data.constants';

@Injectable({
  providedIn: 'root',
})
export class DealerService {
  reqUri: string = 'http://localhost:4200/api/dealers';
  constructor(private http: HttpClient) {}
  getAllDealers(options = {}, debounce?: number): Observable<IDealer[]> {
    return this.http
      .get<IDealer[]>(this.reqUri, { params: options })
      .pipe(
        debounceTime(debounce),
        map((dealer) => {
          if (!dealer) {
            return [];
          }
          return dealer;
        }),
      );
  }
  deleteDealer(id: string) {
    const url = `${this.reqUri}/${id}`;

    return this.http.delete<IDealer>(url);
  }
  updateDealer(dealer: IDealer, oldId?: string): Observable<null> {
    this.deleteDealer(oldId).subscribe();
    return this.http.put<null>(this.reqUri, dealer);
  }
  addDealer(dealer: IDealer): Observable<IDealer> {
    return this.http.post<IDealer>(this.reqUri, dealer);
  }
  getDealerById(id: string, debounce?: number) {
    return this.http
      .get<IDealer>(`${this.reqUri}/${id}`)
      .pipe(debounceTime(debounce), distinctUntilChanged());
  }
}
