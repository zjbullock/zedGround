import { Component } from '@angular/core';
import { Constants } from 'src/assets/constants';
import { fadeAnimation } from 'src/assets/animations/fade';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = Constants.TITLE;
  name = Constants.NAME;
}
