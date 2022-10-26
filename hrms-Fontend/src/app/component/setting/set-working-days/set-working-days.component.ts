import { Component, OnInit } from '@angular/core';

interface Day {
  first: string;
  second: string;
  third: string;
  fourth: string;
  five: string;
  six: string;
  seven: string;
}
@Component({
  selector: 'app-set-working-days',
  templateUrl: './set-working-days.component.html',
  styleUrls: ['./set-working-days.component.css']
})
export class SetWorkingDaysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public days: Day[] = [
    {
      first: 'Saturday',
      second: 'Sunday',
      third: 'Monday',
      fourth: 'Tuesday',
      five: "Wednesday",
      six: 'Thursday',
      seven: 'Friday'
    }
  ]

}
