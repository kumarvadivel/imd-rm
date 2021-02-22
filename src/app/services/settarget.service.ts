import { Injectable } from '@angular/core';
import target from '../db(faker)/target';

@Injectable({
  providedIn: 'root'
})
export class SettargetService {
  target;
  constructor() { 
    this.target=target
  }

  gettarget(){
    return this.target;
  }
}
