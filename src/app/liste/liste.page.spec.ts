import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListePage } from './liste.page';

describe('ListePage', () => {
  let component: ListePage;
  let fixture: ComponentFixture<ListePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
