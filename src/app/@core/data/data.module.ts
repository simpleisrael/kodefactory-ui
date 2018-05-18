import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { StateService } from './state.service';
import { SmartTableService } from './smart-table.service';
import { PlayerService } from './player.service';
import { ApiHandler } from './api-handler.service';
import {SetupService} from './setup.service';
import {MicroUserService} from './micro-user.service';
import {CacheService} from './cache.service';
import {ActivityService} from './activity.service';

const SERVICES = [
  UserService,
  StateService,
  SmartTableService,
  PlayerService,
  ApiHandler,
  SetupService,
  MicroUserService,
  CacheService,
  ActivityService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
