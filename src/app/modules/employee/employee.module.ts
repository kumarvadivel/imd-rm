import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { NgxTabsModule } from '@ngx-tiny/tabs';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeenewComponent } from './employeenew/employeenew.component';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BulkuploadComponent } from './partials/bulkupload/bulkupload.component';
import { UploadformComponent } from './partials/uploadform/uploadform.component';
import { EditemployeeformComponent } from './partials/editemployeeform/editemployeeform.component';
import { NamecardComponent } from '../../common/namecard/namecard.component';
import { PersonaldetailformComponent } from './partials/personaldetailform/personaldetailform.component';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { BuisnesslineformComponent } from './partials/buisnesslineform/buisnesslineform.component';
import { LocationformComponent } from './partials/locationform/locationform.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';
import { VersionhistoryComponent } from './partials/versionhistory/versionhistory.component';
import { SharedModule } from 'src/app/common/shared.module';
import { EmployeepersonaldetailformmainComponent } from './partials/employeepersonaldetailformmain/employeepersonaldetailformmain.component';
import { NewemployeeprofileComponent } from './newemployeeprofile/newemployeeprofile.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [EmployeeListComponent,
     EmployeedetailsComponent,
      EmployeenewComponent,
      BulkuploadComponent, 
      UploadformComponent, 
      EditemployeeformComponent, 
      PersonaldetailformComponent, 
      BuisnesslineformComponent, 
      LocationformComponent, 
      EmployeeprofileComponent, 
      VersionhistoryComponent, EmployeepersonaldetailformmainComponent, NewemployeeprofileComponent,
      ],
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
   ],
   exports:[]
  
})
export class EmployeeModule { }
