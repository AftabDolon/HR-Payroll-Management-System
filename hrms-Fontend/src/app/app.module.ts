import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatBadgeModule} from '@angular/material/badge';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ActivityComponent } from './component/activity/activity.component';
import { AttendanceComponent } from './component/attendance/attendance.component';
import { ChangepassComponent } from './component/changepass/changepass.component';
import { DepartmentComponent } from './component/department/department.component';
import { AddDepartmentComponent } from './component/add-department/add-department.component';
import { LoginComponent } from './login/login.component';
import { AddEmployeeComponent } from './component/employee/add-employee/add-employee.component';
import { EmployeeListComponent } from './component/employee/employee-list/employee-list.component';
import { LeaveCategoryComponent } from './component/setting/leave-category/leave-category.component';
import { SetWorkingDaysComponent } from './component/setting/set-working-days/set-working-days.component';
import { HideScrollYDirective } from './hide-scroll-y.directive';
import { UserProfilesComponent } from './component/employee/user-profiles/user-profiles.component';
import { ManageSalaryComponent } from './component/payroll/manage-salary/manage-salary.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { ProfilesComponent } from './profiles/profiles.component';
import { EmployeeSalaryListComponent } from './component/payroll/employee-salary-list/employee-salary-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { ViewAttendanceComponent } from './component/attendance/view-attendance/view-attendance.component';
import { ComposeComponent } from './component/email/compose/compose.component';
import { InboxComponent } from './component/email/inbox/inbox.component';
import { DraftComponent } from './component/email/draft/draft.component';
import { SentComponent } from './component/email/sent/sent.component';
import { AccessControlComponent } from './component/setting/access-control/access-control.component';
import { NgToastModule } from 'ng-angular-popup';
import {MatButtonModule} from '@angular/material/button';
import { AttendanceReportComponent } from './component/report/attendance-report/attendance-report.component';
import { UserSidenavComponent } from './user-component/user-sidenav/user-sidenav.component';
import { ProfileComponent } from './user-component/profile/profile.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { LateAttendanceApplicationComponent } from './user-component/late-attendance-application/late-attendance-application.component';
import { UserAttendanceComponent } from './user-component/user-attendance/user-attendance.component';
import { MakePaymentComponent } from './component/payroll/make-payment/make-payment.component';
import { ApplicationListComponent } from './component/application-list/application-list.component';
import { UserApplicationComponent } from './user-component/user-application/user-application.component';
import { UserSalaryComponent } from './user-component/user-salary/user-salary.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    ActivityComponent,
    AttendanceComponent,
    ChangepassComponent,
    DepartmentComponent,
    AddDepartmentComponent,
    LoginComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    LeaveCategoryComponent,
    SetWorkingDaysComponent,
    HideScrollYDirective,
    UserProfilesComponent,
    ManageSalaryComponent,
    ProfilesComponent,
    EmployeeSalaryListComponent,
    ViewAttendanceComponent,
    ComposeComponent,
    InboxComponent,
    DraftComponent,
    SentComponent,
    AccessControlComponent,
    AttendanceReportComponent,
    UserSidenavComponent,
    ProfileComponent,
    LateAttendanceApplicationComponent,
    UserAttendanceComponent,
    MakePaymentComponent,
    ApplicationListComponent,
    UserApplicationComponent,
    UserSalaryComponent,
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    NgToastModule,
    MatButtonModule,
    MatDatepickerModule
    
  ],
  exports: [
    
    MatFormFieldModule,
    MatInputModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
