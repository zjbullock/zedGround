import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from '../project/project.component';



interface Project {
  name: string;
  imagePath: string;
  url: string;
  path?: string;
}

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects: Project[];
  selectedProject: Project;

  constructor() { 
  }

  ngOnInit() {
    this.projects = [
      {
        name: "AnnoySomeone", 
        imagePath: "../assets/images/gopher-gcp.jfif", 
        url: "https://github.com/zjbullock/annoySomeone"
      },
      {
        name: "AnnoySomeoneUI", 
        imagePath: "../assets/images/AnnoySomeoneUI.png", 
        url: "https://github.com/zjbullock/AnnoySomeoneUI"
      },
      {
        name: "Conways Game of Life", 
        imagePath: "https://www.wolfram.com/language/gallery/implement-conways-game-of-life/img/implement-conways-game-of-life-output-1.en.png", 
        url: "",
        path: "conway"
      }
    ];
  }

  selectProject(project: ProjectComponent) {
    this.selectedProject = project;
  }

}
