import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbakeComponent } from './feedbake.component';

describe('FeedbakeComponent', () => {
  let component: FeedbakeComponent;
  let fixture: ComponentFixture<FeedbakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
