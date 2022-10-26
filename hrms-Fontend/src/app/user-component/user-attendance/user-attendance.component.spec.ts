import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAttendanceComponent } from './user-attendance.component';

describe('UserAttendanceComponent', () => {
  let component: UserAttendanceComponent;
  let fixture: ComponentFixture<UserAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAttendanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
