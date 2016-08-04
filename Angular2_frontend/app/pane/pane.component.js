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
var PaneComponent = (function () {
    function PaneComponent() {
        this.pokemon = "Empty";
    }
    PaneComponent.prototype.load_data = function (pokemon) {
        console.log('loading data for ' + pokemon + '!');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PaneComponent.prototype, "pokemon", void 0);
    PaneComponent = __decorate([
        core_1.Component({
            selector: "pane",
            template: "\n    {{pokemon}}\n    <div class=\"row\">\n      <div class=\"col-md-5\">\n        three.js 3D model component\n      </div>\n      <div class=\"col-md-7\">\n        stats component\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        d3.js bargraph of moves component\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PaneComponent);
    return PaneComponent;
}());
exports.PaneComponent = PaneComponent;
//# sourceMappingURL=pane.component.js.map