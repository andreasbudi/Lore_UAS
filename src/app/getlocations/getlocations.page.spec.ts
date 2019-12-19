import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetlocationsPage } from './getlocations.page';

describe('GetlocationsPage', () => {
  let component: GetlocationsPage;
  let fixture: ComponentFixture<GetlocationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetlocationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetlocationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
