import { Component, OnInit } from '@angular/core';

import config from '../../../constants';
import { IMenuItem } from '../../../constants/menu-items.constants';

const { menuItems } = config;
const routerLinkActiveOptions = { config };

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  routerActiveOptions = routerLinkActiveOptions;
  menuItems: IMenuItem[] = menuItems;
  constructor() {}

  ngOnInit(): void {}
}
