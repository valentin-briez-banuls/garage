import { Routes } from '@angular/router';
import {DashboardHomeComponent} from "./dashboard-home/dashboard-home.component";
import {DashboardCarsComponent} from "./dashboard-cars/dashboard-cars.component";

export const routes: Routes = [
  // { path: '**', redirectTo: '' },
  // { path: '', component: AppComponent },
  { path: 'dashboard', component: DashboardHomeComponent },
  { path: 'my-cars', component: DashboardCarsComponent },
];
