import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  model = new User(0, 'username', 'your@mail', '');
  User2 = new User(1, 'user1', 'user1@mail', 'user1');
  Admin1 = new User(1, 'admin1', 'admin1@mail', 'admin1');
  
  submitted = false;
  onSubmit() { this.submitted = true; }


}
