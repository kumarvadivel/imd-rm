import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import employees from 'src/app/db(faker)/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { BulkuploadComponent } from '../partials/bulkupload/bulkupload.component';
import { VersionhistoryComponent } from '../partials/versionhistory/versionhistory.component';

@Component({
  selector: 'app-employeenew',
  templateUrl: './employeenew.component.html',
  styleUrls: ['./employeenew.component.css']
})
export class EmployeenewComponent implements AfterViewInit {
  employeecount:number=0;
  employees;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public dialog: MatDialog,public employee:EmployeeService) {
    this.employees=this.employee.getemployee()
  }
  ngAfterViewInit() {
    
  }
  openbulkupload(){
    const dialogRef = this.dialog.open(BulkuploadComponent);
  }
  openversionhistory(data){
    const dialogRef = this.dialog.open(VersionhistoryComponent,{
      data:data
    })
  }
  change(data){
    
    if(!data._checked){
      this.employeecount+=1
    }else{
      this.employeecount-=1
    }
    
  }
}
