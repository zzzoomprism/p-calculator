import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPillarComponent } from './third-pillar.component';

describe('ThirdPillarComponent', () => {
  let component: ThirdPillarComponent;
  let fixture: ComponentFixture<ThirdPillarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdPillarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPillarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
