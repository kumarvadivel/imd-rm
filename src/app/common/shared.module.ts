import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamecardComponent } from './namecard/namecard.component';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ChangeamComponent } from './changeam/changeam.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxTabsModule } from '@ngx-tiny/tabs';
import { TableheaderComponent } from './tableheader/tableheader.component';


@NgModule({
  declarations: [NamecardComponent, ChangeamComponent, TableheaderComponent],
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
  ],
  exports:[NamecardComponent,TableheaderComponent]
})
export class SharedModule { }
