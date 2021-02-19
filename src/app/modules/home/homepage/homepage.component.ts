import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import {nodes,addchild,removechild} from 'src/app/db(faker)/nodes'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  channels=["Retail","Vehicle","Insurance"];
  locations=["bangalore","Delhi","Mumbai"];
  categories=["Zone","Channel"];
  nodes;
  
  constructor() { 
    this.nodes=nodes;
  }

  ngOnInit(): void {
  }

  test(data){
    console.log(data);
    
    if (!data.checked){
      console.log("add child")
      addchild(data)
      data.checked=true;
    }
    else{
      console.log("remove child");
      removechild(data)
      data.checked=false
      
    }
    
  }
}
