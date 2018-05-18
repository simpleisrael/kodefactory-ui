import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConfigComponent} from './config.component';
import {SystemConfigComponent} from './system-config/system-config.component';
import {SecurityConfigComponent} from './security-config/security-config.component';


const routes: Routes = [{
  path: '',
  component: ConfigComponent,
  children: [{
    path: 'system',
    component: SystemConfigComponent,
  }, {
    path: 'security',
    component: SecurityConfigComponent,
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
export class ConfigRoutingModule {}

export const routedComponents = [
  SystemConfigComponent,
  SecurityConfigComponent,
  ConfigComponent,
];
