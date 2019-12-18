import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendlistPage } from './friendlist.page';

describe('FriendlistPage', () => {
  let component: FriendlistPage;
  let fixture: ComponentFixture<FriendlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
