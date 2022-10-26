import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {
  success:boolean = false;
  id=localStorage.getItem("id");
  passworVal: any;
  
  formGroup:FormGroup;
  constructor(private api:ApiService, private fb:FormBuilder) { 
    this.formGroup = this.fb.group({
      password: [''],
    })
  }

  ngOnInit(): void {
  }

  changePassword(){
    const formVal= this.formGroup.value;
   this.passworVal=formVal.password;
    this.api.getTypeRequest(`user/password-update/${this.id}/${this.passworVal}`).subscribe((res) => {
      
    })
    this.success = true;
    localStorage.clear();
  }

}
