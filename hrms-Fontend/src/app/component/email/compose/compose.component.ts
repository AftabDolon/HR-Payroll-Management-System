import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
export interface User {
  // id?: number;
  receipt: String;
  subject: String;
  message: String;
}

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  formGroup !: FormGroup;
  constructor(private http:HttpClient, private api:ApiService, private fb:FormBuilder) { }

  // userForms = new FormGroup({
  //   'to': new FormControl('', Validators.required),
  //   'subject': new FormControl('', Validators.required),
  //   'message': new FormControl('', Validators.required),
  // })
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      to: [''],
      subject: [''],
      message:['']
    })
    
  }

  sendMail() {
    let user: User = {
      receipt: this.formGroup.value.to,
      subject: this.formGroup.value.subject,
      message: this.formGroup.value.message
    }
console.log(this.formGroup.value);
console.log(user);
    this.api.postTypeRequest("sendemail", user).subscribe((res => {
      console.log(this.formGroup.value);
      alert("Mail send successfull");
      this.formGroup.reset();
    }))

    // this.http.get<any>(`http://localhost:8089/attendance/punch-in/${id}`).subscribe((res: any) => {

    // })

  }


  refresh(): void {
    window.location.reload();
}

}
