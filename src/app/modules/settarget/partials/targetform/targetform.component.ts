import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-targetform',
  templateUrl: './targetform.component.html',
  styleUrls: ['./targetform.component.css']
})
export class TargetformComponent implements OnInit {

  options=["option1","option2","option3"]
  constructor() { }

  ngOnInit(): void {
  }

}
