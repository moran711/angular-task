import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

import { DealerFormComponent } from 'src/app/components/dealer-form/dealer-form.component';
import { DealerService } from 'src/app/shared/dealer.service';

@Component({
  selector: 'app-dealers-page',
  templateUrl: './dealers-page.component.html',
  styleUrls: ['./dealers-page.component.scss'],
})
export class DealersPageComponent implements OnInit {
  subscriptions: Subscription[] = [];
  loading: boolean = false;
  displayedColumns: string[] = [
    'name',
    'amountOfCars',
    'headquarters',
    'country',
    'foundedIn',
    'actions',
  ];
  filter: FormControl = new FormControl('');
  searchString: string = '';
  skip: number = 0;
  length: number = 0;
  dealers;
  limit: number = 10;
  showPaginator: boolean = false;
  constructor(public dialog: MatDialog, private dealerService: DealerService) {}
  filterOnChange(searchString: string) {
    this.getDealers(null, searchString);
  }
  clearInput(): void {
    this.filter.setValue('');
  }
  paginatorConfig = {
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 100],
  };

  getDealers(event?: PageEvent, searchString?: string) {
    this.loading = true;
    if (event) {
      this.skip = event?.pageSize * event?.pageIndex;
      this.limit = event?.pageSize;
    }

    this.subscriptions.push(
      this.dealerService.getAllDealers(null, 5000).subscribe((dealers) => {
        dealers = searchString?.trim()
          ? dealers.filter(
              (dealer) =>
                this.displayedColumns
                  .filter((el) => el !== 'action')
                  .map((column) => {
                    return typeof dealer[column] === 'number'
                      ? dealer[column]
                          .toString()
                          .includes(searchString.toLowerCase())
                      : typeof dealer[column] === 'string'
                      ? dealer[column]
                          .toLowerCase()
                          .includes(searchString.toLowerCase())
                      : false;
                  })
                  .filter((el) => el).length,
            )
          : dealers;
        event ? null : (this.length = dealers.length);
        dealers.length < 6
          ? (this.showPaginator = false)
          : (this.showPaginator = true);
        this.dealers = new MatTableDataSource(
          dealers.splice(this.skip, this.limit),
        );

        this.loading = false;
      }),
    );
  }

  ngOnInit(): void {
    this.getDealers();
  }
  openFormDialog(): void {
    const dialogRef = this.dialog.open(DealerFormComponent, {
      data: { edit: false },
      height: '600px',
      width: '600px',
    });
    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        result ? this.getDealers(null, this.searchString) : null;
      }),
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub?.unsubscribe);
  }
}
