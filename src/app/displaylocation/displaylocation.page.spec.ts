import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplaylocationPage } from './displaylocation.page';

describe('DisplaylocationPage', () => {
  let component: DisplaylocationPage;
  let fixture: ComponentFixture<DisplaylocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaylocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplaylocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
