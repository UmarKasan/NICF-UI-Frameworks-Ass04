import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CARS } from '../mock-cars';
import { CarService } from '../car.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService, private location: Location) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars()
      .subscribe(cars => this.cars = cars);
  }
}
