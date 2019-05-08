import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConwaysComponent } from './conways.component';

describe('ConwaysComponent', () => {
  let component: ConwaysComponent;
  let fixture: ComponentFixture<ConwaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConwaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConwaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
