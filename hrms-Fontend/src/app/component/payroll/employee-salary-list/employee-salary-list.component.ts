import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee-salary-list',
  templateUrl: './employee-salary-list.component.html',
  styleUrls: ['./employee-salary-list.component.css']
})
export class EmployeeSalaryListComponent implements AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'netsalary', 'EmpType'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  netSalary: string;
  EmpType: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Tarequl Islam', weight: 15000, symbol: '750' ,netSalary:'14250',EmpType:'Permanent'},
  { position: 2, name: 'Shahid Ullah', weight: 15000, symbol: '0' ,netSalary:'15000',EmpType:'Provision'},
  { position: 3, name: 'Helal Uddin', weight: 16000, symbol: '250',netSalary:'15750' ,EmpType:'Provision'},
  { position: 4, name: 'Arafat Rimon', weight: 14000, symbol: '120' ,netSalary:'13980',EmpType:'Permanent'},
  { position: 5, name: 'Nesar Uddin', weight: 12000, symbol: '0' ,netSalary:'12000',EmpType:'Provision'},
  { position: 6, name: 'Juwel Rana', weight: 12500, symbol: '0' ,netSalary:'12500',EmpType:'Permanent'},
  { position: 7, name: 'Nurun Nahar', weight: 12000, symbol: '0' ,netSalary:'12000',EmpType:'Provision'},
  { position: 8, name: 'M. A Muktader', weight: 15000, symbol: '0' ,netSalary:'15000',EmpType:'Provision'},
  { position: 9, name: 'Sadik Hasan', weight: 10000, symbol: '0',netSalary:'10000' ,EmpType:'Provision'},
  { position: 10, name: 'Nur Islam', weight: 13000, symbol: '120' ,netSalary:'12880',EmpType:'Permanent'},
  // { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' ,netSalary:'hello',EmpType:'Provision'},
  // { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' ,netSalary:'hello',EmpType:'Provision'},
  // { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' ,netSalary:'hello',EmpType:'Provision'},
  // { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' ,netSalary:'hello',EmpType:'Provision'},
  // { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' ,netSalary:'hello',EmpType:'Provision'},
  // { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' ,netSalary:'hello',EmpType:'Provision'},
  // { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' ,netSalary:'hello',EmpType:'Provision'},
  // { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' ,netSalary:'hello',EmpType:'Provision'},
  // { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' ,netSalary:'hello',EmpType:'Provision'},
  // { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca',netSalary:'hello' ,EmpType:'Provision'},
];

