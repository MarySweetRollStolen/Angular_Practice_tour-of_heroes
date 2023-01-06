import { Injectable } from '@angular/core';
import { Team } from './team';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  getRandomIntArray(min: number, max: number, count: number) {
    let arr: number[] = [];
    for (let i = 0; i < count; i++) {
      arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
  }

  teams: Team[] = [
    { id: 12, name: 'Cat team' , amount: 0, members: this.getRandomIntArray(12, 20, 5)},
    { id: 13, name: 'Bombs team', amount: 0, members: this.getRandomIntArray(12, 20, 3)},
    { id: 14, name: 'Селера тім' , amount: 0, members: this.getRandomIntArray(12, 20, 4)},
    { id: 14, name: 'Селера тім' , amount: 0, members: this.getRandomIntArray(12, 20, 6)},
    { id: 15, name: 'Зірочки' , amount: 0, members: this.getRandomIntArray(12, 20, 7)},
    { id: 16, name: 'Glasses team', amount: 0, members: this.getRandomIntArray(12, 20, 2)}
  ];

  getTeams() {
    return this.teams
  }

  addTeam(teamName: string) {
    let newTeam: Team = {id: 0, name: teamName , amount: 0, members: []};
    this.teams.push(newTeam);
  }
}
