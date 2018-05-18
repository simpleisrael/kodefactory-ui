import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfigService} from '../../../../@core/data/config.service';
import {NotificationService} from '../../../../@core/utils/NotificationService';
import {EventsService} from '../../../../@core/events/event.service';
import {CONFIGURATION_UPDATED} from '../../../../@core/events/event.definition';

@Component({
  selector: 'ngx-configuraiton-edit',
  templateUrl: './configuration-edit.component.html',
})
export class ConfigurationEditComponent implements OnInit {

  config: any = {data: false};
  renderValue = 'any';
  @ViewChild('form') form;
  loading = false;

  constructor(public activeModal: NgbActiveModal,
              private notify: NotificationService,
              private eventService: EventsService,
              private configService: ConfigService) {

  }

  ngOnInit() {
    // console.log(this.config);
    switch (typeof this.config.rawData || typeof this.config.data) {
      case 'boolean' : this.renderValue = 'boolean'; break;
      case 'string' : this.renderValue = 'string'; break;
      case 'number' : this.renderValue = 'number'; break;
      default: this.renderValue = 'string';
    }
  }


  save() {
    this.loading = true;
    this.configService.saveConfig(this.config).subscribe(
      (data) => {
        this.notify.success('', data.message || 'Configuration Updated!');
        this.eventService.broadcast(CONFIGURATION_UPDATED);
        this.closeModal();
        this.loading = false;
      },
      () => {
        this.loading = false;
      },
    );
  }

  closeModal() {
    this.activeModal.close();
  }
}
