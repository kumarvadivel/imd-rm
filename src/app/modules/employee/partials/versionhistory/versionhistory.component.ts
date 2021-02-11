import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-versionhistory',
  templateUrl: './versionhistory.component.html',
  styleUrls: ['./versionhistory.component.css']
})
export class VersionhistoryComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VersionhistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close()
  }
}
