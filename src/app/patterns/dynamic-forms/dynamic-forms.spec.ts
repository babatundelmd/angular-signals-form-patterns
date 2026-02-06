import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicForms } from './dynamic-forms';

describe('DynamicForms', () => {
  let component: DynamicForms;
  let fixture: ComponentFixture<DynamicForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
