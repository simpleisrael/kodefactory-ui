import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AnalyticsComponent} from './analytics.component';
import {RecentActivitiesComponent} from './recent-activities/recent-activities.component';

const routes: Routes = [{
  path: '',
  component: AnalyticsComponent,
  children: [{
    path: 'recent-activities',
    component: RecentActivitiesComponent,
  }, {
    path: '', redirectTo: 'recent-activities', pathMatch: 'full',
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
export class AnalyticsRoutingModule {

}

export const routedComponents = [
  AnalyticsComponent,
  RecentActivitiesComponent,
];
