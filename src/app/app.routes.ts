import { Routes } from '@angular/router';
import { ChartComponent } from './external/charts/chart.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'chart',
    component: ChartComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
