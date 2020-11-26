import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedUserPopupComponent } from './verified-user-popup.component';

describe('VerifiedUserPopupComponent', () => {
  let component: VerifiedUserPopupComponent;
  let fixture: ComponentFixture<VerifiedUserPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiedUserPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiedUserPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
