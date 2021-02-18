import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BulkuploadComponent } from '../../employee/partials/bulkupload/bulkupload.component';
import { EditemployeeformComponent } from '../../employee/partials/editemployeeform/editemployeeform.component';
import { VersionhistoryComponent } from '../../employee/partials/versionhistory/versionhistory.component';
import { EditimdmappingComponent } from '../partials/editimdmapping/editimdmapping.component';
import mapdatas from "src/app/db(faker)/unallocatedimds";
@Component({
  selector: 'app-unallocatedimd',
  templateUrl: './unallocatedimd.component.html',
  styleUrls: ['./unallocatedimd.component.css']
})
export class UnallocatedimdComponent implements OnInit {

  mapdatas;
  unallocatedimdcount: number=0;
  constructor(public dialog: MatDialog) {
    this.mapdatas=mapdatas
   }

  ngOnInit(): void {
  }
  openbulkupload(){
    const dialogRef = this.dialog.open(BulkuploadComponent,{
      data:{
        title:"Bulk Upload Unallocated imd Data"
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
  change(data){
    
    if(!data._checked){
      this.unallocatedimdcount+=1
    }else{
      this.unallocatedimdcount-=1
    }
    
  }
}
