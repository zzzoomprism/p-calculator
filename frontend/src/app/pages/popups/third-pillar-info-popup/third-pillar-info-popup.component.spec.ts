import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPillarInfoPopupComponent } from './third-pillar-info-popup.component';

describe('ThirdPillarInfoPopupComponent', () => {
  let component: ThirdPillarInfoPopupComponent;
  let fixture: ComponentFixture<ThirdPillarInfoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdPillarInfoPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPillarInfoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
