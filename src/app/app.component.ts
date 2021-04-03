import { Component } from '@angular/core';
import sidenavOptions, { ISidenavOptions } from '../config/sidenav-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sidenavOptions: ISidenavOptions = sidenavOptions;
}
