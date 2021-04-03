import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealersPageComponent } from './dealers-page.component';

describe('DealersPageComponent', () => {
  let component: DealersPageComponent;
  let fixture: ComponentFixture<DealersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DealersPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
