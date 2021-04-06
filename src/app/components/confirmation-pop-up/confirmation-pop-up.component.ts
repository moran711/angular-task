import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

interface IDialogData {
  dealerId: string;
}

@Component({
  selector: 'app-confirmation-pop-up',
  templateUrl: './confirmation-pop-up.component.html',
  styleUrls: ['./confirmation-pop-up.component.scss'],
})
export class ConfirmationPopUpComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData,
  ) {}
  ngOnInit(): void {}
}
