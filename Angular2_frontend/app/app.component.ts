import { Component } from '@angular/core';
import { MatchupPageComponent } from './matchup-page/matchup-page.component'

@Component({
    selector: 'my-app',
    directives: [MatchupPageComponent],
    template: `
      <div class="container-fluid">
      	<div class="row">
      		<div class="col-md-12 header">
            PokeBase
            <div class="nav">
              Home | API
            </div>
      		</div>
      	</div>
        <matchup-page></matchup-page>
      </div>
    `
})
export class AppComponent { }
