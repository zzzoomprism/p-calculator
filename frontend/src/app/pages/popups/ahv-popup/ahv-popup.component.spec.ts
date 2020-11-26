import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhvPopupComponent } from './ahv-popup.component';

describe('AhvPopupComponent', () => {
  let component: AhvPopupComponent;
  let fixture: ComponentFixture<AhvPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhvPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhvPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
