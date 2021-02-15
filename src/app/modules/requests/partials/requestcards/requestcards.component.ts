import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requestcards',
  templateUrl: './requestcards.component.html',
  styleUrls: ['./requestcards.component.css']
})
export class RequestcardsComponent implements OnInit {

  @Input() request;
  constructor(private router:Router) { 
   
    
  }

  ngOnInit(): void {
  }

  viewrequest(request){
    this.router.navigateByUrl('/requests/show',{state:{
      data:request
    }})
  }
}
