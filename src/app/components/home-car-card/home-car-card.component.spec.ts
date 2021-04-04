import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCarCardComponent } from './home-car-card.component';

describe('HomeCarCardComponent', () => {
  let component: HomeCarCardComponent;
  let fixture: ComponentFixture<HomeCarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCarCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
