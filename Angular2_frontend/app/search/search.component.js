"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var pokemon_service_1 = require('../pokemon.service');
require('rxjs/add/operator/map');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
var http_1 = require('@angular/http');
var SearchComponent = (function () {
    function SearchComponent(pokemonService) {
        var _this = this;
        this.pokemonService = pokemonService;
        this.load = new core_1.EventEmitter();
        this.search = new common_1.Control();
        this.focus = false;
        this.search.valueChanges
            .debounceTime(500)
            .subscribe(function (s) { return pokemonService.search(s)
            .subscribe(function (data) { return _this.items = data.pokemons; }); });
    }
    SearchComponent.prototype.ngOnChanges = function (changes) {
        {
            console.log('changed');
        }
    };
    SearchComponent.prototype.toggleFocus = function () {
        this.focus = !this.focus;
    };
    SearchComponent.prototype.load_pokemon = function (event, pannel) {
        name = $(event.target.parentNode).find('#pokemon_name').text();
        this.load.emit({
            pokemon: name,
            pannel: pannel
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchComponent.prototype, "load", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            styleUrls: ['app/search/search.component.css'],
            providers: [pokemon_service_1.PokemonService, http_1.HTTP_PROVIDERS],
            template: "\n    <div class=\"search\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\" id=\"pikagif\"><img src=\"/assets/images/pikachu.gif\" alt=\"@\" height=\"20\" /></span>\n        <input [ngFormControl]=\"search\" type=\"text\" class=\"form-control\" placeholder=\"Search by Pokemon name\" aria-describedby=\"pikagif\" (blur)=\"toggleFocus()\" (focus)=\"toggleFocus()\">\n      </div>\n\n        <div *ngFor=\"let item of items\" class=\"search_result\">\n          <img src=\"http://localhost:8000/{{item.image}}\" alt=\"@\" height=\"40\" width=\"40\" />\n          <span id=\"pokemon_name\">{{item.name}}</span>\n          <button type=\"button\" (click)=\"load_pokemon($event,'left')\">Left</button>\n          <button type=\"button\" (click)=\"load_pokemon($event,'right')\">Right</button>\n        </div>\n\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [pokemon_service_1.PokemonService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map