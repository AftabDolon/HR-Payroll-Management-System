import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/service/api.service';

export class Application {
  // id:number=0;
  employee: string = '';
 
  message: string ='';
  attendanceDate: string ='';
}
@Component({
  selector: 'app-late-attendance-application',
  templateUrl: './late-attendance-application.component.html',
  styleUrls: ['./late-attendance-application.component.css']
})
export class LateAttendanceApplicationComponent implements OnInit {

  allPerson: any = [];
  fileName= 'ExcelSheet.xlsx';
  userObj: Application = new Application();
  success:boolean = false;
  date1:any=null;
  id=localStorage.getItem("id");
  empid=localStorage.getItem("empId");
  date2:any=null;
  value:boolean = false;
  formGroup !: FormGroup;
  selected: any = '';
  empId:any=localStorage.getItem("empId");
  public singleUser:any;
  event:any;
  employeeIds: any = [['', 'Select']];
  constructor(private api:ApiService, private fb:FormBuilder, private toast:NgToastService) {
    this.formGroup = this.fb.group({
      employee_name:[''],
      employee_id:[''],
      email:[''],
      message:[''],
      date:['']
    })
   }

  ngOnInit(): void {
    this.getEmployee();
  }

  showUser(date1:any, date2:any) {
    console.log(date1, date2) 
  }

  application(){
    const obj= this.userObj;
    const formVal= this.formGroup.value;
        obj.employee = this.empId;
        obj.message = formVal.message;
        obj.attendanceDate = formVal.date;
        
  
    console.log(obj)
    console.log(this.formGroup.value)
    this.api.postTypeRequest(`application/save/`, this.userObj).subscribe((res)=>{
      console.log(res)
     
    })

    this.toast.success({detail:"Application Submit Message", summary:"Application Submited Successfully!!"})
  }


  showattUser(date1:any) {
    console.log(this.formGroup.value)
    console.log(date1)
    // this.api.postTypeRequest(`application/save/`, this.formGroup.value && date1).subscribe((res)=>{
    //   console.log(res);
    // })
    
    
    
  }
  // getUserValue(data:any){
  //   this.empId= data;
  //   console.log(this.empId)
    
  // }



  showUserValue(event:any){
   
    if (event!=null && event=="single") {
      this.value = true;
      this.getEmployeeIds();
    }else{
      this.value = false;
    }
    console.log(this.value)
  }

  getEmployeeIds() {
    this.api.getTypeRequest('employee/id-list').subscribe((res: any) => {
      this.employeeIds = res;
      console.log(res);
    })
  }

  getEmployee(){
    this.api.getTypeRequest(`user/list/${this.id}`).subscribe((res)=>{
      console.log(res)
      this.singleUser=res;
      console.log(this.singleUser[0].employee.employeeName)
      this.formGroup = this.fb.group({

        employee_name: [this.singleUser[0].employee.employeeName],
        employee_id: [this.singleUser[0].employee.employeeId],
        email: [this.singleUser[0].employee.email],
        message:'',
        date:''
      })
      console.log("value "+this.singleUser[0])
    })
  }

}
