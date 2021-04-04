import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { DealersPageComponent } from './pages/dealers-page/dealers-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './data-services/in-memory-data.service';
import { CarsFilterViewComponent } from './components/cars-filter-view/cars-filter-view.component';
import { CarsTabsViewComponent } from './components/cars-tabs-view/cars-tabs-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CarInfoComponent } from './components/car-info/car-info.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CarCardComponent } from './components/car-card/car-card.component';
import { HomeCarCardComponent } from './components/home-car-card/home-car-card.component';
import { HomeDealerCardComponent } from './components/home-dealer-card/home-dealer-card.component';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CarsPageComponent,
    DealersPageComponent,
    HeaderComponent,
    SidenavComponent,
    CarsFilterViewComponent,
    CarsTabsViewComponent,
    CarInfoComponent,
    CarCardComponent,
    HomeCarCardComponent,
    HomeDealerCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatSlideToggleModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatInputModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
