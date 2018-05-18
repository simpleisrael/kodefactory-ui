import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { SettingRoutingModule, routedComponents } from './setting-routing.module';
import {RoleEditComponent} from './role/role-edit/role-edit.component';
import {AuthorityEditComponent} from './authority/authority-edit/authority-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {LibModule} from '../../@core/lib/lib.module';
import {SelectModule} from 'ng2-select';


const components = [
  RoleEditComponent,
  AuthorityEditComponent,
  ...routedComponents,
];


@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    SettingRoutingModule,
    Ng2SmartTableModule,
    SelectModule,
    LibModule,
  ],
  declarations: [
    ...components,
  ],
  entryComponents: [
    RoleEditComponent,
    AuthorityEditComponent,
  ],
})
export class SettingModule { }
