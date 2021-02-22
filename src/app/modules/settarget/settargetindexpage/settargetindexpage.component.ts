import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettargetService } from 'src/app/services/settarget.service';
import { BulkuploadComponent } from '../../employee/partials/bulkupload/bulkupload.component';
import { EdittargetpopupComponent } from '../partials/edittargetpopup/edittargetpopup.component';

@Component({
  selector: 'app-settargetindexpage',
  templateUrl: './settargetindexpage.component.html',
  styleUrls: ['./settargetindexpage.component.css']
})
export class SettargetindexpageComponent implements OnInit {
  targetcount: number=0;
  targets:Array<any>;
  constructor(public target:SettargetService,public dialog: MatDialog) { 
    this.targets=this.target.gettarget();
  }

  ngOnInit(): void {
  }
  openbulkupload(){
    const dialogRef = this.dialog.open(BulkuploadComponent,{
      data:{
        title:"Bulk Upload Target Data"
      }
    });
  }
  openedittarget(){
    const dialogRef = this.dialog.open(EdittargetpopupComponent)
  }
  change(data){
    
    if(!data._checked){
      this.targetcount+=1
    }else{
      this.targetcount-=1
    }
    
  }
}
