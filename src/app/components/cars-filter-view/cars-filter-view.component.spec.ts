import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsFilterViewComponent } from './cars-filter-view.component';

describe('CarsFilterViewComponent', () => {
  let component: CarsFilterViewComponent;
  let fixture: ComponentFixture<CarsFilterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarsFilterViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsFilterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
