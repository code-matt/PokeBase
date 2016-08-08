import { provideRouter, RouterConfig } from '@angular/router';
import { MatchupPageComponent } from './components/matchup-page/matchup-page.component';
import { ApiPageComponent } from './components/api-page/api-page.component'

const routes: RouterConfig = [
  { path: 'matchup', component: MatchupPageComponent },
  { path: 'api', component: ApiPageComponent },
  { path: '', redirectTo: '/matchup', pathMatch: 'full' },
];

export const appRouterProviders = [
  provideRouter(routes)
];
