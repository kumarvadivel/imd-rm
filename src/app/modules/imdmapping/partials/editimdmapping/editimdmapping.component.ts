import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editimdmapping',
  templateUrl: './editimdmapping.component.html',
  styleUrls: ['./editimdmapping.component.css']
})
export class EditimdmappingComponent implements OnInit {

  employees : Array<string>;
  constructor(public dialogRef: MatDialogRef<EditimdmappingComponent>) { 
    this.employees=["jon","doe","smith"]
  }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close()
  }

}
