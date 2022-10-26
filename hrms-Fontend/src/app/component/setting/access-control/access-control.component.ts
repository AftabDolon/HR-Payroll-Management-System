import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/service/api.service';
export class User {
  // id:number=0;
  username: string = '';
  employee: string = '';
  password: string = '123456';
  email: string = '';
  status: boolean = false;
  activity: string = 'Inactive';

}
@Component({
  selector: 'app-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.css']
})
export class AccessControlComponent implements OnInit {


  formValue!: FormGroup;
  userList : any;
  allData:any;
  
  userObj: User = new User();
  employeeIds: any = [['', 'Select']];
  checked!: boolean;

  constructor(private formBuilder: FormBuilder,
    private api: ApiService, private toast:NgToastService) { }

  ngOnInit(): void {
    this.getAllAmbulanceHire();
    this.getEmployeeIds();

    this.formValue = this.formBuilder.group({
      username: [''],
      email: [''],
      employee_id: [''],
      
      status: []
    })
  }
  statusVal: any = false
  checkValue(event: any, id: any) {

    if (event.target.checked) {
      this.statusVal = true
    } else {
      this.statusVal = false
    }

    this.api.putTypeRequest(`user/status-update/${id}/${this.statusVal}`, "").subscribe((res) => {
      // alert("update successfull");
      console.log("Before value "+event.target.checked.value)
      if(event.target.checked!=true){
        console.log("value "+event.target.checked)
        this.toast.error({detail:"Access Denied Message", summary:"User Access Denined Successfully!!"})
      }else{
        this.toast.success({detail:"Access Provide Message", summary:"User Access Provide Successfully!!"})
      }
      
    })
  }



  getAllAmbulanceHire() {
    this.api.getTypeRequest('user/list').subscribe((res: any) => {
        this.userList = res;
        console.log(this.userList);

        // this.userList.image=this.convertToBase64(this.userList.image);
      })
  }

  createUser(){
    const obj= this.userObj;
    const formVal= this.formValue.value;
    
        obj.username = formVal.username;
        obj.email = formVal.email;
        obj.employee = formVal.employee_id;
  
    console.log(obj)
    this.api.postTypeRequest(`user/save/`, this.userObj).subscribe((res)=>{
      console.log(res)
      
      this.toast.success({detail:"Create User Message", summary:"New User Added Successfully!!"})
    })
    this.getAllAmbulanceHire();
  }
  getEmployeeIds() {
    this.api.getTypeRequest('employee/id-list').subscribe((res: any) => {
      this.employeeIds = res;
      console.log(res);
    })
  }

}
