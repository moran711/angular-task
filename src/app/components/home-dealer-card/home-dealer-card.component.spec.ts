import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDealerCardComponent } from './home-dealer-card.component';

describe('HomeDealerCardComponent', () => {
  let component: HomeDealerCardComponent;
  let fixture: ComponentFixture<HomeDealerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeDealerCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDealerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
