import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-employeepersonaldetailformmain',
  templateUrl: './employeepersonaldetailformmain.component.html',
  styleUrls: ['./employeepersonaldetailformmain.component.css']
})
export class EmployeepersonaldetailformmainComponent implements OnInit {

  date1 = new FormControl(new Date())
  constructor() { }

  ngOnInit(): void {
  }

}
