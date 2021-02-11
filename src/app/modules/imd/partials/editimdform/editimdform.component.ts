import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editimdform',
  templateUrl: './editimdform.component.html',
  styleUrls: ['./editimdform.component.css']
})
export class EditimdformComponent implements OnInit {

  employees : Array<string>;
  constructor(public dialogRef: MatDialogRef<EditimdformComponent>) { 
    this.employees=["jon","doe","smith"]
  }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close()
  }

}
