import {Role} from './Role';

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  enabled: boolean;
  roles: Role[];
}
