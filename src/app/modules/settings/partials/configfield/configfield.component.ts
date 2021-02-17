import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configfield',
  templateUrl: './configfield.component.html',
  styleUrls: ['./configfield.component.css']
})
export class ConfigfieldComponent implements OnInit {

  fields=[
    {
      field:"LOB",
      opt:["option 1","option 2","option 3"]
    },
    {
      field:"Zone",
      opt:["option 1","option 2","option 3"]
    },
    {
      field:"Profile",
      opt:["option 1","option 2","option 3"]
    },
    {
      field:"Vertical",
      opt:["option 1","option 2","option 3"]
    },
    {
      field:"Sub-vertical",
      opt:["option 1","option 2","option 3"]
    },
    {
      field:"Designation",
      opt:["option 1","option 2","option 3"]
    },
    {
      field:"Main Location",
      opt:["option 1","option 2","option 3"]
    },
    {
      field:"Location Code",
      opt:["option 1","option 2","option 3"]
    },
    {
      field:"Base Location",
      opt:["option 1","option 2","option 3"]
    },
    {
      field:"Cost Center",
      opt:["option 1","option 2","option 3"]
    },
    {
      field:"Channel",
      opt:["option 1","option 2","option 3"]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
