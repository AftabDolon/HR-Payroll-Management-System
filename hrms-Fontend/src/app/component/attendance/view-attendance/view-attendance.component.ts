
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent implements OnInit {
  allData: any[] = [];
  time!: any;
  status!:any;
  constructor(private api: ApiService) { }


  ngOnInit(): void {
    this.showValue();
  }
  date!:any;
  today: number = Date.now()
  

  showValue() {
    this.api.getTypeRequest('attendance/list').subscribe((res: any) => {

      this.allData = res;
      console.log(this.allData)
      
      console.log(this.allData[0].employeeId.department)
      console.log((this.allData[0].punchOut - this.allData[0].punchIn) / (1000 * 3600 * 24))
      
    })
  }

}
