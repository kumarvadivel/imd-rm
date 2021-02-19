import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-tableheader',
  templateUrl: './tableheader.component.html',
  styleUrls: ['./tableheader.component.css']
})
export class TableheaderComponent implements OnInit {
  @Input() title:string;
  @Input() options:string[];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
