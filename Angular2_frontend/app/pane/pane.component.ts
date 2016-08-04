import {Component} from '@angular/core'

@Component({
  selector: `pane`,
  template: `
    <div class="row">
      <div class="col-md-5">
        three.js 3D model component
      </div>
      <div class="col-md-7">
        stats component
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        d3.js bargraph of moves component
      </div>
    </div>
  `
})
export class PaneComponent{

}
