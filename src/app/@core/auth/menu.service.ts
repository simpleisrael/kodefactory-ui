import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

import {MENU_ITEMS} from '../../pages/pages-menu';
import {NbMenuItem} from '@nebular/theme';
import {EventsService} from '../events/event.service';
import {ROLE_UPDATED} from '../events/event.definition';

@Injectable()
export class MenuService {

  constructor(private authService: AuthService, private eventService: EventsService) {
    eventService.on(ROLE_UPDATED, () => {
      authService.logout();
    });
  }


  getProcessedMenu() {
    const PROCESSED_MENU_ITEMS: NbMenuItem[] = [];

    const dashboardMenu = MENU_ITEMS.find(item => item['title'] === 'Dashboard');
    if (dashboardMenu) {
      // Disable Dashboard Menu
      // PROCESSED_MENU_ITEMS.push(dashboardMenu);
    }

    if (this.authService.hasAuthority('ROLE_ANALYTICS')) {
      const analyticsMenu = MENU_ITEMS.find(item => item['title'] === 'Analytics');
      if (analyticsMenu) {
        PROCESSED_MENU_ITEMS.push(analyticsMenu);
      }
    }

    if (this.authService.hasAuthority('ROLE_APPROVAL')) {
      const approvalMenu = MENU_ITEMS.find(item => item['title'] === 'Approvals');
      if (approvalMenu) {
        PROCESSED_MENU_ITEMS.push(approvalMenu);
      }
    }

    if (this.authService.hasAuthority('ROLE_SETTING')) {
      const settingsMenu = MENU_ITEMS.find(item => item['title'] === 'Settings');
      if (settingsMenu) {
        PROCESSED_MENU_ITEMS.push(settingsMenu);
      }
    }

    if (this.authService.hasAuthority('ROLE_CONFIG')) {
      const configMenu = MENU_ITEMS.find(item => item['title'] === 'Configuration');
      if (configMenu) {
        PROCESSED_MENU_ITEMS.push(configMenu);
      }
    }

    if (this.authService.hasAuthority('ROLE_PROFILE')) {
      const configMenu = MENU_ITEMS.find(item => item['title'] === 'Profile');
      if (configMenu) {
        PROCESSED_MENU_ITEMS.push(configMenu);
      }
    }

    return PROCESSED_MENU_ITEMS;
  }

}
