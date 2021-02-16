import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './modules/employee/employee-list/employee-list.component';
import { EmployeeprofileComponent } from './modules/employee/employeeprofile/employeeprofile.component';
import { NewemployeeprofileComponent } from './modules/employee/newemployeeprofile/newemployeeprofile.component';
import { HomepageComponent } from './modules/home/homepage/homepage.component';
import { ImdpageComponent } from './modules/imd/imdpage/imdpage.component';
import { ImdprofileComponent } from './modules/imd/imdprofile/imdprofile.component';
import { ImdmappingpageComponent } from './modules/imdmapping/imdmappingpage/imdmappingpage.component';
import { MappingprofileComponent } from './modules/imdmapping/mappingprofile/mappingprofile.component';
import { RequestshowComponent } from './modules/requests/requestshow/requestshow.component';
import { RequestspageComponent } from './modules/requests/requestspage/requestspage.component';
import { SettargetpageComponent } from './modules/settarget/settargetpage/settargetpage.component';
import { SettingpageComponent } from './modules/settings/settingpage/settingpage.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent,
  },
  {
    path:'employee',
    component:EmployeeListComponent,
  },
  {
    path:"employee/details",
    component:EmployeeprofileComponent,
  },
  {
    path:"employee/details/new",
    component:NewemployeeprofileComponent,
  },
  {
    path:'imd',
    component:ImdpageComponent,
  },{
    path:"imd/details",
    component:ImdprofileComponent,
  },
  {
    path:"mapping",
    component:ImdmappingpageComponent,
  },
  {
    path:"mapping/details",
    component:MappingprofileComponent,
  },
  {
    path:"requests",
    component:RequestspageComponent,
  },
  {
    path:"requests/show",
    component:RequestshowComponent,
  },
  {
    path:"settarget",
    component:SettargetpageComponent,
  },
  {
    path:"settings",
    component:SettingpageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
