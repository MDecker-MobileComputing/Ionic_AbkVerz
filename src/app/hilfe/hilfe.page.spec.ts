import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HilfePage } from './hilfe.page';

describe('HilfePage', () => {
  let component: HilfePage;
  let fixture: ComponentFixture<HilfePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HilfePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
