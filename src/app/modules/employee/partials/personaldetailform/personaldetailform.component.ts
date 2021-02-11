import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaldetailform',
  templateUrl: './personaldetailform.component.html',
  styleUrls: ['./personaldetailform.component.css']
})
export class PersonaldetailformComponent implements OnInit {
  typeofemps=["Team Lead","Buisness head","Location Head"];
  rms=["Ruban","Kathir","venkat"];
  profiles=["Team lead","section head","union head"];
  constructor() { }

  ngOnInit(): void {
  }

}
