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


  constructor(
    private route: ActivatedRoute,
    private heroService: TeamService,
    private location: Location
  ) { }

  ngOnInit(): void {
    
  }
}
