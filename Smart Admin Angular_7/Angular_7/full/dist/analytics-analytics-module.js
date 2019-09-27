(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analytics-analytics-module"],{

/***/ "./src/app/features/dashboard/analytics/analytics-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/dashboard/analytics/analytics-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: AnalyticsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsRoutingModule", function() { return AnalyticsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _analytics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics.component */ "./src/app/features/dashboard/analytics/analytics.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _analytics_component__WEBPACK_IMPORTED_MODULE_2__["AnalyticsComponent"],
        data: { pageTitle: 'Analytics' }
    }];
var AnalyticsRoutingModule = /** @class */ (function () {
    function AnalyticsRoutingModule() {
    }
    AnalyticsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AnalyticsRoutingModule);
    return AnalyticsRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/dashboard/analytics/analytics.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/features/dashboard/analytics/analytics.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Dashboard', 'My Dashboard']\" icon=\"home\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n\n  <sa-widgets-grid>\n\n    <div class=\"row\">\n      <article class=\"col-sm-12\">\n\n\n        <live-feeds-widget></live-feeds-widget>\n\n      </article>\n    </div>\n\n\n    <div class=\"row\">\n\n      <article class=\"col-sm-12 col-md-12 col-lg-6\">\n\n        <chat-widget></chat-widget>\n\n        <calendar-widget *ngIf=\"calendar$ | async as calendar \" [events]=\"calendar.events\"></calendar-widget>\n      </article>\n\n      <article class=\"col-sm-12 col-md-12 col-lg-6\">\n\n        <bird-eye-widget></bird-eye-widget>\n\n        <todo-widget></todo-widget>\n      </article>\n    </div>\n  </sa-widgets-grid>\n</div>\n"

/***/ }),

/***/ "./src/app/features/dashboard/analytics/analytics.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/dashboard/analytics/analytics.component.ts ***!
  \*********************************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
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



var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent(store) {
        this.store = store;
        this.calendar$ = this.store.select(_app_core_store_calendar__WEBPACK_IMPORTED_MODULE_2__["getCalendarState"]);
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
    };
    AnalyticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-analytics',
            template: __webpack_require__(/*! ./analytics.component.html */ "./src/app/features/dashboard/analytics/analytics.component.html"),
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/features/dashboard/analytics/analytics.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/dashboard/analytics/analytics.module.ts ***!
  \******************************************************************/
/*! exports provided: AnalyticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsModule", function() { return AnalyticsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _analytics_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics-routing.module */ "./src/app/features/dashboard/analytics/analytics-routing.module.ts");
/* harmony import */ var _analytics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analytics.component */ "./src/app/features/dashboard/analytics/analytics.component.ts");
/* harmony import */ var _live_feeds_social_network_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./live-feeds/social-network.component */ "./src/app/features/dashboard/analytics/live-feeds/social-network.component.ts");
/* harmony import */ var _live_feeds_live_feeds_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./live-feeds/live-feeds.component */ "./src/app/features/dashboard/analytics/live-feeds/live-feeds.component.ts");
/* harmony import */ var _live_feeds_live_stats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./live-feeds/live-stats.component */ "./src/app/features/dashboard/analytics/live-feeds/live-stats.component.ts");
/* harmony import */ var _live_feeds_revenue_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./live-feeds/revenue.component */ "./src/app/features/dashboard/analytics/live-feeds/revenue.component.ts");
/* harmony import */ var _bird_eye_bird_eye_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bird-eye/bird-eye.component */ "./src/app/features/dashboard/analytics/bird-eye/bird-eye.component.ts");
/* harmony import */ var _todo_widget_todo_widget_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todo-widget/todo-widget.component */ "./src/app/features/dashboard/analytics/todo-widget/todo-widget.component.ts");
/* harmony import */ var _todo_widget_todo_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todo-widget/todo-list.component */ "./src/app/features/dashboard/analytics/todo-widget/todo-list.component.ts");
/* harmony import */ var _app_shared_graphs_flot_chart_flot_chart_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/shared/graphs/flot-chart/flot-chart.module */ "./src/app/shared/graphs/flot-chart/flot-chart.module.ts");
/* harmony import */ var _app_shared_graphs_d3_d3_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/shared/graphs/d3/d3.module */ "./src/app/shared/graphs/d3/d3.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AnalyticsModule = /** @class */ (function () {
    function AnalyticsModule() {
    }
    AnalyticsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _analytics_routing_module__WEBPACK_IMPORTED_MODULE_2__["AnalyticsRoutingModule"],
                _app_shared_graphs_flot_chart_flot_chart_module__WEBPACK_IMPORTED_MODULE_11__["FlotChartModule"],
                _app_shared_graphs_d3_d3_module__WEBPACK_IMPORTED_MODULE_12__["D3Module"],
            ],
            declarations: [
                _analytics_component__WEBPACK_IMPORTED_MODULE_3__["AnalyticsComponent"],
                _live_feeds_live_feeds_component__WEBPACK_IMPORTED_MODULE_5__["LiveFeedsComponent"],
                _live_feeds_live_stats_component__WEBPACK_IMPORTED_MODULE_6__["LiveStatsComponent"],
                _live_feeds_revenue_component__WEBPACK_IMPORTED_MODULE_7__["RevenueComponent"],
                _live_feeds_social_network_component__WEBPACK_IMPORTED_MODULE_4__["SocialNetworkComponent"],
                _bird_eye_bird_eye_component__WEBPACK_IMPORTED_MODULE_8__["BirdEyeComponent"],
                _todo_widget_todo_widget_component__WEBPACK_IMPORTED_MODULE_9__["TodoWidgetComponent"],
                _todo_widget_todo_list_component__WEBPACK_IMPORTED_MODULE_10__["TodoListComponent"]
            ],
            providers: [],
        })
    ], AnalyticsModule);
    return AnalyticsModule;
}());



/***/ }),

/***/ "./src/app/features/dashboard/analytics/bird-eye/bird-eye.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/features/dashboard/analytics/bird-eye/bird-eye.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div sa-widget [colorbutton]=\"false\" [editbutton]=\"false\">\n\n  <header>\n    <span class=\"widget-icon\"> <i class=\"fa fa-map-marker\"></i> </span>\n\n    <h2>Birds Eye</h2>\n\n    <div class=\"widget-toolbar hidden-mobile\">\n      <on-off-switch ><i class=\"fa fa-location-arrow\"></i> Realtime</on-off-switch>\n    </div>\n  </header>\n\n  <div>\n    <div class=\"widget-body no-padding\">\n      <d3-map [data]=\"data\"></d3-map>\n\n      <div id=\"heat-fill\">\n        <span class=\"fill-a\">0</span>\n\n        <span class=\"fill-b\">5,000</span>\n      </div>\n        <table saSparklineContainer class=\"table table-striped table-hover table-condensed\">\n          <thead>\n          <tr>\n            <th>Country</th>\n            <th>Visits</th>\n            <th class=\"text-align-center\">User Activity</th>\n            <th class=\"text-align-center\">Online</th>\n            <th class=\"text-align-center\">Demographic</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td><a (click)=\"(null)\">USA</a></td>\n            <td>4,977</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline txt-color-blue text-align-center\"\n                   data-sparkline-height=\"22px\" data-sparkline-width=\"90px\"\n                   data-sparkline-barwidth=\"2\">\n                2700, 3631, 2471, 1300, 1877, 2500, 2577, 2700, 3631, 2471,\n                2000, 2100, 3000\n              </div>\n            </td>\n            <td class=\"text-align-center\">143</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline display-inline\" data-sparkline-type='pie'\n                   data-sparkline-piecolor='[\"#E979BB\", \"#57889C\"]'\n                   data-sparkline-offset=\"90\" data-sparkline-piesize=\"23px\">\n                17,83\n              </div>\n              <div\n                class=\"btn-group display-inline pull-right text-align-left hidden-tablet\"\n                data-dropdown>\n                <button class=\"btn btn-xs btn-default dropdown-toggle\">\n                  <i class=\"fa fa-cog fa-lg\"></i>\n                </button>\n                <ul class=\"dropdown-menu dropdown-menu-xs pull-right\">\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-file fa-lg fa-fw txt-color-greenLight\"></i>\n                      <u>P</u>DF</a>\n                  </li>\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-times fa-lg fa-fw txt-color-red\"></i>\n                      <u>D</u>elete</a>\n                  </li>\n                  <li class=\"divider\"></li>\n                  <li class=\"text-align-center\">\n                    <a (click)=\"(null)\">Cancel</a>\n                  </li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"(null)\">Australia</a></td>\n            <td>4,873</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline txt-color-blue text-align-center\"\n                   data-sparkline-height=\"22px\" data-sparkline-width=\"90px\"\n                   data-sparkline-barwidth=\"2\">\n                1000, 1100, 3030, 1300, -1877, -2500, -2577, -2700, 3631, 2471,\n                4700, 1631, 2471\n              </div>\n            </td>\n            <td class=\"text-align-center\">247</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline display-inline\" data-sparkline-type='pie'\n                   data-sparkline-piecolor='[\"#E979BB\", \"#57889C\"]'\n                   data-sparkline-offset=\"90\" data-sparkline-piesize=\"23px\">\n                22,88\n              </div>\n              <div\n                class=\"btn-group display-inline pull-right text-align-left hidden-tablet\">\n                <button class=\"btn btn-xs btn-default dropdown-toggle\"\n                        data-toggle=\"dropdown\">\n                  <i class=\"fa fa-cog fa-lg\"></i>\n                </button>\n                <ul class=\"dropdown-menu dropdown-menu-xs pull-right\">\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-file fa-lg fa-fw txt-color-greenLight\"></i>\n                      <u>P</u>DF</a>\n                  </li>\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-times fa-lg fa-fw txt-color-red\"></i>\n                      <u>D</u>elete</a>\n                  </li>\n                  <li class=\"divider\"></li>\n                  <li class=\"text-align-center\">\n                    <a (click)=\"(null)\">Cancel</a>\n                  </li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"(null)\">India</a></td>\n            <td>3,671</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline txt-color-blue text-align-center\"\n                   data-sparkline-height=\"22px\" data-sparkline-width=\"90px\"\n                   data-sparkline-barwidth=\"2\">\n                3631, 1471, 2400, 3631, 471, 1300, 1177, 2500, 2577, 3000, 4100,\n                3000, 7700\n              </div>\n            </td>\n            <td class=\"text-align-center\">373</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline display-inline\" data-sparkline-type='pie'\n                   data-sparkline-piecolor='[\"#E979BB\", \"#57889C\"]'\n                   data-sparkline-offset=\"90\" data-sparkline-piesize=\"23px\">\n                10,90\n              </div>\n              <div\n                class=\"btn-group display-inline pull-right text-align-left hidden-tablet\">\n                <button class=\"btn btn-xs btn-default dropdown-toggle\"\n                        data-toggle=\"dropdown\">\n                  <i class=\"fa fa-cog fa-lg\"></i>\n                </button>\n                <ul class=\"dropdown-menu dropdown-menu-xs pull-right\">\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-file fa-lg fa-fw txt-color-greenLight\"></i>\n                      <u>P</u>DF</a>\n                  </li>\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-times fa-lg fa-fw txt-color-red\"></i>\n                      <u>D</u>elete</a>\n                  </li>\n                  <li class=\"divider\"></li>\n                  <li class=\"text-align-center\">\n                    <a (click)=\"(null)\">Cancel</a>\n                  </li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"(null)\">Brazil</a></td>\n            <td>2,476</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline txt-color-blue text-align-center\"\n                   data-sparkline-height=\"22px\" data-sparkline-width=\"90px\"\n                   data-sparkline-barwidth=\"2\">\n                2700, 1877, 2500, 2577, 2000, 3631, 2471, -2700, -3631, 2471,\n                1300, 2100, 3000,\n              </div>\n            </td>\n            <td class=\"text-align-center\">741</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline display-inline\" data-sparkline-type='pie'\n                   data-sparkline-piecolor='[\"#E979BB\", \"#57889C\"]'\n                   data-sparkline-offset=\"90\" data-sparkline-piesize=\"23px\">\n                34,66\n              </div>\n              <div\n                class=\"btn-group display-inline pull-right text-align-left hidden-tablet\">\n                <button class=\"btn btn-xs btn-default dropdown-toggle\"\n                        data-toggle=\"dropdown\">\n                  <i class=\"fa fa-cog fa-lg\"></i>\n                </button>\n                <ul class=\"dropdown-menu dropdown-menu-xs pull-right\">\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-file fa-lg fa-fw txt-color-greenLight\"></i>\n                      <u>P</u>DF</a>\n                  </li>\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-times fa-lg fa-fw txt-color-red\"></i>\n                      <u>D</u>elete</a>\n                  </li>\n                  <li class=\"divider\"></li>\n                  <li class=\"text-align-center\">\n                    <a (click)=\"(null)\">Cancel</a>\n                  </li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"(null)\">Turkey</a></td>\n            <td>1,476</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline txt-color-blue text-align-center\"\n                   data-sparkline-height=\"22px\" data-sparkline-width=\"90px\"\n                   data-sparkline-barwidth=\"2\">\n                1300, 1877, 2500, 2577, 2000, 2100, 3000, -2471, -2700, -3631,\n                -2471, 2700, 3631\n              </div>\n            </td>\n            <td class=\"text-align-center\">123</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline display-inline\" data-sparkline-type='pie'\n                   data-sparkline-piecolor='[\"#E979BB\", \"#57889C\"]'\n                   data-sparkline-offset=\"90\" data-sparkline-piesize=\"23px\">\n                75,25\n              </div>\n              <div\n                class=\"btn-group display-inline pull-right text-align-left hidden-tablet\">\n                <button class=\"btn btn-xs btn-default dropdown-toggle\"\n                        data-toggle=\"dropdown\">\n                  <i class=\"fa fa-cog fa-lg\"></i>\n                </button>\n                <ul class=\"dropdown-menu dropdown-menu-xs pull-right\">\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-file fa-lg fa-fw txt-color-greenLight\"></i>\n                      <u>P</u>DF</a>\n                  </li>\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-times fa-lg fa-fw txt-color-red\"></i>\n                      <u>D</u>elete</a>\n                  </li>\n                  <li class=\"divider\"></li>\n                  <li class=\"text-align-center\">\n                    <a (click)=\"(null)\">Cancel</a>\n                  </li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"(null)\">Canada</a></td>\n            <td>146</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline txt-color-orange text-align-center\"\n                   data-sparkline-height=\"22px\"\n                   data-sparkline-width=\"90px\" data-sparkline-barwidth=\"2\">\n                5, 34, 10, 1, 4, 6, -9, -1, 0, 0, 5, 6, 7\n              </div>\n            </td>\n            <td class=\"text-align-center\">23</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline display-inline\" data-sparkline-type='pie'\n                   data-sparkline-piecolor='[\"#E979BB\", \"#57889C\"]'\n                   data-sparkline-offset=\"90\" data-sparkline-piesize=\"23px\">\n                50,50\n              </div>\n              <div\n                class=\"btn-group display-inline pull-right text-align-left hidden-tablet\">\n                <button class=\"btn btn-xs btn-default dropdown-toggle\"\n                        data-toggle=\"dropdown\">\n                  <i class=\"fa fa-cog fa-lg\"></i>\n                </button>\n                <ul class=\"dropdown-menu dropdown-menu-xs pull-right\">\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-file fa-lg fa-fw txt-color-greenLight\"></i>\n                      <u>P</u>DF</a>\n                  </li>\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-times fa-lg fa-fw txt-color-red\"></i>\n                      <u>D</u>elete</a>\n                  </li>\n                  <li class=\"divider\"></li>\n                  <li class=\"text-align-center\">\n                    <a (click)=\"(null)\">Cancel</a>\n                  </li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n          </tbody>\n          <tfoot>\n          <tr>\n            <td colspan=\"5\">\n              <ul class=\"pagination pagination-xs no-margin\">\n                <li class=\"prev disabled\">\n                  <a (click)=\"(null)\">Previous</a>\n                </li>\n                <li class=\"active\">\n                  <a (click)=\"(null)\">1</a>\n                </li>\n                <li>\n                  <a (click)=\"(null)\">2</a>\n                </li>\n                <li>\n                  <a (click)=\"(null)\">3</a>\n                </li>\n                <li class=\"next\">\n                  <a (click)=\"(null)\">Next</a>\n                </li>\n              </ul>\n            </td>\n          </tr>\n          </tfoot>\n        </table>\n\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/dashboard/analytics/bird-eye/bird-eye.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/dashboard/analytics/bird-eye/bird-eye.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BirdEyeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdEyeComponent", function() { return BirdEyeComponent; });
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

var BirdEyeComponent = /** @class */ (function () {
    function BirdEyeComponent() {
        this.data = {
            "Afghanistan": 16.63, "Albania": 11.58, "Algeria": 158.97, "Angola": 85.81, "Antigua and Barbuda": 1.1, "Argentina": 351.02, "Armenia": 8.83, "Australia": 1219.72, "Austria": 366.26, "Azerbaijan": 52.17, "Bahamas": 7.54, "Bahrain": 21.73, "Bangladesh": 105.4, "Barbados": 3.96, "Belarus": 52.89, "Belgium": 461.33, "Belize": 1.43, "Benin": 6.49, "Bhutan": 1.4, "Bolivia": 19.18, "Bosnia and Herzegovina": 16.2, "Botswana": 12.5, "Brazil": 2023.53, "Brunei": 11.96, "Bulgaria": 44.84, "Burkina Faso": 8.67, "Burundi": 1.47, "Cambodia": 11.36, "Cameroon": 21.88, "Canada": 1563.66, "Cape Verde": 1.57, "Central African Republic": 2.11, "Chad": 7.59, "Chile": 199.18, "China": 5745.13, "Colombia": 283.11, "Comoros": 0.56, "Costa Rica": 35.02, "Croatia": 59.92, "Cyprus": 22.75, "Czech Republic": 195.23, "Democratic Republic of the Congo": 12.6, "Denmark": 304.56, "Djibouti": 1.14, "Dominica": 0.38, "Dominican Republic": 50.87, "East Timor": 0.62, "Ecuador": 61.49, "Egypt": 216.83, "El Salvador": 21.8, "Equatorial Guinea": 14.55, "Eritrea": 2.25, "Estonia": 19.22, "Ethiopia": 30.94, "Fiji": 3.15, "Finland": 231.98, "France": 2555.44, "Gabon": 12.56, "Gambia": 1.04, "Georgia": 11.23, "Germany": 3305.9, "Ghana": 18.06, "Greece": 305.01, "Grenada": 0.65, "Guatemala": 40.77, "Guinea": 4.34, "Guinea-Bissau": 0.83, "Guyana": 2.2, "Haiti": 6.5, "Honduras": 15.34, "Hong Kong": 226.49, "Hungary": 132.28, "Iceland": 12.77, "India": 1430.02, "Indonesia": 695.06, "Iran": 337.9, "Iraq": 84.14, "Ireland": 204.14, "Israel": 201.25, "Italy": 2036.69, "Ivory Coast": 22.38, "Jamaica": 13.74, "Japan": 5390.9, "Jordan": 27.13, "Kazakhstan": 129.76, "Kenya": 32.42, "Kiribati": 0.15, "Kuwait": 117.32, "Kyrgyzstan": 4.44, "Laos": 6.34, "Latvia": 23.39, "Lebanon": 39.15, "Lesotho": 1.8, "Liberia": 0.98, "Libya": 77.91, "Lithuania": 35.73, "Luxembourg": 52.43, "Macedonia": 9.58, "Madagascar": 8.33, "Malawi": 5.04, "Malaysia": 218.95, "Maldives": 1.43, "Mali": 9.08, "Malta": 7.8, "Mauritania": 3.49, "Mauritius": 9.43, "Mexico": 1004.04, "Moldova": 5.36, "Mongolia": 5.81, "Montenegro": 3.88, "Morocco": 91.7, "Mozambique": 10.21, "Myanmar": 35.65, "Namibia": 11.45, "Nepal": 15.11, "Netherlands": 770.31, "New Zealand": 138, "Nicaragua": 6.38, "Niger": 5.6, "Nigeria": 206.66, "Norway": 413.51, "Oman": 53.78, "Pakistan": 174.79, "Panama": 27.2, "Papua New Guinea": 8.81, "Paraguay": 17.17, "Peru": 153.55, "Philippines": 189.06, "Poland": 438.88, "Portugal": 223.7, "Qatar": 126.52, "Republic of the Congo": 11.88, "Romania": 158.39, "Russian Federation": 3476.91, "Rwanda": 5.69, "Saint Kitts and Nevis": 0.56, "Saint Lucia": 1, "Saint Vincent and the Grenadines": 0.58, "Samoa": 0.55, "Sao Tome and Principe": 0.19, "Saudi Arabia": 434.44, "Senegal": 12.66, "Serbia": 38.92, "Seychelles": 0.92, "Sierra Leone": 1.9, "Singapore": 217.38, "Slovakia": 86.26, "Slovenia": 46.44, "Solomon Islands": 0.67, "South Africa": 354.41, "South Korea": 986.26, "Spain": 1374.78, "Sri Lanka": 48.24, "Sudan": 65.93, "Suriname": 3.3, "Swaziland": 3.17, "Sweden": 444.59, "Switzerland": 522.44, "Syria": 59.63, "Taiwan": 426.98, "Tajikistan": 5.58, "Tanzania": 22.43, "Thailand": 312.61, "Togo": 3.07, "Tonga": 0.3, "Trinidad and Tobago": 21.2, "Tunisia": 43.86, "Turkey": 729.05, "Turkmenistan": 0, "Uganda": 17.12, "Ukraine": 136.56, "United Arab Emirates": 239.65, "United Kingdom": 2258.57, "United States": 6624.18, "Uruguay": 40.71, "Uzbekistan": 37.72, "Vanuatu": 0.72, "Venezuela": 285.21, "Vietnam": 101.99, "Yemen": 30.02, "Zambia": 15.69, "Zimbabwe": 5.57, "Bolivia, Plurinational State of": 121.34, "Somalia": 0.47, "Tanzania, United Republic of": 0.78, "South Sudan": 0.98, "Congo, the Democratic Republic of the": 1.45
        };
    }
    BirdEyeComponent.prototype.ngOnInit = function () {
    };
    BirdEyeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            selector: 'bird-eye-widget',
            template: __webpack_require__(/*! ./bird-eye.component.html */ "./src/app/features/dashboard/analytics/bird-eye/bird-eye.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], BirdEyeComponent);
    return BirdEyeComponent;
}());



/***/ }),

/***/ "./src/app/features/dashboard/analytics/live-feeds/live-feeds.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/features/dashboard/analytics/live-feeds/live-feeds.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div sa-widget\n  [sortable]=\"false\"\n  [togglebutton]=\"false\"\n  [editbutton]=\"false\"\n  [fullscreenbutton]=\"false\"\n  [colorbutton]=\"false\"\n  [deletebutton]=\"false\" saSparklineContainer saEasyPieChartContainer>\n\n  <header>\n                    <span class=\"widget-icon\">\n                        <i class=\"glyphicon glyphicon-stats txt-color-darken\"></i> </span>\n\n    <h2>Live Feeds </h2>\n\n    <ul class=\"nav nav-tabs pull-right in\" id=\"myTab\">\n      <li class=\"active\">\n        <a data-toggle=\"tab\" href=\"#s1\"><i class=\"fa fa-clock-o\" ></i> <span\n          class=\"hidden-mobile hidden-tablet\">&nbsp;Live Stats</span></a>\n      </li>\n\n      <li>\n        <a data-toggle=\"tab\" href=\"#s2\"><i class=\"fa fa-facebook\" ></i> <span\n          class=\"hidden-mobile hidden-tablet\">&nbsp;Social Network</span></a>\n      </li>\n\n      <li>\n        <a data-toggle=\"tab\" href=\"#s3\"><i class=\"fa fa-dollar\" ></i> <span\n          class=\"hidden-mobile hidden-tablet\">&nbsp;Revenue</span></a>\n      </li>\n    </ul>\n\n  </header>\n\n  <div class=\"no-padding\">\n\n    <div class=\"widget-body\">\n\n      <div id=\"myTabContent\" class=\"tab-content\">\n\n        <live-stats-feed class=\"tab-pane fade active in padding-10 no-padding-bottom\" id=\"s1\"></live-stats-feed>\n\n        <social-network-feed class=\"tab-pane fade\" id=\"s2\" ></social-network-feed>\n\n        <revenue-feed class=\"tab-pane fade\" id=\"s3\" ></revenue-feed>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/dashboard/analytics/live-feeds/live-feeds.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/dashboard/analytics/live-feeds/live-feeds.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LiveFeedsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveFeedsComponent", function() { return LiveFeedsComponent; });
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

var LiveFeedsComponent = /** @class */ (function () {
    function LiveFeedsComponent() {
    }
    LiveFeedsComponent.prototype.ngOnInit = function () {
    };
    LiveFeedsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'live-feeds-widget',
            template: __webpack_require__(/*! ./live-feeds.component.html */ "./src/app/features/dashboard/analytics/live-feeds/live-feeds.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], LiveFeedsComponent);
    return LiveFeedsComponent;
}());



/***/ }),

/***/ "./src/app/features/dashboard/analytics/live-feeds/live-stats.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/features/dashboard/analytics/live-feeds/live-stats.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row no-space\">\n    <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n      <on-off-switch class=\"demo-liveupdate-1\" title=\"Live switch\" [(model)]=\"liveSwitch\"\n                     (modelChange)=\"toggleSwitch()\"></on-off-switch>\n\n      <sa-flot-chart class=\"chart-large txt-color-blue\" [data]=\"liveStats\"\n                     [options]=\"liveStatsChartOptions\"></sa-flot-chart>\n\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4 show-stats\">\n\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span\n          class=\"text\"> My Tasks <span\n          class=\"pull-right\">130/200</span> </span>\n\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-color-blueDark\"\n                 style=\"width: 65%\"></div>\n          </div>\n        </div>\n        <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span\n          class=\"text\"> Transfered <span\n          class=\"pull-right\">440 GB</span> </span>\n\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-color-blue\"\n                 style=\"width:34%\"></div>\n          </div>\n        </div>\n\n\n        <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span\n          class=\"text\"> Bugs Squashed<span\n          class=\"pull-right\">77%</span> </span>\n\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-color-blue\"\n                 style=\"width: 77%\"></div>\n          </div>\n        </div>\n        <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span\n          class=\"text\"> User Testing <span\n          class=\"pull-right\">7 Days</span> </span>\n\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-color-greenLight\" style=\"width:84%\"></div>\n          </div>\n        </div>\n\n        <span class=\"show-stat-buttons\">\n          <span class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n             <a (click)=\"(null)\" class=\"btn btn-default btn-block hidden-xs\">Generate PDF</a>\n          </span>\n          <span class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n              <a (click)=\"(null)\" class=\"btn btn-default btn-block hidden-xs\">Report a bug</a>\n          </span>\n        </span>\n      </div>\n    </div>\n\n\n  </div>\n\n  <div class=\"show-stat-microcharts\">\n    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n\n      <div class=\"easy-pie-chart txt-color-orangeDark\" data-percent=\"33\"\n           data-pie-size=\"50\">\n        <span class=\"percent percent-sign\">35</span>\n      </div>\n      <span class=\"easy-pie-title\"> Server Load <i\n        class=\"fa fa-caret-up icon-color-bad\"></i> </span>\n      <ul class=\"smaller-stat hidden-sm pull-right\">\n        <li>\n        <span class=\"label bg-color-greenLight\"><i\n          class=\"fa fa-caret-up\"></i> 97%</span>\n        </li>\n        <li>\n        <span class=\"label bg-color-blueLight\"><i\n          class=\"fa fa-caret-down\"></i> 44%</span>\n        </li>\n      </ul>\n      <div class=\"sparkline txt-color-greenLight hidden-sm hidden-md pull-right\"\n           data-sparkline-type=\"line\" data-sparkline-height=\"33px\"\n           data-sparkline-width=\"70px\"\n           data-fill-color=\"transparent\">\n        130, 187, 250, 257, 200, 210, 300, 270, 363, 247, 270, 363, 247\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n      <div class=\"easy-pie-chart txt-color-greenLight\" data-percent=\"78.9\"\n           data-pie-size=\"50\">\n        <span class=\"percent percent-sign\">78.9 </span>\n      </div>\n      <span class=\"easy-pie-title\"> Disk Space <i\n        class=\"fa fa-caret-down icon-color-good\"></i></span>\n      <ul class=\"smaller-stat hidden-sm pull-right\">\n        <li>\n            <span class=\"label bg-color-blueDark\"><i\n              class=\"fa fa-caret-up\"></i> 76%</span>\n        </li>\n        <li>\n          <span class=\"label bg-color-blue\"><i\n            class=\"fa fa-caret-down\"></i> 3%</span>\n        </li>\n      </ul>\n      <div class=\"sparkline txt-color-blue hidden-sm hidden-md pull-right\"\n           data-sparkline-type=\"line\"\n           data-sparkline-height=\"33px\" data-sparkline-width=\"70px\"\n           data-fill-color=\"transparent\">\n        257, 200, 210, 300, 270, 363, 130, 187, 250, 247, 270, 363, 247\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n      <div class=\"easy-pie-chart txt-color-blue\" data-percent=\"23\"\n           data-pie-size=\"50\">\n        <span class=\"percent percent-sign\">23 </span>\n      </div>\n      <span class=\"easy-pie-title\"> Transfered <i\n        class=\"fa fa-caret-up icon-color-good\"></i></span>\n      <ul class=\"smaller-stat hidden-sm pull-right\">\n        <li>\n          <span class=\"label bg-color-darken\">10GB</span>\n        </li>\n        <li>\n        <span class=\"label bg-color-blueDark\"><i\n          class=\"fa fa-caret-up\"></i> 10%</span>\n        </li>\n      </ul>\n      <div class=\"sparkline txt-color-darken hidden-sm hidden-md pull-right\"\n           data-sparkline-type=\"line\" data-sparkline-height=\"33px\"\n           data-sparkline-width=\"70px\"\n           data-fill-color=\"transparent\">\n        200, 210, 363, 247, 300, 270, 130, 187, 250, 257, 363, 247, 270\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n      <div class=\"easy-pie-chart txt-color-darken\" data-percent=\"36\"\n           data-pie-size=\"50\">\n        <span class=\"percent degree-sign\">36 <i class=\"fa fa-caret-up\"></i></span>\n      </div>\n      <span class=\"easy-pie-title\"> Temperature <i\n        class=\"fa fa-caret-down icon-color-good\"></i></span>\n      <ul class=\"smaller-stat hidden-sm pull-right\">\n        <li>\n          <span class=\"label bg-color-red\"><i class=\"fa fa-caret-up\"></i> 124</span>\n        </li>\n        <li>\n          <span class=\"label bg-color-blue\"><i class=\"fa fa-caret-down\"></i> 40 F</span>\n        </li>\n      </ul>\n      <div class=\"sparkline txt-color-red hidden-sm hidden-md pull-right\"\n           data-sparkline-type=\"line\"\n           data-sparkline-height=\"33px\" data-sparkline-width=\"70px\"\n           data-fill-color=\"transparent\">\n        2700, 3631, 2471, 2700, 3631, 2471, 1300, 1877, 2500, 2577, 2000, 2100, 3000\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/dashboard/analytics/live-feeds/live-stats.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/dashboard/analytics/live-feeds/live-stats.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LiveStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveStatsComponent", function() { return LiveStatsComponent; });
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

var FakeDataSource = {
    data: [],
    total: 200,
    getRandomData: function () {
        if (this.data.length > 0)
            this.data = this.data.slice(1);
        // do a random walk
        while (this.data.length < this.total) {
            var prev = this.data.length > 0 ? this.data[this.data.length - 1] : 50;
            var y = prev + Math.random() * 10 - 5;
            if (y < 0)
                y = 0;
            if (y > 100)
                y = 100;
            this.data.push(y);
        }
        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < this.data.length; ++i)
            res.push([i, this.data[i]]);
        return res;
    }
};
var LiveStatsComponent = /** @class */ (function () {
    function LiveStatsComponent(zone) {
        this.zone = zone;
        this.liveSwitch = false;
        this.liveStatsChartOptions = {
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                min: 0,
                max: 100
            },
            colors: ['rgb(87, 136, 156)'],
            grid: {
                show: true,
                hoverable: true,
                clickable: true,
                borderWidth: 0,
            },
            series: {
                lines: {
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.4
                            },
                            {
                                opacity: 0
                            }
                        ]
                    },
                    steps: false
                }
            }
        };
    }
    LiveStatsComponent.prototype.ngOnInit = function () {
        this.updateStats();
    };
    LiveStatsComponent.prototype.updateStats = function () {
        this.liveStats = [FakeDataSource.getRandomData()];
    };
    LiveStatsComponent.prototype.toggleSwitch = function () {
        var _this = this;
        if (this.liveSwitch) {
            this.interval = setInterval(function () {
                _this.updateStats();
            }, 1000);
        }
        else {
            clearInterval(this.interval);
        }
    };
    LiveStatsComponent.prototype.ngOnDestroy = function () {
        this.interval && clearInterval(this.interval);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LiveStatsComponent.prototype, "liveSwitch", void 0);
    LiveStatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'live-stats-feed',
            template: __webpack_require__(/*! ./live-stats.component.html */ "./src/app/features/dashboard/analytics/live-feeds/live-stats.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LiveStatsComponent);
    return LiveStatsComponent;
}());



/***/ }),

/***/ "./src/app/features/dashboard/analytics/live-feeds/revenue.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/features/dashboard/analytics/live-feeds/revenue.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div class=\"widget-body-toolbar bg-color-white smart-form\" id=\"rev-toggles\">\n\n    <div class=\"inline-group\">\n\n      <label for=\"gra-0\" class=\"checkbox\">\n        <input type=\"checkbox\" id=\"gra-0\" [(ngModel)]=\"state.targetsShow\" (ngModelChange)=\"updateData()\" />\n        <i></i> Target </label>\n      <label for=\"gra-1\" class=\"checkbox\">\n        <input type=\"checkbox\" id=\"gra-1\" [(ngModel)]=\"state.actualsShow\" (ngModelChange)=\"updateData()\"/>\n        <i></i> Actual </label>\n      <label for=\"gra-2\" class=\"checkbox\">\n        <input type=\"checkbox\" id=\"gra-2\" [(ngModel)]=\"state.signupsShow\" (ngModelChange)=\"updateData()\"/>\n        <i></i> Signups </label>\n    </div>\n\n    <div class=\"btn-group hidden-phone pull-right\">\n      <a class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\"><i\n        class=\"fa fa-cog\"></i> More <span class=\"caret\"> </span> </a>\n      <ul class=\"dropdown-menu pull-right\">\n        <li>\n          <a (click)=\"(null)\"><i class=\"fa fa-file-text-alt\"></i>> Export to PDF</a>\n        </li>\n        <li>\n          <a (click)=\"(null)\"><i class=\"fa fa-question-sign\"></i> Help</a>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n\n  <div class=\"padding-10\">\n    <sa-flot-chart class=\"chart-large has-legend-unique\"\n                   [data]=\"revenueData\" [options]=\"revenueChartOptions\"></sa-flot-chart>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/dashboard/analytics/live-feeds/revenue.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/dashboard/analytics/live-feeds/revenue.component.ts ***!
  \******************************************************************************/
/*! exports provided: RevenueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevenueComponent", function() { return RevenueComponent; });
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

var RevenueComponent = /** @class */ (function () {
    function RevenueComponent() {
        this.state = {
            targetsShow: true,
            actualsShow: true,
            signupsShow: true
        };
        this.revenueChartOptions = {
            grid: {
                show: true,
                hoverable: true,
                clickable: true,
                borderWidth: 0
            },
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            xaxis: {
                mode: "time"
            },
            yaxes: {
                tickFormatter: function (val, axis) {
                    return "$" + val;
                },
                max: 1200
            }
        };
    }
    RevenueComponent.prototype.ngOnInit = function () {
        this.updateData();
    };
    RevenueComponent.prototype.updateData = function () {
        var data = [];
        if (this.state.targetsShow)
            data.push(this.getTargetsData());
        if (this.state.actualsShow)
            data.push(this.getActualsData());
        if (this.state.signupsShow)
            data.push(this.getSignupsData());
        this.revenueData = data;
    };
    RevenueComponent.prototype.getTargetsData = function () {
        return {
            label: "Target Profit",
            data: [[1354586000000, 153], [1364587000000, 658], [1374588000000, 198], [1384589000000, 663], [1394590000000, 801], [1404591000000, 1080], [1414592000000, 353], [1424593000000, 749], [1434594000000, 523], [1444595000000, 258], [1454596000000, 688], [1464597000000, 364]],
            bars: {
                show: true,
                align: "center",
                barWidth: 30 * 30 * 60 * 1000 * 80
            }
        };
    };
    RevenueComponent.prototype.getActualsData = function () {
        return {
            label: "Actual Profit",
            data: [[1354586000000, 53], [1364587000000, 65], [1374588000000, 98], [1384589000000, 83], [1394590000000, 980], [1404591000000, 808], [1414592000000, 720], [1424593000000, 674], [1434594000000, 23], [1444595000000, 79], [1454596000000, 88], [1464597000000, 36]],
            color: '#3276B1',
            lines: {
                show: true,
                lineWidth: 3
            },
            points: {
                show: true
            }
        };
    };
    RevenueComponent.prototype.getSignupsData = function () {
        return {
            label: "Actual Signups",
            data: [[1354586000000, 647], [1364587000000, 435], [1374588000000, 784], [1384589000000, 346], [1394590000000, 487], [1404591000000, 463], [1414592000000, 479], [1424593000000, 236], [1434594000000, 843], [1444595000000, 657], [1454596000000, 241], [1464597000000, 341]],
            color: '#71843F',
            lines: {
                show: true,
                lineWidth: 1
            },
            points: {
                show: true
            }
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RevenueComponent.prototype, "state", void 0);
    RevenueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'revenue-feed',
            template: __webpack_require__(/*! ./revenue.component.html */ "./src/app/features/dashboard/analytics/live-feeds/revenue.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], RevenueComponent);
    return RevenueComponent;
}());



/***/ }),

/***/ "./src/app/features/dashboard/analytics/live-feeds/social-network.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/features/dashboard/analytics/live-feeds/social-network.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n  <div class=\"widget-body-toolbar bg-color-white\">\n\n    <form class=\"form-inline\" role=\"form\">\n\n      <div class=\"form-group\">\n        <label class=\"sr-only\" for=\"s123\">Show From</label>\n        <input type=\"email\" class=\"form-control input-sm\" id=\"s123\"\n               placeholder=\"Show From\"/>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"email\" class=\"form-control input-sm\" id=\"s124\"\n               placeholder=\"To\"/>\n      </div>\n\n      <div class=\"btn-group hidden-phone pull-right\">\n        <a class=\"btn dropdown-toggle btn-xs btn-default\"\n           data-toggle=\"dropdown\"><i\n          class=\"fa fa-cog\" ></i> More <span class=\"caret\"> </span> </a><ul class=\"dropdown-menu pull-right\">\n        <li>\n          <a (click)=\"(null)\"><i class=\"fa fa-file-text-alt\" ></i> Export to PDF</a>\n        </li>\n        <li>\n          <a (click)=\"(null)\"><i class=\"fa fa-question-sign\" ></i> Help</a>\n        </li>\n      </ul>\n      </div>\n\n    </form>\n\n  </div>\n  <div class=\"padding-10\">\n    <sa-flot-chart class=\"chart-large has-legend-unique\" [data]=\"statsData\" [options]=\"statsChartOptions\" ></sa-flot-chart>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/dashboard/analytics/live-feeds/social-network.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/dashboard/analytics/live-feeds/social-network.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SocialNetworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialNetworkComponent", function() { return SocialNetworkComponent; });
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

var SocialNetworkComponent = /** @class */ (function () {
    function SocialNetworkComponent() {
        this.statsData = [
            {
                label: "Twitter",
                data: [
                    [1, 27],
                    [2, 34],
                    [3, 51],
                    [4, 48],
                    [5, 55],
                    [6, 65],
                    [7, 61],
                    [8, 70],
                    [9, 65],
                    [10, 75],
                    [11, 57],
                    [12, 59],
                    [13, 62]
                ],
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.1
                            },
                            {
                                opacity: 0.13
                            }
                        ]
                    }
                },
                points: {
                    show: true
                }
            },
            {
                label: "Facebook",
                data: [
                    [1, 25],
                    [2, 31],
                    [3, 45],
                    [4, 37],
                    [5, 38],
                    [6, 40],
                    [7, 47],
                    [8, 55],
                    [9, 43],
                    [10, 50],
                    [11, 47],
                    [12, 39],
                    [13, 47]
                ],
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.1
                            },
                            {
                                opacity: 0.13
                            }
                        ]
                    }
                },
                points: {
                    show: true
                }
            }
        ];
        this.statsChartOptions = {
            grid: {
                show: true,
                hoverable: true,
                clickable: true,
                borderWidth: 0,
            },
            colors: ["#568A89", "#3276B1"],
            tooltip: true,
            tooltipOpts: {
                //content : "Value <b>$x</b> Value <span>$y</span>",
                defaultTheme: false
            },
            xaxis: {
                ticks: [
                    [1, "JAN"],
                    [2, "FEB"],
                    [3, "MAR"],
                    [4, "APR"],
                    [5, "MAY"],
                    [6, "JUN"],
                    [7, "JUL"],
                    [8, "AUG"],
                    [9, "SEP"],
                    [10, "OCT"],
                    [11, "NOV"],
                    [12, "DEC"],
                    [13, "JAN+1"]
                ]
            },
            yaxes: {}
        };
    }
    SocialNetworkComponent.prototype.ngOnInit = function () {
    };
    SocialNetworkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'social-network-feed',
            template: __webpack_require__(/*! ./social-network.component.html */ "./src/app/features/dashboard/analytics/live-feeds/social-network.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], SocialNetworkComponent);
    return SocialNetworkComponent;
}());



/***/ }),

/***/ "./src/app/features/dashboard/analytics/todo-widget/todo-list.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/features/dashboard/analytics/todo-widget/todo-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h5 class=\"todo-group-title\"><i class=\"fa fa-{{state.icon}}\"></i> {{state.title}} {{items.length}}</h5>\n  <ul class=\"todo\" >\n    <li *ngFor=\"let todo of items; let i = index\"\n        [class.complete]=\"todo.completedAt\"\n       >\n    \t<span class=\"handle\"> <label class=\"checkbox\">\n            <input type=\"checkbox\" (click)=\"toggleTodo(todo)\" [checked]=\"todo.completedAt\"\n                   name=\"checkbox-inline\">\n            <i></i> </label> </span>\n\n      <p>\n        <strong>Ticket #{{i + 1}}</strong> - {{todo.title}}\n        <span class=\"text-muted\" *ngIf=\"todo.description\">{{todo.description}}</span>\n        <span class=\"date\">{{todo.createdAt | moment : 'HH:mm YYYY-MM-DD'}} - <a (click)=\"deleteTodo(todo)\" class=\"text-muted\"><i\n          class=\"fa fa-trash\"></i></a></span>\n\n      </p>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/features/dashboard/analytics/todo-widget/todo-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/dashboard/analytics/todo-widget/todo-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.service */ "./src/app/features/dashboard/analytics/todo-widget/todo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(el, todoService) {
        this.el = el;
        this.todoService = todoService;
        this.items = [];
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.subject.subscribe(function (todos) {
            _this.setItems(todos);
        });
        this.setItems(this.todoService.todos);
    };
    TodoListComponent.prototype.setItems = function (todos) {
        var _this = this;
        this.items = todos.filter(function (it) { return it.state == _this.state.name; });
    };
    TodoListComponent.prototype.toggleTodo = function (todo) {
        this.todoService.toggleTodo(todo);
    };
    TodoListComponent.prototype.deleteTodo = function (todo) {
        this.todoService.deleteTodo(todo);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TodoListComponent.prototype, "state", void 0);
    TodoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/features/dashboard/analytics/todo-widget/todo-list.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/features/dashboard/analytics/todo-widget/todo-widget.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/features/dashboard/analytics/todo-widget/todo-widget.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div sa-widget [editbutton]=\"false\" color=\"blue\">\n  <header>\n    <span class=\"widget-icon\"> <i class=\"fa fa-check txt-color-white\"></i> </span>\n\n    <h2> ToDo's </h2>\n\n    <div class=\"widget-toolbar\">\n      <button class=\"btn btn-xs btn-default\"\n              [class.active]=\"newTodo\" (click)=\"toggleAdd()\"><i\n        *ngIf=\"!newTodo\" class=\"fa fa-plus\"></i><i\n        *ngIf=\"newTodo\" class=\"fa fa-times\"></i> Add</button>\n\n    </div>\n  </header>\n  <!-- widget div-->\n  <div>\n    <div class=\"widget-body no-padding smart-form\">\n      <!-- content goes here -->\n      <div *ngIf=\"newTodo\">\n        <h5 class=\"todo-group-title\"><i class=\"fa fa-plus-circle\"></i> New Todo</h5>\n\n        <form #newTodoForm=\"ngForm\" class=\"smart-form\">\n          <fieldset>\n            <section>\n              <label class=\"input\">\n                <input type=\"text\" required class=\"input-lg\" [(ngModel)]=\"newTodo.title\" name=\"title\"\n                       placeholder=\"What needs to be done?\">\n              </label>\n            </section>\n            <section>\n              <div class=\"col-xs-6\">\n                <label class=\"select\">\n                  <select class=\"input-sm\" name=\"state\" [(ngModel)]=\"newTodo.state\" >\n                    <option *ngFor=\"let state of states\" [value]=\"state.name\">{{state.name}}</option>\n                  </select> <i></i> </label>\n              </div>\n            </section>\n          </fieldset>\n          <footer>\n            <button [disabled]=\"!newTodoForm.form.valid\" type=\"button\" class=\"btn btn-primary\"\n                    (click)=\"createTodo()\">\n              Add\n            </button>\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"toggleAdd()\">\n              Cancel\n            </button>\n          </footer>\n        </form>\n      </div>\n\n      <todo-list *ngFor=\"let state of states\" [state]=\"state\"></todo-list>\n\n      <!-- end content -->\n    </div>\n\n  </div>\n  <!-- end widget div -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/dashboard/analytics/todo-widget/todo-widget.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/dashboard/analytics/todo-widget/todo-widget.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TodoWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoWidgetComponent", function() { return TodoWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.service */ "./src/app/features/dashboard/analytics/todo-widget/todo.service.ts");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/app/features/dashboard/analytics/todo-widget/todo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoWidgetComponent = /** @class */ (function () {
    function TodoWidgetComponent(todoService) {
        this.todoService = todoService;
        this.states = this.todoService.states;
    }
    TodoWidgetComponent.prototype.ngOnInit = function () {
    };
    TodoWidgetComponent.prototype.createTodo = function () {
        this.todoService.createTodo(this.newTodo);
        this.newTodo = null;
    };
    TodoWidgetComponent.prototype.toggleAdd = function () {
        if (this.newTodo) {
            this.newTodo = null;
        }
        else {
            this.newTodo = new _todo__WEBPACK_IMPORTED_MODULE_2__["Todo"]();
            this.newTodo.state = 'Important';
        }
    };
    TodoWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'todo-widget',
            template: __webpack_require__(/*! ./todo-widget.component.html */ "./src/app/features/dashboard/analytics/todo-widget/todo-widget.component.html"),
            providers: [_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]],
        }),
        __metadata("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]])
    ], TodoWidgetComponent);
    return TodoWidgetComponent;
}());



/***/ }),

/***/ "./src/app/features/dashboard/analytics/todo-widget/todo.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/dashboard/analytics/todo-widget/todo.service.ts ***!
  \**************************************************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/app/features/dashboard/analytics/todo-widget/todo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoService = /** @class */ (function () {
    function TodoService() {
        this.todos = [
            new _todo__WEBPACK_IMPORTED_MODULE_2__["Todo"]('Release', 'Critical'),
            new _todo__WEBPACK_IMPORTED_MODULE_2__["Todo"]('Misc', 'Important'),
            new _todo__WEBPACK_IMPORTED_MODULE_2__["Todo"]('E-commerce', 'Important'),
        ];
        this.states = [
            { name: "Critical", title: "Critical Tasks", icon: "warning" },
            { name: "Important", title: "Important Tasks", icon: "exclamation" },
            { name: "Completed", title: "Completed Tasks", icon: "check" }
        ];
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    TodoService.prototype.createTodo = function (todo) {
        todo.createdAt = new Date();
        if (todo.state = 'Completed') {
            todo.completedAt = new Date();
        }
        this.todos.push(todo);
        this.subject.next(this.todos);
    };
    TodoService.prototype.toggleTodo = function (todo) {
        if (todo.completedAt) {
            todo.state = 'Important';
            todo.completedAt = null;
        }
        else {
            todo.state = 'Completed';
            todo.completedAt = new Date();
        }
        this.subject.next(this.todos);
    };
    TodoService.prototype.updateTodo = function (id, state) {
        this.todos.find(function (it) { return it.id == id; }).state = state.name;
        this.subject.next(this.todos);
    };
    TodoService.prototype.deleteTodo = function (todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        this.subject.next(this.todos);
    };
    TodoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/features/dashboard/analytics/todo-widget/todo.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/dashboard/analytics/todo-widget/todo.ts ***!
  \******************************************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo(title, state) {
        this.id = '' + Todo._id++;
        this.title = title;
        this.state = state;
        this.createdAt = new Date();
    }
    Todo._id = 0;
    return Todo;
}());



/***/ }),

/***/ "./src/app/shared/graphs/d3/d3-map.component.css":
/*!*******************************************************!*\
  !*** ./src/app/shared/graphs/d3/d3-map.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d3-map .country:hover{\n  stroke: #fff;\n  stroke-width: 1.5px;\n}\n.d3-map .text{\n  font-size:10px;\n  text-transform:capitalize;\n}\nd3-map {\n  position: relative;\n  display: block;\n  padding:10px;\n  overflow:hidden;\n}\n.d3-map{\n  height:300px;\n}\n.d3-map .hidden { \n  display: none; \n}\n.d3-map div.tooltip {\n  color: #222; \n  background: #fff; \n  padding: .5em; \n  text-shadow: #f5f5f5 0 1px 0;\n  border-radius: 2px; \n  box-shadow: 0px 0px 2px 0px #a6a6a6; \n  opacity: 0.9; \n  right: 0;\n  position: absolute;\n}\n.d3-map .graticule {\n  fill: none;\n  stroke: #bbb;\n  stroke-width: .5px;\n  stroke-opacity: .5;\n}\n.d3-map .equator {\n  stroke: #ccc;\n  stroke-width: 1px;\n}\n.d3-zoomin{\n  top: 10px;\n}\n.d3-zoomout{\n  top: 34px;\n}\n.d3-zoomin, .d3-zoomout{\n  position: absolute;\n  background: #292929;\n  padding: 4px;\n  width: 22px;\n  height: 22px;\n  cursor: pointer;\n  line-height: 10px;\n  text-align: center;\n  font-size: 14px;\n  border-radius: 2px;\n  box-shadow: inset 0 -2px 0 rgba(0,0,0,.05);\n  background-color: #fff;\n  border: 1px solid #bfbfbf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2dyYXBocy9kMy9kMy1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osUUFBUTtFQUNSLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2dyYXBocy9kMy9kMy1tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kMy1tYXAgLmNvdW50cnk6aG92ZXJ7XG4gIHN0cm9rZTogI2ZmZjtcbiAgc3Ryb2tlLXdpZHRoOiAxLjVweDtcbn1cbi5kMy1tYXAgLnRleHR7XG4gIGZvbnQtc2l6ZToxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplO1xufVxuZDMtbWFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzoxMHB4O1xuICBvdmVyZmxvdzpoaWRkZW47XG59XG5cbi5kMy1tYXB7XG4gIGhlaWdodDozMDBweDtcbn1cbi5kMy1tYXAgLmhpZGRlbiB7IFxuICBkaXNwbGF5OiBub25lOyBcbn1cbi5kMy1tYXAgZGl2LnRvb2x0aXAge1xuICBjb2xvcjogIzIyMjsgXG4gIGJhY2tncm91bmQ6ICNmZmY7IFxuICBwYWRkaW5nOiAuNWVtOyBcbiAgdGV4dC1zaGFkb3c6ICNmNWY1ZjUgMCAxcHggMDtcbiAgYm9yZGVyLXJhZGl1czogMnB4OyBcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMHB4ICNhNmE2YTY7IFxuICBvcGFjaXR5OiAwLjk7IFxuICByaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmQzLW1hcCAuZ3JhdGljdWxlIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiAjYmJiO1xuICBzdHJva2Utd2lkdGg6IC41cHg7XG4gIHN0cm9rZS1vcGFjaXR5OiAuNTtcbn1cbi5kMy1tYXAgLmVxdWF0b3Ige1xuICBzdHJva2U6ICNjY2M7XG4gIHN0cm9rZS13aWR0aDogMXB4O1xufVxuXG4uZDMtem9vbWlue1xuICB0b3A6IDEwcHg7XG59XG5cbi5kMy16b29tb3V0e1xuICB0b3A6IDM0cHg7XG59XG5cbi5kMy16b29taW4sIC5kMy16b29tb3V0e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICMyOTI5Mjk7XG4gIHBhZGRpbmc6IDRweDtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDAgcmdiYSgwLDAsMCwuMDUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/graphs/d3/d3-map.component.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/graphs/d3/d3-map.component.ts ***!
  \******************************************************/
/*! exports provided: D3MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3MapComponent", function() { return D3MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services/layout.service */ "./src/app/core/services/layout.service.ts");
/* harmony import */ var _app_core_smartadmin_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/smartadmin.config */ "./src/app/core/smartadmin.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//noinspection TypeScriptUnresolvedFunction
var $script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");
var D3MapComponent = /** @class */ (function () {
    function D3MapComponent(el, layoutService) {
        var _this = this;
        this.el = el;
        this.layoutService = layoutService;
        this.data = [];
        this.initialized = false;
        this.layoutSub = this.layoutService.subscribe(function () {
            _this.initialized && _this.throttle();
        });
    }
    D3MapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $script(['https://d3js.org/d3.v4.min.js',
            'https://d3js.org/topojson.v1.min.js'], function () {
            _this.d3Init();
        });
    };
    D3MapComponent.prototype.d3Init = function () {
        var _this = this;
        d3.select(window).on("resize", this.throttle.bind(this));
        this.zoom = d3.zoom()
            //.extent([1,9])
            .scaleExtent([1, 20])
            .on("zoom", this.move.bind(this));
        this.container = d3.select(this.getContainer());
        this.width = this.getContainer().offsetWidth;
        this.height = Math.max(this.width / 2, 300);
        //offsets for tooltips
        this.offsetL = this.container.offsetLeft + 20;
        this.offsetT = this.container.offsetTop + 10;
        //var graticule = d3.geo.graticule();
        this.graticule = d3.geoGraticule();
        this.tooltip = this.container.append("div").attr("class", "tooltip hidden");
        this.setup(this.width, this.height);
        d3.json(_app_core_smartadmin_config__WEBPACK_IMPORTED_MODULE_2__["config"].API_URL + '/graphs/d3/world-topo-min.json', function (err, world) {
            world.objects.countries.geometries = world.objects.countries.geometries.map(function (it) {
                it.properties.value = _this.data[it.properties.name];
                return it;
            });
            _this.countries = topojson.feature(world, world.objects.countries).features;
            var maxVal = Object.keys(_this.data).reduce(function (current, next) {
                return current >= _this.data[next] ? current : _this.data[next];
            }, 0);
            _this.color = d3.scaleLinear().domain([0, maxVal])
                .range([0, 100])
                // .interpolate(d3.interpolateRgb.gamma(2.2)("purple", "orange"))
                .range([d3.color('rgba(0, 113, 164, 0.6)'), d3.color('rgba(0, 113, 164, 1)')])
                .nice(100);
            _this.draw();
            _this.initialized = true;
        });
    };
    D3MapComponent.prototype.setup = function (width, height) {
        //projection = d3.geo.mercator()
        this.projection = d3.geoMercator()
            .translate([(width / 2), (height / 2)])
            .scale(width / 2 / Math.PI);
        //path = d3.geo.path().projection(projection);
        this.path = d3.geoPath().projection(this.projection);
        this.svg = this.container.append("svg")
            .attr("width", width)
            .attr("height", height)
            .call(this.zoom)
            .on("click", this.click.bind(this));
        this.g = this.svg.append("g");
        this.zoom.scaleBy(this.svg.transition().duration(750), 0.9);
        this.zoom.translateBy(this.svg.transition().duration(750), 0, 20);
    };
    D3MapComponent.prototype.handleMouseOver = function (country) {
        var mouse = d3.mouse(this.svg.node()).map(function (d) {
            return parseInt(d);
        });
        this.tooltip.classed("hidden", false)
            .attr("style", "left:" + (mouse[0] + this.offsetL) + "px;top:" + (mouse[1] + this.offsetT) + "px")
            .html(country.properties.name);
    };
    D3MapComponent.prototype.handleMouseOut = function () {
        this.tooltip.classed("hidden", true);
    };
    D3MapComponent.prototype.isVisible = function () {
        var container = this.getContainer();
        return (container.clientHeight > 0 &&
            container.clientWidth > 0);
    };
    D3MapComponent.prototype.isInViewport = function () {
        var container = this.getContainer();
        var rect = container.getBoundingClientRect();
        return (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    };
    D3MapComponent.prototype.draw = function () {
        var _this = this;
        if (!this.isVisible())
            return;
        // this.svg.append("path")
        //   .datum(this.graticule)
        //   .attr("class", "graticule")
        //   .attr("d", this.path);
        // this.g.append("path")
        //   .datum({ type: "LineString", coordinates: [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]] })
        //   .attr("class", "equator")
        //   .attr("d", this.path);
        var country = this.g.selectAll(".country").data(this.countries);
        country.enter().insert("path")
            .attr("class", "country")
            .attr("d", this.path)
            .attr("id", function (d, i) {
            return d.id;
        })
            .attr("title", function (d, i) {
            return d.properties.name;
        })
            .style("stroke", d3.color('white'))
            .style("fill", function (d, i) {
            return !d.properties.value ? d3.color('rgba(0, 113, 164, 0.0)') : _this.color(d.properties.value);
        })
            .style("stroke-width", '0.5')
            .on("mouseover", this.handleMouseOver.bind(this))
            .on("mouseout", this.handleMouseOut.bind(this));
        //tooltips
        /*
         d3.select("#container svg path")
         .on("mousemove", function(d,i) {
         console.log(d);
         var mouse = d3.mouse(svg.node()).map( function(d) { return parseInt(d); } );
    
         tooltip.classed("hidden", false)
         .attr("style", "left:"+(mouse[0]+offsetL)+"px;top:"+(mouse[1]+offsetT)+"px")
         .html(d.properties.name);
    
         })
         .on("mouseout",  function(d,i) {
         tooltip.classed("hidden", true);
         }); */
    };
    D3MapComponent.prototype.redraw = function () {
        this.width = this.getContainer().offsetWidth;
        this.height = Math.max(this.width / 2, 300);
        d3.select('svg').remove();
        this.setup(this.width, this.height);
        this.draw();
    };
    D3MapComponent.prototype.move = function () {
        //const t = d3.event.translate;
        var t = [d3.event.transform.x, d3.event.transform.y];
        //const s = d3.event.scale;
        var s = d3.event.transform.k;
        var zscale = s;
        var h = this.height / 4;
        t[0] = Math.min((this.width / this.height) * (s - 1), Math.max(this.width * (1 - s), t[0]));
        t[1] = Math.min(h * (s - 1) + h * s, Math.max(this.height * (1 - s) - h * s, t[1]));
        //zoom.translateBy(t);
        this.g.attr("transform", "translate(" + t + ")scale(" + s + ")");
        //adjust the country hover stroke width based on zoom level
        // d3.selectAll(".country").style("stroke-width", 1.5 / s);
    };
    D3MapComponent.prototype.zoomIn = function () {
        this.zoom.scaleBy(this.svg.transition().duration(750), 1.3);
    };
    D3MapComponent.prototype.zoomOut = function () {
        this.zoom.scaleBy(this.svg.transition().duration(750), 0.7);
    };
    D3MapComponent.prototype.throttle = function () {
        var _this = this;
        window.clearTimeout(this.throttleTimer);
        this.throttleTimer = window.setTimeout(function () {
            _this.redraw();
        }, 200);
    };
    //geo translation on mouse click in map
    D3MapComponent.prototype.click = function () {
        var latlon = this.projection.invert(d3.mouse(this.svg.node()));
        console.log(latlon);
    };
    //function to add points and text to the map (used in plotting capitals)
    D3MapComponent.prototype.addpoint = function (lon, lat, text) {
        var gpoint = this.g.append("g").attr("class", "gpoint");
        var x = this.projection([lon, lat])[0];
        var y = this.projection([lon, lat])[1];
        gpoint.append("svg:circle")
            .attr("cx", x)
            .attr("cy", y)
            .attr("class", "point")
            .attr("r", 1.5);
        //conditional in case a point has no associated text
        if (text.length > 0) {
            gpoint.append("text")
                .attr("x", x + 2)
                .attr("y", y + 2)
                .attr("class", "text")
                .text(text);
        }
    };
    D3MapComponent.prototype.getContainer = function () {
        if (!this.cachedContainer) {
            this.cachedContainer = this.el.nativeElement.querySelector('.d3-map');
        }
        return this.cachedContainer;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], D3MapComponent.prototype, "data", void 0);
    D3MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'd3-map',
            template: "\n  <div class=\"d3-zoomin\" (click)=\"zoomIn()\"><i class=\"fa fa-plus\"></i></div>\n  <div class=\"d3-zoomout\" (click)=\"zoomOut()\"><i class=\"fa fa-minus\"></i></div>\n  <div ngNonBindable class=\"d3-map\"></div>",
            styles: [__webpack_require__(/*! ./d3-map.component.css */ "./src/app/shared/graphs/d3/d3-map.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _app_core_services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]])
    ], D3MapComponent);
    return D3MapComponent;
}());



/***/ }),

/***/ "./src/app/shared/graphs/d3/d3.module.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/graphs/d3/d3.module.ts ***!
  \***********************************************/
/*! exports provided: D3Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3Module", function() { return D3Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _d3_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./d3-map.component */ "./src/app/shared/graphs/d3/d3-map.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var D3Module = /** @class */ (function () {
    function D3Module() {
    }
    D3Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_d3_map_component__WEBPACK_IMPORTED_MODULE_2__["D3MapComponent"]],
            exports: [_d3_map_component__WEBPACK_IMPORTED_MODULE_2__["D3MapComponent"]],
        })
    ], D3Module);
    return D3Module;
}());



/***/ })

}]);
//# sourceMappingURL=analytics-analytics-module.js.map