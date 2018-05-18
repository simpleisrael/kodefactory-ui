import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import {MenuService} from '../@core/auth/menu.service';
import {EventsService} from '../@core/events/event.service';
import {LOGGED_IN} from '../@core/events/event.definition';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]='menu'></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {

  menu;

  constructor(private menuService: MenuService, private eventService: EventsService) {
    this.menu = menuService.getProcessedMenu();

    eventService.on(LOGGED_IN, () => {
      this.menu = menuService.getProcessedMenu();
    });
  }

  // menu = MENU_ITEMS;
}
