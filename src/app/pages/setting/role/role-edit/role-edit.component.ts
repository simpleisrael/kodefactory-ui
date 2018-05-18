import {Component} from '@angular/core';
import {UserService} from '../../../../@core/data/users.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NotificationService} from '../../../../@core/utils/NotificationService';
import {BaseEditComponent} from '../../../../@core/lib/base-edit';
import {ROLE_UPDATED} from '../../../../@core/events/event.definition';
import {EventsService} from '../../../../@core/events/event.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'ngx-role-edit',
  templateUrl: './role-edit.component.html',
})
export class RoleEditComponent extends BaseEditComponent {

  authorities;

  constructor(public activeModal: NgbActiveModal,
              private userService: UserService,
              public notify: NotificationService,
              public eventService: EventsService) {
    super(activeModal, notify, eventService, ROLE_UPDATED);

    // Load available authorities. Disable the save button by not subscribing to the err subscription
    this.loading = true;
    this.userService.listAuthorities()
        .subscribe( res => {
          this.authorities = res.map(authority =>  ({...authority, selected: false}));
          this.loading = false;

          // Preselect authority
          if (this.entity && this.entity.authorities) {
            this.authorities.map(authority => {
              authority.selected =
                this.entity.authorities.find(auth => auth['name'] === authority['name']) !== undefined;
              return authority;
            });
          }

        });
  }

  save() {
    const entity = this.entity;
    const authorities = this.authorities.filter(authority => authority.selected);
    const value = Object.assign({}, entity, {authorities});

    // console.log(value);
    super.save(this.userService.saveRole(value), 'Request sent for approval!');
  }
}
