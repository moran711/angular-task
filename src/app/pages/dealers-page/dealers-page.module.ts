import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealerFormComponent } from 'src/app/components/dealer-form/dealer-form.component';
import { DealersPageComponent } from './dealers-page.component';
import { DealersTableComponent } from 'src/app/components/dealers-table/dealers-table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DealerFormComponent,
    DealersPageComponent,
    DealersTableComponent,
  ],
  imports: [
    //Vendor
    ReactiveFormsModule,
    FormsModule,
    CommonModule,

    //Material
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
  ],
})
export class DealersPageModule {}
