import { Injectable } from '@angular/core';
import { Car } from './car';
import { CARS } from './mock-cars';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCars(): Observable<Car[]> {
    return of(CARS);
  }

  getCar(id: number): Observable<Car> {
    const car = CARS.find(car => car.id === id)!;
    return of(car);
  }
}
