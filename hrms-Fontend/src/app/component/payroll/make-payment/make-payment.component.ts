import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/service/api.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export class Salary {
  // id:number=0;
  grossSalary: string = '';
  employee: string = '';
  paymentType: string ='';
  
  

}

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {
  formGroup !: FormGroup;
  datePurpose:any=new Date();
  salary:any
//payment details feild
userList:any;
basicSalary:any;
  grossSalary:any;
  houseRent:any;
  providendFund:any;
  netSalary:any;
  tax:any=0.0;
employeeNameValue:any
employeeIdValue:any
payment:any
  transportAllowance:any=0.0;
  medicalAllowance:any=0.0;
  public userId = localStorage.getItem('id');

  employeeId:any=0;
  employeeIds: any = [['', 'Select']];
  paymentType: any = [['', 'Select']];
  userObj: Salary = new Salary();
  paymentList:any;
  constructor(private api:ApiService, private fb:FormBuilder, private http:HttpClient, private toast:NgToastService) { 
    this.formGroup = this.fb.group({

      employee_id: [''],
      
      salary: [''],
      payment_type: [''],
      
      date: new Date(),


    })
  }

  ngOnInit(): void {
    this.getEmployeeIds();
    this.getSalaryDetails();
  }

  paySalary(){
    const obj= this.userObj;
    const formVal= this.formGroup.value;
    
        obj.employee = formVal.employee_id;
        obj.grossSalary = formVal.salary;
        obj.paymentType = formVal.payment_type;
        
  
    console.log(obj)
    console.log(this.formGroup.value)
    this.api.postTypeRequest(`salary/save/`, this.userObj).subscribe((res)=>{
      console.log(res)
     
    })

    this.toast.success({detail:"Salary Payment Message", summary:"Employee Salary Payment Successfully!!"})
  }

  getEmployeeIds() {
    this.api.getTypeRequest('salary/id-list').subscribe((res: any) => {
      this.employeeIds = res;
      console.log(res);
    })
   }

   getSalaryDetails(){
     this.api.getTypeRequest(`salary/list`).subscribe((res)=>{
       console.log(res)
       this.paymentList=res;
     })
   }


   
  //  Modal2 value


  showModal(id: any) {
    this.showUserValue(id);
  }

  showUserValue(id:any){
    this.api.getTypeRequest(`salary/list/${id}`).subscribe((res: any) => {
      this.userList = res;
      console.log(this.userList[0].employee.employeeName)
      console.log(this.userList[0].employee.salary)
      
      //  localStorage.setItem("empId", res[0].employee.id)
      this.employeeNameValue=this.userList[0].employee.employeeName;
      this.employeeIdValue=this.userList[0].employee.employeeId;
      this.payment=this.userList[0].paymentType
      this.grossSalary=this.userList[0].employee.salary;
      if(this.grossSalary>=15000){
        this.basicSalary=this.grossSalary/100*50;
        this.houseRent=this.basicSalary/100*50;
        this.medicalAllowance=this.basicSalary/100*25;
        this.transportAllowance=this.basicSalary/100*25;
        this.providendFund=this.basicSalary/100*2;
        if(this.grossSalary>20000){
          this.tax=this.basicSalary/100*2;
        }else{
          this.tax=0.0
        }
        this.netSalary=this.grossSalary - (this.tax+this.providendFund);
        
      }else{
        this.basicSalary=this.grossSalary/100*50;
        this.houseRent=this.basicSalary/100*50;
        this.medicalAllowance=this.basicSalary/100*10;
        this.providendFund=this.basicSalary/100*2;
        this.netSalary=this.grossSalary - (this.tax+this.providendFund);
      }
      console.log(this.basicSalary);
      // this.userList.image=this.convertToBase64(this.userList.image);


      
console.log();
      
    })

    
  }


  onChangeServer($event:any, id:any){
console.log(id)
this.employeeId= id;
this.api.getTypeRequest(`employee/salaryEmployee/${this.employeeId}`).subscribe((res)=>{
  console.log(res);
  this.salary=res;

  this.formGroup = this.fb.group({

    employee_id: id,
    
    salary: this.salary,
    payment_type: ['Select Payment Type'],
    
    date: new Date(),


  })
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
