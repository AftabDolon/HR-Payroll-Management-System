import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userInfo: any;
  userList:any;
  allUserList:any;
  basicSalary:any;
  grossSalary:any;
  houseRent:any;
  providendFund:any;
  netSalary:any;
  tax:any=0.0;

  transportAllowance:any=0.0;
  medicalAllowance:any=0.0;
  public userId = localStorage.getItem('id');

  formGroup!: FormGroup;
  constructor(private api: ApiService, private fb: FormBuilder) {
    this.formGroup = this.fb.group({

      username: [''],
      email: [''],
      employee_name: [''],
      Joining_date: [''],
      educational_status: [''],
      present_address: [''],
      employee_type: [''],
      phone: [''],
      nid_number: [''],
      blood_group: [''],
    })
  }

  ngOnInit(): void {
    // this.onEditInfo(this.userid);
    this.showUserValue();
    this.showAllUserValue();

  }


  onEditInfo(id: any) {
    this.api.getTypeRequest(`user/list/${id}`).subscribe((res: any) => {
      this.userInfo = res;
      this.formGroup = this.fb.group({

        username: [this.userInfo[0].username],
        email: [this.userInfo[0].email],
        employee_name: [this.userInfo[0].employee.employeeName],
        educational_status: [this.userInfo[0].employee.educationalStatus],
        present_address: [this.userInfo[0].employee.presentAddress],
        permanent_address: [this.userInfo[0].employee.permanentAddress],
        phone: [this.userInfo[0].employee.phone],
        nid_number: [this.userInfo[0].employee.nidNumber],
        blood_group: [this.userInfo[0].employee.bloodGroup],
      })
      console.log(this.userInfo.username)
    })
  }

  showUserValue(){
    this.api.getTypeRequest(`user/list/${this.userId}`).subscribe((res: any) => {
      this.userList = res;
      
       localStorage.setItem("empId", res[0].employee.id)
      
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
    })
  }

  showAllUserValue(){
    this.api.getTypeRequest('employee/list').subscribe((res: any) => {
      this.allUserList = res;
      
      // this.basicSalary=this.userList[0].employee.salary;
      // // this.transportAllow=this.basicSalary / 100 * 40;
      console.log(res[4]);
      // console.log(this.transportAllow);
      

      // this.userList.image=this.convertToBase64(this.userList.image);
    })
  }

}
