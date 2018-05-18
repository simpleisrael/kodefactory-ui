import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import {AuthGuard} from '../@core/auth/auth.guard';

const routes: Routes = [{
  path: '',
  component: PagesComponent, canActivate: [AuthGuard],
  children: [{
    path: 'setting',
    loadChildren: './setting/setting.module#SettingModule',
  }, {
    path: 'configuration',
    loadChildren: './configuration/config.module#ConfigurationModule',
  }, {
    path: 'analytics',
    loadChildren: './analytics/analytics.module#AnalyticsModule',
  }, {
    path: 'approvals',
    loadChildren: './approvals/approvals.module#ApprovalsModule',
  }, {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule',
  }, {
    path: '',
    redirectTo: 'analytics',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
