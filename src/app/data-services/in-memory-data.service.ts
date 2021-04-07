import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { CARS, DEALERS, ICar, IDealer } from '../../constants/data.constants';

interface IMemoryDB {
  cars: ICar[];
  dealers: IDealer[];
}

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb(): IMemoryDB {
    return {
      cars: CARS,
      dealers: DEALERS,
    };
  }
}
