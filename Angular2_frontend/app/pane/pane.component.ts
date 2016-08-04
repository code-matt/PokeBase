import {Component, Input} from '@angular/core'
import {PokemonService} from '../pokemon.service';

@Component({
  providers: [PokemonService],
  selector: `pane`,
  template: `
    {{pokemon}}
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
  constructor(private _pokemonService: PokemonService) {
  }
  @Input() pokemon = "Empty";

  load_data(pokemon: any)
  {
    console.log('loading data for ' + pokemon +'!')
  }

}
