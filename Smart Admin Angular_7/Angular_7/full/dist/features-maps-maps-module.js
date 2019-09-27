(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-maps-maps-module"],{

/***/ "./src/app/features/maps/maps.component.html":
/*!***************************************************!*\
  !*** ./src/app/features/maps/maps.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Google Map', 'Custom Skins']\" icon=\"map-marker\"\n                        class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats class=\"hidden-3xs\"></sa-stats>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <button class=\"btn btn-default\" [ngClass]=\"{active: activeStyle == style}\" (click)=\"setStyle(style)\"\n              *ngFor=\"let style of styles\">{{style.name}}\n      </button>\n    </div>\n    <hr>\n  </div>\n  <!-- @link: widgetGrid directive  -->\n  <sa-widgets-grid >\n    <!-- row -->\n    <div class=\"row\">\n      <!-- NEW WIDGET START -->\n      <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <!-- @link: jarvisWidget -->\n        <div sa-widget   [editbutton]=\"false\" [deletebutton]=\"false\" [fullscreenbutton]=\"false\" color=\"white\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-map-marker\"></i> </span>\n            <h2>Map demo</h2>\n          </header>\n          <!-- widget div-->\n          <div   >\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\" >\n\n              <div id=\"map-canvas\"  >\n\n              </div>\n            </div>\n            <!-- end widget content data-gmap-src=\"xml/gmap/pins.xml\" -->\n          </div>\n          <!-- end widget div -->\n        </div>\n        <!-- end widget -->\n      </article>\n      <!-- WIDGET END -->\n    </div>\n    <!-- end row -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/maps/maps.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/maps/maps.component.ts ***!
  \*************************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_features_maps_shared_google_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/features/maps/shared/google-api.service */ "./src/app/features/maps/shared/google-api.service.ts");
/* harmony import */ var _app_features_maps_shared_map_style_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/features/maps/shared/map-style.service */ "./src/app/features/maps/shared/map-style.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapsComponent = /** @class */ (function () {
    function MapsComponent(apiService, styleService) {
        this.apiService = apiService;
        this.styleService = styleService;
        this.styles = [
            { key: 'colorful', name: 'Colorful', url: '/maps/colorful.json' },
            { key: 'greyscale', name: 'Greyscale', url: '/maps/greyscale.json' },
            { key: 'metro', name: 'Metro', url: '/maps/metro.json' },
            { key: 'mono-color', name: 'Mono-color', url: '/maps/mono-color.json' },
            { key: 'monochrome', name: 'Monochrome', url: '/maps/monochrome.json' },
            { key: 'nightvision', name: 'Nightvision', url: '/maps/nightvision.json' },
            {
                key: 'nightvision-highlight',
                name: 'Nightvision Highlight',
                url: '/maps/nightvision-highlight.json'
            },
            { key: 'old-paper', name: 'Old Paper', url: '/maps/old-paper.json' }
        ];
    }
    MapsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeStyle = this.styles[0];
        this.apiService.loadAPI.then(function (google) {
            _this.map = new google.maps.Map(document.getElementById('map-canvas'), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8
            });
            _this.fetchStyle(_this.activeStyle);
        });
    };
    MapsComponent.prototype.ngOnDestroy = function () {
    };
    MapsComponent.prototype.setStyle = function (style) {
        this.activeStyle = style;
        this.fetchStyle(style);
    };
    MapsComponent.prototype.fetchStyle = function (style) {
        var _this = this;
        this.styleService.fetchStyle(style).subscribe(function (styleDef) {
            _this.map.mapTypes.set(style.key, new google.maps.StyledMapType(styleDef, { name: style.name }));
            _this.map.setMapTypeId(style.key);
        });
    };
    MapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-maps',
            template: __webpack_require__(/*! ./maps.component.html */ "./src/app/features/maps/maps.component.html"),
        }),
        __metadata("design:paramtypes", [_app_features_maps_shared_google_api_service__WEBPACK_IMPORTED_MODULE_1__["GoogleAPIService"], _app_features_maps_shared_map_style_service__WEBPACK_IMPORTED_MODULE_2__["MapStyleService"]])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/features/maps/maps.module.ts":
/*!**********************************************!*\
  !*** ./src/app/features/maps/maps.module.ts ***!
  \**********************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _maps_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps.component */ "./src/app/features/maps/maps.component.ts");
/* harmony import */ var _shared_map_style_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/map-style.service */ "./src/app/features/maps/shared/map-style.service.ts");
/* harmony import */ var _shared_google_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/google-api.service */ "./src/app/features/maps/shared/google-api.service.ts");
/* harmony import */ var _maps_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maps.routing */ "./src/app/features/maps/maps.routing.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_maps_routing__WEBPACK_IMPORTED_MODULE_4__["routing"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
            declarations: [_maps_component__WEBPACK_IMPORTED_MODULE_1__["MapsComponent"]],
            exports: [_maps_component__WEBPACK_IMPORTED_MODULE_1__["MapsComponent"]],
            providers: [_shared_google_api_service__WEBPACK_IMPORTED_MODULE_3__["GoogleAPIService"], _shared_map_style_service__WEBPACK_IMPORTED_MODULE_2__["MapStyleService"]],
        })
    ], MapsModule);
    return MapsModule;
}());



/***/ }),

/***/ "./src/app/features/maps/maps.routing.ts":
/*!***********************************************!*\
  !*** ./src/app/features/maps/maps.routing.ts ***!
  \***********************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _maps_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps.component */ "./src/app/features/maps/maps.component.ts");


var routes = [
    {
        path: '',
        component: _maps_component__WEBPACK_IMPORTED_MODULE_1__["MapsComponent"]
    },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/features/maps/shared/google-api.service.ts":
/*!************************************************************!*\
  !*** ./src/app/features/maps/shared/google-api.service.ts ***!
  \************************************************************/
/*! exports provided: GoogleAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAPIService", function() { return GoogleAPIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_smartadmin_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/smartadmin.config */ "./src/app/core/smartadmin.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var url = 'https://maps.googleapis.com/maps/api/js?key=' + _app_core_smartadmin_config__WEBPACK_IMPORTED_MODULE_1__["config"].GOOGLE_API_KEY + '&callback=__onGoogleLoaded';
var GoogleAPIService = /** @class */ (function () {
    function GoogleAPIService() {
        var _this = this;
        if (window['google']) {
            this.loadAPI = Promise.resolve(window['google']);
        }
        else {
            this.loadAPI = new Promise(function (resolve) {
                window['__onGoogleLoaded'] = function (ev) {
                    console.log('google.maps loaded');
                    resolve(window['google']);
                };
                _this.loadScript();
            });
        }
    }
    GoogleAPIService.prototype.loadScript = function () {
        var node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
    };
    GoogleAPIService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GoogleAPIService);
    return GoogleAPIService;
}());



/***/ }),

/***/ "./src/app/features/maps/shared/map-style.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/maps/shared/map-style.service.ts ***!
  \***********************************************************/
/*! exports provided: MapStyleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapStyleService", function() { return MapStyleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapStyleService = /** @class */ (function () {
    function MapStyleService(jsonApiService) {
        this.jsonApiService = jsonApiService;
    }
    MapStyleService.prototype.fetchStyle = function (style) {
        return this.jsonApiService.fetch(style.url);
    };
    MapStyleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_core_services__WEBPACK_IMPORTED_MODULE_1__["JsonApiService"]])
    ], MapStyleService);
    return MapStyleService;
}());



/***/ })

}]);
//# sourceMappingURL=features-maps-maps-module.js.map