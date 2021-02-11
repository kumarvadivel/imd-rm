import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buisnesslineform',
  templateUrl: './buisnesslineform.component.html',
  styleUrls: ['./buisnesslineform.component.css']
})
export class BuisnesslineformComponent implements OnInit {
  lobs=["Retails","vehicle Dealer","Car Insurance"];
  verticals=["Motor Dealer","Insurance Agent","Car Dealer"];
  subverticals=["All","Restricted"];
  channels=["Motor","Health","Insurance"];
  constructor() { }

  ngOnInit(): void {
  }

}
