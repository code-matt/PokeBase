import {Component, Input} from '@angular/core'

import {PokemonService} from '../pokemon.service';
import {PokemonStatsComponent} from './stats/stats.component';
import {PokemonModelComponent} from './three/three.component';
import {MovesGraphComponent} from './moves-graph/moves-graph.component';

@Component({
  providers: [PokemonService],
  directives: [PokemonStatsComponent, PokemonModelComponent, MovesGraphComponent],
  selector: `pane`,
  template: `
    {{pokemon.name}}
    <div class="row">
      <div class="col-md-5">
        <pokemon-model></pokemon-model>
      </div>
      <div class="col-md-7">
        <pokemon-stats></pokemon-stats>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <moves-graph></moves-graph>
      </div>
    </div>
  `
})
export class PaneComponent{
  constructor(private _pokemonService: PokemonService) {
  }
  @Input() pokemon = {};

  load_data(pokemon: any)
  {
    console.log('loading data for ' + pokemon +'!')
    this._pokemonService.search(pokemon)
      .subscribe(res => this.pokemon = res.pokemons[0],
        error => console.log(error))
  }

}
