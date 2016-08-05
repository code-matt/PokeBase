import {Component, Input} from '@angular/core'

@Component({
  selector: `moves-graph`,
  styleUrls: ['app/pane/moves-graph/moves-graph.component.css'],
  template: `
    d3.js chart component
  `
})

export class MovesGraphComponent{
  @Input() pokemon = {};
}
