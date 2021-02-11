import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImdpageComponent } from './imdpage/imdpage.component';
import { NgxTabsModule } from '@ngx-tiny/tabs';
import { ImddetailsComponent } from './imddetails/imddetails.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditimdformComponent } from './partials/editimdform/editimdform.component';
import { ImdformComponent } from './partials/imdform/imdform.component';
import { NamecardComponent } from '../../common/namecard/namecard.component';
import { SharedModule } from 'src/app/common/shared.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ImdprofileComponent } from './imdprofile/imdprofile.component';



@NgModule({
  declarations: [ImdpageComponent, ImddetailsComponent, EditimdformComponent, ImdformComponent, ImdprofileComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    NgxTabsModule ,
    MatButtonModule,
    MatInputModule, 
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
    MatPaginatorModule,
    MatCheckboxModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class ImdModule { }
