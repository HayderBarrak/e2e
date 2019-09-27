(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-forgot-module"],{

/***/ "./src/app/features/auth/forgot/forgot-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/auth/forgot/forgot-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ForgotRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotRoutingModule", function() { return ForgotRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forgot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot.component */ "./src/app/features/auth/forgot/forgot.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _forgot_component__WEBPACK_IMPORTED_MODULE_2__["ForgotComponent"]
    }];
var ForgotRoutingModule = /** @class */ (function () {
    function ForgotRoutingModule() {
    }
    ForgotRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], ForgotRoutingModule);
    return ForgotRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/auth/forgot/forgot.component.html":
/*!************************************************************!*\
  !*** ./src/app/features/auth/forgot/forgot.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"animated fadeInDown\">\n\n  <div id=\"logo-group\">\n    <span id=\"logo\"> <img src=\"assets/img/logo.png\" alt=\"SmartAdmin\"> </span>\n  </div>\n\n  <span id=\"extr-page-header-space\"> <span class=\"hidden-mobile hiddex-xs\">Need an account?</span> <a routerLink=\"/auth/register\" class=\"btn btn-danger\">Create account</a> </span>\n\n</header>\n<div id=\"main\" role=\"main\" class=\"animated fadeInDown\">\n\n  <div id=\"content\" class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-7 col-lg-8 hidden-xs hidden-sm\">\n        <h1 class=\"txt-color-red login-header-big\">SmartAdmin</h1>\n        <div class=\"hero\">\n\n          <div class=\"pull-left login-desc-box-l\">\n            <h4 class=\"paragraph-header\">It's Okay to be Smart. Experience the simplicity of SmartAdmin, everywhere you go!</h4>\n            <div class=\"login-app-icons\">\n              <a routerLink=\"/dashboard/analytics\" class=\"btn btn-danger btn-sm\">Frontend Template</a>\n              <a routerLink=\"/smartadmin/app-layouts\" class=\"btn btn-danger btn-sm\">Find out more</a>\n            </div>\n          </div>\n\n          <img src=\"assets/img/demo/iphoneview.png\" class=\"pull-right display-image\" alt=\"\" style=\"width:210px\">\n\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <h5 class=\"about-heading\">About SmartAdmin - Are you up to date?</h5>\n            <p>\n              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.\n            </p>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <h5 class=\"about-heading\">Not just your average template!</h5>\n            <p>\n              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi voluptatem accusantium!\n            </p>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-4\">\n        <div class=\"well no-padding\">\n          <form id=\"login-form\" class=\"smart-form client-form\">\n            <header>\n              Forgot Password\n            </header>\n\n            <fieldset>\n\n              <section>\n                <label class=\"label\">Enter your email address</label>\n                <label class=\"input\"> <i class=\"icon-append fa fa-envelope\"></i>\n                  <input type=\"email\" name=\"email\">\n                  <b class=\"tooltip tooltip-top-right\"><i class=\"fa fa-envelope txt-color-teal\"></i> Please enter email address for password reset</b></label>\n              </section>\n              <section>\n\t\t\t\t\t\t\t\t\t\t<span class=\"timeline-seperator text-center text-primary\"> <span class=\"font-sm\">OR</span>\n              </span></section>\n              <section>\n                <label class=\"label\">Your Username</label>\n                <label class=\"input\"> <i class=\"icon-append fa fa-user\"></i>\n                  <input type=\"text\" name=\"username\">\n                  <b class=\"tooltip tooltip-top-right\"><i class=\"fa fa-user txt-color-teal\"></i> Enter your username</b> </label>\n                <div class=\"note\">\n                  <a routerLink=\"/auth/login\">I remembered my password!</a>\n                </div>\n              </section>\n\n            </fieldset>\n            <footer>\n              <button (click)=\"submit($event)\" class=\"btn btn-primary\">\n                <i class=\"fa fa-refresh\"></i> Reset Password\n              </button>\n            </footer>\n          </form>\n\n        </div>\n\n        <h5 class=\"text-center\"> - Or sign in using -</h5>\n\n        <ul class=\"list-inline text-center\">\n          <li>\n            <a (click)=\"(null)\" class=\"btn btn-primary btn-circle\"><i class=\"fa fa-facebook\"></i></a>\n          </li>\n          <li>\n            <a (click)=\"(null)\" class=\"btn btn-info btn-circle\"><i class=\"fa fa-twitter\"></i></a>\n          </li>\n          <li>\n            <a (click)=\"(null)\" class=\"btn btn-warning btn-circle\"><i class=\"fa fa-linkedin\"></i></a>\n          </li>\n        </ul>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/features/auth/forgot/forgot.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/auth/forgot/forgot.component.ts ***!
  \**********************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(router) {
        this.router = router;
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent.prototype.submit = function (event) {
        event.preventDefault();
        this.router.navigate(['/dashboard/+analytics']);
    };
    ForgotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.component.html */ "./src/app/features/auth/forgot/forgot.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/features/auth/forgot/forgot.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/auth/forgot/forgot.module.ts ***!
  \*******************************************************/
/*! exports provided: ForgotModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotModule", function() { return ForgotModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-routing.module */ "./src/app/features/auth/forgot/forgot-routing.module.ts");
/* harmony import */ var _forgot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot.component */ "./src/app/features/auth/forgot/forgot.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ForgotModule = /** @class */ (function () {
    function ForgotModule() {
    }
    ForgotModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _forgot_routing_module__WEBPACK_IMPORTED_MODULE_2__["ForgotRoutingModule"]
            ],
            declarations: [_forgot_component__WEBPACK_IMPORTED_MODULE_3__["ForgotComponent"]]
        })
    ], ForgotModule);
    return ForgotModule;
}());



/***/ })

}]);
//# sourceMappingURL=forgot-forgot-module.js.map