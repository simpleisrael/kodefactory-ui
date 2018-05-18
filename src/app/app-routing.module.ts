import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import {NgxRegisterComponent} from './@theme/components/register/register.component';
import {NgxLoginComponent} from './@theme/components/login/login.component';
import {NgxSetupComponent} from './@theme/components/setup/setup.component';
import {InitializeComponent} from './@theme/components/initialize/initialize.component';
import {PageNotFoundComponent} from './@theme/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NgxLoginComponent,
      },
      {
        path: 'login',
        component: NgxLoginComponent,
      },
      {
        path: 'register',
        component: NgxRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
      { path: 'setup',
        component: NgxSetupComponent,
      },
      { path: 'initialize',
        component: InitializeComponent,
      },
    ],
  },
  { path: 'page-not-found', component: PageNotFoundComponent},
  { path: '', redirectTo: 'auth/initialize', pathMatch: 'full' },
  // { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'page-not-found' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
