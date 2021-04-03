import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsTabsViewComponent } from './cars-tabs-view.component';

describe('CarsTabsViewComponent', () => {
  let component: CarsTabsViewComponent;
  let fixture: ComponentFixture<CarsTabsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarsTabsViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsTabsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
