import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProfileComponent} from './profile.component';
import {ViewProfileComponent} from './view-profile/view-profile.component';
import {ChangePasswordComponent} from './change-password/change-password.component';

const routes: Routes = [{
  path: '',
  component: ProfileComponent,
  children: [{
    path: 'view-profile',
    component: ViewProfileComponent,
  }, {
    path: 'change-password',
    component: ChangePasswordComponent,
  }, {
    path: '', redirectTo: 'view-profile', pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ReportRoutingModule {

}

export const routedComponents = [
  ProfileComponent,
  ViewProfileComponent,
  ChangePasswordComponent,
];
