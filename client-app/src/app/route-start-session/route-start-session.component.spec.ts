import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteStartSessionComponent } from './route-start-session.component';

describe('RouteStartSessionComponent', () => {
  let component: RouteStartSessionComponent;
  let fixture: ComponentFixture<RouteStartSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteStartSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteStartSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
