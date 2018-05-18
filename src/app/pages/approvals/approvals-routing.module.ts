import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ApprovalsComponent} from './approvals.component';
import {PendingApprovalsComponent} from './pending/pending-approvals.component';
import {CompletedApprovalsComponent} from './completed/completed-approvals.component';

const routes: Routes = [{
  path: '',
  component: ApprovalsComponent,
  children: [{
    path: 'pending',
    component: PendingApprovalsComponent,
  }, {
    path: 'completed',
    component: CompletedApprovalsComponent,
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
export class ApprovalsRoutingModule {

}

export const routedComponents = [
  ApprovalsComponent,
  PendingApprovalsComponent,
  CompletedApprovalsComponent,
];
