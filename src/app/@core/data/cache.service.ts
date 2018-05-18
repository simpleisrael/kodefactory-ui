import {Injectable} from '@angular/core';
import {EventsService} from '../events/event.service';
import {UPDATE_USER_CACHE} from '../events/event.definition';

@Injectable()
export class CacheService {

  constructor(private eventService: EventsService) {
    this.eventService.on(UPDATE_USER_CACHE, (users) => {
      this._users = users;
    });
  }

  private _contacts;

  get contacts() {
    return this._contacts;
  }

  set contacts(value) {
    this._contacts = value;
  }

  private _users;

  get users() {
    return this._users;
  }

  set users(value) {
    this._users = value;
  }

  private _hospitals;

  get hospitals() {
    return this._hospitals;
  }

  set hospitals(value) {
    this._hospitals = value;
  }

  private _pharmacy;

  get pharmacy() {
    return this._pharmacy;
  }

  set pharmacy(value) {
    this._pharmacy = value;
  }

  private _distributors;

  get distributors() {
    return this._distributors;
  }

  set distributors(value) {
    this._distributors = value;
  }

  private _roles;

  get roles() {
    return this._roles;
  }

  set roles(value) {
    this._roles = value;
  }

  private _authorities;

  get authorities() {
    return this._authorities;
  }

  set authorities(value) {
    this._authorities = value;
  }

  private _departments;

  get departments() {
    return this._departments;
  }

  set departments(value) {
    this._departments = value;
  }

  private _units;

  get units() {
    return this._units;
  }

  set units(value) {
    this._units = value;
  }

  private _teams;

  get teams() {
    return this._teams;
  }

  set teams(value) {
    this._teams = value;
  }

  private _specialities;

  get specialities() {
    return this._specialities;
  }

  set specialities(value) {
    this._specialities = value;
  }
}
