import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  title: string;
  aboutMe: string;
  constructor() { }

  ngOnInit() {
    this.aboutMe = "Hello there.  My name is Zikomo Bullock, and I am a Full Stack Software Engineer. I am currently employed at The Home Depot.";
  }

}
