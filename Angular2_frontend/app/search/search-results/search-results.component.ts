import {Component,Input,OnChanges,Output,EventEmitter} from '@angular/core'

@Component({
  selector: `search-results`,
  styleUrls: ['app/search/search.component.css'],
  template: `
    <div class="search-results">
      <div *ngFor="let result of results" class="search-result">
        <img src="http://localhost:8000/{{result.image}}" alt="@" height="40" width="40" />
        <span id="pokemon_name">{{result.name}}</span>
        <button type="button" (click)="load_pokemon($event,'left')">Left</button>
        <button type="button" (click)="load_pokemon($event,'right')">Right</button>
      </div>
    </div>
  `
})
export class SearchResultsComponent implements OnChanges{
  @Input() results = []
  @Output() load = new EventEmitter();

  ngOnChanges(changes: any){
  }

  load_pokemon(event: any,pannel: any){
    name = event.target.parentNode.children[1].innerHTML;
    this.load.emit({
      pokemon: name,
      pannel: pannel
    })
  }
}
