import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {PasswordReset} from '../model/PasswordReset';
import {Password} from '../model/Password';
import {RoleAuthority} from '../model/RoleAuthority';
import {AssignAuthorities} from '../model/AssignAuthorities';
import {UserRole} from '../model/UserRole';
import {User} from '../model/User';
import {Role} from '../model/Role';
import {Authority} from '../model/Authority';
import {ApiHandler} from './api-handler.service';

@Injectable()
export class ActivityService {

  constructor(private api: ApiHandler) {}



  /**
   * Specific post implementation
   * @param {string} context
   * @param data
   * @returns {Observable<any>}
   */
  private post(context: string, data: any) {
    return this.api.post('analytics-service/' + context, data);
  }

  private get(context: string) {
    return this.api.get('analytics-service/' + context);
  }
}
