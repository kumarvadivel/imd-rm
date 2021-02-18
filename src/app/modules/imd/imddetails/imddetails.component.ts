import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ChangeamComponent } from 'src/app/common/changeam/changeam.component';
import { BulkuploadComponent } from '../../employee/partials/bulkupload/bulkupload.component';
import { EditemployeeformComponent } from '../../employee/partials/editemployeeform/editemployeeform.component';
import { VersionhistoryComponent } from '../../employee/partials/versionhistory/versionhistory.component';
import { EditimdformComponent } from '../partials/editimdform/editimdform.component';
import imds from "../../../db(faker)/imds"
@Component({
  selector: 'app-imddetails',
  templateUrl: './imddetails.component.html',
  styleUrls: ['./imddetails.component.css']
})
export class ImddetailsComponent implements OnInit {
  imds;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  imdcount: number=0;

  constructor(public dialog: MatDialog) {
    this.imds=imds
  }

  ngOnInit(): void {
  }
  openbulkupload(){
    const dialogRef = this.dialog.open(BulkuploadComponent,{
      data:{
        title:"Bulk Upload IMD Data"
      }
    });
  }
  openeditimd(){
    const dialogRef = this.dialog.open(EditimdformComponent);
  }
  openversionhistory(data){
    const dialogRef = this.dialog.open(VersionhistoryComponent,{
      data:data
    })
  }
  openchangeam(){
    const dialogRef = this.dialog.open(ChangeamComponent)
  }
  change(data){
    
    if(!data._checked){
      this.imdcount+=1
    }else{
      this.imdcount-=1
    }
    
  }
}
