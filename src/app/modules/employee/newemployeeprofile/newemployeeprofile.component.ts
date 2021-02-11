import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newemployeeprofile',
  templateUrl: './newemployeeprofile.component.html',
  styleUrls: ['./newemployeeprofile.component.css']
})
export class NewemployeeprofileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  redirect(){
    this.router.navigate(['/employee'])
  }
}
