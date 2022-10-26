import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import * as moment from 'moment';
import { NgToastService } from 'ng-angular-popup';

export class Application {
  id: any;
  employee: string = '';
  attendanceDate: string = '';
  status: string = '';
}
@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  formGroup !: FormGroup;

  applicationList: any;
  singleList: any
  constructor(private api: ApiService, private fb: FormBuilder, private toast: NgToastService) {
    this.formGroup = this.fb.group({
      employee_name: [''],
      employee_id: [''],
      empId: [''],
      eId: [''],
      date: [''],
      message: [''],
      status: ['']
    })
  }

  ngOnInit(): void {

    this.getApplicationDetails()
  }
  showUser(id: any) {
    console.log(id);
    this.getSingleData(id)
  }

  getValue() {
    let value = this.formGroup.value;
    let user: Application = {

      id: value.eId,
      employee: value.empId,
      attendanceDate: value.date,
      status: value.status
    }
    console.log(user)
    console.log(this.formGroup.value)
    this.api.patchTypeRequest(`application/update/`, user).subscribe((res) => {
      console.log(res);
      this.toast.success({ detail: "Application Approved Message", summary: "Application Approved Successfully!!" })
    })
  }



  getSingleData(id: any) {
    this.api.getTypeRequest(`application/list/${id}`).subscribe((res) => {
      console.log(res)
      this.singleList = res;
      this.formGroup = this.fb.group({
        employee_name: this.singleList[0].employee.employeeName,
        employee_id: this.singleList[0].employee.employeeId,
        empId: this.singleList[0].employee.id,
        eId: this.singleList[0].id,
        date: moment(this.singleList[0].attendanceDate).format('YYYY-MM-DD'),
        message: this.singleList[0].message,
        status: this.singleList[0].status
      })

    })
  }
  getApplicationDetails() {
    this.api.getTypeRequest(`application/list`).subscribe((res) => {
      console.log(res)
      this.applicationList = res;


    })
  }
}
