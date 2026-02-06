import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicForm } from './basic-form';

describe('BasicForm', () => {
  let component: BasicForm;
  let fixture: ComponentFixture<BasicForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
