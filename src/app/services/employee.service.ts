import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import employees from '../db(faker)/employee';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  Employees:Array<any>;
  constructor() {
    this.Employees=employees
   }

  getemployee():Array<Employee>{
      return this.Employees;
  }
}
