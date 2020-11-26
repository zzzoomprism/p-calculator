import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayInformedPopupComponent } from './stay-informed-popup.component';

describe('StayInformedPopupComponent', () => {
  let component: StayInformedPopupComponent;
  let fixture: ComponentFixture<StayInformedPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StayInformedPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StayInformedPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
