import { Component } from '@angular/core';
import sidenavOptionsConstants, {
  ISidenavOptions,
} from '../constants/sidenav-options.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sidenavOptions: ISidenavOptions = sidenavOptionsConstants;
}
