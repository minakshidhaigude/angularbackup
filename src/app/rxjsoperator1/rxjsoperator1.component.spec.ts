import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rxjsoperator1Component } from './rxjsoperator1.component';

describe('Rxjsoperator1Component', () => {
  let component: Rxjsoperator1Component;
  let fixture: ComponentFixture<Rxjsoperator1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rxjsoperator1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rxjsoperator1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
