(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forum-forum-module"],{

/***/ "./src/app/features/app-views/forum/forum-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/app-views/forum/forum-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ForumRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumRoutingModule", function() { return ForumRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: 'general-view',
        loadChildren: './general-view/general-view.module#GeneralViewModule'
    },
    {
        path: 'post-view',
        loadChildren: './post-view/post-view.module#PostViewModule'
    },
    {
        path: 'topic-view',
        loadChildren: './topic-view/topic-view.module#TopicViewModule'
    },
];
var ForumRoutingModule = /** @class */ (function () {
    function ForumRoutingModule() {
    }
    ForumRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], ForumRoutingModule);
    return ForumRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/app-views/forum/forum.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/app-views/forum/forum.module.ts ***!
  \**********************************************************/
/*! exports provided: ForumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumModule", function() { return ForumModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _forum_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forum-routing.module */ "./src/app/features/app-views/forum/forum-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForumModule = /** @class */ (function () {
    function ForumModule() {
    }
    ForumModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _forum_routing_module__WEBPACK_IMPORTED_MODULE_2__["ForumRoutingModule"]
            ],
        })
    ], ForumModule);
    return ForumModule;
}());



/***/ })

}]);
//# sourceMappingURL=forum-forum-module.js.map