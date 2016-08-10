import {Component,Input,ViewChild,OnChanges} from '@angular/core'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { GlobalsComponent } from '../../../../shared/globals-component/globals.component'

@Component({
  selector: `pokemon-model`,
  styleUrls: ['app/components/matchup-page/pane/three/three.component.css'],
  template: `
    <div #three class="three" *ngIf="pokemon.moves">
      <img class="img-responsive shadowfilter" src="http://{{_host.getHost()}}/images/full/{{pokemon.poke_id}}.png">
    <div>
  `
})

export class PokemonModelComponent implements OnChanges{
  @Input() pokemon = {};
  @ViewChild('three') three
  constructor(private _host: GlobalsComponent){}
  ngOnChanges(changes: any){
    if(this.three){
      this.three.nativeElement.className = ""
      let timer = Observable.timer(10,10);
      timer.subscribe(r => this.three.nativeElement.className = "three");
    }
  }

}
