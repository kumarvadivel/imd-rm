import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mappingprofile',
  templateUrl: './mappingprofile.component.html',
  styleUrls: ['./mappingprofile.component.css']
})
export class MappingprofileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  redirect(){
    this.router.navigate(['/mapping'])
  }
}
