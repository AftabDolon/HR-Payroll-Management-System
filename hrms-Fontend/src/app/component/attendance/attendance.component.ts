import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { interval, Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import Swal from 'sweetalert2';

export interface User {
  // id?: number;
  receipt: String;
  subject: String;
  message: String;
}
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  public dateTime = new Date();
  formGroup !: FormGroup;
  allData: any = [];
  employeeIds: any = [['', 'Select']];
  success: boolean = false;
  valueData!: string;
  private $inActive = new Subject<boolean>();
  constructor(private fb: FormBuilder, private api: ApiService, private http: HttpClient) {
    this.formGroup = this.fb.group({

      employee_id: [''],


    })
  }

  ngOnInit(): void {
    this.startClock();
    this.showValue();
    this.getEmployeeIds();
  }

  startClock() {
    interval(1).pipe(takeUntil(this.$inActive)).subscribe(data => {
      this.dateTime = new Date();
    })
  }
  ngOnDestroy(): void {
    this.$inActive.next(true);
    this.$inActive.unsubscribe();
  }

  addInAm(id: any) {
    this.attendance(id);
    Swal.fire("Thank You....", 'Your In Punch Attendance has been recorded Successfully.', 'success');
    this.success = true;
    this.clearForm();
  }

  addOutAm(id: any) {
    console.log(id);
    this.attendanceUpdate(id);
    Swal.fire("Thank You....", 'Your Out Punch Attendance has been recorded Successfully.', 'success');
    this.success = true;
  }
  addInPm(form: NgForm) {
    Swal.fire("Thank You....", 'Your Attendance has been recorded Successfully.', 'success');
    form.resetForm();
    this.success = true;
  }
  addOutPm(form: NgForm) {
    Swal.fire("Thank You....", 'Your Attendance has been recorded Successfully.', 'success');

    this.success = true;
    this.clearForm();
  }
  clearForm() {
    // this.brandId.setValue('');
  }

  // public get employee(): FormControl {
  //   return this.formGroup.get('employee_id') as FormControl;
  // }

  attendance(id: any) {
    var d = new Date(); // for now
    let user: User = {
      receipt: "aftabdolon47@gmail.com",
      subject: "Late Attendance Purpose",
      message: "Dear Sir/Madam,\n\nYour attendance has been record as late.\nPlease check it and give remark for specific reason.\n\nPlease don't be reply, it's system generate mail.\n\nThanks\nRegards\nExample Company Ltd."
    }

    if ((d.getHours() == 9 && d.getMinutes() > 15) || (d.getHours() > 9)) {
      this.api.postTypeRequest("sendemail", user).subscribe((res => {
        console.log(user);
      }))

      this.http.get<any>(`http://localhost:8089/attendance/punch-in/${id}`).subscribe((res: any) => {

      })
    } else {
      this.http.get<any>(`http://localhost:8089/attendance/punch-in/${id}`).subscribe((res: any) => {

      })
    }

  }
  attendanceUpdate(id: any) {

    this.http.get<any>(`http://localhost:8089/attendance/punch-out/${id}`).subscribe((res: any) => {
      console.log(this.formGroup.value);
    })
  }
  showValue() {
    this.api.getTypeRequest('attendance/list').subscribe((res: any) => {

      this.allData = res;
      console.log(this.allData)
    })
  }
  getEmployeeIds() {
    this.api.getTypeRequest('employee/id-list').subscribe((res: any) => {
      this.employeeIds = res;
      console.log(res);
    })
  }


}
