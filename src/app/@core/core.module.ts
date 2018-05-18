import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NbAuthModule, NbEmailPassAuthProvider} from '@nebular/auth';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { DataModule } from './data/data.module';
import { AnalyticsService } from './utils/analytics.service';
import {NotificationService} from './utils/NotificationService';
import {ToasterModule} from 'angular2-toaster';
import {REST_BASE_PATH} from './config/config';
import {EventsService} from './events/event.service';

const NB_CORE_PROVIDERS = [
  ...DataModule.forRoot().providers,
  ...NbAuthModule.forRoot({
    providers: {
      email: {
        service: NbEmailPassAuthProvider,
        config: {
          delay: 1000,
          baseEndpoint: REST_BASE_PATH,
          login: {
            rememberMe: true,
            endpoint: 'auth-service/auth',
          },
          register: {
            endpoint: 'auth-service/register',
          },
          logout: {
            endpoint: '/logout',
          },
          requestPass: {
            endpoint: 'user-service/initiate-password-reset',
          },
          resetPass: {
            endpoint: 'user-service/change-password',
          },
        },
      },
    },
  }).providers,
  AnalyticsService,
  NotificationService,
];

@NgModule({
  imports: [
    CommonModule,
    ToasterModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
