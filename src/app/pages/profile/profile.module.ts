import {NgModule} from '@angular/core';

import {ThemeModule} from '../../@theme/theme.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {LibModule} from '../../@core/lib/lib.module';
import {DlDateTimePickerDateModule} from 'angular-bootstrap-datetimepicker';
import {SelectModule} from 'ng2-select';
import {Daterangepicker} from 'ng2-daterangepicker';
import {ReportRoutingModule} from './profile-routing.module';
import {routedComponents} from './profile-routing.module';

const components = [
  ...routedComponents,
];


@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    ReportRoutingModule,
    Ng2SmartTableModule,
    LibModule,
    DlDateTimePickerDateModule,
    SelectModule,
    Daterangepicker,
  ],
  declarations: [
    ...components,
  ],
  entryComponents: [],
})
export class ProfileModule {
}
