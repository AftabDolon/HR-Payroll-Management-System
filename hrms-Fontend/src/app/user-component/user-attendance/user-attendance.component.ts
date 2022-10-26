import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-user-attendance',
  templateUrl: './user-attendance.component.html',
  styleUrls: ['./user-attendance.component.css']
})
export class UserAttendanceComponent implements OnInit {

  allData: any;
  time!: any;
  public id = localStorage.getItem('empId');
  status!:any;
  success:boolean = false;
  constructor(private api: ApiService) { }


  ngOnInit(): void {
    this.showValue();
  }
  date!:any;
  today: number = Date.now()
  

  showValue() {
    this.api.getTypeRequest(`attendance/attendanceById?ids=${this.id}`).subscribe((res: any) => {

      this.allData = res;
      // if(this.allData.status==='Late'){
      //   this.success=true;
      // }
      console.log(this.allData)
      
    })
  }

}
