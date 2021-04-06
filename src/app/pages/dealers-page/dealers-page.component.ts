import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DealerFormComponent } from 'src/app/components/dealer-form/dealer-form.component';

@Component({
  selector: 'app-dealers-page',
  templateUrl: './dealers-page.component.html',
  styleUrls: ['./dealers-page.component.scss'],
})
export class DealersPageComponent implements OnInit {
  filter: FormControl = new FormControl('');
  searchString: string = '';
  constructor(public dialog: MatDialog) {}
  filterOnChange(searchString: string) {
    this.searchString = searchString;
  }
  clearInput() {
    this.filter.setValue('');
  }

  ngOnInit(): void {}
  openFormDialog() {
    this.dialog.open(DealerFormComponent, {
      data: { edit: false },
      height: '600px',
      width: '600px',
    });
  }
}
