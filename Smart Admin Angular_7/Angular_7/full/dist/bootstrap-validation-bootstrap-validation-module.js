(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bootstrap-validation-bootstrap-validation-module"],{

/***/ "./src/app/features/forms/bootstrap-validation/attribute-form/attribute-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-validation/attribute-form/attribute-form.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"attributeForm\" (ngSubmit)=\"onSubmit()\"\n      novalidate=\"novalidate\" saBootstrapValidator\n      class=\"form-horizontal\"\n      data-bv-message=\"This value is not valid\"\n      data-bv-feedbackicons-valid=\"glyphicon glyphicon-ok\"\n      data-bv-feedbackicons-invalid=\"glyphicon glyphicon-remove\"\n      data-bv-feedbackicons-validating=\"glyphicon glyphicon-refresh\">\n\n  <fieldset>\n    <legend>\n      Set validator options via HTML attributes\n    </legend>\n\n    <div class=\"alert alert-warning\">\n      <code>&lt; input\n        data-bv-validatorname\n        data-bv-validatorname-validatoroption=\"...\" / &gt;</code>\n\n      <br/>\n      <br/>\n      More validator options can be found here:\n      <a href=\"http://bootstrapvalidator.com/validators/\" target=\"_blank\">http://bootstrapvalidator.com/validators/</a>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-lg-3 control-label\">Full name</label>\n      <div class=\"col-lg-4\">\n        <input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"First name\"\n               data-bv-notempty=\"true\"\n               data-bv-notempty-message=\"The first name is required and cannot be empty\"/>\n      </div>\n      <div class=\"col-lg-4\">\n        <input type=\"text\" class=\"form-control\" name=\"lastName\" placeholder=\"Last name\"\n               data-bv-notempty=\"true\"\n               data-bv-notempty-message=\"The last name is required and cannot be empty\"/>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"form-group\">\n      <label class=\"col-lg-3 control-label\">Username</label>\n      <div class=\"col-lg-5\">\n        <input type=\"text\" class=\"form-control\" name=\"username\"\n               data-bv-message=\"The username is not valid\" data-bv-notempty=\"true\"\n               data-bv-notempty-message=\"The username is required and cannot be empty\"\n               data-bv-regexp=\"true\" data-bv-regexp-regexp=\"^[a-zA-Z0-9_\\.]+$\"\n               data-bv-regexp-message=\"The username can only consist of alphabetical, number, dot and underscore\"\n               data-bv-stringlength=\"true\" data-bv-stringlength-min=\"6\"\n               data-bv-stringlength-max=\"30\"\n               data-bv-stringlength-message=\"The username must be more than 6 and less than 30 characters long\"\n               data-bv-different=\"true\" data-bv-different-field=\"password\"\n               data-bv-different-message=\"The username and password cannot be the same as each other\"/>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"form-group\">\n      <label class=\"col-lg-3 control-label\">Email address</label>\n      <div class=\"col-lg-5\">\n        <input class=\"form-control\" name=\"email\" type=\"email\" data-bv-emailaddress=\"true\"\n               data-bv-emailaddress-message=\"The input is not a valid email address\"/>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"form-group\">\n      <label class=\"col-lg-3 control-label\">Password</label>\n      <div class=\"col-lg-5\">\n        <input type=\"password\" class=\"form-control\" name=\"password\" data-bv-notempty=\"true\"\n               data-bv-notempty-message=\"The password is required and cannot be empty\"\n               data-bv-identical=\"true\" data-bv-identical-field=\"confirmPassword\"\n               data-bv-identical-message=\"The password and its confirm are not the same\"\n               data-bv-different=\"true\" data-bv-different-field=\"username\"\n               data-bv-different-message=\"The password cannot be the same as username\"/>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"form-group\">\n      <label class=\"col-lg-3 control-label\">Retype password</label>\n      <div class=\"col-lg-5\">\n        <input type=\"password\" class=\"form-control\" name=\"confirmPassword\"\n               data-bv-notempty=\"true\"\n               data-bv-notempty-message=\"The confirm password is required and cannot be empty\"\n               data-bv-identical=\"true\" data-bv-identical-field=\"password\"\n               data-bv-identical-message=\"The password and its confirm are not the same\"\n               data-bv-different=\"true\" data-bv-different-field=\"username\"\n               data-bv-different-message=\"The password cannot be the same as username\"/>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"form-group\">\n      <label class=\"col-lg-3 control-label\">Languages</label>\n      <div class=\"col-lg-5\">\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" name=\"languages[]\" value=\"english\"\n                   data-bv-message=\"Please specify at least one language you can speak\"\n                   data-bv-notempty=\"true\"/>\n            English </label>\n        </div>\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" name=\"languages[]\" value=\"french\"/>\n            French </label>\n        </div>\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" name=\"languages[]\" value=\"german\"/>\n            German </label>\n        </div>\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" name=\"languages[]\" value=\"russian\"/>\n            Russian </label>\n        </div>\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" name=\"languages[]\" value=\"other\"/>\n            Other </label>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n\n  <div class=\"form-actions\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button class=\"btn btn-default\" type=\"submit\">\n          <i class=\"fa fa-eye\"></i>\n          Validate\n        </button>\n      </div>\n    </div>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/features/forms/bootstrap-validation/attribute-form/attribute-form.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-validation/attribute-form/attribute-form.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AttributeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeFormComponent", function() { return AttributeFormComponent; });
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

var AttributeFormComponent = /** @class */ (function () {
    function AttributeFormComponent() {
        this.submitted = false;
    }
    AttributeFormComponent.prototype.ngOnInit = function () {
    };
    AttributeFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('submitted');
    };
    AttributeFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-attribute-form',
            template: __webpack_require__(/*! ./attribute-form.component.html */ "./src/app/features/forms/bootstrap-validation/attribute-form/attribute-form.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AttributeFormComponent);
    return AttributeFormComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/bootstrap-validation/bootstrap-validation.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-validation/bootstrap-validation.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Forms', 'Bootstrap Form Validation']\" icon=\"pencil-square-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n\n  <!--\n      The ID \"widget-grid\" will start to initialize all widgets below\n      You do not need to use widgets if you dont want to. Simply remove\n      the <section></section> and you can use wells or panels instead\n      -->\n\n  <!-- widget grid -->\n  <sa-widgets-grid>\n\n    <!-- row -->\n    <div class=\"row\">\n\n      <!-- NEW WIDGET ROW START -->\n      <div class=\"col-sm-6\">\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [deletebutton]=\"false\" [sortable]=\"false\">\n          <!-- widget options:\n          usage: <div sa-widget [editbutton]=\"false\">\n\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [custombutton]=\"false\"\n          [collapsed]=\"true\"\n          [sortable]=\"false\"\n\n          -->\n          <header>\n            <h2>#movieForm </h2>\n          </header>\n\n          <!-- widget div-->\n\n          <div>\n\n\n            <!-- widget content -->\n            <div class=\"widget-body\">\n\n              <sa-movie-form></sa-movie-form>\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [deletebutton]=\"false\" [sortable]=\"false\">\n          <!-- widget options:\n          usage: <div sa-widget [editbutton]=\"false\">\n\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [custombutton]=\"false\"\n          [collapsed]=\"true\"\n          [sortable]=\"false\"\n\n          -->\n          <header>\n            <h2>#togglingForm </h2>\n          </header>\n\n          <!-- widget div-->\n\n          <div>\n\n\n            <!-- widget content -->\n            <div class=\"widget-body\">\n\n\n              <sa-toggling-form></sa-toggling-form>\n\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [deletebutton]=\"false\" [sortable]=\"false\">\n          <!-- widget options:\n          usage: <div sa-widget [editbutton]=\"false\">\n\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [custombutton]=\"false\"\n          [collapsed]=\"true\"\n          [sortable]=\"false\"\n\n          -->\n          <header>\n            <h2>#attributeForm </h2>\n          </header>\n\n          <!-- widget div-->\n\n          <div>\n\n\n            <!-- widget content -->\n            <div class=\"widget-body\">\n\n              <sa-attribute-form></sa-attribute-form>\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n\n      </div>\n      <!-- WIDGET ROW END -->\n\n      <!-- NEW WIDGET ROW START -->\n      <div class=\"col-sm-6\">\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [deletebutton]=\"false\" [sortable]=\"false\">\n          <!-- widget options:\n          usage: <div sa-widget [editbutton]=\"false\">\n\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [custombutton]=\"false\"\n          [collapsed]=\"true\"\n          [sortable]=\"false\"\n\n          -->\n          <header>\n            <h2>#buttonGroupForm </h2>\n          </header>\n\n          <!-- widget div-->\n\n          <div>\n\n\n            <!-- widget content -->\n            <div class=\"widget-body\">\n\n\n              <sa-button-group-form></sa-button-group-form>\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [deletebutton]=\"false\" [sortable]=\"false\">\n          <!-- widget options:\n          usage: <div sa-widget [editbutton]=\"false\">\n\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [custombutton]=\"false\"\n          [collapsed]=\"true\"\n          [sortable]=\"false\"\n\n          -->\n          <header>\n            <h2>#productForm </h2>\n          </header>\n\n          <!-- widget div-->\n\n          <div>\n\n\n            <!-- widget content -->\n            <div class=\"widget-body\">\n\n              <sa-product-form></sa-product-form>\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [deletebutton]=\"false\" [sortable]=\"false\">\n          <!-- widget options:\n          usage: <div sa-widget [editbutton]=\"false\">\n\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [custombutton]=\"false\"\n          [collapsed]=\"true\"\n          [sortable]=\"false\"\n\n          -->\n          <header>\n            <h2>#profileForm </h2>\n          </header>\n\n          <!-- widget div-->\n\n          <div>\n\n\n            <!-- widget content -->\n            <div class=\"widget-body\">\n\n              <sa-profile-form></sa-profile-form>\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [deletebutton]=\"false\" [sortable]=\"false\">\n          <!-- widget options:\n          usage: <div sa-widget [editbutton]=\"false\">\n\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [custombutton]=\"false\"\n          [collapsed]=\"true\"\n          [sortable]=\"false\"\n\n          -->\n          <header>\n            <h2>#contactForm </h2>\n          </header>\n\n          <!-- widget div-->\n\n          <div>\n\n\n            <!-- widget content -->\n            <div class=\"widget-body\">\n\n\n              <sa-contact-form></sa-contact-form>\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n      </div>\n      <!-- WIDGET ROW END -->\n\n    </div>\n\n    <!-- end row -->\n\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n\n</div>\n<!-- END MAIN CONTENT -->\n\n\n"

/***/ }),

/***/ "./src/app/features/forms/bootstrap-validation/bootstrap-validation.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-validation/bootstrap-validation.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BootstrapValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapValidationComponent", function() { return BootstrapValidationComponent; });
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

var BootstrapValidationComponent = /** @class */ (function () {
    function BootstrapValidationComponent() {
    }
    BootstrapValidationComponent.prototype.ngOnInit = function () {
    };
    BootstrapValidationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-bootstrap-validation',
            template: __webpack_require__(/*! ./bootstrap-validation.component.html */ "./src/app/features/forms/bootstrap-validation/bootstrap-validation.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], BootstrapValidationComponent);
    return BootstrapValidationComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/bootstrap-validation/bootstrap-validation.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-validation/bootstrap-validation.module.ts ***!
  \************************************************************************************/
/*! exports provided: BootstrapValidationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapValidationModule", function() { return BootstrapValidationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-form/movie-form.component */ "./src/app/features/forms/bootstrap-validation/movie-form/movie-form.component.ts");
/* harmony import */ var _toggling_form_toggling_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggling-form/toggling-form.component */ "./src/app/features/forms/bootstrap-validation/toggling-form/toggling-form.component.ts");
/* harmony import */ var _attribute_form_attribute_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attribute-form/attribute-form.component */ "./src/app/features/forms/bootstrap-validation/attribute-form/attribute-form.component.ts");
/* harmony import */ var _button_group_form_button_group_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button-group-form/button-group-form.component */ "./src/app/features/forms/bootstrap-validation/button-group-form/button-group-form.component.ts");
/* harmony import */ var _product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-form/product-form.component */ "./src/app/features/forms/bootstrap-validation/product-form/product-form.component.ts");
/* harmony import */ var _profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-form/profile-form.component */ "./src/app/features/forms/bootstrap-validation/profile-form/profile-form.component.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/features/forms/bootstrap-validation/contact-form/contact-form.component.ts");
/* harmony import */ var _bootstrap_validation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bootstrap-validation.component */ "./src/app/features/forms/bootstrap-validation/bootstrap-validation.component.ts");
/* harmony import */ var _bootstrap_validation_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bootstrap-validation.routing */ "./src/app/features/forms/bootstrap-validation/bootstrap-validation.routing.ts");
/* harmony import */ var _app_shared_forms_validation_smartadmin_validation_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/forms/validation/smartadmin-validation.module */ "./src/app/shared/forms/validation/smartadmin-validation.module.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var BootstrapValidationModule = /** @class */ (function () {
    function BootstrapValidationModule() {
    }
    BootstrapValidationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _app_shared_forms_validation_smartadmin_validation_module__WEBPACK_IMPORTED_MODULE_10__["SmartadminValidationModule"],
                _bootstrap_validation_routing__WEBPACK_IMPORTED_MODULE_9__["bootstrapValidationRouting"]
            ],
            declarations: [_movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_1__["MovieFormComponent"], _toggling_form_toggling_form_component__WEBPACK_IMPORTED_MODULE_2__["TogglingFormComponent"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_7__["ContactFormComponent"],
                _attribute_form_attribute_form_component__WEBPACK_IMPORTED_MODULE_3__["AttributeFormComponent"], _button_group_form_button_group_form_component__WEBPACK_IMPORTED_MODULE_4__["ButtonGroupFormComponent"], _product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__["ProductFormComponent"], _profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_6__["ProfileFormComponent"],
                _bootstrap_validation_component__WEBPACK_IMPORTED_MODULE_8__["BootstrapValidationComponent"],
            ],
            exports: []
        })
    ], BootstrapValidationModule);
    return BootstrapValidationModule;
}());



/***/ }),

/***/ "./src/app/features/forms/bootstrap-validation/bootstrap-validation.routing.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-validation/bootstrap-validation.routing.ts ***!
  \*************************************************************************************/
/*! exports provided: bootstrapValidationRoutes, bootstrapValidationRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapValidationRoutes", function() { return bootstrapValidationRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapValidationRouting", function() { return bootstrapValidationRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bootstrap_validation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap-validation.component */ "./src/app/features/forms/bootstrap-validation/bootstrap-validation.component.ts");


var bootstrapValidationRoutes = [{
        path: '',
        component: _bootstrap_validation_component__WEBPACK_IMPORTED_MODULE_1__["BootstrapValidationComponent"]
    }];
var bootstrapValidationRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(bootstrapValidationRoutes);


/***/ }),

/***/ "./src/app/features/forms/bootstrap-validation/button-group-form/button-group-form.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-validation/button-group-form/button-group-form.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"buttonGroupForm\" (ngSubmit)=\"onSubmit()\"\n      novalidate=\"novalidate\" [saBootstrapValidator]=\"validatorOptions\" class=\"form-horizontal\">\n\n  <fieldset>\n    <legend>\n      Default Form Elements\n    </legend>\n    <div class=\"form-group\">\n      <label class=\"col-lg-3 control-label\">Gender</label>\n      <div class=\"col-lg-9\">\n        <div class=\"btn-group\" data-toggle=\"buttons\">\n          <label class=\"btn btn-default\" [saToggleActive]=\"model.gender == 'male'\">\n            <input type=\"radio\" name=\"gender\" [(ngModel)]=\"model.gender\" value=\"male\"/>\n            Male </label>\n          <label class=\"btn btn-default\" [saToggleActive]=\"model.gender == 'female'\">\n            <input type=\"radio\" name=\"gender\" [(ngModel)]=\"model.gender\" value=\"female\"/>\n            Female </label>\n          <label class=\"btn btn-default\" [saToggleActive]=\"model.gender == 'other'\">\n            <input type=\"radio\" name=\"gender\" [(ngModel)]=\"model.gender\" value=\"other\"/>\n            Other </label>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"form-group\">\n      <label class=\"col-lg-3 control-label\">Languages</label>\n      <div class=\"col-lg-9\">\n        <div class=\"btn-group\" data-toggle=\"buttons\">\n          <label class=\"btn btn-default\" [saToggleActive]=\"lang.selected\" *ngFor=\"let lang of model.languages\">\n            <input type=\"checkbox\" name=\"languages\"  [(ngModel)]=\"lang.selected\"/>\n            {{lang.value}}</label>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n\n  <div class=\"form-actions\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button class=\"btn btn-default\" type=\"submit\">\n          <i class=\"fa fa-eye\"></i>\n          Validate\n        </button>\n      </div>\n    </div>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/features/forms/bootstrap-validation/button-group-form/button-group-form.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-validation/button-group-form/button-group-form.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ButtonGroupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupFormComponent", function() { return ButtonGroupFormComponent; });
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

var ButtonGroupFormComponent = /** @class */ (function () {
    function ButtonGroupFormComponent() {
        this.validatorOptions = {
            excluded: ':disabled',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                gender: {
                    validators: {
                        notEmpty: {
                            message: 'The gender is required'
                        }
                    }
                },
                'languages': {
                    validators: {
                        choice: {
                            min: 1,
                            max: 2,
                            message: 'Please choose 1 - 2 languages you can speak'
                        }
                    }
                }
            }
        };
        this.model = {
            languages: [
                { key: 'english', value: 'English', selected: false },
                { key: 'german', value: 'German', selected: false },
                { key: 'french', value: 'French', selected: false },
                { key: 'russian', value: 'Russian', selected: false },
                { key: 'italian', value: 'Italian', selected: false }
            ],
            gender: undefined
        };
        this.submitted = false;
    }
    ButtonGroupFormComponent.prototype.ngOnInit = function () {
    };
    ButtonGroupFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('submitted');
    };
    ButtonGroupFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-button-group-form',
            template: __webpack_require__(/*! ./button-group-form.component.html */ "./src/app/features/forms/bootstrap-validation/button-group-form/button-group-form.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ButtonGroupFormComponent);
    return ButtonGroupFormComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/bootstrap-validation/contact-form/contact-form.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-validation/contact-form/contact-form.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"contactForm\" (ngSubmit)=\"onSubmit()\"\n      novalidate=\"novalidate\" [saBootstrapValidator]=\"validatorOptions\" class=\"form-horizontal\">\n\n  <fieldset>\n    <legend>Showing messages in custom area</legend>\n    <div class=\"form-group\">\n      <label class=\"col-md-3 control-label\">Full name</label>\n      <div class=\"col-md-6\">\n        <input type=\"text\" class=\"form-control\" name=\"fullName\"/>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"form-group\">\n      <label class=\"col-md-3 control-label\">Email</label>\n      <div class=\"col-md-6\">\n        <input type=\"text\" class=\"form-control\" name=\"email\"/>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"form-group\">\n      <label class=\"col-md-3 control-label\">Title</label>\n      <div class=\"col-md-6\">\n        <input type=\"text\" class=\"form-control\" name=\"title\"/>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"form-group\">\n      <label class=\"col-md-3 control-label\">Content</label>\n      <div class=\"col-md-6\">\n        <textarea class=\"form-control\" name=\"content\" rows=\"5\"></textarea>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <!--#messages is where the messages are placed inside -->\n    <div class=\"form-group\">\n      <div class=\"col-md-9 col-md-offset-3\">\n        <div id=\"messages\"></div>\n      </div>\n    </div>\n  </fieldset>\n\n  <div class=\"form-actions\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button class=\"btn btn-default\" type=\"submit\">\n          <i class=\"fa fa-eye\"></i>\n          Validate\n        </button>\n      </div>\n    </div>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/features/forms/bootstrap-validation/contact-form/contact-form.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-validation/contact-form/contact-form.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
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

var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent() {
        this.validatorOptions = {
            container: '#messages',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                fullName: {
                    validators: {
                        notEmpty: {
                            message: 'The full name is required and cannot be empty'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email address is required and cannot be empty'
                        },
                        emailAddress: {
                            message: 'The email address is not valid'
                        }
                    }
                },
                title: {
                    validators: {
                        notEmpty: {
                            message: 'The title is required and cannot be empty'
                        },
                        stringLength: {
                            max: 100,
                            message: 'The title must be less than 100 characters long'
                        }
                    }
                },
                content: {
                    validators: {
                        notEmpty: {
                            message: 'The content is required and cannot be empty'
                        },
                        stringLength: {
                            max: 500,
                            message: 'The content must be less than 500 characters long'
                        }
                    }
                }
            }
        };
        this.submitted = false;
    }
    ContactFormComponent.prototype.ngOnInit = function () {
    };
    ContactFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('submitted');
    };
    ContactFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-contact-form',
            template: __webpack_require__(/*! ./contact-form.component.html */ "./src/app/features/forms/bootstrap-validation/contact-form/contact-form.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ContactFormComponent);
    return ContactFormComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/bootstrap-validation/movie-form/movie-form.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-validation/movie-form/movie-form.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\"\n  novalidate=\"novalidate\" [saBootstrapValidator]=\"validatorOptions\">\n  <fieldset>\n    <legend>\n      Default Form Elements\n    </legend>\n    <div class=\"form-group\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <label class=\"control-label\">Movie title</label>\n          <input type=\"text\" class=\"form-control\" name=\"title\"/>\n        </div>\n\n        <div class=\"col-md-4 selectContainer\">\n          <label class=\"control-label\">Genre</label>\n          <select class=\"form-control\" name=\"genre\">\n            <option value=\"\">Choose a genre</option>\n            <option value=\"action\">Action</option>\n            <option value=\"comedy\">Comedy</option>\n            <option value=\"horror\">Horror</option>\n            <option value=\"romance\">Romance</option>\n          </select>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"form-group\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-4\">\n          <label class=\"control-label\">Director</label>\n          <input type=\"text\" class=\"form-control\" name=\"director\"/>\n        </div>\n\n        <div class=\"col-sm-12 col-md-4\">\n          <label class=\"control-label\">Writer</label>\n          <input type=\"text\" class=\"form-control\" name=\"writer\"/>\n        </div>\n\n        <div class=\"col-sm-12 col-md-4\">\n          <label class=\"control-label\">Producer</label>\n          <input type=\"text\" class=\"form-control\" name=\"producer\"/>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"form-group\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-6\">\n          <label class=\"control-label\">Website</label>\n          <input type=\"text\" class=\"form-control\" name=\"website\"/>\n        </div>\n\n        <div class=\"col-sm-12 col-md-6\">\n          <label class=\"control-label\">Youtube trailer</label>\n          <input type=\"text\" class=\"form-control\" name=\"trailer\"/>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"form-group\">\n      <label class=\"control-label\">Review</label>\n      <textarea class=\"form-control\" name=\"review\" rows=\"8\"></textarea>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"form-group\">\n\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-12\">\n          <label class=\"control-label\">Rating</label>\n        </div>\n\n        <div class=\"col-sm-12 col-md-10\">\n\n          <label class=\"radio radio-inline no-margin\">\n            <input type=\"radio\" name=\"rating\" value=\"terrible\"\n                   class=\"radiobox style-2\"/>\n            <span>Terrible</span> </label>\n\n          <label class=\"radio radio-inline\">\n            <input type=\"radio\" name=\"rating\" value=\"watchable\"\n                   class=\"radiobox style-2\"/>\n            <span>Watchable</span> </label>\n          <label class=\"radio radio-inline\">\n            <input type=\"radio\" name=\"rating\" value=\"best\" class=\"radiobox style-2\"/>\n            <span>Best ever</span> </label>\n\n        </div>\n\n      </div>\n\n    </div>\n  </fieldset>\n\n  <div class=\"form-actions\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button class=\"btn btn-default\" type=\"submit\">\n          <i class=\"fa fa-eye\"></i>\n          Validate\n        </button>\n      </div>\n    </div>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/features/forms/bootstrap-validation/movie-form/movie-form.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-validation/movie-form/movie-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MovieFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieFormComponent", function() { return MovieFormComponent; });
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

var MovieFormComponent = /** @class */ (function () {
    function MovieFormComponent() {
        this.validatorOptions = {
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                title: {
                    group: '.col-md-8',
                    validators: {
                        notEmpty: {
                            message: 'The title is required'
                        },
                        stringLength: {
                            max: 200,
                            message: 'The title must be less than 200 characters long'
                        }
                    }
                },
                genre: {
                    group: '.col-md-4',
                    validators: {
                        notEmpty: {
                            message: 'The genre is required'
                        }
                    }
                },
                director: {
                    group: '.col-md-4',
                    validators: {
                        notEmpty: {
                            message: 'The director name is required'
                        },
                        stringLength: {
                            max: 80,
                            message: 'The director name must be less than 80 characters long'
                        }
                    }
                },
                writer: {
                    group: '.col-md-4',
                    validators: {
                        notEmpty: {
                            message: 'The writer name is required'
                        },
                        stringLength: {
                            max: 80,
                            message: 'The writer name must be less than 80 characters long'
                        }
                    }
                },
                producer: {
                    group: '.col-md-4',
                    validators: {
                        notEmpty: {
                            message: 'The producer name is required'
                        },
                        stringLength: {
                            max: 80,
                            message: 'The producer name must be less than 80 characters long'
                        }
                    }
                },
                website: {
                    group: '.col-md-6',
                    validators: {
                        notEmpty: {
                            message: 'The website address is required'
                        },
                        uri: {
                            message: 'The website address is not valid'
                        }
                    }
                },
                trailer: {
                    group: '.col-md-6',
                    validators: {
                        notEmpty: {
                            message: 'The trailer link is required'
                        },
                        uri: {
                            message: 'The trailer link is not valid'
                        }
                    }
                },
                review: {
                    // The group will be set as default (.form-group)
                    validators: {
                        stringLength: {
                            max: 500,
                            message: 'The review must be less than 500 characters long'
                        }
                    }
                },
                rating: {
                    // The group will be set as default (.form-group)
                    validators: {
                        notEmpty: {
                            message: 'The rating is required'
                        }
                    }
                }
            }
        };
        this.submitted = false;
    }
    MovieFormComponent.prototype.ngOnInit = function () {
    };
    MovieFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('submitted');
    };
    MovieFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-movie-form',
            template: __webpack_require__(/*! ./movie-form.component.html */ "./src/app/features/forms/bootstrap-validation/movie-form/movie-form.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], MovieFormComponent);
    return MovieFormComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/bootstrap-validation/product-form/product-form.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-validation/product-form/product-form.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"productForm\" (ngSubmit)=\"onSubmit()\"\n      novalidate=\"novalidate\" [saBootstrapValidator]=\"validatorOptions\" class=\"form-horizontal\">\n\n  <fieldset>\n    <legend>\n      Default Form Elements\n    </legend>\n    <div class=\"form-group\">\n      <label class=\"col-xs-2 col-lg-3 control-label\">Price</label>\n      <div class=\"col-xs-9 col-lg-6 inputGroupContainer\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" name=\"price\"/>\n          <span class=\"input-group-addon\">$</span>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"form-group\">\n      <label class=\"col-xs-2 col-lg-3 control-label\">Amount</label>\n      <div class=\"col-xs-9 col-lg-6 inputGroupContainer\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">&#8364;</span>\n          <input type=\"text\" class=\"form-control\" name=\"amount\"/>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"form-group\">\n      <label class=\"col-xs-2 col-lg-3 control-label\">Color</label>\n      <div class=\"col-xs-9 col-lg-6 selectContainer\">\n        <select class=\"form-control\" name=\"color\">\n          <option value=\"\">Choose a color</option>\n          <option value=\"blue\">Blue</option>\n          <option value=\"green\">Green</option>\n          <option value=\"red\">Red</option>\n          <option value=\"yellow\">Yellow</option>\n          <option value=\"white\">White</option>\n        </select>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"form-group\">\n      <label class=\"col-xs-2 col-lg-3 control-label\">Size</label>\n      <div class=\"col-xs-9 col-lg-6 selectContainer\">\n        <select class=\"form-control\" name=\"size\">\n          <option value=\"\">Choose a size</option>\n          <option value=\"S\">S</option>\n          <option value=\"M\">M</option>\n          <option value=\"L\">L</option>\n          <option value=\"XL\">XL</option>\n        </select>\n      </div>\n    </div>\n  </fieldset>\n\n  <div class=\"form-actions\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button class=\"btn btn-default\" type=\"submit\">\n          <i class=\"fa fa-eye\"></i>\n          Validate\n        </button>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/features/forms/bootstrap-validation/product-form/product-form.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-validation/product-form/product-form.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
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

var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent() {
        this.validatorOptions = {
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                price: {
                    validators: {
                        notEmpty: {
                            message: 'The price is required'
                        },
                        numeric: {
                            message: 'The price must be a number'
                        }
                    }
                },
                amount: {
                    validators: {
                        notEmpty: {
                            message: 'The amount is required'
                        },
                        numeric: {
                            message: 'The amount must be a number'
                        }
                    }
                },
                color: {
                    validators: {
                        notEmpty: {
                            message: 'The color is required'
                        }
                    }
                },
                size: {
                    validators: {
                        notEmpty: {
                            message: 'The size is required'
                        }
                    }
                }
            }
        };
        this.submitted = false;
    }
    ProductFormComponent.prototype.ngOnInit = function () {
    };
    ProductFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('submitted');
    };
    ProductFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-product-form',
            template: __webpack_require__(/*! ./product-form.component.html */ "./src/app/features/forms/bootstrap-validation/product-form/product-form.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/bootstrap-validation/profile-form/profile-form.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-validation/profile-form/profile-form.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"profileForm\" (ngSubmit)=\"onSubmit()\"\n      novalidate=\"novalidate\" [saBootstrapValidator]=\"validatorOptions\" >\n\n  <fieldset>\n    <legend>\n      Default Form Elements\n    </legend>\n    <div class=\"form-group\">\n      <label>Email address</label>\n      <input type=\"text\" class=\"form-control\" name=\"email\"/>\n    </div>\n  </fieldset>\n  <fieldset>\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" class=\"form-control\" name=\"password\"/>\n    </div>\n  </fieldset>\n\n  <div class=\"form-actions\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button class=\"btn btn-default\" type=\"submit\">\n          <i class=\"fa fa-eye\"></i>\n          Validate\n        </button>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/features/forms/bootstrap-validation/profile-form/profile-form.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-validation/profile-form/profile-form.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ProfileFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFormComponent", function() { return ProfileFormComponent; });
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

var ProfileFormComponent = /** @class */ (function () {
    function ProfileFormComponent() {
        this.validatorOptions = {
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email address is required'
                        },
                        emailAddress: {
                            message: 'The email address is not valid'
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required'
                        }
                    }
                }
            }
        };
        this.submitted = false;
    }
    ProfileFormComponent.prototype.ngOnInit = function () {
    };
    ProfileFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('submitted');
    };
    ProfileFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-profile-form',
            template: __webpack_require__(/*! ./profile-form.component.html */ "./src/app/features/forms/bootstrap-validation/profile-form/profile-form.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ProfileFormComponent);
    return ProfileFormComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/bootstrap-validation/toggling-form/toggling-form.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-validation/toggling-form/toggling-form.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"togglingForm\" (ngSubmit)=\"onSubmit()\"\n      novalidate=\"novalidate\" [saBootstrapValidator]=\"validatorOptions\" class=\"form-horizontal\">\n\n  <fieldset>\n    <legend>\n      Default Form Elements\n    </legend>\n    <div class=\"form-group\">\n      <label class=\"col-lg-3 control-label\">Full name <sup>*</sup></label>\n      <div class=\"col-lg-4\">\n        <input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"First name\"/>\n      </div>\n      <div class=\"col-lg-4\">\n        <input type=\"text\" class=\"form-control\" name=\"lastName\" placeholder=\"Last name\"/>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"form-group\">\n      <label class=\"col-lg-3 control-label\">Company <sup>*</sup></label>\n      <div class=\"col-lg-5\">\n        <input type=\"text\" class=\"form-control\" name=\"company\" required=\"true\" data-bv-notempty-message=\"The company name is required\"/>\n      </div>\n      <div class=\"col-lg-2\">\n        <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"toggleInfo('jobInfo')\">\n        Add more info\n        </button>\n      </div>\n    </div>\n  </fieldset>\n\n   <!--These fields will not be validated as long as they are not visible -->\n  <div id=\"jobInfo\" [style.display]=\"state.jobInfo ? 'block' : 'none'\">\n  <fieldset>\n    <div class=\"form-group\">\n      <label class=\"col-lg-3 control-label\">Job title <sup>*</sup></label>\n      <div class=\"col-lg-5\">\n        <input type=\"text\" class=\"form-control\" name=\"job\"/>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"form-group\">\n      <label class=\"col-lg-3 control-label\">Department <sup>*</sup></label>\n      <div class=\"col-lg-5\">\n        <input type=\"text\" class=\"form-control\" name=\"department\"/>\n      </div>\n    </div>\n  </fieldset>\n  </div>\n\n  <fieldset>\n    <div class=\"form-group\">\n      <label class=\"col-lg-3 control-label\">Mobile phone <sup>*</sup></label>\n      <div class=\"col-lg-5\">\n        <input type=\"text\" class=\"form-control\" name=\"mobilePhone\"/>\n      </div>\n      <div class=\"col-lg-2\">\n        <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"toggleInfo('phoneInfo')\">\n        Add more phone numbers\n        </button>\n      </div>\n    </div>\n  </fieldset>\n  <!--These fields will not be validated as long as they are not visible -->\n  <div id=\"phoneInfo\" [style.display]=\"state.phoneInfo ? 'block' : 'none'\">\n\n  <fieldset>\n    <div class=\"form-group\">\n      <label class=\"col-lg-3 control-label\">Home phone</label>\n      <div class=\"col-lg-5\">\n        <input type=\"text\" class=\"form-control\" name=\"homePhone\"/>\n      </div>\n    </div>\n  </fieldset>\n  <fieldset>\n    <div class=\"form-group\">\n      <label class=\"col-lg-3 control-label\">Office phone</label>\n      <div class=\"col-lg-5\">\n        <input type=\"text\" class=\"form-control\" name=\"officePhone\"/>\n      </div>\n    </div>\n  </fieldset>\n  </div>\n\n  <div class=\"form-actions\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button class=\"btn btn-default\" type=\"submit\">\n          <i class=\"fa fa-eye\"></i>\n          Validate\n        </button>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/features/forms/bootstrap-validation/toggling-form/toggling-form.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-validation/toggling-form/toggling-form.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: TogglingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TogglingFormComponent", function() { return TogglingFormComponent; });
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

var TogglingFormComponent = /** @class */ (function () {
    function TogglingFormComponent() {
        this.validatorOptions = {
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                firstName: {
                    validators: {
                        notEmpty: {
                            message: 'The first name is required'
                        }
                    }
                },
                lastName: {
                    validators: {
                        notEmpty: {
                            message: 'The last name is required'
                        }
                    }
                },
                company: {
                    validators: {
                        notEmpty: {
                            message: 'The company name is required'
                        }
                    }
                },
                // These fields will be validated when being visible
                job: {
                    validators: {
                        notEmpty: {
                            message: 'The job title is required'
                        }
                    }
                },
                department: {
                    validators: {
                        notEmpty: {
                            message: 'The department name is required'
                        }
                    }
                },
                mobilePhone: {
                    validators: {
                        notEmpty: {
                            message: 'The mobile phone number is required'
                        },
                        digits: {
                            message: 'The mobile phone number is not valid'
                        }
                    }
                },
                // These fields will be validated when being visible
                homePhone: {
                    validators: {
                        digits: {
                            message: 'The home phone number is not valid'
                        }
                    }
                },
                officePhone: {
                    validators: {
                        digits: {
                            message: 'The office phone number is not valid'
                        }
                    }
                }
            }
        };
        this.state = {
            jobInfo: false,
            phoneInfo: false,
        };
        this.submitted = false;
    }
    TogglingFormComponent.prototype.toggleInfo = function (key) {
        this.state[key] = !this.state[key];
    };
    TogglingFormComponent.prototype.ngOnInit = function () {
    };
    TogglingFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('submitted');
    };
    TogglingFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-toggling-form',
            template: __webpack_require__(/*! ./toggling-form.component.html */ "./src/app/features/forms/bootstrap-validation/toggling-form/toggling-form.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TogglingFormComponent);
    return TogglingFormComponent;
}());



/***/ })

}]);
//# sourceMappingURL=bootstrap-validation-bootstrap-validation-module.js.map