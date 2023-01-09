import { Injectable } from '@angular/core';
import { Team } from './team';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private heroService: HeroService) { }

  teams: Team[] = [
    { id: 12, name: 'Cat team' , amount: 4, members: [{ id: 12, name: 'Dr. Cat' },{ id: 13, name: 'Bombakitty' },{ id: 14, name: 'Cat' },{id: 15, name: 'Magnetcat'}]},
    { id: 13, name: 'Bombs team', amount: 2, members: [{ id: 13, name: 'Bombakitty' },{ id: 14, name: 'Cat'}]},
    { id: 14, name: 'Селера тім' , amount: 3, members: [{ id: 20, name:'TornadoCat' },{ id: 17, name: 'Kitty'},{ id: 18, name: 'Dr. Kitty'}]},
    { id: 14, name: 'Селера тім' , amount: 2, members: [{ id: 16, name: 'RubberCaty' },{ id: 17, name: 'Kitty'}]}
  ];

  getTeams() {
    return this.teams
  }

  addTeam(teamName: string) {
    let newTeam: Team = {id: 0, name: teamName , amount: 0, members: []};
    this.teams.push(newTeam);
  }
}
