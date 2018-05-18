import {Injectable} from '@angular/core';
import {ApiHandler} from './api-handler.service';

@Injectable()
export class MicroUserService {

  constructor(private api: ApiHandler) {}

  list() {
    return this.get('list');
  }

  listDivisionUsers() {
    return this.get('list-by-division');
  }

  listTeamMembers() {
    return this.get('list-team-members');
  }

  assignDivision(data) {
    return this.post('assign-division', data);
  }

  save(data) {
    return this.post('save', data);
  }

  me() {
    return this.get('me');
  }


  /**
   * Specific post implementation
   * @param {string} context
   * @param data
   * @returns {Observable<any>}
   */
  private post(context: string, data: any) {
    return this.api.post('microuser-service/' + context, data);
  }

  private get(context: string) {
    return this.api.get('microuser-service/' + context);
  }
}
