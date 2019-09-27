(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["timeline-timeline-module"],{

/***/ "./src/app/features/app-views/timeline/timeline-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/app-views/timeline/timeline-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: TimelineRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineRoutingModule", function() { return TimelineRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _timeline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline.component */ "./src/app/features/app-views/timeline/timeline.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _timeline_component__WEBPACK_IMPORTED_MODULE_2__["TimelineComponent"]
    }];
var TimelineRoutingModule = /** @class */ (function () {
    function TimelineRoutingModule() {
    }
    TimelineRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], TimelineRoutingModule);
    return TimelineRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/app-views/timeline/timeline.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/features/app-views/timeline/timeline.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" data-sparkline-container=\"\" data-easy-pie-chart-container=\"\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Other Pages', 'Timeline']\" icon=\"clock-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <!-- row -->\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <div class=\"well well-sm\">\n        <!-- Timeline Content -->\n        <div class=\"smart-timeline\">\n          <ul class=\"smart-timeline-list\">\n            <li>\n              <div class=\"smart-timeline-icon\">\n                <img src=\"assets/img/avatars/sunny.png\" width=\"32\" height=\"32\" alt=\"user\">\n              </div>\n              <div class=\"smart-timeline-time\">\n                <small>just now</small>\n              </div>\n              <div class=\"smart-timeline-content\">\n                <p>\n                  <a (click)=\"(null)\"><strong>Trip to Adalaskar</strong></a>\n                </p>\n                <p>\n                  Check out my tour to Adalaskar\n                </p>\n                <p>\n                  <a (click)=\"(null)\" class=\"btn btn-xs btn-primary\"><i class=\"fa fa-file\"></i> Read the post</a>\n                </p>\n                <img src=\"assets/img/superbox/superbox-thumb-4.jpg\" alt=\"img\" width=\"150\">\n              </div>\n            </li>\n            <li>\n              <div class=\"smart-timeline-icon\">\n                <i class=\"fa fa-file-text\"></i>\n              </div>\n              <div class=\"smart-timeline-time\">\n                <small>1 min ago</small>\n              </div>\n              <div class=\"smart-timeline-content\">\n                <p>\n                  <strong>Meeting invite for &quot;GENERAL GNU&quot; [<a (click)=\"(null)\"><i>Go to my calendar</i></a>]</strong>\n                </p>\n                <div class=\"well well-sm display-inline\">\n                  <p>Will you be able to attend the meeting - <strong> 10:00 am</strong> tomorrow?</p>\n                  <button class=\"btn btn-xs btn-default\">Confirm Attendance</button>\n                </div>\n              </div>\n            </li>\n            <li>\n              <div class=\"smart-timeline-icon bg-color-greenDark\">\n                <i class=\"fa fa-bar-chart-o\"></i>\n              </div>\n              <div class=\"smart-timeline-time\">\n                <small>5 hrs ago</small>\n              </div>\n              <div class=\"smart-timeline-content\">\n                <p>\n                  <strong class=\"txt-color-greenDark\">24hrs User Feed</strong>\n                </p>\n                <div class=\"sparkline\" data-sparkline-type=\"compositeline\" data-sparkline-spotradius-top=\"5\" data-sparkline-color-top=\"#3a6965\" data-sparkline-line-width-top=\"3\" data-sparkline-color-bottom=\"#2b5c59\" data-sparkline-spot-color=\"#2b5c59\" data-sparkline-minspot-color-top=\"#97bfbf\" data-sparkline-maxspot-color-top=\"#c2cccc\" data-sparkline-highlightline-color-top=\"#cce8e4\" data-sparkline-highlightspot-color-top=\"#9dbdb9\" data-sparkline-width=\"170px\" data-sparkline-height=\"40px\" data-sparkline-line-val=\"[6,4,7,8,4,3,2,2,5,6,7,4,1,5,7,9,9,8,7,6]\" data-sparkline-bar-val=\"[4,1,5,7,9,9,8,7,6,6,4,7,8,4,3,2,2,5,6,7]\"></div>\n                <br>\n              </div>\n            </li>\n            <li>\n              <div class=\"smart-timeline-icon\">\n                <i class=\"fa fa-user\"></i>\n              </div>\n              <div class=\"smart-timeline-time\">\n                <small>yesterday</small>\n              </div>\n              <div class=\"smart-timeline-content\">\n                <p>\n                  <a (click)=\"(null)\"><strong>Update user information</strong></a>\n                </p>\n                <p>\n                  Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.\n                </p>\n                Tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit\n                <ul class=\"list-inline\">\n                  <li>\n                    <img src=\"assets/img/superbox/superbox-thumb-6.jpg\" alt=\"img\" width=\"50\">\n                  </li>\n                  <li>\n                    <img src=\"assets/img/superbox/superbox-thumb-5.jpg\" alt=\"img\" width=\"50\">\n                  </li>\n                  <li>\n                    <img src=\"assets/img/superbox/superbox-thumb-7.jpg\" alt=\"img\" width=\"50\">\n                  </li>\n                </ul>\n              </div>\n            </li>\n            <li>\n              <div class=\"smart-timeline-icon\">\n                <i class=\"fa fa-pencil\"></i>\n              </div>\n              <div class=\"smart-timeline-time\">\n                <small>12 Mar, 2013</small>\n              </div>\n              <div class=\"smart-timeline-content\">\n                <p>\n                  <a (click)=\"(null)\"><strong>Nabi Resource Report</strong></a>\n                </p>\n                <p>\n                  Ean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis.\n                </p>\n                <a (click)=\"(null)\" class=\"btn btn-xs btn-default\">Read more</a>\n              </div>\n            </li>\n            <li class=\"text-center\">\n              <a (click)=\"(null)\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-arrow-down text-muted\"></i> LOAD MORE</a>\n            </li>\n          </ul>\n        </div>\n        <!-- END Timeline Content -->\n      </div>\n    </div>\n  </div>\n  <!-- end row -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/app-views/timeline/timeline.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/app-views/timeline/timeline.component.ts ***!
  \*******************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
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

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/features/app-views/timeline/timeline.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/features/app-views/timeline/timeline.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/app-views/timeline/timeline.module.ts ***!
  \****************************************************************/
/*! exports provided: TimelineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineModule", function() { return TimelineModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _timeline_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline-routing.module */ "./src/app/features/app-views/timeline/timeline-routing.module.ts");
/* harmony import */ var _timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline.component */ "./src/app/features/app-views/timeline/timeline.component.ts");
/* harmony import */ var _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/layout */ "./src/app/shared/layout/index.ts");
/* harmony import */ var _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/stats/stats.module */ "./src/app/shared/stats/stats.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TimelineModule = /** @class */ (function () {
    function TimelineModule() {
    }
    TimelineModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__["SmartadminLayoutModule"],
                _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__["StatsModule"],
                _timeline_routing_module__WEBPACK_IMPORTED_MODULE_2__["TimelineRoutingModule"]
            ],
            declarations: [_timeline_component__WEBPACK_IMPORTED_MODULE_3__["TimelineComponent"]]
        })
    ], TimelineModule);
    return TimelineModule;
}());



/***/ })

}]);
//# sourceMappingURL=timeline-timeline-module.js.map