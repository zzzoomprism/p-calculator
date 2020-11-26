import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPillarContributionInfoPopupComponent } from './third-pillar-contribution-info-popup.component';

describe('ThirdPillarContributionInfoPopupComponent', () => {
  let component: ThirdPillarContributionInfoPopupComponent;
  let fixture: ComponentFixture<ThirdPillarContributionInfoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdPillarContributionInfoPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPillarContributionInfoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
