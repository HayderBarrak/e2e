(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-view-post-view-module"],{

/***/ "./src/app/features/app-views/forum/post-view/post-view-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/features/app-views/forum/post-view/post-view-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: PostViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostViewRoutingModule", function() { return PostViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _post_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-view.component */ "./src/app/features/app-views/forum/post-view/post-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _post_view_component__WEBPACK_IMPORTED_MODULE_2__["PostViewComponent"]
    }];
var PostViewRoutingModule = /** @class */ (function () {
    function PostViewRoutingModule() {
    }
    PostViewRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], PostViewRoutingModule);
    return PostViewRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/app-views/forum/post-view/post-view.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/features/app-views/forum/post-view/post-view.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" data-sparkline-container=\"\" data-easy-pie-chart-container=\"\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Other Pages', 'Forum Layout']\" icon=\"picture-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n\n  <!-- row -->\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"well\">\n        <table class=\"table table-striped table-forum\">\n          <thead>\n          <tr>\n            <th colspan=\"2\"><a [routerLink]=\"['../general-view']\"> Projects </a> &gt; <a [routerLink]=\"['app-views/forum-topic-demo']\">Business\n              Requirement Docs </a> &gt; Nam quam nunc blandit vel\n            </th>\n          </tr>\n          </thead>\n          <tbody>\n          <!-- Post -->\n          <tr>\n            <td class=\"text-center\"><a [routerLink]=\"['/profile']\"><img alt=\"\" src=\"assets/img/flags/us.png\"> &#xA0;\n              <strong>John Doe</strong></a></td>\n            <td>on <em>Jan 1, 2014 - 12:00am</em></td>\n          </tr>\n          <tr>\n            <td class=\"text-center\" style=\"width: 12%;\">\n              <div class=\"push-bit\">\n                <a [routerLink]=\"['/profile']\"> <img src=\"assets/img/avatars/sunny.png\" width=\"50\" alt=\"avatar\" class=\"online\"> </a>\n              </div>\n              <small>473 Posts</small>\n            </td>\n            <td>\n              <p>\n                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,\n                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis\n                pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean\n                vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend\n                ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus\n                viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.\n              </p><h5>Forecast Pie</h5><span class=\"sparkline display-inline margin-bottom-10\" data-sparkline-type=\"pie\" data-sparkline-offset=\"90\" data-sparkline-piesize=\"150px\"> 33,20,10 </span>\n\n              <p>\n                Fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet\n                a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer\n                tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend\n                tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam\n                lorem ante, dapibus in, viv.\n              </p><em>- John Doe\n              <br>\n              CEO, SmartAdmin</em></td>\n          </tr>\n          <!-- end Post -->\n          <!-- Post -->\n          <tr>\n            <td class=\"text-center\"><a [routerLink]=\"['/profile']\"><img alt=\"\" src=\"assets/img/flags/es.png\"> &#xA0;\n              <strong>Sadi Orlaf</strong></a></td>\n            <td>on <em>Jan 1, 2014 - 12:00am</em></td>\n          </tr>\n          <tr>\n            <td class=\"text-center\" style=\"width: 12%;\">\n              <div class=\"push-bit\">\n                <a [routerLink]=\"['/profile']\"> <img src=\"assets/img/avatars/5.png\" width=\"50\" alt=\"avatar\" class=\"offline\"> </a>\n              </div>\n              <small>473 Posts</small>\n            </td>\n            <td>\n              <p>\n                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,\n                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis\n                pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean\n                vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend\n                ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus\n                viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.\n              </p><em>- Sadi Orlaf\n              <br>\n              Executive, SmartAdmin</em>\n\n              <div class=\"forum-attachment\">\n                2 attachment(s) &#x2014; <a href=\"\"> Download all attachments</a>\n                <ul class=\"list-inline margin-top-10\">\n                  <li class=\"well well-sm padding-5\">\n                    <strong>rocketlaunch.jpg</strong>\n                    <br>\n                    400 kb\n                    <br>\n                    <a href=\"\"> Download</a> | <a href=\"\"> View</a>\n                  </li>\n                  <li class=\"well well-sm padding-5\">\n                    <strong>budget.xsl</strong>\n                    <br>\n                    400 kb\n                    <br>\n                    <a href=\"\"> Download</a> | <a href=\"\"> Share</a>\n                  </li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n          <!-- end Post -->\n          <!-- Post -->\n          <tr>\n            <td class=\"text-center\"><a [routerLink]=\"['/profile']\"><img alt=\"\" src=\"assets/img/flags/us.png\"> &#xA0;\n              <strong>Me</strong></a></td>\n            <td><em>Today</em></td>\n          </tr>\n          <tr>\n            <td class=\"text-center\" style=\"width: 12%;\">\n              <div class=\"push-bit\">\n                <a [routerLink]=\"['/profile']\"> <img src=\"assets/img/avatars/sunny.png\" width=\"50\" alt=\"avatar\" class=\"online\"> </a>\n              </div>\n              <small>473 Posts</small>\n            </td>\n            <td>\n              <div id=\"forumPost\" data-smart-summernote-editor=\"\" data-height=\"180\"></div>\n              <button class=\"btn btn-primary margin-top-10\">\n                Post\n              </button>\n              <button class=\"btn btn-success margin-top-10\">\n                Save for later\n              </button>\n            </td>\n          </tr>\n          <!-- end Post -->\n          </tbody>\n        </table>\n        <div class=\"text-center\">\n          <ul class=\"pagination pagination-sm\">\n            <li class=\"disabled\">\n              <a href=\"\">Prev</a>\n            </li>\n            <li class=\"active\">\n              <a href=\"\">1</a>\n            </li>\n            <li>\n              <a href=\"\">2</a>\n            </li>\n            <li>\n              <a href=\"\">3</a>\n            </li>\n            <li>\n              <a href=\"\">...</a>\n            </li>\n            <li>\n              <a href=\"\">99</a>\n            </li>\n            <li>\n              <a href=\"\">Next</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- end row -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/app-views/forum/post-view/post-view.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/app-views/forum/post-view/post-view.component.ts ***!
  \***************************************************************************/
/*! exports provided: PostViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostViewComponent", function() { return PostViewComponent; });
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

var PostViewComponent = /** @class */ (function () {
    function PostViewComponent() {
    }
    PostViewComponent.prototype.ngOnInit = function () {
    };
    PostViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-post-view',
            template: __webpack_require__(/*! ./post-view.component.html */ "./src/app/features/app-views/forum/post-view/post-view.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], PostViewComponent);
    return PostViewComponent;
}());



/***/ }),

/***/ "./src/app/features/app-views/forum/post-view/post-view.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/app-views/forum/post-view/post-view.module.ts ***!
  \************************************************************************/
/*! exports provided: PostViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostViewModule", function() { return PostViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _post_view_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-view-routing.module */ "./src/app/features/app-views/forum/post-view/post-view-routing.module.ts");
/* harmony import */ var _post_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-view.component */ "./src/app/features/app-views/forum/post-view/post-view.component.ts");
/* harmony import */ var _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/layout */ "./src/app/shared/layout/index.ts");
/* harmony import */ var _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/stats/stats.module */ "./src/app/shared/stats/stats.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PostViewModule = /** @class */ (function () {
    function PostViewModule() {
    }
    PostViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _post_view_routing_module__WEBPACK_IMPORTED_MODULE_2__["PostViewRoutingModule"],
                _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__["SmartadminLayoutModule"],
                _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__["StatsModule"],
            ],
            declarations: [_post_view_component__WEBPACK_IMPORTED_MODULE_3__["PostViewComponent"]]
        })
    ], PostViewModule);
    return PostViewModule;
}());



/***/ })

}]);
//# sourceMappingURL=post-view-post-view-module.js.map