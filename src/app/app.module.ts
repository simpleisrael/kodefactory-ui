/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TokenInterceptor} from './@core/auth/auth.interceptor';
import {AuthModule} from './@core/auth/auth.module';
import {ToasterModule} from 'angular2-toaster';
import {EventsService} from 'app/@core/events/event.service';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { Daterangepicker } from 'ng2-daterangepicker';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    AuthModule.forRoot(),
    Ng4GeoautocompleteModule.forRoot(),
    ToasterModule,
    Daterangepicker,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  },
    { provide: APP_BASE_HREF, useValue: '/' },
    EventsService,
  ],
})
export class AppModule {
}
