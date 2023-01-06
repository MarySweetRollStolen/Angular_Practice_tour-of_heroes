import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  User2 = new User(1, 'user1', 'user1@mail', 'user1');
  Admin1 = new User(1, 'admin1', 'admin1@mail', 'admin1', true);

  constructor() { }

  checkAuth(username:string, password:string) : boolean {
    if (username == this.Admin1.username) {
      return true;
    } else {
      return false;
    }
  }
    
  
}
