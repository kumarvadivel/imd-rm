import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locationform',
  templateUrl: './locationform.component.html',
  styleUrls: ['./locationform.component.css']
})
export class LocationformComponent implements OnInit {
  mls=["Bangaluru","Gurgaon","Mumbai"];
  bls=["Bangaluru","Gurgaon","Mumbai"];
  ccs=["Bangaluru","Gurgaon","Mumbai"];
  zones=["North 1","North 2","North 3","North 4"]
  constructor() { }

  ngOnInit(): void {
  }

}
