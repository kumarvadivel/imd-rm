import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requestrmd',
  templateUrl: './requestrmd.component.html',
  styleUrls: ['./requestrmd.component.css']
})
export class RequestrmdComponent implements OnInit {
  @Input () rm;
  constructor() { }

  ngOnInit(): void {
  }

}
