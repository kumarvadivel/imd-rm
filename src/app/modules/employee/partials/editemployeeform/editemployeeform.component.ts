import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-editemployeeform',
  templateUrl: './editemployeeform.component.html',
  styleUrls: ['./editemployeeform.component.css']
})
export class EditemployeeformComponent implements OnInit {
  employees : Array<string>;
  constructor(public dialogRef: MatDialogRef<EditemployeeformComponent>) { 
    this.employees=["jon","doe","smith"]
  }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close()
  }
}
