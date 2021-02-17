import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-settingsmenu',
  templateUrl: './settingsmenu.component.html',
  styleUrls: ['./settingsmenu.component.css']
})
export class SettingsmenuComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  passdata(data){
    this.newItemEvent.emit(data)
  }
}
