import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {AuthService} from '../../../@core/auth/auth.service';
import {CacheService} from '../../../@core/data/cache.service';
import {NotificationService} from '../../../@core/utils/NotificationService';
import {UserService} from '../../../@core/data/users.service';
import {ActivityService} from '../../../@core/data/activity.service';
import {transformObject} from '../../../@core/utils/util';

@Component({
  selector: 'ngx-recent-activities',
  templateUrl: './recent-activities.component.html',
})
export class RecentActivitiesComponent implements OnInit {
  recentActivities = [];
  data: any = {};
  currentUser: any = null;
  users = [];
  loading = false;

  constructor(private authService: AuthService,
              private activityService: ActivityService,
              private cacheService: CacheService,
              private notify: NotificationService,
              private userService: UserService) {
  }


  ngOnInit() {
    this.data = {startDate: moment(new Date()).startOf('month'), endDate: moment(new Date()).endOf('day')};

    if (this.cacheService.users) {
      this.users = this.cacheService.users;
    } else {
      this.userService.listUsers().subscribe(
        result => {
          this.cacheService.users = result;
          this.users = this.cacheService.users;
        },
      );
    }

    this.currentUser = this.authService.authenticatedUser;
  }

  loadActivity() {
    this.loading = true;

  }



  selectUser(user) {
    this.currentUser = user;
  }

  modifyObject(field) {
    return transformObject(field);
  }

}
