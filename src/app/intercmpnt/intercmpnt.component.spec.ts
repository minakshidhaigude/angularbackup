import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercmpntComponent } from './intercmpnt.component';

describe('IntercmpntComponent', () => {
  let component: IntercmpntComponent;
  let fixture: ComponentFixture<IntercmpntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntercmpntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntercmpntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
