import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-bulkupload',
  templateUrl: './bulkupload.component.html',
  styleUrls: ['./bulkupload.component.css']
})
export class BulkuploadComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BulkuploadComponent>,@Inject(MAT_DIALOG_DATA) public data: {title: string}) { }

  close(){
    this.dialogRef.close()
  }
  ngOnInit(): void {
  }

}
