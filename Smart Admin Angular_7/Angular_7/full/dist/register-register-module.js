(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: PROBLEM_BASE_URL, SERVER_API_URL, EMAIL_ALREADY_USED_TYPE, LOGIN_ALREADY_USED_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROBLEM_BASE_URL", function() { return PROBLEM_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_API_URL", function() { return SERVER_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_ALREADY_USED_TYPE", function() { return EMAIL_ALREADY_USED_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ALREADY_USED_TYPE", function() { return LOGIN_ALREADY_USED_TYPE; });
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_0__);
// These constants are injected via webpack environment variables.
// You can add more variables in webpack.common.js or in profile specific webpack.<dev|prod>.js files.
// If you change the values in the webpack config files, you need to re run webpack to update the application

var PROBLEM_BASE_URL = 'https://www.jhipster.tech/problem';
var SERVER_API_URL = process__WEBPACK_IMPORTED_MODULE_0__["env"].SERVER_API_URL;
var EMAIL_ALREADY_USED_TYPE = PROBLEM_BASE_URL + '/email-already-used';
var LOGIN_ALREADY_USED_TYPE = PROBLEM_BASE_URL + '/login-already-used';


/***/ }),

/***/ "./src/app/core/services/Register.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/Register.service.ts ***!
  \***************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
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


var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.save = function (account) {
        return this.http.post('/api/api/register', account);
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(({ providedIn: 'root' })),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/features/auth/register/register-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/auth/register/register-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function() { return RegisterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component */ "./src/app/features/auth/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    }];
var RegisterRoutingModule = /** @class */ (function () {
    function RegisterRoutingModule() {
    }
    RegisterRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], RegisterRoutingModule);
    return RegisterRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/auth/register/register.component.html":
/*!****************************************************************!*\
  !*** ./src/app/features/auth/register/register.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"animated fadeInDown\">\n\n  <div id=\"logo-group\">\n    <span id=\"logo\"> <img src=\"assets/img/logo.png\" alt=\"SmartAdmin\"> </span>\n  </div>\n\n  <span id=\"extr-page-header-space\">\n        <span class=\"hidden-mobile hiddex-xs\">Already registered?</span> <a routerLink=\"/auth/login\" class=\"btn btn-danger\">Sign In</a> </span>\n\n</header>\n<div id=\"main\" role=\"main\" class=\"animated fadeInDown\">\n\n  <!-- MAIN CONTENT -->\n  <div id=\"content\" class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-7 col-lg-7 hidden-xs hidden-sm\">\n        <h1 class=\"txt-color-red login-header-big\">SmartAdmin</h1>\n        <div class=\"hero\">\n\n          <div class=\"pull-left login-desc-box-l\">\n            <h4 class=\"paragraph-header\">It's Okay to be Smart. Experience the simplicity of SmartAdmin, everywhere you go!</h4>\n            <div class=\"login-app-icons\">\n              <a routerLink=\"/dashboard/analytics\" class=\"btn btn-danger btn-sm\">Frontend Template</a>\n              <a routerLink=\"/smartadmin/app-layouts\" class=\"btn btn-danger btn-sm\">Find out more</a>\n            </div>\n          </div>\n\n          <img src=\"assets/img/demo/iphoneview.png\" alt=\"\" class=\"pull-right display-image\" style=\"width:210px\">\n\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <h5 class=\"about-heading\">About SmartAdmin - Are you up to date?</h5>\n            <p>\n              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.\n            </p>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <h5 class=\"about-heading\">Not just your average template!</h5>\n            <p>\n              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi voluptatem accusantium!\n            </p>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-5\">\n        <div class=\"well no-padding\">\n\n          <form id=\"smart-form-register\" class=\"smart-form client-form\">\n            <header>\n              Registration is FREE*\n            </header>\n\n            <fieldset>\n              <section>\n                <label class=\"input\"> <i class=\"icon-append fa fa-user\"></i>\n                  <input type=\"text\"  name=\"username\" placeholder=\"Username\" [(ngModel)]=\"registerAccount.login\" id=\"login\" name=\"login\" #login=\"ngModel\" required >\n                  <b class=\"tooltip tooltip-bottom-right\">Needed to enter the website</b> </label>\n              </section>\n\n              <section>\n                <label class=\"input\"> <i class=\"icon-append fa fa-envelope\"></i>\n                  <input type=\"email\" name=\"email\" placeholder=\"Email address\" #email=\"ngModel\" [(ngModel)]=\"registerAccount.email\">\n                  <b class=\"tooltip tooltip-bottom-right\">Needed to verify your account</b> </label>\n              </section>\n\n              <section>\n                <label class=\"input\"> <i class=\"icon-append fa fa-lock\"></i>\n                  <input type=\"password\" name=\"password\" placeholder=\"Password\" id=\"password\"  [(ngModel)]=\"registerAccount.password\">\n                  <b class=\"tooltip tooltip-bottom-right\">Don't forget your password</b> </label>\n              </section>\n\n              <section>\n                <label class=\"input\"> <i class=\"icon-append fa fa-lock\"></i>\n                  <input type=\"password\" name=\"passwordConfirm\" placeholder=\"Confirm password\" [(ngModel)]=\"confirmPassword\">\n                  <b class=\"tooltip tooltip-bottom-right\">Don't forget your password</b> </label>\n              </section>\n            </fieldset>\n\n            <fieldset>\n              <!--<div class=\"row\">-->\n                <!--<section class=\"col col-6\">-->\n                  <!--<label class=\"input\">-->\n                    <!--<input type=\"text\" name=\"firstname\" placeholder=\"First name\">-->\n                  <!--</label>-->\n                <!--</section>-->\n                <!--<section class=\"col col-6\">-->\n                  <!--<label class=\"input\">-->\n                    <!--<input type=\"text\" name=\"lastname\" placeholder=\"Last name\">-->\n                  <!--</label>-->\n                <!--</section>-->\n              <!--</div>-->\n\n              <!--<div class=\"row\">-->\n                <!--<section class=\"col col-6\">-->\n                  <!--<label class=\"select\">-->\n                    <!--<select name=\"gender\">-->\n                      <!--<option value=\"0\" selected disabled>Gender</option>-->\n                      <!--<option value=\"1\">Male</option>-->\n                      <!--<option value=\"2\">Female</option>-->\n                      <!--<option value=\"3\">Prefer not to answer</option>-->\n                    <!--</select> <i></i> </label>-->\n                <!--</section>-->\n                <!--<section class=\"col col-6\">-->\n                  <!--<label class=\"input\"> <i class=\"icon-append fa fa-calendar\"></i>-->\n                    <!--<input type=\"text\" name=\"request\" placeholder=\"Request activation on\" class=\"datepicker\" data-dateformat=\"dd/mm/yy\">-->\n                  <!--</label>-->\n                <!--</section>-->\n              <!--</div>-->\n\n              <!--<section>-->\n                <!--<label class=\"checkbox\">-->\n                  <!--<input type=\"checkbox\" name=\"subscription\" id=\"subscription\">-->\n                  <!--<i></i>I want to receive news and special offers</label>-->\n                <!--<label class=\"checkbox\">-->\n                  <!--<input type=\"checkbox\" name=\"terms\" id=\"terms\" [(ngModel)]=\"termsAgreed\">-->\n                  <!--<i></i>I agree with the <a href=\"#\" (click)=\"openModal($event, termsModal)\"> Terms and Conditions </a></label>-->\n              <!--</section>-->\n            </fieldset>\n            <footer>\n              <button (click)=\"register()\" class=\"btn btn-primary\">\n                Register\n              </button>\n            </footer>\n\n            <div class=\"message\">\n              <i class=\"fa fa-check\"></i>\n              <p>\n                Thank you for your registration!\n              </p>\n            </div>\n          </form>\n\n        </div>\n        <p class=\"note text-center\">*FREE Registration ends on October 2015.</p>\n        <h5 class=\"text-center\">- Or sign in using -</h5>\n        <ul class=\"list-inline text-center\">\n          <li>\n            <a (click)=\"(null)\" class=\"btn btn-primary btn-circle\"><i class=\"fa fa-facebook\"></i></a>\n          </li>\n          <li>\n            <a (click)=\"(null)\" class=\"btn btn-info btn-circle\"><i class=\"fa fa-twitter\"></i></a>\n          </li>\n          <li>\n            <a (click)=\"(null)\" class=\"btn btn-warning btn-circle\"><i class=\"fa fa-linkedin\"></i></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n<!-- <ng-container  *ngComponentOutlet=\"TermsModalComponent\"></ng-container> -->\n\n<ng-template #termsModal>\n  <smart-terms-modal (agree)=\"onTermsAgree()\" (close)=\"onTermsClose()\"></smart-terms-modal>\n\n</ng-template>\n"

/***/ }),

/***/ "./src/app/features/auth/register/register.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/auth/register/register.component.ts ***!
  \**************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _app_core_services_Register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/Register.service */ "./src/app/core/services/Register.service.ts");
/* harmony import */ var _app_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(registerservice, router, modalService, elementRef, renderer) {
        this.registerservice = registerservice;
        this.router = router;
        this.modalService = modalService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.termsAgreed = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.success = false;
        this.registerAccount = {};
    };
    //
    // register(event){
    //   event.preventDefault();
    //   this.router.navigate(['/dashboard'])
    // }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        }
        else {
            this.doNotMatch = null;
            this.error = null;
            this.errorUserExists = null;
            this.errorEmailExists = null;
            this.registerAccount.langKey = 'en';
            this.registerservice.save(this.registerAccount).subscribe(function () {
                _this.success = true;
            }, function (response) { return _this.processError(response); });
        }
    };
    RegisterComponent.prototype.processError = function (response) {
        this.success = null;
        if (response.status === 400 && response.error.type === _app_app_constants__WEBPACK_IMPORTED_MODULE_4__["LOGIN_ALREADY_USED_TYPE"]) {
            this.errorUserExists = 'ERROR';
        }
        else if (response.status === 400 && response.error.type === _app_app_constants__WEBPACK_IMPORTED_MODULE_4__["EMAIL_ALREADY_USED_TYPE"]) {
            this.errorEmailExists = 'ERROR';
        }
        else {
            this.error = 'ERROR';
        }
    };
    RegisterComponent.prototype.openModal = function (event, template) {
        event.preventDefault();
        this.bsModalRef = this.modalService.show(template);
    };
    RegisterComponent.prototype.onTermsAgree = function () {
        this.termsAgreed = true;
        this.bsModalRef.hide();
    };
    RegisterComponent.prototype.onTermsClose = function () {
        this.bsModalRef.hide();
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/features/auth/register/register.component.html"),
            providers: [_app_core_services_Register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"]]
        }),
        __metadata("design:paramtypes", [_app_core_services_Register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/features/auth/register/register.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/auth/register/register.module.ts ***!
  \***********************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/features/auth/register/register-routing.module.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.component */ "./src/app/features/auth/register/register.component.ts");
/* harmony import */ var _terms_modal_terms_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./terms-modal/terms-modal.component */ "./src/app/features/auth/register/terms-modal/terms-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _register_routing_module__WEBPACK_IMPORTED_MODULE_2__["RegisterRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ],
            exports: [],
            declarations: [_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], _terms_modal_terms_modal_component__WEBPACK_IMPORTED_MODULE_4__["TermsModalComponent"]]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/features/auth/register/terms-modal/terms-modal.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/features/auth/register/terms-modal/terms-modal.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n    &times;\n  </button>\n  <h4 class=\"modal-title\" id=\"myModalLabel\">Terms & Conditions</h4>\n</div>\n<div class=\"modal-body custom-scroll terms-body\">\n\n  <div id=\"left\">\n\n\n\n    <h1>SMARTADMIN TERMS & CONDITIONS TEMPLATE</h1>\n\n\n\n    <h2>Introduction</h2>\n\n    <p>These terms and conditions govern your use of this website; by using this website, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use this website.</p>\n\n    <p>[You must be at least [18] years of age to use this website. By using this website [and by agreeing to these terms and conditions] you warrant and represent that you are at least [18] years of age.]</p>\n\n\n    <h2>License to use website</h2>\n    <p>Unless otherwise stated, [NAME] and/or its licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.</p>\n\n    <p>You may view, download for caching purposes only, and print pages [or [OTHER CONTENT]] from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.</p>\n\n    <p>You must not:</p>\n    <ul>\n      <li>republish material from this website (including republication on another website);</li>\n      <li>sell, rent or sub-license material from the website;</li>\n      <li>show any material from the website in public;</li>\n      <li>reproduce, duplicate, copy or otherwise exploit material on this website for a commercial purpose;]</li>\n      <li>[edit or otherwise modify any material on the website; or]</li>\n      <li>[redistribute material from this website [except for content specifically and expressly made available for redistribution].]</li>\n    </ul>\n    <p>[Where content is specifically made available for redistribution, it may only be redistributed [within your organisation].]</p>\n\n    <h2>Acceptable use</h2>\n\n    <p>You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any\n      unlawful, illegal, fraudulent or harmful purpose or activity.</p>\n\n    <p>You must not use this website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer\n      software.</p>\n\n    <p>You must not conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to this website without [NAME'S] express written consent.</p>\n\n    <p>[You must not use this website to transmit or send unsolicited commercial communications.]</p>\n\n    <p>[You must not use this website for any purposes related to marketing without [NAME'S] express written consent.]</p>\n\n    <h2>[Restricted access</h2>\n\n    <p>[Access to certain areas of this website is restricted.] [NAME] reserves the right to restrict access to [other] areas of this website, or indeed this entire website, at [NAME'S] discretion.</p>\n\n    <p>If [NAME] provides you with a user ID and password to enable you to access restricted areas of this website or other content or services, you must ensure that the user ID and password are kept confidential.</p>\n\n    <p>[[NAME] may disable your user ID and password in [NAME'S] sole discretion without notice or explanation.]</p>\n\n    <h2>[User content</h2>\n\n    <p>In these terms and conditions, “your user content” means material (including without limitation text, images, audio material, video material and audio-visual material) that you submit to this website, for whatever purpose.</p>\n\n    <p>You grant to [NAME] a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute your user content in any existing or future media. You also grant to [NAME] the right to sub-license these\n      rights, and the right to bring an action for infringement of these rights.</p>\n\n    <p>Your user content must not be illegal or unlawful, must not infringe any third party's legal rights, and must not be capable of giving rise to legal action whether against you or [NAME] or a third party (in each case under any applicable law).</p>\n\n    <p>You must not submit any user content to the website that is or has ever been the subject of any threatened or actual legal proceedings or other similar complaint.</p>\n\n    <p>[NAME] reserves the right to edit or remove any material submitted to this website, or stored on [NAME'S] servers, or hosted or published upon this website.</p>\n\n    <p>[Notwithstanding [NAME'S] rights under these terms and conditions in relation to user content, [NAME] does not undertake to monitor the submission of such content to, or the publication of such content on, this website.]</p>\n\n    <h2>No warranties</h2>\n\n    <p>This website is provided “as is” without any representations or warranties, express or implied. [NAME] makes no representations or warranties in relation to this website or the information and materials provided on this website.</p>\n\n    <p>Without prejudice to the generality of the foregoing paragraph, [NAME] does not warrant that:</p>\n    <ul>\n      <li>this website will be constantly available, or available at all; or</li>\n      <li>the information on this website is complete, true, accurate or non-misleading.</li>\n    </ul>\n    <p>Nothing on this website constitutes, or is meant to constitute, advice of any kind. [If you require advice in relation to any [legal, financial or medical] matter you should consult an appropriate professional.]</p>\n\n    <h2>Limitations of liability</h2>\n\n    <p>[NAME] will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website:</p>\n    <ul>\n      <li>[to the extent that the website is provided free-of-charge, for any direct loss;]</li>\n      <li>for any indirect, special or consequential loss; or</li>\n      <li>for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.</li>\n    </ul>\n    <p>These limitations of liability apply even if [NAME] has been expressly advised of the potential loss.</p>\n\n    <h2>Exceptions</h2>\n\n    <p>Nothing in this website disclaimer will exclude or limit any warranty implied by law that it would be unlawful to exclude or limit; and nothing in this website disclaimer will exclude or limit [NAME'S] liability in respect of any:</p>\n    <ul>\n      <li>death or personal injury caused by [NAME'S] negligence;</li>\n      <li>fraud or fraudulent misrepresentation on the part of [NAME]; or</li>\n      <li>matter which it would be illegal or unlawful for [NAME] to exclude or limit, or to attempt or purport to exclude or limit, its liability.</li>\n    </ul>\n    <h2>Reasonableness</h2>\n\n    <p>By using this website, you agree that the exclusions and limitations of liability set out in this website disclaimer are reasonable.</p>\n\n    <p>If you do not think they are reasonable, you must not use this website.</p>\n\n    <h2>Other parties</h2>\n\n    <p>[You accept that, as a limited liability entity, [NAME] has an interest in limiting the personal liability of its officers and employees. You agree that you will not bring any claim personally against [NAME'S] officers or employees in respect of any\n      losses you suffer in connection with the website.]</p>\n\n    <p>[Without prejudice to the foregoing paragraph,] you agree that the limitations of warranties and liability set out in this website disclaimer will protect [NAME'S] officers, employees, agents, subsidiaries, successors, assigns and sub-contractors\n      as well as [NAME].</p>\n\n    <h2>Unenforceable provisions</h2>\n\n    <p>If any provision of this website disclaimer is, or is found to be, unenforceable under applicable law, that will not affect the enforceability of the other provisions of this website disclaimer.</p>\n\n    <h2>Indemnity</h2>\n\n    <p>You hereby indemnify [NAME] and undertake to keep [NAME] indemnified against any losses, damages, costs, liabilities and expenses (including without limitation legal expenses and any amounts paid by [NAME] to a third party in settlement of a claim\n      or dispute on the advice of [NAME'S] legal advisers) incurred or suffered by [NAME] arising out of any breach by you of any provision of these terms and conditions[, or arising out of any claim that you have breached any provision of these terms\n      and conditions].</p>\n\n    <h2>Breaches of these terms and conditions</h2>\n\n    <p>Without prejudice to [NAME'S] other rights under these terms and conditions, if you breach these terms and conditions in any way, [NAME] may take such action as [NAME] deems appropriate to deal with the breach, including suspending your access to\n      the website, prohibiting you from accessing the website, blocking computers using your IP address from accessing the website, contacting your internet service provider to request that they block your access to the website and/or bringing court proceedings\n      against you.</p>\n\n    <h2>Variation</h2>\n\n    <p>[NAME] may revise these terms and conditions from time-to-time. Revised terms and conditions will apply to the use of this website from the date of the publication of the revised terms and conditions on this website. Please check this page regularly\n      to ensure you are familiar with the current version.</p>\n\n    <h2>Assignment</h2>\n\n    <p>[NAME] may transfer, sub-contract or otherwise deal with [NAME'S] rights and/or obligations under these terms and conditions without notifying you or obtaining your consent.</p>\n\n    <p>You may not transfer, sub-contract or otherwise deal with your rights and/or obligations under these terms and conditions.</p>\n\n    <h2>Severability</h2>\n\n    <p>If a provision of these terms and conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect. If any unlawful and/or unenforceable provision would be lawful\n      or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.</p>\n\n    <h2>Entire agreement</h2>\n\n    <p>These terms and conditions [, together with [DOCUMENTS],] constitute the entire agreement between you and [NAME] in relation to your use of this website, and supersede all previous agreements in respect of your use of this website.</p>\n\n    <h2>Law and jurisdiction</h2>\n\n    <p>These terms and conditions will be governed by and construed in accordance with [GOVERNING LAW], and any disputes relating to these terms and conditions will be subject to the [non-]exclusive jurisdiction of the courts of [JURISDICTION].</p>\n\n    <h2>About these website terms and conditions</h2>\n    <p>We created these website terms and conditions with the help of a free website terms and conditions form developed by Contractology and available at\n      <a href=\"http://www.SmartAdmin.com\">www.SmartAdmin.com</a>. Contractology supply a wide variety of commercial legal documents, such as\n      <a href=\"#\">template data protection statements</a>.\n    </p>\n    <h2>[Registrations and authorisations</h2>\n\n    <p>[[NAME] is registered with [TRADE REGISTER]. You can find the online version of the register at [URL]. [NAME'S] registration number is [NUMBER].]</p>\n\n    <p>[[NAME] is subject to [AUTHORISATION SCHEME], which is supervised by [SUPERVISORY AUTHORITY].]</p>\n\n    <p>[[NAME] is registered with [PROFESSIONAL BODY]. [NAME'S] professional title is [TITLE] and it has been granted in [JURISDICTION]. [NAME] is subject to the [RULES] which can be found at [URL].]</p>\n\n    <p>[[NAME] subscribes to the following code[s] of conduct: [CODE(S) OF CONDUCT]. [These codes/this code] can be consulted electronically at [URL(S)].</p>\n\n    <p>[[NAME'S] [TAX] number is [NUMBER].]]</p>\n\n    <h2>[NAME'S] details</h2>\n\n    <p>The full name of [NAME] is [FULL NAME].</p>\n\n    <p>[[NAME] is registered in [JURISDICTION] under registration number [NUMBER].]</p>\n\n    <p>[NAME'S] [registered] address is [ADDRESS].</p>\n\n    <p>You can contact [NAME] by email to [EMAIL].</p>\n\n\n\n  </div>\n\n  <br>\n  <br>\n\n  <p><strong>By using this  WEBSITE TERMS AND CONDITIONS template document, you agree to the\n          <a href=\"#\">terms and conditions</a> set out on\n          <a href=\"#\">SmartAdmin.com</a>.  You must retain the credit\n          set out in the section headed \"ABOUT THESE WEBSITE TERMS AND CONDITIONS\".  Subject to the licensing restrictions, you should\n          edit the document, adapting it to the requirements of your jurisdiction, your business and your\n          website.  If you are not a lawyer, we recommend that you take professional legal advice in relation to the editing and\n          use of the template.</strong></p>\n\n\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"close.emit(true)\">\n    Cancel\n  </button>\n  <button type=\"button\" class=\"btn btn-primary\" id=\"i-agree\" (click)=\"agree.emit(true)\">\n    <i class=\"fa fa-check\"></i> I Agree\n  </button>\n\n  <button type=\"button\" class=\"btn btn-danger pull-left\" id=\"print\">\n    <i class=\"fa fa-print\"></i> Print\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/features/auth/register/terms-modal/terms-modal.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/auth/register/terms-modal/terms-modal.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TermsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsModalComponent", function() { return TermsModalComponent; });
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

var TermsModalComponent = /** @class */ (function () {
    function TermsModalComponent() {
        this.agree = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TermsModalComponent.prototype, "agree", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TermsModalComponent.prototype, "close", void 0);
    TermsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'smart-terms-modal',
            template: __webpack_require__(/*! ./terms-modal.component.html */ "./src/app/features/auth/register/terms-modal/terms-modal.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TermsModalComponent);
    return TermsModalComponent;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map