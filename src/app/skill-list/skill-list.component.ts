import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';
import { fadeText } from 'src/assets/animations/fade';

interface Skill {
  name: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss'],
  animations: [fadeText]
})

export class SkillListComponent implements OnInit, AfterViewChecked {
  technicalSkills: Skill[];
  leadershipSkills: Skill[];
  selectedSkill: SkillComponent;
  previousSkill: SkillComponent = null;
  show: 'hide';

  ngOnInit() {
    this.technicalSkills = [
      {
        name: 'Angular',
        icon: 'devicon-angularjs-plain',
        description: 'This site is actually my first Angular app.\n'
        + 'I must say, I\'m quite enjoying the Typescript.  While I can do things quick and dirty in Javascript, '
        + 'Typescript is forcing me to truly consider the structure of my applications and what is being passed around.\n'
        + 'Couple that with Angular\'s fantastic approach to componentization, and I\'m slowly being sold on it.',
      },
      {
        name: 'Golang',
        icon: 'devicon-go-plain',
        description: 'Golang is a relatively young language that has '
        + 'grown to become one of my favorite languages to use in developing microservices.\n'
        + 'I\'ve already used it to develop multiple microservices for recreational '
        + 'purposes and even in building batch processes and microservice architectures at work.',
      },
      {
        name: 'Java (With Spring)',
        icon: 'devicon-java-plain-wordmark',
        description: 'Ah yes, Java.  My first love.  The tried and true.\n'
        + 'When all else fails, Java somehow prevails.  After going on a somewhat lengthy hiatus from Java, and coming back from Go, '
        + 'I found that most of the new tricks and techniques I learned in Go were usable in Java.\n'
        + 'Once I was exposed to Java version 12 and higher, '
        + 'it somewhat reignited my love for the language and ease of spinning up services.  '
        + 'I\'m still a sucker for Golang though.',
      },
      {
        name: 'MongoDB',
        icon: 'devicon-mongodb-plain-wordmark',
        description: 'I absolutely love the ability to use JSON when structuring my DB.  '
        + 'After getting to work hands on with a Mongo DB and the support for Golang, I fell in love.  Good bye SQL...for now.',
      },
      {
        name: 'React',
        icon: 'devicon-react-original-wordmark',
        description: 'React is a javascript library for spinning up powerful and dynamic UI\'s.  '
        + 'Yet, here I am building my portfolio page in Angular.  Where\'s the fun in using things I already know though, right?',
      },
    ];
  }

  ngAfterViewChecked() {
    if (this.selectedSkill) {
      const el = document.getElementById('description');
      el.scrollIntoView();
    }
  }

  selectSkill(skill: SkillComponent) {
    this.previousSkill = this.selectedSkill;
    this.selectedSkill = skill;
   }
}
