import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { DealersPageComponent } from './pages/dealers-page/dealers-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { InMemoryDataService } from './data-services/in-memory-data.service';
import { CarsFilterViewComponent } from './components/cars-filter-view/cars-filter-view.component';
import { CarsTabsViewComponent } from './components/cars-tabs-view/cars-tabs-view.component';
import { CarInfoComponent } from './components/car-info/car-info.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { HomeCarCardComponent } from './components/home-car-card/home-car-card.component';
import { HomeDealerCardComponent } from './components/home-dealer-card/home-dealer-card.component';
import { DealersTableComponent } from './components/dealers-table/dealers-table.component';
import { ConfirmationPopUpComponent } from './components/confirmation-pop-up/confirmation-pop-up.component';
import { DealerFormComponent } from './components/dealer-form/dealer-form.component';

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
    DealersTableComponent,
    ConfirmationPopUpComponent,
    DealerFormComponent,
  ],
  imports: [
    //Vendor
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    //Material
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,

    //Local
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
