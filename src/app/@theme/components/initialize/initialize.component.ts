import {AfterViewInit, Component} from '@angular/core';
import {SetupService} from '../../../@core/data/setup.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../@core/auth/auth.service';

@Component({
  selector: 'ngx-initialize',
  template: `
    <nb-auth-block>
      <h1 style="text-align:center;">Initializing...</h1>
    </nb-auth-block>
  `,
})
export class InitializeComponent implements AfterViewInit {

  constructor(private authService: AuthService,
              private router: Router) {

  }

  ngAfterViewInit() {
    if (this.authService.getToken()) {
      this.authService.autoLogin();
      return;
    }

    this.router.navigate(['/auth/login']);
  }

}
