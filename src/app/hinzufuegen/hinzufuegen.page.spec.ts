import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HinzufuegenPage } from './hinzufuegen.page';

describe('HinzufuegenPage', () => {
  let component: HinzufuegenPage;
  let fixture: ComponentFixture<HinzufuegenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HinzufuegenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HinzufuegenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
