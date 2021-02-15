import { BrowserModule } from '@angular/platform-browser';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { SidenavComponent } from './partials/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field'
import { HomeModule } from './modules/home/home.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';

import { NgxTabsModule } from '@ngx-tiny/tabs';
import { EmployeeModule } from './modules/employee/employee.module';
import { ImdModule } from './modules/imd/imd.module';
import { NamecardComponent } from './common/namecard/namecard.component';
import { SharedModule } from './common/shared.module';
import { ImdmappingModule } from './modules/imdmapping/imdmapping.module';
import { RequestsModule } from './modules/requests/requests.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    HomeModule,
    EmployeeModule,
    ImdModule,
    ImdmappingModule,
    RequestsModule,
    NgxTabsModule,
    MatTabsModule,
    MatBadgeModule,
    SharedModule
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
