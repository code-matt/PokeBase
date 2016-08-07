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
var ng2_nvd3_1 = require('ng2-nvd3');
var DonutTypesComponent = (function () {
    function DonutTypesComponent() {
    }
    DonutTypesComponent.prototype.ngOnInit = function () {
        this.options = {
            chart: {
                type: 'pieChart',
                width: 130,
                height: 130,
                donut: true,
                cornerRadius: true,
                padAngle: 0.05,
                title: "Types",
                margin: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                x: function (d) { return d.name; },
                y: function (d) { return d.pie; },
                showLabels: false,
                pie: {
                    startAngle: function (d) { return d.startAngle - Math.PI / 2; },
                    endAngle: function (d) { return d.endAngle - Math.PI / 2; }
                },
                duration: 500,
                legend: {
                    margin: {
                        top: 5,
                        right: 30,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };
        this.data = this.pokemonTypes(this.pokemon.types);
    };
    DonutTypesComponent.prototype.ngOnChanges = function (changes) {
        var arr = [];
        if (this.nvD3.chart) {
            var types = changes.pokemon.currentValue.types;
            this.nvD3.updateWithData(this.pokemonTypes(types));
        }
    };
    DonutTypesComponent.prototype.pokemonTypes = function (types) {
        var arr = [];
        types.map(function (obj) {
            obj.pie = types.length;
            arr.push(obj);
        });
        return arr;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DonutTypesComponent.prototype, "pokemon", void 0);
    __decorate([
        core_1.ViewChild(ng2_nvd3_1.nvD3), 
        __metadata('design:type', ng2_nvd3_1.nvD3)
    ], DonutTypesComponent.prototype, "nvD3", void 0);
    DonutTypesComponent = __decorate([
        core_1.Component({
            selector: "donut-types",
            styleUrls: ['app/pane/donut-types/donut-types.component.css'],
            directives: [ng2_nvd3_1.nvD3],
            template: "\n    <div class=\"donut\">\n      <nvd3 #nvD3 [options]=\"options\" [data]=\"data\"></nvd3>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], DonutTypesComponent);
    return DonutTypesComponent;
}());
exports.DonutTypesComponent = DonutTypesComponent;
//# sourceMappingURL=donut-types.component.js.map