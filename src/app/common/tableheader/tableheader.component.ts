import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableheader',
  templateUrl: './tableheader.component.html',
  styleUrls: ['./tableheader.component.css']
})
export class TableheaderComponent implements OnInit {
  @Input() title:string;
  @Input() options:any;
  constructor() { }

  ngOnInit(): void {
  }

}
