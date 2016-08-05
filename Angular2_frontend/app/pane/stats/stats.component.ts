import {Component, Input} from '@angular/core'

@Component({
  selector: `pokemon-stats`,
  styleUrls: ['app/pane/stats/stats.component.css'],
  template: `
  <div class="stats">
    <p>Name: {{pokemon.name}}</p>
    <p>Attack: {{pokemon.attack}}</p>
    <p>Stamina: {{pokemon.stamina}}</p>
    <p>Defence: {{pokemon.defence}}</p>
  </div>
  `
})

export class PokemonStatsComponent{
  @Input() pokemon = {};
}
