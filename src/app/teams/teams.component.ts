import { Component } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {

  public teams : Team[] = [];
  constructor(private teamService : TeamService) {
    this.teams = this.teamService.getTeams();
   }

  ngOnInit(): void {
  }

  add(team: string): void {
    team = team.trim();
    if (!team) { return; }
    //newTeam = new Team(0, team, 0, []);
    this.teamService.addTeam(team);
  }

}
