(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-view-general-view-module"],{

/***/ "./src/app/features/app-views/forum/general-view/general-view-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/features/app-views/forum/general-view/general-view-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: GeneralViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralViewRoutingModule", function() { return GeneralViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _general_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-view.component */ "./src/app/features/app-views/forum/general-view/general-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _general_view_component__WEBPACK_IMPORTED_MODULE_2__["GeneralViewComponent"]
    }];
var GeneralViewRoutingModule = /** @class */ (function () {
    function GeneralViewRoutingModule() {
    }
    GeneralViewRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], GeneralViewRoutingModule);
    return GeneralViewRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/app-views/forum/general-view/general-view.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/features/app-views/forum/general-view/general-view.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Other Pages', 'Forum Layout']\" icon=\"picture-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <!-- end row -->\n  <!-- row -->\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"well\">\n        <table class=\"table table-striped table-forum\">\n          <thead>\n          <tr>\n            <th colspan=\"2\">Introduction</th>\n            <th class=\"text-center hidden-xs hidden-sm\" style=\"width: 100px;\">Topics</th>\n            <th class=\"text-center hidden-xs hidden-sm\" style=\"width: 100px;\">Posts</th>\n            <th class=\"hidden-xs hidden-sm\" style=\"width: 200px;\">Last Post</th>\n          </tr>\n          </thead>\n          <tbody>\n          <!-- TR -->\n          <tr>\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"fa fa-globe fa-2x text-muted\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../topic-view']\">\n                Hello, welcome to SmartAdmin Forum!\n              </a>\n                <small>You can introduce yourself here</small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"fa fa-microphone fa-2x text-muted\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../topic-view']\">\n                News &amp; Announcements\n              </a>\n                <small>Latest news and reports</small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"fa fa-pencil fa-2x text-muted\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../topic-view']\">\n                Forum Rules\n              </a>\n                <small>Please read carefully our forum rules before you post</small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          </tbody>\n        </table>\n        <table class=\"table table-striped table-forum\">\n          <thead>\n          <tr>\n            <th colspan=\"2\">Projects</th>\n            <th class=\"text-center hidden-xs hidden-sm\" style=\"width: 100px;\">Topics</th>\n            <th class=\"text-center hidden-xs hidden-sm\" style=\"width: 100px;\">Posts</th>\n            <th class=\"hidden-xs hidden-sm\" style=\"width: 200px;\">Last Post</th>\n          </tr>\n          </thead>\n          <tbody>\n          <!-- TR -->\n          <tr>\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"fa fa-table fa-2x text-muted\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../topic-view']\">\n                Business Requirement Docs\n              </a>\n                <small>Latest BRD docs</small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"fa fa-bar-chart-o fa-2x text-muted\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../topic-view']\">\n                Project Discussions\n              </a>\n                <small>Post all project related topics here</small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"fa fa-user fa-2x text-muted\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../topic-view']\">\n                Clients\n              </a>\n                <small>Client forum posts</small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"fa fa-dollar fa-2x text-muted\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../topic-view']\">\n                Budget Meetings\n              </a>\n                <small>Project budget discussions</small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          </tbody>\n        </table>\n        <table class=\"table table-striped table-forum\">\n          <thead>\n          <tr>\n            <th colspan=\"2\">Support</th>\n            <th class=\"text-center hidden-xs hidden-sm\" style=\"width: 100px;\">Topics</th>\n            <th class=\"text-center hidden-xs hidden-sm\" style=\"width: 100px;\">Posts</th>\n            <th class=\"hidden-xs hidden-sm\" style=\"width: 200px;\">Last Post</th>\n          </tr>\n          </thead>\n          <tbody>\n          <!-- TR -->\n          <tr>\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"fa fa-book fa-2x text-muted\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../topic-view']\">\n                How to...\n              </a>\n                <small>Maecenas nec odio et</small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"fa fa-question-circle fa-2x text-muted\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../topic-view']\">\n                Questions and FAQs\n              </a>\n                <small>Luctus pulvinar hendrerit id lorem</small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"fa fa-user-md fa-2x text-muted\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../topic-view']\">\n                User Guideline\n              </a>\n                <small>Cras dapibus vivamus elementum semper nisi</small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n  <!-- end row -->\n  <!-- row -->\n  <div class=\"row\">\n    <!-- a blank row to get started -->\n  </div>\n  <!-- end row -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/app-views/forum/general-view/general-view.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/app-views/forum/general-view/general-view.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GeneralViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralViewComponent", function() { return GeneralViewComponent; });
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

var GeneralViewComponent = /** @class */ (function () {
    function GeneralViewComponent() {
    }
    GeneralViewComponent.prototype.ngOnInit = function () {
    };
    GeneralViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-general-view',
            template: __webpack_require__(/*! ./general-view.component.html */ "./src/app/features/app-views/forum/general-view/general-view.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], GeneralViewComponent);
    return GeneralViewComponent;
}());



/***/ }),

/***/ "./src/app/features/app-views/forum/general-view/general-view.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/app-views/forum/general-view/general-view.module.ts ***!
  \******************************************************************************/
/*! exports provided: GeneralViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralViewModule", function() { return GeneralViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _general_view_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-view-routing.module */ "./src/app/features/app-views/forum/general-view/general-view-routing.module.ts");
/* harmony import */ var _general_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-view.component */ "./src/app/features/app-views/forum/general-view/general-view.component.ts");
/* harmony import */ var _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/layout */ "./src/app/shared/layout/index.ts");
/* harmony import */ var _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/stats/stats.module */ "./src/app/shared/stats/stats.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var GeneralViewModule = /** @class */ (function () {
    function GeneralViewModule() {
    }
    GeneralViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _general_view_routing_module__WEBPACK_IMPORTED_MODULE_2__["GeneralViewRoutingModule"],
                _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__["SmartadminLayoutModule"],
                _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__["StatsModule"],
            ],
            declarations: [_general_view_component__WEBPACK_IMPORTED_MODULE_3__["GeneralViewComponent"]]
        })
    ], GeneralViewModule);
    return GeneralViewModule;
}());



/***/ })

}]);
//# sourceMappingURL=general-view-general-view-module.js.map