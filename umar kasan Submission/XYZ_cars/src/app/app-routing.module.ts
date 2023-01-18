import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarsComponent } from './cars/cars.component';

const routes: Routes = [
  { path: "cars", component: CarsComponent },
  { path: "detail/:id", component: CarDetailComponent },
  { path: "", redirectTo: "/welcome", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
