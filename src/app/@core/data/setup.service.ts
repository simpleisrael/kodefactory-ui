import {Injectable} from '@angular/core';
import {ApiHandler} from './api-handler.service';

@Injectable()
export class SetupService {

  constructor(private api: ApiHandler) {}

  setupIsCompleted() {
    return this.get('setup-completed');
  }


  setup(payload) {
    return this.post('save-setup', payload);
  }


  /**
   * Specific post implementation
   * @param {string} context
   * @param data
   * @returns {Observable<any>}
   */
  private post(context: string, data: any) {
    return this.api.post('setup-service/' + context, data);
  }

  private get(context: string) {
    return this.api.get('setup-service/' + context);
  }

}
