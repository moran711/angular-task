import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DealerService } from 'src/app/shared/dealer.service';
import { IDealer } from 'src/constants/data.constants';

interface IDialogData {
  isEdit: boolean;
  dealer?: IDealer;
}

@Component({
  selector: 'app-dealer-form',
  templateUrl: './dealer-form.component.html',
  styleUrls: ['./dealer-form.component.scss'],
})
export class DealerFormComponent implements OnInit, OnDestroy {
  dealersForm: FormGroup;
  subscriptions: Subscription[] = [];
  constructor(
    public dialogRef: MatDialogRef<DealerFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public dealerService: DealerService,
  ) {
    this.dealersForm = new FormGroup({
      id: new FormControl(this.data?.dealer?.id || '', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      name: new FormControl(this.data?.dealer?.name || '', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      headquarters: new FormControl(this.data?.dealer?.headquarters || '', [
        Validators.maxLength(20),
      ]),
      country: new FormControl(this.data?.dealer?.country || '', [
        Validators.maxLength(20),
      ]),
      foundedIn: new FormControl(this.data?.dealer?.foundedIn || '', [
        Validators.maxLength(20),
      ]),
    });
  }
  onSubmit(): void {
    const {
      id,
      name,
      headquarters,
      country,
      foundedIn,
    } = this.dealersForm.value;
    const newRecord = true;
    const amountOfCars = 0;
    this.subscriptions.push(
      this.data.isEdit
        ? this.dealerService
            .updateDealer({
              id,
              name,
              headquarters,
              country,
              foundedIn,
              newRecord,
              amountOfCars,
            })
            .subscribe()
        : this.dealerService
            .addDealer({
              id,
              name,
              headquarters,
              country,
              foundedIn,
              newRecord,
              createdAt: Date.now(),
              amountOfCars,
            })
            .subscribe(),
    );
  }
  onIdChange(id) {
    if (id === this.data?.dealer?.id) return;
    this.dealerService.getDealerById(id).subscribe(
      (dealer) => {
        dealer
          ? this.dealersForm.controls['id'].setErrors({ incorrect: true })
          : null;
      },
      (e) => {},
    );
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  getErrorMessage() {
    if (this.dealersForm.controls['id'].hasError('incorrect')) {
      return 'Id is already taken';
    }
  }
}
