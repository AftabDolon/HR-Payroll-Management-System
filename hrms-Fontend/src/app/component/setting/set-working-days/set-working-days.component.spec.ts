import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetWorkingDaysComponent } from './set-working-days.component';

describe('SetWorkingDaysComponent', () => {
  let component: SetWorkingDaysComponent;
  let fixture: ComponentFixture<SetWorkingDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetWorkingDaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetWorkingDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
