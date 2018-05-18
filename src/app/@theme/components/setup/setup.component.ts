
import {Component} from '@angular/core';
import {SetupService} from '../../../@core/data/setup.service';
import {NotificationService} from '../../../@core/utils/NotificationService';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-setup',
  templateUrl: './setup.component.html',
})
export class NgxSetupComponent {

  company = {};
  branch = {};
  user = {};
  submitted = false;
  step = 1;

  constructor(private setupService: SetupService,
              private router: Router,
              private notify: NotificationService) {

  }


  continueRegistration() {
    if (this.step === 3) {
      const company = this.company;
      const branch = this.branch;
      const user = this.user;

      const data = {company, branch, user};
      this.setupService.setup(data).subscribe(
        res => {
          this.notify.success('Setup Completed', 'Congratulations! You are good to go...');
          setTimeout(() => {
            this.router.navigate(['/auth/login'])
          }, 2000);
        },
      );
      // console.log(data);
    } else {
      this.step++;
    }
}

}
