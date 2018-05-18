import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/take';
import {REST_BASE_PATH} from '../config/config';

@Injectable()
export class ApiHandler {

  constructor(private http: HttpClient) {}


  /**
   * Retrieve data using get method
   * @param {string} url
   * @returns {Observable<any>}
   */
  get(url: string): Observable<any> {
    return this.http.get(REST_BASE_PATH + url);
  }


  /**
   * Post a request using post method
   * @param {string} url
   * @param data
   * @returns {Observable<any>}
   */
  post(url: string, data: any): Observable<any> {
    return this.http.post(REST_BASE_PATH + url, data);
  }



  private errorHandler(err) {
    err = (err.status === 0) ? Object.assign(err,
      {message: 'No Internet Access Available to process this request.'}) : err;
    return Observable.throw(err || {message: 'Unknown server error on request.'});
  }


}
