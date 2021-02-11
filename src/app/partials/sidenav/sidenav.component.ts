import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() sidenav: MatSidenav;
  constructor() { }

  ngOnInit(): void {
  }
  redirect(){
    this.sidenav.close()
  }
}
