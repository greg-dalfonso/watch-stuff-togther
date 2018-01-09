import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendWebcamComponent } from './friend-webcam.component';

describe('FriendWebcamComponent', () => {
  let component: FriendWebcamComponent;
  let fixture: ComponentFixture<FriendWebcamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendWebcamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendWebcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
