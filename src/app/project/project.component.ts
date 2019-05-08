import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  name: string;
  imagePath: string;
  link: string;

  constructor(name: string, imagePath: string, link: string) { 
    this.name = name;
    this.imagePath = imagePath;
    this.link = link;
  }

  ngOnInit() {
  }

}
