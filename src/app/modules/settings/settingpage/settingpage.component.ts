import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settingpage',
  templateUrl: './settingpage.component.html',
  styleUrls: ['./settingpage.component.css']
})
export class SettingpageComponent implements OnInit {
  currentstate="Configuration";
  constructor() { }

  ngOnInit(): void {
  }
  state(newstate){
    this.currentstate=newstate
    console.log(this.currentstate)
  }
}
