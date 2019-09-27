(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-template-email-template-module"],{

/***/ "./src/app/features/miscellaneous/email-template/email-template-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/features/miscellaneous/email-template/email-template-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: EmailTemplateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateRoutingModule", function() { return EmailTemplateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _email_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-template.component */ "./src/app/features/miscellaneous/email-template/email-template.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _email_template_component__WEBPACK_IMPORTED_MODULE_2__["EmailTemplateComponent"]
    }];
var EmailTemplateRoutingModule = /** @class */ (function () {
    function EmailTemplateRoutingModule() {
    }
    EmailTemplateRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], EmailTemplateRoutingModule);
    return EmailTemplateRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/miscellaneous/email-template/email-template.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/features/miscellaneous/email-template/email-template.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h1 class=\"page-title txt-color-blueDark\">\n        <!-- PAGE HEADER -->\n        <i class=\"icon-fixed-width icon-home\"></i>\n        Email Template\n        <span>&gt;\n\t\t\t\t\t\t\t\tResponsive Email templates!\n\t\t\t\t\t\t\t</span>\n      </h1>\n    </div>\n  </div>\n  <!-- row -->\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-4 col-md-3 col-lg-2\">\n      <img src=\"assets/img/demo/basic.png\" alt=\"Basic Email Template\" style=\"width:100%; height:auto;\">\n      <br>\n      <br>\n      <a href=\"../COMMON_ASSETS/GOODIES/email-templates/basic.html\" target=\"_blank\" class=\"btn btn-primary btn-block\">Basic Email Template</a>\n    </div>\n    <div class=\"col-xs-12 col-sm-4 col-md-3 col-lg-2\">\n      <img src=\"assets/img/demo/sidebar.png\" alt=\"Sidebar Email Template\" style=\"width:100%; height:auto;\">\n      <br>\n      <br>\n      <a href=\"../COMMON_ASSETS/GOODIES/email-templates/sidebar.html\" target=\"_blank\" class=\"btn btn-primary btn-block\">Sidebar Email Template</a>\n    </div>\n    <div class=\"col-xs-12 col-sm-4 col-md-3 col-lg-2\">\n      <img src=\"assets/img/demo/hero.png\" alt=\"Hero Email Template\" style=\"width:100%; height:auto;\">\n      <br>\n      <br>\n      <a href=\"../COMMON_ASSETS/GOODIES/email-templates/hero.html\" target=\"_blank\" class=\"btn btn-primary btn-block\">Hero Email Template</a>\n    </div>\n    <div class=\"col-xs-12 col-sm-4 col-md-3 col-lg-2\">\n      <img src=\"assets/img/demo/sidebarhero.png\" alt=\"Sidebar with Hero\" style=\"width:100%; height:auto;\">\n      <br>\n      <br>\n      <a href=\"../COMMON_ASSETS/GOODIES/email-templates/sidebar-hero.html\" target=\"_blank\" class=\"btn btn-primary btn-block\">Sidebar with Hero</a>\n    </div>\n    <div class=\"col-xs-12 col-sm-4 col-md-3 col-lg-2\">\n      <img src=\"assets/img/demo/newsletter.png\" alt=\"Newsletter Email Template\" style=\"width:100%; height:auto;\">\n      <br>\n      <br>\n      <a href=\"../COMMON_ASSETS/GOODIES/email-templates/newsletter.html\" target=\"_blank\" class=\"btn btn-primary btn-block\">Newsletter Template</a>\n    </div>\n  </div>\n  <!-- end row -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/miscellaneous/email-template/email-template.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/miscellaneous/email-template/email-template.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EmailTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateComponent", function() { return EmailTemplateComponent; });
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

var EmailTemplateComponent = /** @class */ (function () {
    function EmailTemplateComponent() {
    }
    EmailTemplateComponent.prototype.ngOnInit = function () {
    };
    EmailTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email-template',
            template: __webpack_require__(/*! ./email-template.component.html */ "./src/app/features/miscellaneous/email-template/email-template.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], EmailTemplateComponent);
    return EmailTemplateComponent;
}());



/***/ }),

/***/ "./src/app/features/miscellaneous/email-template/email-template.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/features/miscellaneous/email-template/email-template.module.ts ***!
  \********************************************************************************/
/*! exports provided: EmailTemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateModule", function() { return EmailTemplateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _email_template_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-template-routing.module */ "./src/app/features/miscellaneous/email-template/email-template-routing.module.ts");
/* harmony import */ var _email_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-template.component */ "./src/app/features/miscellaneous/email-template/email-template.component.ts");
/* harmony import */ var _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/layout */ "./src/app/shared/layout/index.ts");
/* harmony import */ var _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/stats/stats.module */ "./src/app/shared/stats/stats.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EmailTemplateModule = /** @class */ (function () {
    function EmailTemplateModule() {
    }
    EmailTemplateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _email_template_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmailTemplateRoutingModule"],
                _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__["SmartadminLayoutModule"],
                _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__["StatsModule"],
            ],
            declarations: [_email_template_component__WEBPACK_IMPORTED_MODULE_3__["EmailTemplateComponent"]]
        })
    ], EmailTemplateModule);
    return EmailTemplateModule;
}());



/***/ })

}]);
//# sourceMappingURL=email-template-email-template-module.js.map