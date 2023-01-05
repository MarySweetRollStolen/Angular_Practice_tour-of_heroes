import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {

  constructor() { }

  ngOnInit(): void {
  }

  HEROES = [
    { id: 12, name: 'Cat team' },
    { id: 13, name: 'Bombs team' },
    { id: 14, name: 'Селера тім' },
    { id: 15, name: 'Зірочки' },
    { id: 16, name: 'Glasses team' }
  ];

  TEAMS = this.HEROES;
}
