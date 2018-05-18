import {Injectable} from '@angular/core';
import {ApiHandler} from './api-handler.service';

@Injectable()
export class SpecialityService {

  constructor(private api: ApiHandler) {}

  list() {
    return this.get('list');
  }

  save(data) {
    return this.post('save', data);
  }


  /**
   * Specific post implementation
   * @param {string} context
   * @param data
   * @returns {Observable<any>}
   */
  private post(context: string, data: any) {
    return this.api.post('speciality-service/' + context, data);
  }

  private get(context: string) {
    return this.api.get('speciality-service/' + context);
  }
}
