import {Component,Input} from '@angular/core'

@Component({
  selector: `pokemon-model`,
  template: `
    three.js pokemon model component {{pokemon.name}}
  `
})

export class PokemonModelComponent{
  @Input() pokemon = {};
}
