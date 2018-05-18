import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import {EventsService} from '../../../@core/events/event.service';
import {LOGGED_IN} from '../../../@core/events/event.definition';
import {AuthService} from '../../../@core/auth/auth.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private authService: AuthService,
              private analyticsService: AnalyticsService,
              private eventService: EventsService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);

    this.eventService.on(LOGGED_IN, me => {
      // console.log(me);
      me['name'] = me['firstname'] + ' ' + me['lastname'];
      this.user = Object.assign(this.user, me);
    });

    const interval = setInterval(() => {
      const me = this.authService.authenticatedUser;
      if (me) {
        me['name'] = me['firstname'] + ' ' + me['lastname'];
        this.user = Object.assign(this.user, me);
        clearInterval(interval);
      }
    }, 500);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  logout() {
    this.authService.logout();
  }

  userMenuClicked(menu) {
    if (menu['title'] === 'Log out') {
      this.logout();
    }
  }
}
