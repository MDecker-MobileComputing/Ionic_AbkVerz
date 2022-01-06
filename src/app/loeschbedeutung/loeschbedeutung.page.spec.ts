import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoeschbedeutungPage } from './loeschbedeutung.page';

describe('LoeschbedeutungPage', () => {
  let component: LoeschbedeutungPage;
  let fixture: ComponentFixture<LoeschbedeutungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoeschbedeutungPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoeschbedeutungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
