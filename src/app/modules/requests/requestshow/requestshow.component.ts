import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requestshow',
  templateUrl: './requestshow.component.html',
  styleUrls: ['./requestshow.component.css']
})
export class RequestshowComponent implements OnInit {
  request:any;
  constructor() { }

  ngOnInit(): void {
    this.request=window.history.state.data;
  }

}
