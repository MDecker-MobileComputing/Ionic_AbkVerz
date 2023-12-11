import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HinzufuegenPage } from './hinzufuegen.page';

describe('HinzufuegenPage', () => {
  let component: HinzufuegenPage;
  let fixture: ComponentFixture<HinzufuegenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HinzufuegenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
