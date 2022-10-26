import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

interface IUser {
  name: string;
  img: string;
  email: string;
  title: string;
  department: string;
  status: string;
  role: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userList: any;
  approvedList:any;
  pendingList:any;
  departmentList:any;
  employeeList:any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.showUserValue();
    this.approvedApplication();
    this.pendingApplication();
    this.department();
    this.employee();
  }

  
  // public users: IUser[] = [
  //   {
  //     name: 'MD Aftab Ibne Halim',
  //     img: 'Image of Aftab.jpg',
  //     email: 'aftabdolon47@gmail.com',
  //     title: 'Java Developer',
  //     department: "Web Dev",
  //     status: 'Active',
  //     role: 'admin'
      
  //   },
  //   {
  //     name: 'Admin',
  //     img: 'admin.jpg',
  //     email: 'admin@gmail.com',
  //     title: 'admin',
  //     department: "System",
  //     status: 'Active',
  //     role: 'admin'
      
  //   },
  //   {
  //     name: 'Shahid Ullah',
  //     img: 'image.jpg',
  //     email: 'baharkhan870@gmail.com',
  //     title: 'Web Designer',
  //     department: "Web Dev",
  //     status: 'Inactive',
  //     role: 'user'
  //   },
  //   {
  //     name: 'Nur Islam',
  //     img: 'Image of Rajib.jpeg',
  //     email: 'info.nurislamrajib@gmail.com',
  //     title: 'Backend Designer',
  //     department: "Web Dev",
  //     status: 'Inactive',
  //     role: 'user'
      
  //   },
  //   {
  //     name: 'Juwel Rana',
  //     img: 'Image of Rana.jpg',
  //     email: 'juwelrana@gmail.com',
  //     title: 'Backend Designer',
  //     department: "Web Dev",
  //     status: 'Inactive',
  //     role: 'user'
      
  //   }
  // ];

  showUserValue(){
    this.api.getTypeRequest('user/list').subscribe((res: any) => {
      this.userList = res;
    })
  }

  approvedApplication(){
    this.api.getTypeRequest('application/approved-list').subscribe((res)=>{
      this.approvedList=res;
    })
  }
  pendingApplication(){
    this.api.getTypeRequest('application/pending-list').subscribe((res)=>{
      this.pendingList=res;
    })
  }
  department(){
    this.api.getTypeRequest('employee/department-list').subscribe((res)=>{
      this.departmentList=res;
    })
  }
  employee(){
    this.api.getTypeRequest('employee/employee-list').subscribe((res)=>{
      this.employeeList=res;
    })
  }
}
