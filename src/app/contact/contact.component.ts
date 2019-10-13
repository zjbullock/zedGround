import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() name: string;
  @Input() icon: IconDefinition;
  @Input() url: string;
  ngOnInit() {
  }
}
