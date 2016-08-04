import {Component, Input} from '@angular/core'

@Component({
  selector: `moves-graph`,
  template: `
    d3.js bargraph of moves component {{pokemon.name}}
  `
})

export class MovesGraphComponent{
  @Input() pokemon = {};
}
