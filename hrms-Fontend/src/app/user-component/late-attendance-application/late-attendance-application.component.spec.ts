import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateAttendanceApplicationComponent } from './late-attendance-application.component';

describe('LateAttendanceApplicationComponent', () => {
  let component: LateAttendanceApplicationComponent;
  let fixture: ComponentFixture<LateAttendanceApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateAttendanceApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateAttendanceApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
