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
var core_1 = require('@angular/core');
var MovesGraphComponent = (function () {
    function MovesGraphComponent() {
        this.pokemon = {};
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MovesGraphComponent.prototype, "pokemon", void 0);
    MovesGraphComponent = __decorate([
        core_1.Component({
            selector: "moves-graph",
            styleUrls: ['app/pane/moves-graph/moves-graph.component.css'],
            template: "\n  <div *ngIf=\"pokemon.moves\">\n    <p *ngFor=\"let move of pokemon.moves\">-{{move.name}}- Power:{{move.power}} Energy Cost:{{move.energy_cost}}</p>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MovesGraphComponent);
    return MovesGraphComponent;
}());
exports.MovesGraphComponent = MovesGraphComponent;
//# sourceMappingURL=moves-graph.component.js.map