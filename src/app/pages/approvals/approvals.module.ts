import { NgModule } from '@angular/core';

import { ThemeModule } from 'app/@theme/theme.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {LibModule} from 'app/@core/lib/lib.module';
import {ApprovalsRoutingModule, routedComponents} from './approvals-routing.module';
import {ApprovalsService} from 'app/@core/data/approvals.service';


const components = [
  ...routedComponents,
];


@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    ApprovalsRoutingModule,
    Ng2SmartTableModule,
    LibModule,
  ],
  declarations: [
    ...components,
  ],
  entryComponents: [
  ],
  providers: [
    ApprovalsService,
  ],
})
export class ApprovalsModule { }
