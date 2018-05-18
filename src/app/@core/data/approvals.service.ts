import {Injectable} from '@angular/core';
import {ApiHandler} from './api-handler.service';
import {ApprovalResponse} from '../model/ApprovalResponse';
import {ApprovalRequest} from '../model/ApprovalRequest';

@Injectable()
export class ApprovalsService {

  constructor(private api: ApiHandler) {}

  approve(payload: ApprovalResponse) {
    return this.post('approve', payload);
  }


  public getPendingApprovals(payload: ApprovalRequest) {
    return this.post('user-pending-approval', payload);
  }


  public getCompletedApprovals(payload: ApprovalRequest) {
    return this.post('user-completed-approval', payload);
  }



  /**
   * Specific post implementation
   * @param {string} context
   * @param data
   * @returns {Observable<any>}
   */
  private post(context: string, data: any) {
    return this.api.post('approval-service/' + context, data);
  }

  private get(context: string) {
    return this.api.get('config-service/' + context);
  }
}
