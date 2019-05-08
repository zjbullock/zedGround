import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from '../project/project.component';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects: ProjectComponent[];
  selectedProject: ProjectComponent;

  constructor() { 
  }

  ngOnInit() {
    this.projects = [
      new ProjectComponent("AnnoySomeone", "../assets/images/gopher-gcp.jfif", "https://github.com/zjbullock/annoySomeone"),
      new ProjectComponent("AnnoySomeoneUI", "../assets/images/AnnoySomeoneUI.png", "https://github.com/zjbullock/AnnoySomeoneUI"),
      new ProjectComponent("Conways Game of Life", "https://www.wolfram.com/language/gallery/implement-conways-game-of-life/img/implement-conways-game-of-life-output-1.en.png", "")
    ];
  }

  selectProject(project: ProjectComponent) {
    this.selectedProject = project;
  }

}
