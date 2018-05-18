import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../@core/data/users.service';
import {AuthService} from '../../../@core/auth/auth.service';
import {NotificationService} from '../../../@core/utils/NotificationService';

@Component({
  selector: 'ngx-change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent implements OnInit {
  report = [];
  loading = false;
  data: any = {};

  constructor(private userService: UserService,
              private authService: AuthService,
              private notify: NotificationService) {
  }


  ngOnInit() {
  }


  changePassword() {
    if (this.data['newPassword'] !== this.data['confirmPassword']) {
      this.notify.error('Validation Error', 'Password does not match');
      return;
    }
    this.data['email'] = this.authService.authenticatedUser['email'];
    this.userService.changePassword(this.data).subscribe(
      res => {
        this.notify.success('Password Changed', res['message']);
        this.data = {};
      },
    )
  }


}
