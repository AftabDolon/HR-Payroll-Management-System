import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-user-salary',
  templateUrl: './user-salary.component.html',
  styleUrls: ['./user-salary.component.css']
})
export class UserSalaryComponent implements OnInit {
  salaryList: any
  userList: any
  datePurpose:any=new Date();
  basicSalary: any;
  grossSalary: any;
  houseRent: any;
  providendFund: any;
  netSalary: any;
  tax: any = 0.0;
  employeeNameValue: any
  employeeIdValue: any
  payment: any
  transportAllowance: any = 0.0;
  medicalAllowance: any = 0.0;
  public userId = localStorage.getItem('empId');
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getSalaryDetails();
  }

  getSalaryDetails() {
    this.api.getTypeRequest(`salary/salary-list/${this.userId}`).subscribe((res) => {
      console.log(res)
      this.salaryList = res;
    })
  }

  showModal(id: any) {
    this.showUserValue(id);
  }

  showUserValue(id: any) {
    this.api.getTypeRequest(`salary/list/${id}`).subscribe((res: any) => {
      this.userList = res;
      // console.log(this.userList[0].employee.employeeName)
      // console.log(this.userList[0].employee.salary)

      //  localStorage.setItem("empId", res[0].employee.id)
      this.employeeNameValue = this.userList[0].employee.employeeName;
      this.employeeIdValue = this.userList[0].employee.employeeId;
      this.payment = this.userList[0].paymentType
      this.grossSalary = this.userList[0].employee.salary;
      if (this.grossSalary >= 15000) {
        this.basicSalary = this.grossSalary / 100 * 50;
        this.houseRent = this.basicSalary / 100 * 50;
        this.medicalAllowance = this.basicSalary / 100 * 25;
        this.transportAllowance = this.basicSalary / 100 * 25;
        this.providendFund = this.basicSalary / 100 * 2;
        if (this.grossSalary > 20000) {
          this.tax = this.basicSalary / 100 * 2;
        }
        this.netSalary = this.grossSalary - (this.tax + this.providendFund);

      } else {
        this.basicSalary = this.grossSalary / 100 * 50;
        this.houseRent = this.basicSalary / 100 * 50;
        this.medicalAllowance = this.basicSalary / 100 * 10;
        this.providendFund = this.basicSalary / 100 * 2;
        this.netSalary = this.grossSalary - (this.tax + this.providendFund);
      }
    })
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('modalTable');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('salaryReport.pdf');
    });
  }
}
