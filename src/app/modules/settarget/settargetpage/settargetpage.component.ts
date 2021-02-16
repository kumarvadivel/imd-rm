import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BulkuploadComponent } from '../../employee/partials/bulkupload/bulkupload.component';

@Component({
  selector: 'app-settargetpage',
  templateUrl: './settargetpage.component.html',
  styleUrls: ['./settargetpage.component.css']
})
export class SettargetpageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  bulkupload(){
    this.dialog.open(BulkuploadComponent,{
      data:{
        title:"Bulk Upload Target Data"
      }
    })
  }
}
