import { Component, Input, OnInit } from '@angular/core';
import { IDealer } from 'src/constants/data.constants';

@Component({
  selector: 'app-home-dealer-card',
  templateUrl: './home-dealer-card.component.html',
  styleUrls: ['./home-dealer-card.component.scss'],
})
export class HomeDealerCardComponent implements OnInit {
  @Input() dealer: IDealer | null;
  constructor() {}

  ngOnInit(): void {}
}
