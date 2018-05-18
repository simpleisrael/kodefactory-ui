import {Component} from '@angular/core';
import {ApprovalsService} from 'app/@core/data/approvals.service';
import {NotificationService} from '../../../@core/utils/NotificationService';
import {BaseApproval} from '../base-approval';

@Component({
  selector: 'ngx-completed-approvals',
  templateUrl: './completed-approvals.component.html',
})
export class CompletedApprovalsComponent extends BaseApproval {




  constructor(private approvalService: ApprovalsService,
              private notify: NotificationService) {
    super();
    const page = 1, count = 500;
    this.approvalService.getCompletedApprovals({page, count})
      .subscribe(
        res => {
          this.source.load(res);
        },
      )
  }



}
