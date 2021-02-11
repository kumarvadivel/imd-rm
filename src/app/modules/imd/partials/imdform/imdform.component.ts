import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imdform',
  templateUrl: './imdform.component.html',
  styleUrls: ['./imdform.component.css']
})
export class ImdformComponent implements OnInit {

  options=["option 1","option 2","option 3"]
  constructor() { }

  ngOnInit(): void {
  }

}
