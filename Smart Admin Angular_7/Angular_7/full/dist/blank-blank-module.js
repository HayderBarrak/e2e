(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blank-blank-module"],{

/***/ "./src/app/features/miscellaneous/blank/blank-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/miscellaneous/blank/blank-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: BlankRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankRoutingModule", function() { return BlankRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blank_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank.component */ "./src/app/features/miscellaneous/blank/blank.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _blank_component__WEBPACK_IMPORTED_MODULE_2__["BlankComponent"],
    }];
var BlankRoutingModule = /** @class */ (function () {
    function BlankRoutingModule() {
    }
    BlankRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], BlankRoutingModule);
    return BlankRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/miscellaneous/blank/blank.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/features/miscellaneous/blank/blank.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n\n\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Page Header', 'Subtitle']\" icon=\"home\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n\n  <!--\n      The ID \"widget-grid\" will start to initialize all widgets below\n      You do not need to use widgets if you dont want to. Simply remove\n      the <section></section> and you can use wells or panels instead\n      -->\n  <!-- widget grid -->\n  <sa-widgets-grid>\n    <!-- row -->\n    <div class=\"row\">\n      <!-- NEW WIDGET START -->\n      <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget>\n          <!-- widget options:\n              usage: <div sa-widget id=\"wid-id-0\" [editbutton]=\"false\">\n              [colorbutton]=\"false\"\n              [editbutton]=\"false\"\n              [togglebutton]=\"false\"\n              [deletebutton]=\"false\"\n              [fullscreenbutton]=\"false\"\n              [custombutton]=\"false\"\n              [collapsed]=\"true\"\n              [sortable]=\"false\"\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-comments\"></i> </span>\n\n            <h2>Widget Title </h2>\n          </header>\n          <!-- widget div-->\n          <div>\n            <!-- widget content -->\n            <div class=\"widget-body\">\n              <!-- this is what the user will see -->\n            </div>\n            <!-- end widget content -->\n          </div>\n          <!-- end widget div -->\n        </div>\n        <!-- end widget -->\n      </article>\n      <!-- WIDGET END -->\n    </div>\n    <!-- end row -->\n    <!-- row -->\n    <div class=\"row\">\n      <!-- a blank row to get started -->\n      <div class=\"col-sm-12\">\n        <!-- your contents here -->\n      </div>\n    </div>\n    <!-- end row -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/miscellaneous/blank/blank.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/miscellaneous/blank/blank.component.ts ***!
  \*****************************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
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

var BlankComponent = /** @class */ (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.ngOnInit = function () {
    };
    BlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blank',
            template: __webpack_require__(/*! ./blank.component.html */ "./src/app/features/miscellaneous/blank/blank.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./src/app/features/miscellaneous/blank/blank.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/miscellaneous/blank/blank.module.ts ***!
  \**************************************************************/
/*! exports provided: BlankModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankModule", function() { return BlankModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _blank_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank-routing.module */ "./src/app/features/miscellaneous/blank/blank-routing.module.ts");
/* harmony import */ var _blank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blank.component */ "./src/app/features/miscellaneous/blank/blank.component.ts");
/* harmony import */ var _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/layout */ "./src/app/shared/layout/index.ts");
/* harmony import */ var _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/stats/stats.module */ "./src/app/shared/stats/stats.module.ts");
/* harmony import */ var _app_shared_widgets_smartadmin_widgets_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/widgets/smartadmin-widgets.module */ "./src/app/shared/widgets/smartadmin-widgets.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BlankModule = /** @class */ (function () {
    function BlankModule() {
    }
    BlankModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _blank_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlankRoutingModule"],
                _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__["SmartadminLayoutModule"],
                _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__["StatsModule"],
                _app_shared_widgets_smartadmin_widgets_module__WEBPACK_IMPORTED_MODULE_6__["SmartadminWidgetsModule"],
            ],
            declarations: [_blank_component__WEBPACK_IMPORTED_MODULE_3__["BlankComponent"]]
        })
    ], BlankModule);
    return BlankModule;
}());



/***/ })

}]);
//# sourceMappingURL=blank-blank-module.js.map