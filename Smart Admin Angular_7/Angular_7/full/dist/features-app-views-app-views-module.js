(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-app-views-app-views-module"],{

/***/ "./src/app/features/app-views/app-views.module.ts":
/*!********************************************************!*\
  !*** ./src/app/features/app-views/app-views.module.ts ***!
  \********************************************************/
/*! exports provided: AppViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppViewsModule", function() { return AppViewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_views_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-views.routing */ "./src/app/features/app-views/app-views.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppViewsModule = /** @class */ (function () {
    function AppViewsModule() {
    }
    AppViewsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _app_views_routing__WEBPACK_IMPORTED_MODULE_1__["routing"],
            ],
            entryComponents: []
        })
    ], AppViewsModule);
    return AppViewsModule;
}());



/***/ }),

/***/ "./src/app/features/app-views/app-views.routing.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/app-views/app-views.routing.ts ***!
  \*********************************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    {
        path: 'forum',
        loadChildren: './forum/forum.module#ForumModule'
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
    },
    {
        path: 'blog',
        loadChildren: './blog/blog.module#BlogModule'
    },
    {
        path: 'gallery',
        loadChildren: './gallery/gallery-demo.module#GalleryDemoModule'
    },
    {
        path: 'timeline',
        loadChildren: './timeline/timeline.module#TimelineModule'
    },
    {
        path: 'projects',
        loadChildren: './projects/projects-list.module#ProjectsListModule'
    },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=features-app-views-app-views-module.js.map