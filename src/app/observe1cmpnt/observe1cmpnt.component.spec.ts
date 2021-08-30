import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observe1cmpntComponent } from './observe1cmpnt.component';

describe('Observe1cmpntComponent', () => {
  let component: Observe1cmpntComponent;
  let fixture: ComponentFixture<Observe1cmpntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Observe1cmpntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Observe1cmpntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
