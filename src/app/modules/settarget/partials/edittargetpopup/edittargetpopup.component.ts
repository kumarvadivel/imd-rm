import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edittargetpopup',
  templateUrl: './edittargetpopup.component.html',
  styleUrls: ['./edittargetpopup.component.css']
})
export class EdittargetpopupComponent implements OnInit {
  employees : Array<string>;
  constructor(public dialogRef: MatDialogRef<EdittargetpopupComponent>) {
    this.employees=["jon","doe","smith"]
   }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close()
  }
}
