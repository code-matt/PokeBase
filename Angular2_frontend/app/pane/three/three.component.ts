import {Component,Input} from '@angular/core'

@Component({
  selector: `pokemon-model`,
  styleUrls: ['app/pane/three/three.component.css'],
  template: `
    <div class="three">
      three.js pokemon model component {{pokemon.name}}
    <div>
  `
})

export class PokemonModelComponent{
  @Input() pokemon = {};
}
