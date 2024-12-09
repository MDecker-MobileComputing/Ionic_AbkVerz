import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoeschbedeutungPage } from './loeschbedeutung.page';

describe('LoeschbedeutungPage', () => {
  let component: LoeschbedeutungPage;
  let fixture: ComponentFixture<LoeschbedeutungPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoeschbedeutungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
