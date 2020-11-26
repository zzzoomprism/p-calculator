import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePensionFundPopupComponent } from './purchase-pension-fund-popup.component';

describe('PurchasePensionFundPopupComponent', () => {
  let component: PurchasePensionFundPopupComponent;
  let fixture: ComponentFixture<PurchasePensionFundPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasePensionFundPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasePensionFundPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
