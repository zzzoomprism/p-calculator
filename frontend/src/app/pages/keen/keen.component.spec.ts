import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeenComponent } from './keen.component';

describe('KeenComponent', () => {
  let component: KeenComponent;
  let fixture: ComponentFixture<KeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
