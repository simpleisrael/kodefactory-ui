import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SettingComponent} from './setting.component';
import {RoleComponent} from './role/role.component';
import {AuthorityComponent} from './authority/authority.component';

const routes: Routes = [{
  path: '',
  component: SettingComponent,
  children: [{
    // path: 'user',
    // component: UserComponent,
  }, {
    path: 'role',
    component: RoleComponent,
  }, {
    path: 'authority',
    component: AuthorityComponent,
  } ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SettingRoutingModule {

}

export const routedComponents = [
  // UserComponent,
  AuthorityComponent,
  RoleComponent,
  SettingComponent,
];
