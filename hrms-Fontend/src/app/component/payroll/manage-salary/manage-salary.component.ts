import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-manage-salary',
  templateUrl: './manage-salary.component.html',
  styleUrls: ['./manage-salary.component.css']
})
export class ManageSalaryComponent implements OnInit {
  public show: boolean = false;
  formGroup!: FormGroup
  employeeId: any;
  employeeGetId: any
  singleList: any;
  employeeDesignations: any = [['', 'Select']];
  employeeList: any = [['', 'Select']];
  employeeIds: any = [['', 'Select']];

  transportAllowance: any = 0.0;
  medicalAllowance: any = 0.0;
  basicSalary: any;
  grossSalary: any;
  houseRent: any;
  providendFund: any;
  netSalary: any = 0.0;
  tax: any = 0.0;
  fuel: any = 0.0;
  phoneBill: any = 0.0
  totalDeduction: any = 0.0
  constructor(private api: ApiService, private fb: FormBuilder, private toast: NgToastService) { }

  ngOnInit(): void {
    this.getEmployeeDesignation();
  }


  userForms = new FormGroup({
    'employee_designation': new FormControl('', Validators.required),
    'employeeName': new FormControl('', Validators.required),
  })

  valueShow() {
    if (this.userForms.valid) {
      this.show = !this.show;
    }
  }

  getEmployeeDesignation() {
    this.api.getTypeRequest('employee/designation-list').subscribe((res: any) => {
      this.employeeDesignations = res;
    })
  }


  onChangeServer($event: any, id: any) {
    console.log(id)
    this.employeeId = id;
    this.api.getTypeRequest(`employee/employee-list/${this.employeeId}`).subscribe((res) => {
      console.log(res);
      this.employeeList = res;
    })

  }


  onChangeSecondServer($event: any, name: any) {
    console.log(name)
    this.employeeGetId = name;
    // this.employeeId= id;
    this.api.getTypeRequest(`employee/employees-list/${name}`).subscribe((res) => {
      console.log(res);
      this.singleList = res;
      this.grossSalary = this.singleList[0].salary;
      if (this.grossSalary >= 15000) {
        this.basicSalary = this.grossSalary / 100 * 50;
        this.houseRent = this.basicSalary / 100 * 50;
        this.medicalAllowance = this.basicSalary / 100 * 25;
        this.transportAllowance = this.basicSalary / 100 * 25;
        this.providendFund = this.basicSalary / 100 * 2;
        this.phoneBill = this.basicSalary / 100 * 1;
        if (this.grossSalary > 20000) {
          this.tax = this.basicSalary / 100 * 2;
        } else {
          this.tax = 0.0;
        }
        this.netSalary = this.grossSalary - (this.tax + this.providendFund);
        this.totalDeduction = this.tax + this.providendFund

      } else {
        this.basicSalary = this.grossSalary / 100 * 50;
        this.houseRent = this.basicSalary / 100 * 50;
        this.transportAllowance = 0.0
        this.medicalAllowance = this.basicSalary / 100 * 10;
        this.providendFund = this.basicSalary / 100 * 2;
        this.netSalary = this.grossSalary - (this.tax + this.providendFund);
        this.totalDeduction = (this.tax + this.providendFund);
      }

      console.log(this.singleList[0].employeeType);
      this.formGroup = this.fb.group({
        status: this.singleList[0].employeeType,
        basic: this.singleList[0].salary / 100 * 50,
        houseRent: this.houseRent,
        medical: this.medicalAllowance,
        transport: this.transportAllowance,
        fuel: this.fuel,
        phoneBill: this.phoneBill,
        totalDeduc: this.totalDeduction,
        netSalary: this.netSalary,
        providentFund: this.providendFund,
        tax: this.tax,
        salary: this.singleList[0].salary,
      })
    })
  }

  updateSalary() {
    const formVal = this.formGroup.value;
    this.api.getTypeRequest(`employee/salary-update/${this.employeeGetId}/${formVal.salary}/${formVal.status}`).subscribe((res) => {
      console.log(res)
      this.toast.success({ detail: "Employee Information Message", summary: "Employee Salary and Type Updated!!" })
    })
  }

}
