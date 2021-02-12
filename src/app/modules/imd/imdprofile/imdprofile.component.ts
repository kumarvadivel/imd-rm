import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imdprofile',
  templateUrl: './imdprofile.component.html',
  styleUrls: ['./imdprofile.component.css']
})
export class ImdprofileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  redirect(){
      this.router.navigate(['/imd'])
  }
}
