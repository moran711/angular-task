import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';

import { DealerService } from 'src/app/shared/dealer.service';
import { ConfirmationPopUpComponent } from '../confirmation-pop-up/confirmation-pop-up.component';
import { DealerFormComponent } from '../dealer-form/dealer-form.component';

@Component({
  selector: 'app-dealers-table',
  templateUrl: './dealers-table.component.html',
  styleUrls: ['./dealers-table.component.scss'],
})
export class DealersTableComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  displayedColumns: string[] = [
    'name',
    'amountOfCars',
    'headquarters',
    'country',
    'foundedIn',
    'actions',
  ];
  @ViewChild(MatSort) sort: MatSort;
  @Input() dealers;
  @Output() triggerDownloadEvent = new EventEmitter<string>();
  constructor(private dealerService: DealerService, public dialog: MatDialog) {}

  ngOnInit(): void {}
  ngOnChanges() {
    this.dealers ? (this.dealers.sort = this.sort) : null;
  }
  getDealers(): void {
    this.triggerDownloadEvent.emit();
  }

  openDeleteDialog(id: string): void {
    const dialogRef = this.dialog.open(ConfirmationPopUpComponent, {
      data: { dealerId: id },
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (typeof result === 'string') {
          this.deleteDealer(result);
          this.getDealers();
        }
      }),
    );
  }
  deleteDealer(id: string): void {
    this.subscriptions.push(this.dealerService.deleteDealer(id).subscribe());
  }
  openUpdateDealerDialog(dealer): void {
    const dialogRef = this.dialog.open(DealerFormComponent, {
      data: {
        isEdit: true,
        dealer,
      },
    });
    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        result ? this.getDealers() : null;
      }),
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub?.unsubscribe);
  }
}
