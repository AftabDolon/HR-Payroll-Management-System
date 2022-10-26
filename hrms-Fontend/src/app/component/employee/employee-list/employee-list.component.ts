import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';


interface IUser {
  name: string;
  img: string;
  mobile: string;
  title: string;
  department: string;
  employee_id: string;
  role: string;
}
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  button:boolean = false;
  employeeList:any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getEmployeeIds();
  }


  public users: IUser[] = [
    {
      name: 'MD Aftab Ibne Halim',
      img: 'Image of Aftab.jpg',
      mobile: '01846125306',
      title: 'Java Developer',
      department: "Web Dev",
      employee_id: '1267682',
      role: 'admin'
      
    },
    {
      name: 'Admin',
      img: 'admin.jpg',
      mobile: '0193393393',
      title: 'admin',
      department: "System",
      employee_id: '123456',
      role: 'admin'
      
    },
    {
      name: 'Shahid Ullah',
      img: 'image.jpg',
      mobile: '01836934445',
      title: 'Web Designer',
      department: "Web Dev",
      employee_id: '1267939',
      role: 'user'
    },
    {
      name: 'Nur Islam',
      img: 'Image of Rajib.jpeg',
      mobile: '01539393901',
      title: 'Backend Designer',
      department: "Web Dev",
      employee_id: '1268205',
      role: 'user'
      
    },
    {
      name: 'Juwel Rana',
      img: 'Image of Rana.jpg',
      mobile: '01562727262',
      title: 'Backend Designer',
      department: "Web Dev",
      employee_id: '1266861',
      role: 'user'
      
    }
  ];

  getEmployeeIds() {
    this.api.getTypeRequest('employee/list').subscribe((res: any) => {
      this.employeeList = res;
      console.log(res);
    })
  }
}
