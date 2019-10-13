import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { faLinkedin, IconDefinition, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

interface Contact {
  name: string;
  icon: IconDefinition;
  url: string;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  ngOnInit() {
    this.contacts = [
      {
        name: 'Linkedin',
        icon: faLinkedin,
        url: 'https://www.linkedin.com/in/zikomo-bullock-66a007134/',
      },
      {
        name: 'Github',
        icon: faGithub,
        url: 'https://github.com/zjbullock'
      },
      {
        name: 'Facebook',
        icon: faFacebook,
        url: 'https://www.facebook.com/zikomo.bullockii'
      }
    ];
  }
}
