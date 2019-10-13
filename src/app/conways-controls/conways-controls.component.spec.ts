import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConwaysControlsComponent } from './conways-controls.component';

describe('ConwaysControlsComponent', () => {
  let component: ConwaysControlsComponent;
  let fixture: ComponentFixture<ConwaysControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConwaysControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConwaysControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
