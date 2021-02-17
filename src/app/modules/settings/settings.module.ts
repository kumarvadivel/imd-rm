import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingpageComponent } from './settingpage/settingpage.component';
import { SettingsmenuComponent } from './partials/settingsmenu/settingsmenu.component';
import {MatRippleModule} from '@angular/material/core';
import { ConfigurationComponent } from './partials/configuration/configuration.component';
import { AccesspermissionComponent } from './partials/accesspermission/accesspermission.component';
import { NgxTabsModule } from '@ngx-tiny/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ConfigfieldComponent } from './partials/configfield/configfield.component';
import { ConfigcolumnComponent } from './partials/configcolumn/configcolumn.component';
import { ConfiginpComponent } from './partials/configinp/configinp.component';
import { MatIconModule } from '@angular/material/icon';
import { ConfigoptionComponent } from './partials/configoption/configoption.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [SettingpageComponent, SettingsmenuComponent, ConfigurationComponent, AccesspermissionComponent, ConfigfieldComponent, ConfigcolumnComponent, ConfiginpComponent, ConfigoptionComponent],
  imports: [
    CommonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    NgxTabsModule,
    MatButtonModule
  ]
})
export class SettingsModule { }
