import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangeamComponent } from 'src/app/common/changeam/changeam.component';
import mapdatas from 'src/app/db(faker)/mapdatas';
import { BulkuploadComponent } from '../../employee/partials/bulkupload/bulkupload.component';
import { EditemployeeformComponent } from '../../employee/partials/editemployeeform/editemployeeform.component';
import { VersionhistoryComponent } from '../../employee/partials/versionhistory/versionhistory.component';
import { EditimdmappingComponent } from '../partials/editimdmapping/editimdmapping.component';

@Component({
  selector: 'app-imdmappeddata',
  templateUrl: './imdmappeddata.component.html',
  styleUrls: ['./imdmappeddata.component.css']
})
export class ImdmappeddataComponent implements OnInit {

  mapdatas;
  imdmapcount=0;
  constructor(public dialog: MatDialog) {
    this.mapdatas=mapdatas
  }

  ngOnInit(): void {
  }
  openbulkupload(){
    const dialogRef = this.dialog.open(BulkuploadComponent,{
      data:{
        title:"Bulk Upload Mapping Data"
      }
    });
  }
  openeditemp(){
    const dialogRef = this.dialog.open(EditimdmappingComponent);
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
      this.imdmapcount+=1
    }else{
      this.imdmapcount-=1
    }
    
  }
}
