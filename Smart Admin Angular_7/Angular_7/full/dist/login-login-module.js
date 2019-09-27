(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/features/auth/login/login-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/auth/login/login-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/features/auth/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/auth/login/login.component.html":
/*!**********************************************************!*\
  !*** ./src/app/features/auth/login/login.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"animated fadeInDown\">\n\n  <div id=\"logo-group\">\n    <span id=\"logo\"> <img src=\"assets/img/logo.png\" alt=\"SmartAdmin\"> </span>\n  </div>\n\n  <span id=\"extr-page-header-space\"> <span class=\"hidden-mobile hiddex-xs\">Need an account?</span> <a routerLink=\"/auth/register\" class=\"btn btn-danger\">Create account</a> </span>\n\n</header>\n<div id=\"main\" role=\"main\" class=\"animated fadeInDown\">\n\n  <div id=\"content\" class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-7 col-lg-8 hidden-xs hidden-sm\">\n        <h1 class=\"txt-color-red login-header-big\">SmartAdmin</h1>\n\n        <div class=\"hero\">\n          <div class=\"pull-left login-desc-box-l\">\n            <h4 class=\"paragraph-header\">It's Okay to be Smart. Experience the simplicity of SmartAdmin,\n              everywhere you go!</h4>\n\n            <div class=\"login-app-icons\">\n              <a routerLink=\"/dashboard/analytics\" class=\"btn btn-danger btn-sm\">Frontend Template</a>\n              <a routerLink=\"/smartadmin/app-layouts\" class=\"btn btn-danger btn-sm\">Find out more</a>\n            </div>\n          </div>\n          <img src=\"assets/img/demo/iphoneview.png\" class=\"pull-right display-image\" alt=\"\" style=\"width:210px\">\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <h5 class=\"about-heading\">About SmartAdmin - Are you up to date?</h5>\n\n            <p>\n              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque\n              laudantium, totam rem aperiam, eaque ipsa.\n            </p>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <h5 class=\"about-heading\">Not just your average template!</h5>\n\n            <p>\n              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta\n              nobis est eligendi voluptatem accusantium!\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-4\">\n        <div class=\"well no-padding\">\n          <form class=\"smart-form client-form\">\n            <header>\n              Sign In\n            </header>\n            <fieldset>\n              <section>\n                <label class=\"label\">E-mail</label>\n                <label class=\"input\"> <i class=\"icon-append fa fa-user\"></i>\n                  <input type=\"text\" name=\"login\" [(ngModel)]=\"username\">\n                  <b class=\"tooltip tooltip-top-right\">\n                    Please enter email address/username</b></label>\n              </section>\n              <section>\n                <label class=\"label\">Password</label>\n                <label class=\"input\"> <i class=\"icon-append fa fa-lock\"></i>\n                  <input type=\"password\" name=\"password\" [(ngModel)]=\"password\">\n                  <b class=\"tooltip tooltip-top-right\"> Enter\n                    your password</b> </label>\n\n                <div class=\"note\">\n                  <a routerLink=\"/auth/forgot-password\">Forgot password?</a>\n                </div>\n              </section>\n              <section>\n                <label class=\"checkbox\">\n                  <input type=\"checkbox\" name=\"remember\" checked>\n                  <i></i>Stay signed in</label>\n              </section>\n            </fieldset>\n            <footer>\n              <button (click)=\"login()\" class=\"btn btn-primary\">\n                Sign in\n              </button>\n            </footer>\n          </form>\n        </div>\n        <h5 class=\"text-center\"> - Or sign in using -</h5>\n        <ul class=\"list-inline text-center\">\n          <li>\n            <a (click)=\"(null)\" class=\"btn btn-primary btn-circle\"><i class=\"fa fa-facebook\"></i></a>\n          </li>\n          <li>\n            <a (click)=\"(null)\" class=\"btn btn-info btn-circle\"><i class=\"fa fa-twitter\"></i></a>\n          </li>\n          <li>\n            <a (click)=\"(null)\" class=\"btn btn-warning btn-circle\"><i class=\"fa fa-linkedin\"></i></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/auth/login/login.component.ts":
/*!********************************************************!*\
  !*** ./src/app/features/auth/login/login.component.ts ***!
  \********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_features_auth_login_token_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/features/auth/login/token.storage */ "./src/app/features/auth/login/token.storage.ts");
/* harmony import */ var _app_features_auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/features/auth/login/login.service */ "./src/app/features/auth/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, http, token, loginservice) {
        this.router = router;
        this.http = http;
        this.token = token;
        this.loginservice = loginservice;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginservice.attemptAuth(this.username, this.password).subscribe(function (data) {
            _this.token.saveToken(data.token);
            console.log("works");
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/features/auth/login/login.component.html"),
            providers: [_app_features_auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__["loginService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _app_features_auth_login_token_storage__WEBPACK_IMPORTED_MODULE_3__["TokenStorage"], _app_features_auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__["loginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/features/auth/login/login.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/auth/login/login.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/features/auth/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/features/auth/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"]
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/features/auth/login/login.service.ts":
/*!******************************************************!*\
  !*** ./src/app/features/auth/login/login.service.ts ***!
  \******************************************************/
/*! exports provided: loginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginService", function() { return loginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var loginService = /** @class */ (function () {
    function loginService(http) {
        this.http = http;
    }
    loginService.prototype.attemptAuth = function (username, password) {
        var credentials = { username: username, password: password };
        console.log('attempAuth ::');
        return this.http.post('/api/api/authenticate', credentials);
    };
    loginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(({ providedIn: 'root' })),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], loginService);
    return loginService;
}());



/***/ }),

/***/ "./src/app/features/auth/login/token.storage.ts":
/*!******************************************************!*\
  !*** ./src/app/features/auth/login/token.storage.ts ***!
  \******************************************************/
/*! exports provided: TokenStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorage", function() { return TokenStorage; });
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

var TOKEN_KEY = 'AuthToken';
var TokenStorage = /** @class */ (function () {
    function TokenStorage() {
    }
    TokenStorage.prototype.signOut = function () {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.clear();
    };
    TokenStorage.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorage.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenStorage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TokenStorage);
    return TokenStorage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map