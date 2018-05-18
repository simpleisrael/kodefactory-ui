import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../@core/auth/auth.service';

@Component({
  selector: 'ngx-view-profile',
  templateUrl: './view-profile.component.html',
})
export class ViewProfileComponent implements OnInit {
  currentUser: any = {};
  roles = '';
  myDivision = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // console.log(this.currentUser);
    this.currentUser = this.authService.authenticatedUser;
    this.roles = this.currentUser['roles'].join(', ');
    this.myDivision = this.currentUser['division']['name'];
  }

}
