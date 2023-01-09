import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Team } from '../team';
import { TeamService } from '../team.service';


@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent {
  team: Team | undefined;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.teamService.getTeam(id);
  }
}
