(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["topic-view-topic-view-module"],{

/***/ "./src/app/features/app-views/forum/topic-view/topic-view-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/features/app-views/forum/topic-view/topic-view-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: TopicViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicViewRoutingModule", function() { return TopicViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _topic_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topic-view.component */ "./src/app/features/app-views/forum/topic-view/topic-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _topic_view_component__WEBPACK_IMPORTED_MODULE_2__["TopicViewComponent"]
    }];
var TopicViewRoutingModule = /** @class */ (function () {
    function TopicViewRoutingModule() {
    }
    TopicViewRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], TopicViewRoutingModule);
    return TopicViewRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/app-views/forum/topic-view/topic-view.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/features/app-views/forum/topic-view/topic-view.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Other Pages', 'Forum Layout']\" icon=\"picture-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n\n  <!-- end row -->\n  <!-- row -->\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"well\">\n        <table class=\"table table-striped table-forum\">\n          <thead>\n          <tr>\n            <th colspan=\"2\"><a [routerLink]=\"['../general-view']\"> Projects </a> &gt; Business Requirement Docs</th>\n            <th class=\"text-center hidden-xs hidden-sm\" style=\"width: 100px;\">Topics</th>\n            <th class=\"text-center hidden-xs hidden-sm\" style=\"width: 100px;\">Posts</th>\n            <th class=\"hidden-xs hidden-sm\" style=\"width: 200px;\">Last Post</th>\n          </tr>\n          </thead>\n          <tbody>\n          <!-- TR -->\n          <tr class=\"warning\">\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"glyphicon glyphicon-pushpin fa-2x text-danger\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../post-view']\">\n                Welcome message\n              </a>\n                <small><a [routerLink]=\"['/profile']\">John Doe</a> on <em>January 1, 2014</em></small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr class=\"warning\">\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"glyphicon glyphicon-pushpin fa-2x text-danger\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../post-view']\">\n                Latest Updates\n              </a>\n                <small><a [routerLink]=\"['/profile']\">John Doe</a> on <em>January 1, 2014</em></small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td colspan=\"2\">\n              <h4><a [routerLink]=\"['../post-view']\">\n                Nam quam nunc blandit vel\n              </a>\n                <small><a [routerLink]=\"['/profile']\">John Doe</a> on <em>January 1, 2014</em></small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td colspan=\"2\">\n              <h4><a [routerLink]=\"['../post-view']\">\n                Maecenas nec odio et ante tincidun\n              </a>\n                <small><a [routerLink]=\"['/profile']\">John Doe</a> on <em>January 1, 2014</em></small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td colspan=\"2\">\n              <h4><a [routerLink]=\"['../post-view']\">\n                Donec sodales sagittis magna\n              </a>\n                <small><a [routerLink]=\"['/profile']\">John Doe</a> on <em>January 1, 2014</em></small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td colspan=\"2\">\n              <h4><a [routerLink]=\"['../post-view']\">\n                Sed consequat, leo eget bibendum sodales\n              </a>\n                <small><a [routerLink]=\"['/profile']\">John Doe</a> on <em>January 1, 2014</em></small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td colspan=\"2\">\n              <h4><a [routerLink]=\"['../post-view']\">\n                Consectetuer adipiscing elit\n              </a>\n                <small><a [routerLink]=\"['/profile']\">John Doe</a> on <em>January 1, 2014</em></small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr class=\"locked\">\n            <td colspan=\"2\">\n              <h4><a [routerLink]=\"['../post-view']\">\n                This is a locked topic!\n              </a>\n                <small><a [routerLink]=\"['/profile']\">John Doe</a> on <em>January 1, 2014</em></small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr class=\"closed\">\n            <td colspan=\"2\">\n              <h4><a [routerLink]=\"['../post-view']\">\n                This is a closed topic!\n              </a>\n                <small><a href=\"\">John Doe</a> on <em>January 1, 2014</em></small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          </tbody>\n        </table>\n        <div class=\"text-center\">\n          <ul class=\"pagination pagination-sm\">\n            <li class=\"disabled\"><a href=\"\">Prev</a></li>\n            <li class=\"active\"><a href=\"\">1</a></li>\n            <li><a href=\"\">2</a></li>\n            <li><a href=\"\">3</a></li>\n            <li><a href=\"\">...</a></li>\n            <li><a href=\"\">99</a></li>\n            <li><a href=\"\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- end row -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/app-views/forum/topic-view/topic-view.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/app-views/forum/topic-view/topic-view.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TopicViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicViewComponent", function() { return TopicViewComponent; });
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

var TopicViewComponent = /** @class */ (function () {
    function TopicViewComponent() {
    }
    TopicViewComponent.prototype.ngOnInit = function () {
    };
    TopicViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-topic-view',
            template: __webpack_require__(/*! ./topic-view.component.html */ "./src/app/features/app-views/forum/topic-view/topic-view.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TopicViewComponent);
    return TopicViewComponent;
}());



/***/ }),

/***/ "./src/app/features/app-views/forum/topic-view/topic-view.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/app-views/forum/topic-view/topic-view.module.ts ***!
  \**************************************************************************/
/*! exports provided: TopicViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicViewModule", function() { return TopicViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _topic_view_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topic-view-routing.module */ "./src/app/features/app-views/forum/topic-view/topic-view-routing.module.ts");
/* harmony import */ var _topic_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topic-view.component */ "./src/app/features/app-views/forum/topic-view/topic-view.component.ts");
/* harmony import */ var _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/layout */ "./src/app/shared/layout/index.ts");
/* harmony import */ var _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/stats/stats.module */ "./src/app/shared/stats/stats.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TopicViewModule = /** @class */ (function () {
    function TopicViewModule() {
    }
    TopicViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _topic_view_routing_module__WEBPACK_IMPORTED_MODULE_2__["TopicViewRoutingModule"],
                _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__["SmartadminLayoutModule"],
                _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__["StatsModule"],
            ],
            declarations: [_topic_view_component__WEBPACK_IMPORTED_MODULE_3__["TopicViewComponent"]]
        })
    ], TopicViewModule);
    return TopicViewModule;
}());



/***/ })

}]);
//# sourceMappingURL=topic-view-topic-view-module.js.map