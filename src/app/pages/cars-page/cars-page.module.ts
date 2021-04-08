import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CarsPageComponent } from './cars-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarsFilterViewComponent } from 'src/app/components/cars-filter-view/cars-filter-view.component';
import { CarsTabsViewComponent } from 'src/app/components/cars-tabs-view/cars-tabs-view.component';
import { CarInfoComponent } from 'src/app/components/car-info/car-info.component';
import { CarCardComponent } from 'src/app/components/car-card/car-card.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    CarsPageComponent,
    CarsFilterViewComponent,
    CarsTabsViewComponent,
    CarInfoComponent,
    CarCardComponent,
  ],
  imports: [
    //Vendor
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    //Material
    MatListModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class CarsPageModule {}
