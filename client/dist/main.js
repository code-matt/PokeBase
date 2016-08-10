"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var app_routes_1 = require('./app/app.routes');
var core_2 = require('@angular/core');
var globals_component_1 = require('./app/shared/globals-component/globals.component');
var http_1 = require('@angular/http');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.AppComponent, [
    app_routes_1.appRouterProviders,
    globals_component_1.GlobalsComponent,
    core_2.provide(Window, { useValue: window }),
    http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=main.js.map