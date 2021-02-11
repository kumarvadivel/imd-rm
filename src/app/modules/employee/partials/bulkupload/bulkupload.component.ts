import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bulkupload',
  templateUrl: './bulkupload.component.html',
  styleUrls: ['./bulkupload.component.css']
})
export class BulkuploadComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BulkuploadComponent>,) { }

  close(){
    this.dialogRef.close()
  }
  ngOnInit(): void {
  }

}
