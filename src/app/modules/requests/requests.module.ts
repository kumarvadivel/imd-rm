import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestspageComponent } from './requestspage/requestspage.component';
import { NgxTabsModule } from '@ngx-tiny/tabs';
import { ActiverequestsComponent } from './activerequests/activerequests.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from 'src/app/common/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { RequestcardsComponent } from './partials/requestcards/requestcards.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RequestshowComponent } from './requestshow/requestshow.component';
import { RequestrmdComponent } from './partials/requestrmd/requestrmd.component';
import { RequestimdComponent } from './partials/requestimd/requestimd.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { RequesttableComponent } from './partials/requesttable/requesttable.component';

@NgModule({
  declarations: [RequestspageComponent, ActiverequestsComponent, RequestcardsComponent, RequestshowComponent, RequestrmdComponent, RequestimdComponent, RequesttableComponent],
  imports: [
    CommonModule,
    NgxTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    SharedModule,
    MatExpansionModule

  ]
})
export class RequestsModule { }
