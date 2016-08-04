import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component'
import {PaneComponent} from './pane/pane.component'
@Component({
    selector: 'my-app',
    directives: [SearchComponent,PaneComponent],
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
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <search></search>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-centered">
            <div class="col-md-6 col-sm-12">
              <pane></pane>
            </div>
            <div class="col-md-6 col-sm-12">
              <pane></pane>
            </div>
          </div>
        </div>
      </div>
    `
})
export class AppComponent { }
