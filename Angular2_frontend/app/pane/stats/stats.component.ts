import {Component, Input} from '@angular/core'
import {MD_CARD_DIRECTIVES} from '@angular2-material/card'

@Component({
  selector: `pokemon-stats`,
  styleUrls: ['app/pane/stats/stats.component.css'],
  directives: [MD_CARD_DIRECTIVES],
  template: `
  <div *ngIf="pokemon.moves" class="stats">
    <md-card>
     <md-card-content>
       <h2>{{pokemon.name}}</h2>
       <p>Attack: {{pokemon.attack}}</p>
       <p>Defence: {{pokemon.defence}}</p>
       <p>Stamina: {{pokemon.stamina}}</p>
     </md-card-content>
     <hr/>
     <md-card-footer>
       {{pokemon.description}}
     </md-card-footer>
    </md-card>
  </div>
  `
})

export class PokemonStatsComponent{
  @Input() pokemon = {};
}
