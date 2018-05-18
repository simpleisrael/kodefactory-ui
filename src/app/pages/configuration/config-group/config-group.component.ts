import {Component, Input, OnInit} from '@angular/core';
import {ConfigService} from '../../../@core/data/config.service';
import {LocalDataSource} from 'ng2-smart-table';
import {ConfigRenderComponent} from '../../../@core/lib/ConfigRenderComponent';
import {ConfigValueRenderComponent} from '../../../@core/lib/ConfigValueRenderComponent';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationEditComponent} from './configuration-edit/configuration-edit.component';
import {CONFIGURATION_UPDATED} from '../../../@core/events/event.definition';
import {EventsService} from '../../../@core/events/event.service';

@Component({
  selector: 'ngx-config-group',
  templateUrl: './config-group.component.html',
})
export class ConfigGroupComponent implements OnInit {

  @Input() scope: string = '';


  settings = {
    mode: 'external',
    actions: {
      delete: false,
      add: false,
      position: 'right',
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      configKey: {
        title: 'Name',
        type: 'string',
        editable: false,
      },
      rawData: {
        title: 'Value',
        type: 'custom',
        renderComponent: ConfigValueRenderComponent,
      },
      dataType: {
        title: 'Data Type',
        type: 'custom',
        editable: false,
        renderComponent: ConfigRenderComponent,
        editor: {
          type: 'list',
          config: {
            list: [
              {value: 'STRING', title: 'String'},
              {value: 'INTEGER', title: 'Integer'},
              {value: 'LONG', title: 'Long'},
              {value: 'BOOLEAN', title: 'Boolean'},
              {value: 'DOUBLE', title: 'Double'},
              {value: 'DATE', title: 'Date'},
            ],
          },
        },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private configService: ConfigService,
              private eventService: EventsService,
              public modalService: NgbModal) {

  }

  ngOnInit() {
    this.loadConfig();
    this.eventService.on(CONFIGURATION_UPDATED, () => {
      this.loadConfig();
    });
  }

  edit(event) {
    const activeModal = this.modalService.open(ConfigurationEditComponent);
    activeModal.componentInstance.config = event.data;
  }

  loadConfig() {
    // console.log(this.scope);
    this.configService.getConfigByScope(this.scope).subscribe(
      res => {
        this.source.load(res);
      },
    );
  }

}
