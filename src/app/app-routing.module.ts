import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { DealersPageComponent } from './pages/dealers-page/dealers-page.component';
import config from '../config';

const { paths } = config;

const routes: Routes = [
  {
    path: paths.pathToHomePage.slice(1),
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: paths.pathToCarsPage.slice(1),
    component: CarsPageComponent,
    pathMatch: 'full',
  },
  {
    path: paths.pathToDealersPage.slice(1),
    component: DealersPageComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
