import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncValidation } from './async-validation';

describe('AsyncValidation', () => {
  let component: AsyncValidation;
  let fixture: ComponentFixture<AsyncValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncValidation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncValidation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
