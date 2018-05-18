/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS_TOKEN } from '@nebular/auth/auth.options';
import { getDeepFromObject } from '@nebular/auth/helpers';

import { NbAuthResult, NbAuthService } from '@nebular/auth/services/auth.service';

@Component({
  selector: 'ngx-register',
  styleUrls: ['./register.component.scss'],
  template: `
    <nb-auth-block>
      <h2 class="title">Sign Up</h2>
      <form (ngSubmit)="register()" #form="ngForm">

        <div *ngIf="showMessages.error && errors && errors.length > 0 && !submitted"
             class="alert alert-danger" role="alert">
          <div><strong>Oh snap!</strong></div>
          <div *ngFor="let error of errors">{{ error }}</div>
        </div>
        <div *ngIf="showMessages.success && messages && messages.length > 0 && !submitted"
             class="alert alert-success" role="alert">
          <div><strong>Hooray!</strong></div>
          <div *ngFor="let message of messages">{{ message }}</div>
        </div>

        <div class="form-group">
          <label for="input-name" class="sr-only">First Name</label>
          <input name="firstName" [(ngModel)]="user.firstname" id="input-name" #firstName="ngModel"
                 class="form-control" placeholder="First Name"
                 [class.form-control-danger]="firstName.invalid && firstName.touched"
                 [required]="getConfigValue('forms.validation.firstName.required')"
                 [minlength]="getConfigValue('forms.validation.firstName.minLength')"
                 [maxlength]="getConfigValue('forms.validation.firstName.maxLength')"
                 autofocus>
          <small class="form-text error" *ngIf="firstName.invalid && firstName.touched && firstName.errors?.required">
            First Name is required!
          </small>
          <small
            class="form-text error"
            *ngIf="firstName.invalid && firstName.touched &&
                  (firstName.errors?.minlength || firstName.errors?.maxlength)">
            Full name should contains
            from {{getConfigValue('forms.validation.password.minLength')}}
            to {{getConfigValue('forms.validation.password.maxLength')}}
            characters
          </small>
        </div>

        <div class="form-group">
          <label for="input-last-name" class="sr-only">Last Name</label>
          <input name="lastName" [(ngModel)]="user.lastname" id="input-last-name" #lastName="ngModel"
                 class="form-control" placeholder="Last Name"
                 [class.form-control-danger]="lastName.invalid && lastName.touched"
                 [required]="getConfigValue('forms.validation.lastName.required')"
                 [minlength]="getConfigValue('forms.validation.lastName.minLength')"
                 [maxlength]="getConfigValue('forms.validation.lastName.maxLength')"
                 autofocus>
          <small class="form-text error" *ngIf="lastName.invalid && lastName.touched && lastName.errors?.required">
            Last Name is required!
          </small>
          <small
            class="form-text error"
            *ngIf="lastName.invalid && lastName.touched && (lastName.errors?.minlength || lastName.errors?.maxlength)">
            Full name should contains
            from {{getConfigValue('forms.validation.password.minLength')}}
            to {{getConfigValue('forms.validation.password.maxLength')}}
            characters
          </small>
        </div>

        <div class="form-group">
          <label for="input-email" class="sr-only">Email address</label>
          <input name="email" [(ngModel)]="user.email" id="input-email" #email="ngModel"
                 class="form-control" placeholder="Email address" pattern=".+@.+\..+"
                 [class.form-control-danger]="email.invalid && email.touched"
                 [required]="getConfigValue('forms.validation.email.required')">
          <small class="form-text error" *ngIf="email.invalid && email.touched && email.errors?.required">
            Email is required!
          </small>
          <small class="form-text error"
                 *ngIf="email.invalid && email.touched && email.errors?.pattern">
            Email should be the real one!
          </small>
        </div>

        <div class="form-group">
          <label for="input-password" class="sr-only">Password</label>
          <input name="password" [(ngModel)]="user.password" type="password" id="input-password"
                 class="form-control" placeholder="Password" #password="ngModel"
                 [class.form-control-danger]="password.invalid && password.touched"
                 [required]="getConfigValue('forms.validation.password.required')"
                 [minlength]="getConfigValue('forms.validation.password.minLength')"
                 [maxlength]="getConfigValue('forms.validation.password.maxLength')">
          <small class="form-text error" *ngIf="password.invalid && password.touched && password.errors?.required">
            Password is required!
          </small>
          <small
            class="form-text error"
            *ngIf="password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)">
            Password should contains
            from {{ getConfigValue('forms.validation.password.minLength') }}
            to {{ getConfigValue('forms.validation.password.maxLength') }}
            characters
          </small>
        </div>

        <div class="form-group">
          <label for="input-re-password" class="sr-only">Repeat password</label>
          <input
            name="rePass" [(ngModel)]="user.confirmPassword" type="password" id="input-re-password"
            class="form-control" placeholder="Confirm Password" #rePass="ngModel"
            [class.form-control-danger]="(rePass.invalid || password.value != rePass.value) && rePass.touched"
            [required]="getConfigValue('forms.validation.password.required')">
          <small class="form-text error"
                 *ngIf="rePass.invalid && rePass.touched && rePass.errors?.required">
            Password confirmation is required!
          </small>
          <small
            class="form-text error"
            *ngIf="rePass.touched && password.value != rePass.value && !rePass.errors?.required">
            Password does not match the confirm password.
          </small>
        </div>

        <div class="form-group accept-group col-sm-12" *ngIf="getConfigValue('forms.register.terms')">
          <nb-checkbox name="terms" [(ngModel)]="user.terms" [required]="getConfigValue('forms.register.terms')">
            Agree to <a href="#" target="_blank"><strong>Terms & Conditions</strong></a>
          </nb-checkbox>
        </div>

        <button [disabled]="submitted || !form.valid" class="btn btn-block btn-hero-success"
                [class.btn-pulse]="submitted">
          Register
        </button>
      </form>

      <div class="links">
        <small class="form-text">
          Already have an account? <a routerLink="../login"><strong>Sign in</strong></a>
        </small>
      </div>
    </nb-auth-block>
  `,
})
export class NgxRegisterComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  provider: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  constructor(protected service: NbAuthService,
              @Inject(NB_AUTH_OPTIONS_TOKEN) protected config = {},
              protected router: Router) {

    this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
    this.showMessages = this.getConfigValue('forms.register.showMessages');
    this.provider = this.getConfigValue('forms.register.provider');
  }

  register(): void {
    this.errors = this.messages = [];
    this.submitted = true;

    this.service.register(this.provider, this.user).subscribe((result: NbAuthResult) => {
      this.submitted = false;
      if (result.isSuccess()) {
        this.messages = result.getMessages();
      } else {

        if (result['response'] && result['response']['error'] && result['response']['error']['message']) {
          this.errors = [result['response']['error']['message']];
        }
        else if (result['response'] && result['response']['message']) {
          this.errors = [result['response']['message']];
        }
        else {
          this.errors = result.getErrors();
        }

      }

      const redirect = result.getRedirect();
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl(redirect);
        }, this.redirectDelay);
      }
    });

    // this.service.
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.config, key, null);
  }
}
