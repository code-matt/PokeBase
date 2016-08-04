import {Control, FORM_DIRECTIVES} from '@angular/common';
import {Component, Output, Input, EventEmitter, OnChanges, SimpleChange} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {PokemonService} from '../pokemon.service'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {Http, Headers, RequestOptions} from '@angular/http'
import {HTTP_PROVIDERS} from '@angular/http'


@Component({
  selector: 'search',
  styleUrls: ['app/search/search.component.css'],
  providers: [PokemonService,HTTP_PROVIDERS],
  template: `
    <div class="search">
      <div class="input-group">
        <span class="input-group-addon" id="pikagif"><img src="/assets/images/pikachu.gif" alt="@" height="20" /></span>
        <input [ngFormControl]="search" type="text" class="form-control" placeholder="Search by Pokemon name" aria-describedby="pikagif" (blur)="toggleFocus()" (focus)="toggleFocus()">
      </div>

        <div *ngFor="let item of items" class="search_result">
          <img src="http://localhost:8000/{{item.image}}" alt="@" height="40" width="40" />
          <span id="pokemon_name">{{item.name}}</span>
          <button type="button" (click)="load_pokemon($event,'left')">Left</button>
          <button type="button" (click)="load_pokemon($event,'right')">Right</button>
        </div>

    </div>
  `
})

export class SearchComponent implements OnChanges {

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    {console.log('changed')}
  }

  @Output() load = new EventEmitter();

  items: any;
  search = new Control();
  focus: boolean = false;
  constructor(private pokemonService: PokemonService) {
    this.search.valueChanges
      .debounceTime(500)
      .subscribe(s => pokemonService.search(s)
      .subscribe(data => this.items = data.pokemons))
  }
  toggleFocus(){
    this.focus = !this.focus
  }
  load_pokemon(event: any,pannel: any){
    name = $(event.target.parentNode).find('#pokemon_name').text();
    this.load.emit({
      pokemon: name,
      pannel: pannel
    })
  }
}
