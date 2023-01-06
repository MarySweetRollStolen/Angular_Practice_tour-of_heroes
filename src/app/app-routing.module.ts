import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/authentication', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'authentication', component: AuthenticationComponent},
  { path: 'teams', component: TeamsComponent},
  { path: 'team-detail/:id', component: TeamDetailComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }