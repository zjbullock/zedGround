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
    this.aboutMe = "My name is Zikomo Bullock, and I am a Full Stack Software Engineer.  I am currently employed at The Home Depot.  <br>" 
    + "My favorite language to work in to date is Golang; however, I currently use Javascript to work on a React Redux Application.  <br>"
    + "On the backend side, I currently work with Spring and have enjoyed many of the utilities it offers.  <br><br>"
    + "In my free time, I contribute to a Discord bot by the name of Rusty.  <br>"
    + "When I'm not busy programming, I enjoy playing video games, and hanging out with friends.  <br>"
    + "I also like to brew coffee, and enjoy grinding my own coffee beans and using my french press to produce high quality coffee.";
  }

}
