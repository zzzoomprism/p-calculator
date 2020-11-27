import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPillarComponent } from './second-pillar.component';

describe('SecondPillarComponent', () => {
  let component: SecondPillarComponent;
  let fixture: ComponentFixture<SecondPillarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondPillarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPillarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
