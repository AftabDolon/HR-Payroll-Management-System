import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './component/activity/activity.component';
import { AddDepartmentComponent } from './component/add-department/add-department.component';
import { ApplicationListComponent } from './component/application-list/application-list.component';
import { AttendanceComponent } from './component/attendance/attendance.component';
import { ViewAttendanceComponent } from './component/attendance/view-attendance/view-attendance.component';
import { ChangepassComponent } from './component/changepass/changepass.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DepartmentComponent } from './component/department/department.component';
import { ComposeComponent } from './component/email/compose/compose.component';
import { DraftComponent } from './component/email/draft/draft.component';
import { InboxComponent } from './component/email/inbox/inbox.component';
import { SentComponent } from './component/email/sent/sent.component';
import { AddEmployeeComponent } from './component/employee/add-employee/add-employee.component';
import { EmployeeListComponent } from './component/employee/employee-list/employee-list.component';
import { UserProfilesComponent } from './component/employee/user-profiles/user-profiles.component';
import { EmployeeSalaryListComponent } from './component/payroll/employee-salary-list/employee-salary-list.component';
import { GenerateReportComponent } from './component/payroll/generate-report/generate-report.component';
import { MakePaymentComponent } from './component/payroll/make-payment/make-payment.component';
import { ManageSalaryComponent } from './component/payroll/manage-salary/manage-salary.component';
import { AttendanceReportComponent } from './component/report/attendance-report/attendance-report.component';
import { AccessControlComponent } from './component/setting/access-control/access-control.component';

import { LeaveCategoryComponent } from './component/setting/leave-category/leave-category.component';
import { SetWorkingDaysComponent } from './component/setting/set-working-days/set-working-days.component';
import { LoginComponent } from './login/login.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LateAttendanceApplicationComponent } from './user-component/late-attendance-application/late-attendance-application.component';
import { ProfileComponent } from './user-component/profile/profile.component';
import { UserApplicationComponent } from './user-component/user-application/user-application.component';
import { UserAttendanceComponent } from './user-component/user-attendance/user-attendance.component';
import { UserSalaryComponent } from './user-component/user-salary/user-salary.component';
import { UserSidenavComponent } from './user-component/user-sidenav/user-sidenav.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  
  {
    path: 'admin', component: SidenavComponent , children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'leaveCategory', component: LeaveCategoryComponent },
      { path: 'setWorkingDays', component: SetWorkingDaysComponent },
      { path: 'addDepartment', component: AddDepartmentComponent },
      { path: 'changePass', component: ChangepassComponent },
      { path: 'profiles', component: UserProfilesComponent },
      { path: 'profile', component: ProfilesComponent },
      { path: 'manage-salary', component: ManageSalaryComponent },
      { path: 'employeeSalary', component: EmployeeSalaryListComponent },
      { path: 'viewAttendance', component: ViewAttendanceComponent },
      { path: 'holiday', component: GenerateReportComponent },
      { path: 'email', component: ComposeComponent },
      { path: 'inbox', component: InboxComponent },
      { path: 'draft', component: DraftComponent },
      { path: 'sent', component: SentComponent },
      { path: 'access-control', component: AccessControlComponent },
      { path: 'report', component: AttendanceReportComponent },
      { path: 'payment', component: MakePaymentComponent },
      
      { path: 'employeeList', component: EmployeeListComponent },
      { path: 'addEmployee', component: AddEmployeeComponent },
      { path: 'manageAttendance', component: AttendanceComponent },
      { path: 'activity', component: ActivityComponent },
      { path: 'department', component: DepartmentComponent },
      { path: 'applicationList', component: ApplicationListComponent },
    ]
  },
  { path: 'user', component: UserSidenavComponent , children: [
    { path: '', component: ProfileComponent },
    { path: 'profile1', component: ProfileComponent },
    { path: 'changePass', component: ChangepassComponent },
    { path: 'email', component: ComposeComponent },
      { path: 'inbox', component: InboxComponent },
      { path: 'draft', component: DraftComponent },
      { path: 'sent', component: SentComponent },
      { path: 'manageAttendance', component: AttendanceComponent },
      { path: 'userAttendance', component: UserAttendanceComponent },
      { path: 'userApplication', component: LateAttendanceApplicationComponent },
      { path: 'userApplicationList', component: UserApplicationComponent },
      { path: 'userSalaryList', component: UserSalaryComponent },
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
