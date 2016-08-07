import { Component } from '@angular/core';
import { MatchupPageComponent } from './matchup-page/matchup-page.component'
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FooterComponent } from './footer/footer.component'


@Component({
    selector: 'my-app',
    directives: [MatchupPageComponent, ROUTER_DIRECTIVES, FooterComponent],
    template: `
      <div class="container-fluid">
      	<div class="row">
      		<div class="col-md-12 header">
            PokéBase
            <div class="nav">
            <a routerLink="/matchup" routerLinkActive="active">Home</a>
            |
            <a routerLink="/api" routerLinkActive="active">API</a>
            </div>
      		</div>
      	</div>
        <router-outlet></router-outlet>
        <div class="row">
          <div class="col-md-12">
            <footer></footer>
          </div>
        </div>
      </div>
    `
})
export class AppComponent { }
