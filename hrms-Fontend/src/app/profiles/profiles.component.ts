import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  userInfo: any;
  public userId = localStorage.getItem('id');
  formGroup!: FormGroup;
  constructor(private api: ApiService, private fb: FormBuilder) {
    this.formGroup = this.fb.group({

      username: [''],
      email: [''],
      employee_name: [''],
      educational_status: [''],
      present_address: [''],
      permanent_address: [''],
      phone: [''],
      nid_number: [''],
      blood_group: [''],
    })
  }

  ngOnInit(): void {
    // this.onEditInfo(this.userid);
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
      console.log(this.userInfo[0].username)
    })
  }



}
