import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpMaterialComponent } from './pop-up-material.component';

describe('PopUpMaterialComponent', () => {
  let component: PopUpMaterialComponent;
  let fixture: ComponentFixture<PopUpMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
