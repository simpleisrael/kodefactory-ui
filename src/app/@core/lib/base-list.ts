import {LocalDataSource} from 'ng2-smart-table';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

export class BaseListComponent {
  settings;
  source: LocalDataSource = new LocalDataSource();
  selectedEntity;
  loading = false;
  constructor(public modalService: NgbModal) {
    this.settings = {
      actions: false,
      columns: {
        name: {
          title: 'Name',
        },
        description: {
          title: 'Description',
        },
      },
    };
  }


  showModal(component: any, title = '', entity): any {
    const activeModal = this.modalService.open(component, {
      size: 'lg',
      backdrop: 'static',
      container: 'nb-layout',
    });

    if (entity) {
      activeModal.componentInstance.entity = entity;
    }
    activeModal.componentInstance.title = title;
  }

  rowSelected(event) {
    this.selectedEntity = event.data;
  }

}
