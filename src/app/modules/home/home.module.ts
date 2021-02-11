import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field'
import { NgxOrgChartModule } from 'ngx-org-chart';
@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxOrgChartModule,
    
  ],
  exports:[HomepageComponent]
})
export class HomeModule { }
