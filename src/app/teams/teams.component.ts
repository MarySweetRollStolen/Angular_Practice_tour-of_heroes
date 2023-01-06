import { Component } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {

  public teams : Team[] = [];
  IsAuthorized: boolean = false;
  selectedTeam?: Team;

  getHeroes(): void {
    this.teamService.getTeams()
  }

  constructor(private teamService : TeamService, private userService : UserServiceService) {
    this.teams = this.teamService.getTeams();
   }

  ngOnInit(): void {
  }

  checkAuth(username : string, password : string) : void {
    this.IsAuthorized = this.userService.checkAuth(username, password);
  }


  add(team: string): void {
    team = team.trim();
    if (!team) { return; }
    //newTeam = new Team(0, team, 0, []);
    this.teamService.addTeam(team);
  }

}
