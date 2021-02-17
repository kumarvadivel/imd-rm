import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfigoptionComponent } from '../configoption/configoption.component';

@Component({
  selector: 'app-configinp',
  templateUrl: './configinp.component.html',
  styleUrls: ['./configinp.component.css']
})
export class ConfiginpComponent implements OnInit {
  @Input() field;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  opendialog(){
    this.dialog.open(ConfigoptionComponent)
  }
}
