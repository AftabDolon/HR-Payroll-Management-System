import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/service/api.service';

export interface User {
  id?: number;
  employeeName: String;
  employeeId: String;
  role: String;
  email: String;
  phone: String;
  nidNumber: String;
  presentAddress: String;
  permanentAddress: String;
  employeeType: String;
  joiningDate: String;
  salary: String;
  bloodGroup: String;
  educationalStatus: String;
  department: String;
  employeeDesignation: String;
  // password: String;
  employeeImage: String;

}

// export interface Role {
//   id?: number;
//   name?: String;
// }
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  allRole: any;
  fileShow!:boolean;

  constructor(private api: ApiService, private router: Router, private toast:NgToastService) { }

  ngOnInit(): void {
    // this.getRole();
  }
file:any;
  userForms = new FormGroup({
    'employeeId': new FormControl('', Validators.required),
    'employeeName': new FormControl('', Validators.required),
    'role': new FormControl('', Validators.required),
    'phone': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'nidNumber': new FormControl('', Validators.required),
    'presentAddress': new FormControl('', Validators.required),
    'permanentAddress': new FormControl('', Validators.required),
    'employeeType': new FormControl('', Validators.required),
    'joiningDate': new FormControl('', Validators.required),
    'salary': new FormControl('', Validators.required),
    'bloodGroup': new FormControl('', Validators.required),
    'educationalStatus': new FormControl('', Validators.required),
    'department': new FormControl('', Validators.required),
    'employeeDesignation': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),
    'employeeImage': new FormControl('', Validators.required),
  })

  //insert data
  userinsert() {
    if (this.userForms.valid) {
      let value = this.userForms.value;

      let user: User = {
        employeeName: value.employeeName || '',
        employeeId: value.employeeId || '',
        role: value.role || '',
        email: value.email || '',
        phone: value.phone || '',
        nidNumber: value.nidNumber || '',
        presentAddress: value.presentAddress || '',
        permanentAddress: value.permanentAddress || '',
        employeeType: value.employeeType || '',
        joiningDate: value.joiningDate || '',
        salary: value.salary || '',
        bloodGroup: value.bloodGroup || '',
        educationalStatus: value.educationalStatus || '',
        department: value.department || '',
        employeeDesignation: value.employeeDesignation || '',
        // password: value.password || '',
        employeeImage: this.cardImageBase64 || ''
      }


      this.api.postTypeRequest("employee/save",user).subscribe(
        (res) => {
          alert("User created successfully")
          // this.router.navigateByUrl("/accounts/user-list");
          console.log(user);
          console.log(res);
          this.userForms.reset();
        })
    }
  }

  selectFile(event:any){
    this.file =event.target.files[0];
    console.log(this.file)
  }

  uploadFile(){
    let formData = new FormData();
    formData.append('file', this.file);

    this.api.postTypeRequest(`employee/user/upload`, formData).subscribe((data)=>{
      console.log(data);
      this.toast.success({detail:"User Upload File Message", summary:"Users Information Upload Successfully!!"})
    },
    (error)=>{
      console.log(error);
      this.toast.error({detail:"User Upload File Error", summary:error});
    })
  }

  //inser Image Base64
  cardImageBase64: any;
  isImageSaved?: boolean;
  CreateBase64String(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.isImageSaved = true;
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  // getRole() {
  //   this.api.getTypeRequest.subscribe((data) => { this.allRole = data; });
  // }

  fileShowValue(){
    this.fileShow=true;
  }

}
