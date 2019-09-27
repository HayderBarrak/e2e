(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error404-error404-module"],{

/***/ "./src/app/features/miscellaneous/error404/error404-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/miscellaneous/error404/error404-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: Error404RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404RoutingModule", function() { return Error404RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error404.component */ "./src/app/features/miscellaneous/error404/error404.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _error404_component__WEBPACK_IMPORTED_MODULE_2__["Error404Component"]
    }];
var Error404RoutingModule = /** @class */ (function () {
    function Error404RoutingModule() {
    }
    Error404RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], Error404RoutingModule);
    return Error404RoutingModule;
}());



/***/ }),

/***/ "./src/app/features/miscellaneous/error404/error404.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/features/miscellaneous/error404/error404.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <!-- row -->\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"text-center error-box\">\n            <h1 class=\"error-text-2 bounceInDown animated\"> Error 404 <span class=\"particle particle--c\"></span><span class=\"particle particle--a\"></span><span class=\"particle particle--b\"></span></h1>\n\n            <h2 class=\"font-xl\"><strong><i class=\"fa fa-fw fa-warning fa-lg text-warning\"></i> Page\n              <u>Not</u> Found</strong></h2>\n            <br>\n\n            <p class=\"lead\">\n              The page you requested could not be found, either contact your webmaster or try again. Use\n              your browsers <b>Back</b> button to navigate to the page you have prevously come from\n            </p>\n\n            <p class=\"font-md\">\n              <b>... That didn't work on you? Dang. May we suggest a search, then?</b>\n            </p>\n            <br>\n\n            <div class=\"error-search well well-lg padding-10\">\n              <div class=\"input-group\">\n                <input class=\"form-control input-lg\" type=\"text\" placeholder=\"let's try this again\" id=\"search-error\">\n                <span class=\"input-group-addon\"><i class=\"fa fa-fw fa-lg fa-search\"></i></span>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <ul class=\"list-inline\">\n                  <li>\n                    &#xA0;<a (click)=\"(null)\">Dashbaord</a>&#xA0;\n                  </li>\n                  <li>\n                    .\n                  </li>\n                  <li>\n                    &#xA0;<a (click)=\"(null)\">Inbox (14)</a>&#xA0;\n                  </li>\n                  <li>\n                    .\n                  </li>\n                  <li>\n                    &#xA0;<a (click)=\"(null)\">Calendar</a>&#xA0;\n                  </li>\n                  <li>\n                    .\n                  </li>\n                  <li>\n                    &#xA0;<a (click)=\"(null)\">Gallery</a>&#xA0;\n                  </li>\n                  <li>\n                    .\n                  </li>\n                  <li>\n                    &#xA0;<a (click)=\"(null)\">My Profile</a>&#xA0;\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- end row -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/miscellaneous/error404/error404.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/miscellaneous/error404/error404.component.ts ***!
  \***********************************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error404',
            template: __webpack_require__(/*! ./error404.component.html */ "./src/app/features/miscellaneous/error404/error404.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/features/miscellaneous/error404/error404.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/miscellaneous/error404/error404.module.ts ***!
  \********************************************************************/
/*! exports provided: Error404Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Module", function() { return Error404Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _error404_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error404-routing.module */ "./src/app/features/miscellaneous/error404/error404-routing.module.ts");
/* harmony import */ var _error404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error404.component */ "./src/app/features/miscellaneous/error404/error404.component.ts");
/* harmony import */ var _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/layout */ "./src/app/shared/layout/index.ts");
/* harmony import */ var _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/stats/stats.module */ "./src/app/shared/stats/stats.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Error404Module = /** @class */ (function () {
    function Error404Module() {
    }
    Error404Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _error404_routing_module__WEBPACK_IMPORTED_MODULE_2__["Error404RoutingModule"],
                _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__["SmartadminLayoutModule"],
                _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__["StatsModule"],
            ],
            declarations: [_error404_component__WEBPACK_IMPORTED_MODULE_3__["Error404Component"]]
        })
    ], Error404Module);
    return Error404Module;
}());



/***/ })

}]);
//# sourceMappingURL=error404-error404-module.js.map