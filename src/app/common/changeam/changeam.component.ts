import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-changeam',
  templateUrl: './changeam.component.html',
  styleUrls: ['./changeam.component.css']
})
export class ChangeamComponent implements OnInit {
  options=["option1","option 2","option3"]
  constructor(public dialogRef: MatDialogRef<ChangeamComponent>) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
  }
}
