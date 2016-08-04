import {Component, Input} from '@angular/core'

@Component({
  selector: `pokemon-stats`,
  template: `
    pokemon stats component {{pokemon.name}}
  `
})

export class PokemonStatsComponent{
  @Input() pokemon = {};
}
