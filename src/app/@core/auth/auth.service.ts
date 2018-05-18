import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { HttpRequest } from '@angular/common/http';
import { ApiHandler } from '../data/api-handler.service';
import {EventsService} from '../events/event.service';
import {LOGGED_IN} from '../events/event.definition';
import {UserService} from '../data/users.service';
import {Router} from '@angular/router';
@Injectable()
export class AuthService {
  cachedRequests: Array<HttpRequest<any>> = [];

  private _authenticatedUser;

  public constructor(private api: ApiHandler,
                     private router: Router,
                     private eventService: EventsService,
                     private userService: UserService) {
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken() || '';
    // return a boolean reflecting
    // whether or not the token is expired
    return tokenNotExpired(null, token) && this.authenticatedUser;
  }

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }

  autoLogin() {
    const token = this.getToken();
    if (token && token.trim().length > 0) {
      this.userService.getMe().subscribe(me => {
        this.authenticatedUser = me;
        this.eventService.broadcast(LOGGED_IN, me);
        this.router.navigate(['pages']);
      },
        () => {
        this.router.navigate(['/auth/login']);
      });
    }
  }

  logout() {
    localStorage.clear();
    this.authenticatedUser = null;
    this.router.navigate(['/auth/login']);
  }

  hasAuthority(authority: string) {
    if (!this.authenticatedUser) return false;
    return this.authenticatedUser['authorities'].includes(authority);
  }


  get authenticatedUser() {
    return this._authenticatedUser;
  }

  set authenticatedUser(value) {
    this._authenticatedUser = value;
  }



}
