import { Component } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  model = new User(0, 'username', 'your@mail', '');
  User2 = new User(1, 'user1', 'user1@mail', 'user1');
  Admin1 = new User(1, 'admin1', 'admin1@mail', 'admin1', true);
  
  constructor(private router: Router) { }
  
  submitted = false;
  onSubmit() { this.submitted = true; }

  onLogin() {
    if (this.model.username == this.User2.username && this.model.password == this.User2.password) {
      console.log('User2');
      this.router.navigateByUrl('/dashboard');
    } else if (this.model.username == this.Admin1.username && this.model.password == this.Admin1.password) {
      console.log('Admin1');
      this.router.navigateByUrl('/teams');
    } else {
      console.log('Wrong credentials');
    }
  }
}
