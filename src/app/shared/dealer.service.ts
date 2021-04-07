import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

import { IDealer } from 'src/constants/data.constants';

@Injectable({
  providedIn: 'root',
})
export class DealerService {
  reqUri: string = 'http://localhost:4200/api/dealers';
  constructor(private http: HttpClient) {}
  getAllDealers(options = {}): Observable<IDealer[]> {
    return this.http
      .get<IDealer[]>(this.reqUri, { params: options })
      .pipe(
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
  getDealerById(id: string) {
    return this.http.get<IDealer>(`${this.reqUri}/${id}`);
  }
}
