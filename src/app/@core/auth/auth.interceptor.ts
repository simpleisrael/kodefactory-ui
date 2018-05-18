import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {NotificationService} from 'app/@core/utils/NotificationService';
import {Router} from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService, protected router: Router) {}

  /**
   * Intercept all http calls
   * @param {HttpRequest<any>} request
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
      },
    });
    console.log('Intercepted this call', request.url, request);

    return next.handle(request).do(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
        }
      },
      (err: any) => {

        if (err.status === 401) {
          this.notificationService.error(err.error['message'],
            'You do not have permission to perform this operation. Contact system admin.');


          return this.router.navigateByUrl('auth/login');
        } else if (err.status === 0) {
          this.notificationService.error('Communication Error',
            'Unable to communicate with remote host. Please check and try again')
        } else if (err.status === 404) {
          this.notificationService.error('Not Found', err.message)
        } else if (err.status.toString().indexOf('40') !== -1 || err.status.toString().indexOf('50') !== -1) {
          if (err.error.subErrors) {
            const htmlMessage =
              `<ul style="list-style-type: none">
              ${err.error.subErrors.map(subError => '<li>' + subError['message'] + '</li>')}
            </ul>`;
            this.notificationService.error(err.error.message || err.message, htmlMessage);
          } else if (err.error.message) {
            this.notificationService.error('Bad Request', err.error.message);
          } else {
            this.notificationService.error('Bad Request', 'Unable to process your request at the moment');
          }

        } else {
          this.notificationService.displayHttpError(err);
        }
    });
  }
}
