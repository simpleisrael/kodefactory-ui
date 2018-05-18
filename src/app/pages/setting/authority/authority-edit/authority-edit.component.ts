import {Component} from '@angular/core';
import {UserService} from '../../../../@core/data/users.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NotificationService} from '../../../../@core/utils/NotificationService';
import {BaseEditComponent} from '../../../../@core/lib/base-edit';
import {EventsService} from '../../../../@core/events/event.service';
import {AUTHORITY_UPDATED} from '../../../../@core/events/event.definition';

@Component({
  selector: 'ngx-authority-edit',
  templateUrl: './authority-edit.component.html',
})
export class AuthorityEditComponent extends BaseEditComponent {

  constructor(public activeModal: NgbActiveModal,
              private userService: UserService,
              public notify: NotificationService,
              public eventService: EventsService) {
    super(activeModal, notify, eventService, AUTHORITY_UPDATED);
  }

  save() {
    const value = Object.assign({}, this.entity);
    super.save(this.userService.saveAuthority(value), 'Request sent for approval!');
  }
}
