import {AuthService} from './auth.service';
import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {TokenInterceptor} from './auth.interceptor';
import {NbAuthModule} from '@nebular/auth';
import {AuthGuard} from './auth.guard';
import {RouterModule} from '@angular/router';
import {MenuService} from './menu.service';

const SERVICES = [
  AuthService,
  TokenInterceptor,
  AuthGuard,
  MenuService,
];

const COMPONENTS = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NbAuthModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: AuthModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
