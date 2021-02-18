import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-configoption',
  templateUrl: './configoption.component.html',
  styleUrls: ['./configoption.component.css']
})
export class ConfigoptionComponent implements OnInit {

  value=''
  constructor( public dialogref:MatDialogRef<ConfigoptionComponent>) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogref.close()
  }
  addoption(data){
    this.dialogref.close(data)
    
  }
}
