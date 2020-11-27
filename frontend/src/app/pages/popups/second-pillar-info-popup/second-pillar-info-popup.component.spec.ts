import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPillarInfoPopupComponent } from './second-pillar-info-popup.component';

describe('SecondPillarInfoPopupComponent', () => {
  let component: SecondPillarInfoPopupComponent;
  let fixture: ComponentFixture<SecondPillarInfoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondPillarInfoPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPillarInfoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
