import {Component} from '@angular/core';
import {ApprovalsService} from '../../../@core/data/approvals.service';
import {BaseApproval} from '../base-approval';
import {NotificationService} from '../../../@core/utils/NotificationService';
import {ApprovalResponse} from '../../../@core/model/ApprovalResponse';

@Component({
  selector: 'ngx-pending-approvals',
  templateUrl: './pending-approvals.component.html',
})
export class PendingApprovalsComponent extends BaseApproval {


  constructor(private approvalService: ApprovalsService,
              private notify: NotificationService) {
    super();
    this.init();
  }

  init() {
    const page = 1, count = 500;
    this.approvalService.getPendingApprovals({page, count})
      .subscribe(
        res => {
          this.source.load(res);
        },
      )
  }


  approve() {

    this.notify.confirmApprove('Request', () => {
      const approvalResponse: ApprovalResponse = {
        approvalStatus:  'APPROVED',
        remark: 'Checked it and it is ok',
        approvalRequestId: this.selectedApproval['id'],
      };
      this.approvalService.approve(approvalResponse).subscribe(
        () => {
          this.init();
        },
      )
    });

  }

}
