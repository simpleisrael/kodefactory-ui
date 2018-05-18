import { NgModule } from '@angular/core';

import {Ng2SmartTableModule} from 'ng2-smart-table';
import {DateRenderComponent} from './DateRenderComponent';
import {ConfigRenderComponent} from './ConfigRenderComponent';
import {ConfigValueRenderComponent} from './ConfigValueRenderComponent';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NbCheckboxModule} from '@nebular/theme';
import {NairaRenderComponent} from './NairaRenderComponent';
import {ThemeModule} from '../../@theme/theme.module';
import {PurchasedRendererComponent} from './PurchasedRendererComponent';
import {BankDetailsRendererComponent} from './BankDetailsRendererComponent';
import {PaymentPurchasedRendererComponent} from './PaymentPurchasedRendererComponent';
import {AddressRendererComponent} from './AddressRendererComponent';
import {LongitudeRendererComponent} from './LongitudeRendererComponent';
import {LatitudeRendererComponent} from './LatitudeRendererComponent';
import {ContactHospitalRendererComponent} from './ContactHospitalRendererComponent';
import {ContactPharmacyRendererComponent} from './ContactPharmacyRendererComponent';
import {ContactDistributorRendererComponent} from './ContactDistributorRendererComponent';
import {DivisionRenderComponent} from './DivisionRenderComponent';
import {ContactRenderComponent} from './ContactRenderComponent';
import {HospitalTypeRenderComponent} from './HospitalTypeRenderComponent';
import {PharmacyTypeRenderComponent} from './PharmacyTypeRenderComponent';
import {ReportContactRendererComponent} from './ReportContactRendererComponent';
import {ReportDivisionRendererComponent} from './ReportDivisionRendererComponent';
import {ReportContactsRendererComponent} from './ReportContactsRendererComponent';
import {VisitUserRendererComponent} from './VisitUserRendererComponent';


const components = [
  DateRenderComponent,
  ConfigRenderComponent,
  ConfigValueRenderComponent,
  PurchasedRendererComponent,
  BankDetailsRendererComponent,
  NairaRenderComponent,
  PaymentPurchasedRendererComponent,
  AddressRendererComponent,
  LongitudeRendererComponent,
  LatitudeRendererComponent,
  ContactHospitalRendererComponent,
  ContactPharmacyRendererComponent,
  ContactDistributorRendererComponent,
  DivisionRenderComponent,
  ContactRenderComponent,
  HospitalTypeRenderComponent,
  PharmacyTypeRenderComponent,
  ReportContactRendererComponent,
  ReportContactsRendererComponent,
  ReportDivisionRendererComponent,
  VisitUserRendererComponent,
];


@NgModule({
  imports: [
    Ng2SmartTableModule,
    NbCheckboxModule,
    NgbModule,
    FormsModule,
    CommonModule,
    ThemeModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
  entryComponents: [
    ...components,
  ],
})
export class LibModule { }
