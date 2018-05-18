import {LocalDataSource} from 'ng2-smart-table';
import {DateRenderComponent} from '../../@core/lib/DateRenderComponent';

export class BaseApproval {

  selectedApproval;

  source: LocalDataSource = new LocalDataSource();
  settings = {
    actions: false,
    columns: {
      title: {
        title: 'Title',
      },
      entityClassName: {
        title: 'Approval Type',
      },
      approvalStatus: {
        title: 'Status',
      },
      approvedByName: {
        title: 'Approved By',
      },
      createDate: {
        title: 'Created On',
        type: 'custom',
        renderComponent: DateRenderComponent,
      },
    },
  };

  rowSelected(event) {
    this.selectedApproval = event.data;
  }
}
