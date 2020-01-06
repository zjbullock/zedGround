import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { fadeText } from '../../assets/animations/fade';

interface Project {
  name: string;
  imagePath: string;
  url: string;
  path?: string;
  description: string;
}

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [fadeText]
})
export class ProjectListComponent implements OnInit, AfterViewChecked {
  @Input() projects: Project[];
  @Input() previousProject: ProjectComponent = null;
  @Input() selectedProject: ProjectComponent;

  ngOnInit() {
    this.projects = [
      {
        name: 'AnnoySomeone Service',
        imagePath: '../assets/images/gopher-gcp.jfif',
        url: 'https://github.com/zjbullock/annoySomeone',
        description: 'Where do I even begin with this...\n'
        + 'This is essentially the result of a funny joke between my friends and I.\n'
        + 'It was designed to fetch the price of milk from a certain unnamed super store\'s site, '
        + 'format it as a message, then text him.\n'
        + 'It was a fun Golang project that took entirely too much effort.  '
        + 'The service even had the ability to use cookies to get milk prices from the unnamed site\'s website by zip code!\n'
        + 'I deployed it to GCP\'s App Engine, and there it sat being hit by my Raspberry Pi to send texts every Tuesday at 6pm EST.\n'
        + 'Eventually, the unnamed site seemed to have blocked calls to their endpoint that '
        + 'provided the location cookies by my server, so I decided to shut it down.  '
        + 'All good things must come to an end I suppose.'
      },
      {
        name: 'AnnoySomeone UI',
        imagePath: '../assets/images/AnnoySomeoneUI.png',
        url: 'https://github.com/zjbullock/AnnoySomeoneUI',
        description: 'This was done in conjunction with the AnnoySomeone Service.\n'
        + 'Prior to writing this application, I had not done anything in Flutter, so I was interested in trying it.\n'
        + 'Flutter is a lot of fun to use and makes developing for iOS and Android very easy.  '
        + 'I hope to make another Flutter app in the future.'
      },
      {
        name: 'Conways Game of Life',
        imagePath: '../assets/images/Gospers_glider_gun.gif',
        url: null,
        path: '../conway',
        description: 'This was the very first thing I\'ve ever written in Javascript.\n'
        + 'After graduating from college, my skills in Front End Development was lacking, and so I decided to improve it.\n'
        + 'This project taught me about using the DOM and thinking about how my code affected the user interface, '
        + 'rather than the data that is passed around.\n'
        + 'It was a ton of fun, so...let\'s rebuild it using Angular!'
      },
      {
        name: 'Insult Service',
        imagePath: '../assets/images/gopher-gcp.jfif',
        url: 'https://github.com/zjbullock/insultService',
        description: 'Yet another hard service to explain...\n'
        + 'I built this service for use with the Rusty Discord bot developed by myself and a group of friends.\n'
        + 'It is currently deployed to GCP App Engine, and will generate insults with a single verb, adjective, and noun.  '
        + 'It has approximately 40 adjectives, 40 nouns, and 15 verbs to select from at random and 5 different sentence patterns.'
      },
      {
        name: 'Miyohkos Spa Website',
        imagePath: '../assets/images/miyohkos-logo.jpg',
        url: 'https://github.com/zjbullock/miyohkos-spa',
        description: 'This is the 2nd Angular Application that I have worked on.' +
        'It is a website for my mother\'s spa that she recently opened.'
      }
    ];
  }

  ngAfterViewChecked() {
    if (this.selectedProject) {
      const el = document.getElementById('description');
      el.scrollIntoView();
    }
  }

  selectProject(project: ProjectComponent) {
    this.previousProject = this.selectedProject;
    this.selectedProject = project;
  }

}
