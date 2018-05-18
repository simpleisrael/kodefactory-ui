/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import {ToasterConfig} from 'angular2-toaster';

@Component({
  selector: 'ngx-app',
  styleUrls: ['./app.component.scss'],
  template: `
    <toaster-container [toasterconfig]="config"></toaster-container>
    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {

  config: ToasterConfig;

  constructor(private analytics: AnalyticsService) {
    this.config = new ToasterConfig({
      positionClass: 'toast-top-right',
      timeout: 5000,
      newestOnTop: true,
      tapToDismiss: true,
      preventDuplicates: true,
      animation: 'flyLeft',
      limit: 5,
    });
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
