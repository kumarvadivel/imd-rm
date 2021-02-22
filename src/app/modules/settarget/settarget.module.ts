import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettargetpageComponent } from './settargetpage/settargetpage.component';
import { NgxTabsModule } from '@ngx-tiny/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { TargetformComponent } from './partials/targetform/targetform.component';
import { TargethistoryComponent } from './partials/targethistory/targethistory.component';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TargettableComponent } from './partials/targettable/targettable.component';
import { SharedModule } from 'src/app/common/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { SettargetindexpageComponent } from './settargetindexpage/settargetindexpage.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EdittargetpopupComponent } from './partials/edittargetpopup/edittargetpopup.component';



@NgModule({
  declarations: [SettargetpageComponent,SettargetindexpageComponent, TargetformComponent, TargethistoryComponent, TargettableComponent, EdittargetpopupComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCheckboxModule
  ]
})
export class SettargetModule { }
