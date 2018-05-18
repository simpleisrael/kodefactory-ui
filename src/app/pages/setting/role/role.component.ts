import {AfterViewInit, Component} from '@angular/core';
import {UserService} from '../../../@core/data/users.service';
import {RoleEditComponent} from './role-edit/role-edit.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BaseListComponent} from '../../../@core/lib/base-list';
import {ROLE_UPDATED} from '../../../@core/events/event.definition';
import {EventsService} from '../../../@core/events/event.service';
import {CacheService} from '../../../@core/data/cache.service';

@Component({
  selector: 'ngx-role',
  styleUrls: ['./role.component.scss'],
  templateUrl: './role.component.html',
})
export class RoleComponent extends BaseListComponent implements AfterViewInit {


  constructor(private userService: UserService,
              public modalService: NgbModal,
              private cacheService: CacheService,
              private eventService: EventsService) {
    super(modalService);
  }

  showModal() {
    const title = this.selectedEntity ? 'Edit Role' : 'New Role';
    super.showModal(RoleEditComponent, title, this.selectedEntity);
    this.eventService.on(ROLE_UPDATED, () => {
      this.loadAsync();
    });
  }

  newEntity() {
    this.selectedEntity = null;
    this.showModal();
  }


  ngAfterViewInit() {
    if (!this.cacheService.roles) {
      this.loadAsync();
    }else {
      this.source.load(this.cacheService.roles);
    }
  }

  loadAsync() {
    this.userService.listRoles().subscribe(
      roles => {
        this.source.load(roles);
        this.cacheService.roles = roles;
      },
    )
  }
}
