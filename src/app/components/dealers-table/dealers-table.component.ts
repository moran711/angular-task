import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { DealerService } from 'src/app/shared/dealer.service';
import { IDealer } from 'src/constants/data.constants';
import { ConfirmationPopUpComponent } from '../confirmation-pop-up/confirmation-pop-up.component';
import { DealerFormComponent } from '../dealer-form/dealer-form.component';

@Component({
  selector: 'app-dealers-table',
  templateUrl: './dealers-table.component.html',
  styleUrls: ['./dealers-table.component.scss'],
})
export class DealersTableComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  loading: boolean = false;
  dealers;
  skip: number = 0;
  limit: number = 10;
  @Input() set searchString(value: string) {
    this.getDealers(null, value);
  }
  showPaginator: boolean = false;
  displayedColumns: string[] = [
    'name',
    'amountOfCars',
    'headquarters',
    'country',
    'foundedIn',
    'actions',
  ];
  length: number = 0;
  paginatorConfig = {
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 100],
  };
  constructor(private dealerService: DealerService, public dialog: MatDialog) {}

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.getDealers();
  }
  filterOnChange(searchString: string) {
    this.getDealers(null, searchString);
  }
  getDealers(event?: PageEvent, searchString?: string) {
    this.loading = true;
    if (event) {
      this.skip = event?.pageSize * event?.pageIndex;
      this.limit = event?.pageSize;
    }

    this.subscriptions.push(
      this.dealerService
        .getAllDealers(searchString?.trim() ? { name: searchString } : null)
        .subscribe((dealers) => {
          event ? null : (this.length = dealers.length);
          dealers.length < 6
            ? (this.showPaginator = false)
            : (this.showPaginator = true);
          this.dealers = new MatTableDataSource(
            dealers.splice(this.skip, this.limit),
          );
          this.dealers.sort = this.sort;

          this.loading = false;
        }),
    );
  }
  openDeleteDialog(id: string) {
    const dialogRef = this.dialog.open(ConfirmationPopUpComponent, {
      data: { dealerId: id },
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (typeof result === 'string') {
          this.deleteDealer(result);
          this.getDealers(null, this.searchString);
        }
      }),
    );
  }
  deleteDealer(id: string) {
    this.subscriptions.push(this.dealerService.deleteDealer(id).subscribe());
  }
  openUpdateDealerDialog(dealer) {
    this.dialog.open(DealerFormComponent, {
      data: {
        isEdit: true,
        dealer,
      },
    });
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub?.unsubscribe);
  }
}
