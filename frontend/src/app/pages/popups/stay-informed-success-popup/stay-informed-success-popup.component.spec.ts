import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayInformedSuccessPopupComponent } from './stay-informed-success-popup.component';

describe('StayInformedSuccessPopupComponent', () => {
  let component: StayInformedSuccessPopupComponent;
  let fixture: ComponentFixture<StayInformedSuccessPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StayInformedSuccessPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StayInformedSuccessPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
