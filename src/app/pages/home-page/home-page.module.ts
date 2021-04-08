import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCarCardComponent } from '../../components/home-car-card/home-car-card.component';
import { HomePageComponent } from './home-page.component';
import { HomeDealerCardComponent } from '../../components/home-dealer-card/home-dealer-card.component';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    HomePageComponent,
    HomeCarCardComponent,
    HomeDealerCardComponent,
  ],
  imports: [
    //Vendor
    CommonModule,

    //Material
    MatListModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
  ],
})
export class HomePageModule {}
