import { Component } from '@angular/core';
import { Constants } from 'src/assets/constants';
import { ProjectListComponent } from 'src/app/project-list/project-list.component';
import { ProjectComponent } from 'src/app/project/project.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = Constants.TITLE;
  name = Constants.NAME;
}
