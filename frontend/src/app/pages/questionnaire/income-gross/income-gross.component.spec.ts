import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeGrossComponent } from './income-gross.component';

describe('IncomeGrossComponent', () => {
  let component: IncomeGrossComponent;
  let fixture: ComponentFixture<IncomeGrossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeGrossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeGrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
