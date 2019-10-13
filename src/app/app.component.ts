import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/assets/constants';
import { fadeAnimation } from 'src/assets/animations/fade';

interface Link {
  route: string;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})

export class AppComponent implements OnInit {
  title: string = Constants.TITLE;
  name: string = Constants.NAME;
  links: Link[] = null;
  selectedLink: Link;

  ngOnInit() {
    this.links = [
      {
        route: 'contact',
        title: 'Contact',
      },
      {
        route: 'skills',
        title: 'Skills',
      },
      {
        route: 'projects',
        title: 'Projects',
      },
      {
        route: '',
        title: 'About Me'
      },
    ];
  }

  selectLink(link: Link) {
    this.selectedLink = link;
  }
}
