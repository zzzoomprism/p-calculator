import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinvestmentInfoPopupComponent } from './reinvestment-info-popup.component';

describe('ReinvestmentInfoPopupComponent', () => {
  let component: ReinvestmentInfoPopupComponent;
  let fixture: ComponentFixture<ReinvestmentInfoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinvestmentInfoPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinvestmentInfoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
