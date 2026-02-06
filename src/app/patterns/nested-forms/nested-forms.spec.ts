import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedForms } from './nested-forms';

describe('NestedForms', () => {
  let component: NestedForms;
  let fixture: ComponentFixture<NestedForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
