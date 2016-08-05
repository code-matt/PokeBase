import {Component, Input} from '@angular/core'

@Component({
  selector: `moves-graph`,
  template: `
  <div *ngIf="pokemon.moves">
    <p *ngFor="let move of pokemon.moves">-{{move.name}}- Power:{{move.power}} Energy Cost:{{move.energy_cost}}</p>
  </div>
  `
})

export class MovesGraphComponent{
  @Input() pokemon = {};
}
