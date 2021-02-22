import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BulkuploadComponent } from '../partials/bulkupload/bulkupload.component';
import { EditemployeeformComponent } from '../partials/editemployeeform/editemployeeform.component';
import { VersionhistoryComponent } from '../partials/versionhistory/versionhistory.component';
import employees from '../../../db(faker)/employee';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements AfterViewInit {  
  employeecount:number=0;
  employees;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog,public employee:EmployeeService) {
    this.employees=this.employee.getemployee()
  }

  ngAfterViewInit() {
    
  }
  openbulkupload(){
    const dialogRef = this.dialog.open(BulkuploadComponent,{
      data:{
        title:"Bulk Upload Employee Data"
      }
    });
  }
  openeditemp(){
    const dialogRef = this.dialog.open(EditemployeeformComponent);
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



