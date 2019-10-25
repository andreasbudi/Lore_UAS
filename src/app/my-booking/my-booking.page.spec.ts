import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookingPage } from './my-booking.page';

describe('MyBookingPage', () => {
  let component: MyBookingPage;
  let fixture: ComponentFixture<MyBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBookingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
