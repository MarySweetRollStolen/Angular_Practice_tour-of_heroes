import { Component } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {

  public teams : Team[] = [];
  public teamheros : Hero[] = [];
  IsAuthorized: boolean = false;
  selectedTeam?: Team;

  getTeams(): void {
    this.teamService.getTeams()
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //   .subscribe(heroes => this.heroes = heroes);
  // }


  constructor(private teamService : TeamService, private userService : UserServiceService, private heroService : HeroService) {
    this.teams = this.teamService.getTeams();
  }

  ngOnInit(): void {
    // this.getHeroes();
  }

  checkAuth(username : string, password : string) : void {
    this.IsAuthorized = this.userService.checkAuth(username, password);
  }


  add(team: string): void {
    team = team.trim();
    if (!team) { return; }
    //newTeam = new Team(0, team, 0, []);
    //if(!this.teams.name.include(team))
    this.teamService.addTeam(team);
  }

}
