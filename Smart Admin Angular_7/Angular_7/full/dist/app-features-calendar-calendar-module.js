(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-features-calendar-calendar-module"],{

/***/ "./src/app/features/calendar/calendar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/features/calendar/calendar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Calendar', 'Add Events']\" icon=\"calendar\"\n                        class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n\n\n  <sa-widgets-grid>\n\n    <div class=\"row\"  *ngIf=\"calendar$ | async as calendar \">\n\n      <article class=\"col-sm-12 col-md-12 col-lg-3\">\n\n        <div sa-widget color=\"blueDark\"  [editbutton]=\"false\" [colorbutton]=\"false\" [togglebutton]=\"false\"\n                   [fullscreenbutton]=\"false\" [deletebutton]=\"false\">\n          <header>\n            <h2> Add Events </h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body\">\n\n              <sa-add-sample-event (addSample)=\"onAddSample($event)\"></sa-add-sample-event>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"well well-sm\" id=\"event-container\">\n\n\n          <sa-event-samples (changeSampleDrop)=\"onChangeSampleDrop($event)\" [calendar]=\"calendar\"></sa-event-samples>\n\n\n        </div>\n      </article>\n\n\n      <article class=\"col-sm-12 col-md-12 col-lg-9\">\n\n        <calendar-widget (addEvent)=\"onAddEvent($event)\" [events]=\"calendar.events\"></calendar-widget>\n      </article>\n    </div>\n  </sa-widgets-grid>\n</div>\n"

/***/ }),

/***/ "./src/app/features/calendar/calendar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/calendar/calendar.component.ts ***!
  \*********************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_core_store_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/store/calendar */ "./src/app/core/store/calendar/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(store) {
        this.store = store;
        this.calendar$ = this.store.select(_app_core_store_calendar__WEBPACK_IMPORTED_MODULE_2__["getCalendarState"]);
    }
    CalendarComponent.prototype.onAddSample = function ($event) {
        this.store.dispatch(new _app_core_store_calendar__WEBPACK_IMPORTED_MODULE_2__["AddSample"]($event));
    };
    CalendarComponent.prototype.onChangeSampleDrop = function ($event) {
        this.store.dispatch(new _app_core_store_calendar__WEBPACK_IMPORTED_MODULE_2__["ChangeSampleDrop"]($event));
    };
    CalendarComponent.prototype.onAddEvent = function ($event) {
        this.store.dispatch(new _app_core_store_calendar__WEBPACK_IMPORTED_MODULE_2__["AddEvent"]($event));
    };
    CalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "sa-calendar",
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/features/calendar/calendar.component.html")
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/features/calendar/calendar.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/calendar/calendar.module.ts ***!
  \******************************************************/
/*! exports provided: CalendarFeatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarFeatureModule", function() { return CalendarFeatureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.component */ "./src/app/features/calendar/calendar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CalendarFeatureModule = /** @class */ (function () {
    function CalendarFeatureModule() {
    }
    CalendarFeatureModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
                        path: '',
                        component: _calendar_component__WEBPACK_IMPORTED_MODULE_1__["CalendarComponent"]
                    }]),
            ],
            declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_1__["CalendarComponent"]],
        })
    ], CalendarFeatureModule);
    return CalendarFeatureModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-features-calendar-calendar-module.js.map