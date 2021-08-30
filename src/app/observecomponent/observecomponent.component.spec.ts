import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservecomponentComponent } from './observecomponent.component';

describe('ObservecomponentComponent', () => {
  let component: ObservecomponentComponent;
  let fixture: ComponentFixture<ObservecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
