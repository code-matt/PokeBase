import { provideRouter, RouterConfig } from '@angular/router';
import { MatchupPageComponent } from './matchup-page/matchup-page.component';

const routes: RouterConfig = [
  { path: 'matchup', component: MatchupPageComponent },
  { path: '', redirectTo: '/matchup', pathMatch: 'full' },
];

export const appRouterProviders = [
  provideRouter(routes)
];
