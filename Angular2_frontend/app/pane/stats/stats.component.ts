import {Component, Input, ViewChild, OnChanges} from '@angular/core'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card'
import {DonutTypesComponent} from '../donut-types/donut-types.component'

@Component({
  selector: `pokemon-stats`,
  styleUrls: ['app/pane/stats/stats.component.css'],
  directives: [MD_CARD_DIRECTIVES, DonutTypesComponent],
  template: `
  <div #stats *ngIf="pokemon.types" class="stats">
    <md-card class="shadowfilter">
     <md-card-content>
       <donut-types class="donut" [pokemon]="pokemon"></donut-types>
       <h2>{{pokemon.name}}</h2>
       <p>Attack: {{pokemon.attack}}</p>
       <p>Defence: {{pokemon.defence}}</p>
       <p>Stamina: {{pokemon.stamina}}</p>
     </md-card-content>
     <hr/>
    </md-card>
  </div>
  `
})

export class PokemonStatsComponent implements OnChanges{
  @Input() pokemon = {};
  @ViewChild('stats') stats;

  ngOnChanges(change: any){
    if(this.stats){
      this.stats.nativeElement.className = ""
      let timer = Observable.timer(10,10);
      timer.subscribe(r => this.stats.nativeElement.className = "stats");
    }
  }
}
