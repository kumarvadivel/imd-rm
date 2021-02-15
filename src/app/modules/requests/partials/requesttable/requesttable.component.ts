import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-requesttable',
  templateUrl: './requesttable.component.html',
  styleUrls: ['./requesttable.component.css']
})
export class RequesttableComponent implements OnInit {
  @Input () fields;
  @Input() tabledata;
  constructor() { }

  ngOnInit(): void {
  }

}
