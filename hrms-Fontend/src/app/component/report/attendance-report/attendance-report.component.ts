import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendance-report.component.html',
  styleUrls: ['./attendance-report.component.css']
})
export class AttendanceReportComponent implements OnInit {
  allPerson: any = [];
  fileName= 'User Attendance.xlsx';
  success:boolean = false;
  value:boolean = false;
  formGroup !: FormGroup;
  selected: any = '';
  empId:any=0;
  event:any;
  employeeIds: any = [['', 'Select']];
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  showUser(date1:any, date2:any) {
    console.log(date1,date2)
    if(this.empId!=0){
      this.api.getTypeRequest(`attendance/dateById?start=${date1}&end=${date2}&ids=${this.empId}`).subscribe((res)=>{
        console.log(res);
         this.allPerson = res;
        // console.log(this.allPerson[0].employeeId.employeeName);
      })
    }else{
      this.api.getTypeRequest(`attendance/date?start=${date1}&end=${date2}`).subscribe((res)=>{
        console.log(res);
         this.allPerson = res;
        // console.log(this.allPerson[0].employeeId.employeeName);
      })
    }
    
  }
  getUserValue(data:any){
    this.empId= data;
    console.log(this.empId)
    
  }

  generate(){
    this.success = true; 
  }

  showUserValue(event:any){
    console.log(event)
    if (event!=null && event=="single") {
      this.value = true;
      this.getEmployeeIds();
    }else{
      this.value = false;
    }

  }

  getEmployeeIds() {
    this.api.getTypeRequest('employee/id-list').subscribe((res: any) => {
      this.employeeIds = res;
      console.log(res);
    })
  }

  //export excel method
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
}
