import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-user-application',
  templateUrl: './user-application.component.html',
  styleUrls: ['./user-application.component.css']
})
export class UserApplicationComponent implements OnInit {
  applicationList:any;
  id=localStorage.getItem("empId");
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getApplicationDetails();
  }

  getApplicationDetails(){
    this.api.getTypeRequest(`application/listSingle/${this.id}`).subscribe((res)=>{
      console.log(res)
      this.applicationList=res;


    })
  }

}
