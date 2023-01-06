import { Injectable } from '@angular/core';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  teams: Team[] = [
    { id: 12, name: 'Cat team' , amount: 0, members: []},
    { id: 13, name: 'Bombs team', amount: 0, members: []},
    { id: 14, name: 'Селера тім' , amount: 0, members: []},
    { id: 14, name: 'Селера тім' , amount: 0, members: []},
    { id: 15, name: 'Зірочки' , amount: 0, members: []},
    { id: 16, name: 'Glasses team', amount: 0, members: [] }
  ];

  getTeams() {
    return this.teams
  }

  addTeam(teamName: string) {
    let newTeam: Team = {id: 0, name: teamName , amount: 0, members: []};
    this.teams.push(newTeam);
  }
}
