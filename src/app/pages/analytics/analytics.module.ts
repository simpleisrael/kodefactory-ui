import {NgModule} from '@angular/core';

import {ThemeModule} from '../../@theme/theme.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {LibModule} from '../../@core/lib/lib.module';
import {AnalyticsRoutingModule, routedComponents} from './analytics-routing.module';
import {DlDateTimePickerDateModule} from 'angular-bootstrap-datetimepicker';
import {SelectModule} from 'ng2-select';
import {Daterangepicker} from 'ng2-daterangepicker';

const components = [
  ...routedComponents,
];


@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    AnalyticsRoutingModule,
    Ng2SmartTableModule,
    LibModule,
    DlDateTimePickerDateModule,
    SelectModule,
    Daterangepicker,
  ],
  declarations: [
    ...components,
  ],
})
export class AnalyticsModule {
}
