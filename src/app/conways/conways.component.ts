import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-conways',
  templateUrl: './conways.component.html',
  styleUrls: ['./conways.component.scss']
})
export class ConwaysComponent implements OnInit {

  mainPage: String;

  ngOnInit() {
    this.mainPage = "";
  }

}
