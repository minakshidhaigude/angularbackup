import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectcmpntComponent } from './subjectcmpnt.component';

describe('SubjectcmpntComponent', () => {
  let component: SubjectcmpntComponent;
  let fixture: ComponentFixture<SubjectcmpntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectcmpntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectcmpntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
