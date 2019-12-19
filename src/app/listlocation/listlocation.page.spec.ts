import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListlocationPage } from './listlocation.page';

describe('ListlocationPage', () => {
  let component: ListlocationPage;
  let fixture: ComponentFixture<ListlocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListlocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListlocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
