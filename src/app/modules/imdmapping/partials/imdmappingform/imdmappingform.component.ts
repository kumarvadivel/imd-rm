import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imdmappingform',
  templateUrl: './imdmappingform.component.html',
  styleUrls: ['./imdmappingform.component.css']
})
export class ImdmappingformComponent implements OnInit {
  options=["option 1","option 2","option 3"]
  constructor() { }

  ngOnInit(): void {
  }

}
