import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {PasswordReset} from '../model/PasswordReset';
import {Password} from '../model/Password';
import {RoleAuthority} from '../model/RoleAuthority';
import {AssignAuthorities} from '../model/AssignAuthorities';
import {UserRole} from '../model/UserRole';
import {User} from '../model/User';
import {Role} from '../model/Role';
import {Authority} from '../model/Authority';
import {ApiHandler} from './api-handler.service';

let counter = 0;

@Injectable()
export class UserService {

  private users = {
    nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
    eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
    jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
    lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
    alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
    kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
  };

  private userArray: any[];

  constructor(private api: ApiHandler) {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return Observable.of(this.users);
  }

  getUserArray(): Observable<any[]> {
    return Observable.of(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return Observable.of(this.userArray[counter]);
  }




  getMe() {
    return this.api.get('microuser-service/me');
  }


  /**
   * Change existing user's password
   * @param {Password} data
   * @returns {Observable<any>}
   */
  changePassword(data) {
    return this.api.post('microuser-service/change-password', data);
  }


  /**
   * Save or update a Role
   * @param {Role} data
   * @returns {Observable<any>}
   */
  saveRole(data: Role) {
    return this.post('save-role', data);
  }


  /**
   * Save or update authority
   * @param {Role} data
   * @returns {Observable<any>}
   */
  saveAuthority(data: Authority) {
    return this.post('save-authority', data);
  }


  /**
   * Save or update a user
   * @param {User} data
   * @returns {Observable<any>}
   */
  saveUser(data: User) {
    return this.post('save-user', data);
  }


  /**
   * Assign Role to user
   * @param {UserRole} data
   * @returns {Observable<any>}
   */
  assignRole(data: UserRole) {
    return this.post('assign-role', data);
  }


  /**
   * Checks if the user with the specified id have the role with the specified id
   * @param {UserRole} data
   * @returns {Observable<any>}
   */
  hasRole(data: UserRole) {
    return this.post('has-role', data);
  }


  /**
   * List all available roles
   * @returns {Observable<any>}
   */
  listRoles() {
    return this.get('list-roles');
  }


  /**
   * Lists all the available authorities
   * @returns {Observable<any>}
   */
  listAuthorities() {
    return this.get('list-authorities');
  }


  /**
   * List all registered users
   * @returns {Observable<any>}
   */
  listUsers() {
    return this.get('list-users');
  }


  /**
   * Assign all the specified authorities to the specified role
   * @param {AssignAuthorities} data
   * @returns {Observable<any>}
   */
  assignAuthorities(data: AssignAuthorities) {
    return this.post('assign-authorities', data);
  }


  /**
   * Checks if the specified role have the specified authority
   * @param {RoleAuthority} data
   * @returns {Observable<any>}
   */
  roleHasAuthority(data: RoleAuthority) {
    return this.post('role-has-authority', data);
  }


  /**
   * Reset the user's existing password
   * @param {Password} data
   * @returns {Observable<any>}
   */
  resetPassword(data: Password) {
    return this.post('reset-password', data);
  }


  /**
   * Generate a new token to reset a password
   * @param {PasswordReset} data
   * @returns {Observable<any>}
   */
  initiatePasswordReset(data: PasswordReset) {
    return this.post('initiate-password-reset', data);
  }


  /**
   * Validate token received from user's email after password reset have been initiated
   * @param {PasswordReset} data
   * @returns {Observable<any>}
   */
  validatePasswordResetToken(data: PasswordReset) {
    return this.post('validate-token', data);
  }



  /**
   * Specific post implementation
   * @param {string} context
   * @param data
   * @returns {Observable<any>}
   */
  private post(context: string, data: any) {
    return this.api.post('user-service/' + context, data);
  }

  private get(context: string) {
    return this.api.get('user-service/' + context);
  }
}
