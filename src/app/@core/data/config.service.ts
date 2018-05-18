import {Injectable} from '@angular/core';
import {ApiHandler} from './api-handler.service';
import {ConfigData} from '../model/ConfigData';

@Injectable()
export class ConfigService {

  constructor(private api: ApiHandler) {}


  getConfig(payload: ConfigData) {
    return this.post('get-config', payload);
  }


  getTypedConfig(key: string) {
    return this.post('get-typed-config', {key});
  }


  saveConfig(payload: ConfigData) {
    return this.post('save-config', payload);
  }


  getConfigByScope(name: string) {
    return this.post('get-config-by-scope-name', {name});
  }



  /**
   * Specific post implementation
   * @param {string} context
   * @param data
   * @returns {Observable<any>}
   */
  private post(context: string, data: any) {
    return this.api.post('config-service/' + context, data);
  }

  private get(context: string) {
    return this.api.get('config-service/' + context);
  }
}
