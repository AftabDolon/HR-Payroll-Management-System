import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSalaryComponent } from './user-salary.component';

describe('UserSalaryComponent', () => {
  let component: UserSalaryComponent;
  let fixture: ComponentFixture<UserSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
