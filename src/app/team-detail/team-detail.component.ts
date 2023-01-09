import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent {
  team: Team | undefined;
  heroes$!: Observable<Hero[]>;
  allHeros: Hero[] = [];
  private searchTerms = new Subject<string>();

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getTeam();
    this.getHeroes();
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.allHeros = heroes);
  }

  getTeam(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.team = this.teamService.getTeam(id);
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  addNewMember(hero: Hero): void {
    if(this.team && !this.team.members.includes(hero)){
      this.team.members.push(hero);
    };  
  }



}
