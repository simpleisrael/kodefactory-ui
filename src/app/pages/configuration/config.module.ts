import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {LibModule} from '../../@core/lib/lib.module';
import {ConfigGroupComponent} from './config-group/config-group.component';
import {ConfigRoutingModule, routedComponents} from './config-routing.module';
import {ConfigService} from '../../@core/data/config.service';
import {ConfigurationEditComponent} from './config-group/configuration-edit/configuration-edit.component';


const components = [
  ConfigGroupComponent,
  ConfigurationEditComponent,
  ...routedComponents,
];


@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    ConfigRoutingModule,
    Ng2SmartTableModule,
    LibModule,
  ],
  declarations: [
    ...components,
  ],
  entryComponents: [
    ConfigurationEditComponent,
  ],
  providers: [
    ConfigService,
  ],
})
export class ConfigurationModule { }
