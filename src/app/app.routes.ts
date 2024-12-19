import { Routes } from '@angular/router';
import {TripsComponent} from "./modules/trips/trips.component";
import {HomeComponent} from "./modules/home/home.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'trips', component: TripsComponent },
];
