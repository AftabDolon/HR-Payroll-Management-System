import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup!: FormGroup;
  statusVal: any = 'Active';
  constructor(private http: HttpClient, private fb: FormBuilder, private route: Router, private api:ApiService, private toast:NgToastService) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:8089/user/list").subscribe(res =>{
      const user = res.find((a:any) =>{
        return a.username === this.formGroup.value.email && a.password === this.formGroup.value.password && a.status==true
      });
      if(user){
        console.log(user.employee.role);

        this.api.putTypeRequest(`user/activity-update/${user.id}/${this.statusVal}`, "").subscribe((res) => {
          alert("Login successfull");
          localStorage.setItem('session', user.username)
        localStorage.setItem('id', user.id)
          if(user.employee.role==='admin'){
                     
            this.formGroup.reset();
          this.route.navigate(['/admin']);
          }else{
            this.formGroup.reset();
          this.route.navigate(['/user']);
          }
        })
        
        // this.route.navigateByUrl('/admin')
      }else{
        alert("username or password is wrong!");
      }
    })
  }

}
