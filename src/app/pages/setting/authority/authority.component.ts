import {AfterViewInit, Component} from '@angular/core';
import {UserService} from '../../../@core/data/users.service';
import {AuthorityEditComponent} from './authority-edit/authority-edit.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LocalDataSource} from 'ng2-smart-table';
import {BaseListComponent} from '../../../@core/lib/base-list';
import {AUTHORITY_UPDATED} from '../../../@core/events/event.definition';
import {EventsService} from '../../../@core/events/event.service';
import {CacheService} from '../../../@core/data/cache.service';

@Component({
  selector: 'ngx-authority',
  styleUrls: ['./authority.component.scss'],
  templateUrl: './authority.component.html',
})
export class AuthorityComponent extends BaseListComponent implements AfterViewInit {
  settings;
  source: LocalDataSource = new LocalDataSource();

  constructor(private userService: UserService,
              public modalService: NgbModal,
              private cacheService: CacheService,
              private eventService: EventsService) {
    super(modalService);

    this.settings = {
      actions: false,
      columns: {
        name: {
          title: 'Name',
        },
        label: {
          title: 'Label',
        },
        description: {
          title: 'Description',
        },
        groupName: {
          title: 'Group',
        },
      },
    };


    this.eventService.on(AUTHORITY_UPDATED, () => {
      this.loadAsync();
    });
  }

  showModal() {
    const title = this.selectedEntity ? 'Edit Authority' : 'New Authority';
    super.showModal(AuthorityEditComponent, title, this.selectedEntity);
  }

  newEntity() {
    this.selectedEntity = null;
    this.showModal();
  }

  ngAfterViewInit() {
    if (!this.cacheService.authorities) {
      this.loadAsync();
    }else {
      this.source.load(this.cacheService.authorities);
    }
  }

  loadAsync() {
    this.userService.listAuthorities().subscribe(
      authorities => {
        this.source.load(authorities);
        this.cacheService.authorities = authorities;
      },
    )
  }
}
