import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImdmappingpageComponent } from './imdmappingpage/imdmappingpage.component';
import { SharedModule } from 'src/app/common/shared.module';
import { NgxTabsModule } from '@ngx-tiny/tabs';
import { UnallocatedimdComponent } from './unallocatedimd/unallocatedimd.component';
import { ImdmappeddataComponent } from './imdmappeddata/imdmappeddata.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MappingprofileComponent } from './mappingprofile/mappingprofile.component';
import { EditimdmappingComponent } from './partials/editimdmapping/editimdmapping.component';
import { ImdmappingformComponent } from './partials/imdmappingform/imdmappingform.component';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [ImdmappingpageComponent, UnallocatedimdComponent, ImdmappeddataComponent, MappingprofileComponent, EditimdmappingComponent, ImdmappingformComponent],
  imports: [
    CommonModule,
    SharedModule,
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
    MatDatepickerModule,
    NgxTabsModule
  ]
})
export class ImdmappingModule { }
