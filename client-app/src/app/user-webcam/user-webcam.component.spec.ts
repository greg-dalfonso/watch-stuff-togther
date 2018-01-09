import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWebcamComponent } from './user-webcam.component';

describe('UserWebcamComponent', () => {
  let component: UserWebcamComponent;
  let fixture: ComponentFixture<UserWebcamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWebcamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWebcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
