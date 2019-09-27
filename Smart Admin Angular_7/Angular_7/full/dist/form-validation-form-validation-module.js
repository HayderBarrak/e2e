(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-validation-form-validation-module"],{

/***/ "./src/app/features/forms/form-validation/form-validation.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/features/forms/form-validation/form-validation.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Forms', 'Validation Sample look']\" icon=\"pencil-square-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n\n\n  <div class=\"alert alert-block alert-info\" dismisser=\"\">\n    <h4 class=\"alert-heading\">Please Note!</h4>\n\n    <p>\n      This page only shows various form element states for error and success. For a full list of error validations and\n      examples click on the link below to go to the <strong>Smart Form Layouts</strong> page\n    </p>\n    <br>\n    <a [routerLink]=\"['../layouts']\" class=\"btn btn-primary\"><strong><i class=\"fa fa-arrow-circle-right\"></i> Form Layouts\n      Page </strong></a>\n  </div>\n\n  <!-- widget grid -->\n  <sa-widgets-grid>\n\n    <!-- row -->\n    <div class=\"row\">\n\n      <!-- NEW WIDGET START -->\n      <article class=\"col-sm-12 col-md-12 col-lg-6\">\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [colorbutton]=\"false\" [editbutton]=\"false\">\n          <!-- widget options:\n              usage: <div sa-widget [editbutton]=\"false\">\n\n              [colorbutton]=\"false\"\n              [editbutton]=\"false\"\n              [togglebutton]=\"false\"\n              [deletebutton]=\"false\"\n              [fullscreenbutton]=\"false\"\n              [custombutton]=\"false\"\n              [collapsed]=\"true\"\n              [sortable]=\"false\"\n\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-exclamation txt-color-red\"></i> </span>\n\n            <h2>Error States </h2>\n\n          </header>\n\n          <!-- widget div-->\n          <div>\n\n\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\">\n\n              <!-- Error states for elements -->\n              <form class=\"smart-form\">\n                <header>Error states for elements</header>\n\n                <fieldset>\n                  <section>\n                    <label class=\"label\">Text input</label>\n                    <label class=\"input state-error\">\n                      <input type=\"text\">\n                    </label>\n\n                    <div class=\"note note-error\">This is a required field.</div>\n                  </section>\n\n                  <section>\n                    <label class=\"label\">File input</label>\n\n                    <div class=\"input input-file state-error\">\n                      <span class=\"button\"><input type=\"file\" id=\"file2\" onchange=\"this.parentNode.nextSibling.value = this.value\">Browse</span><input type=\"text\" readonly>\n                    </div>\n                    <div class=\"note note-error\">File size must be less than 3Mb.</div>\n                  </section>\n                </fieldset>\n\n                <fieldset>\n                  <section>\n                    <label class=\"label\">Select</label>\n                    <label class=\"select state-error\">\n                      <select>\n                        <option value=\"0\">Choose name</option>\n                        <option value=\"1\">Alexandra</option>\n                        <option value=\"2\">Alice</option>\n                        <option value=\"3\">Anastasia</option>\n                        <option value=\"4\">Avelina</option>\n                      </select>\n                      <i></i>\n                    </label>\n\n                    <div class=\"note note-error\">You must select an option.</div>\n                  </section>\n                </fieldset>\n\n                <fieldset>\n                  <section>\n                    <label class=\"label\">Textarea</label>\n                    <label class=\"textarea state-error\">\n                      <textarea rows=\"3\"></textarea>\n                    </label>\n\n                    <div class=\"note note-error\">This is a required field.</div>\n                  </section>\n                </fieldset>\n\n                <fieldset>\n                  <section>\n                    <label class=\"label\">Radios</label>\n\n                    <div class=\"row\">\n                      <div class=\"col col-4\">\n                        <label class=\"radio state-error\"><input type=\"radio\" name=\"radio\"><i></i>Alexandra</label>\n                        <label class=\"radio state-error\"><input type=\"radio\" name=\"radio\"><i></i>Alice</label>\n                      </div>\n                      <div class=\"col col-4\">\n                        <label class=\"radio state-error\"><input type=\"radio\" name=\"radio\"><i></i>Avelina</label>\n                        <label class=\"radio state-error\"><input type=\"radio\" name=\"radio\"><i></i>Basilia</label>\n                      </div>\n                      <div class=\"col col-4\">\n                        <label class=\"radio state-error\"><input type=\"radio\" name=\"radio\"><i></i>Cassandra</label>\n                        <label class=\"radio state-error\"><input type=\"radio\" name=\"radio\"><i></i>Clemencia</label>\n                      </div>\n                    </div>\n                    <div class=\"note note-error\">You must select one option.</div>\n                  </section>\n                </fieldset>\n\n                <fieldset>\n                  <section>\n                    <label class=\"label\">Checkboxes</label>\n\n                    <div class=\"row\">\n                      <div class=\"col col-4\">\n                        <label class=\"checkbox state-error\"><input type=\"checkbox\" name=\"checkbox\"><i></i>Alexandra</label>\n                        <label class=\"checkbox state-error\"><input type=\"checkbox\" name=\"checkbox\"><i></i>Alice</label>\n                      </div>\n                      <div class=\"col col-4\">\n                        <label class=\"checkbox state-error\"><input type=\"checkbox\" name=\"checkbox\"><i></i>Avelina</label>\n                        <label class=\"checkbox state-error\"><input type=\"checkbox\" name=\"checkbox\"><i></i>Basilia</label>\n                      </div>\n                      <div class=\"col col-4\">\n                        <label class=\"checkbox state-error\"><input type=\"checkbox\" name=\"checkbox\"><i></i>Cassandra</label>\n                        <label class=\"checkbox state-error\"><input type=\"checkbox\" name=\"checkbox\"><i></i>Clemencia</label>\n                      </div>\n                    </div>\n                    <div class=\"note note-error\">You must select at least one option.</div>\n                  </section>\n                </fieldset>\n\n                <fieldset>\n                  <div class=\"row\">\n                    <section class=\"col col-5\">\n                      <label class=\"label\">Toggles based on radios</label>\n                      <label class=\"toggle state-error\"><input type=\"radio\" name=\"radio-toggle\"><i data-swchon-text=\"ON\" data-swchoff-text=\"OFF\"></i>Alexandra</label>\n                      <label class=\"toggle state-error\"><input type=\"radio\" name=\"radio-toggle\"><i data-swchon-text=\"ON\" data-swchoff-text=\"OFF\"></i>Anastasia</label>\n                      <label class=\"toggle state-error\"><input type=\"radio\" name=\"radio-toggle\"><i data-swchon-text=\"ON\" data-swchoff-text=\"OFF\"></i>Avelina</label>\n\n                      <div class=\"note note-error\">You must select one option.</div>\n                    </section>\n\n                    <div class=\"col col-2\"></div>\n\n                    <section class=\"col col-5\">\n                      <label class=\"label\">Toggles based on checkboxes</label>\n                      <label class=\"toggle state-error\"><input type=\"checkbox\" name=\"checkbox-toggle\"><i data-swchon-text=\"ON\" data-swchoff-text=\"OFF\"></i>Cassandra</label>\n                      <label class=\"toggle state-error\"><input type=\"checkbox\" name=\"checkbox-toggle\"><i data-swchon-text=\"ON\" data-swchoff-text=\"OFF\"></i>Clemencia</label>\n                      <label class=\"toggle state-error\"><input type=\"checkbox\" name=\"checkbox-toggle\"><i data-swchon-text=\"ON\" data-swchoff-text=\"OFF\"></i>Desiderata</label>\n\n                      <div class=\"note note-error\">You must select at least one option.</div>\n                    </section>\n                  </div>\n                </fieldset>\n\n                <footer>\n                  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                  <button type=\"button\" class=\"btn btn-default\" onclick=\"window.history.back();\">Back</button>\n                </footer>\n              </form>\n              <!--/ Error states for elements -->\n\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n\n      </article>\n      <!-- WIDGET END -->\n\n      <!-- NEW WIDGET START -->\n      <article class=\"col-sm-12 col-md-12 col-lg-6\">\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [colorbutton]=\"false\" [editbutton]=\"false\">\n          <!-- widget options:\n              usage: <div sa-widget [editbutton]=\"false\">\n\n              [colorbutton]=\"false\"\n              [editbutton]=\"false\"\n              [togglebutton]=\"false\"\n              [deletebutton]=\"false\"\n              [fullscreenbutton]=\"false\"\n              [custombutton]=\"false\"\n              [collapsed]=\"true\"\n              [sortable]=\"false\"\n\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-check txt-color-green\"></i> </span>\n\n            <h2>Success States </h2>\n\n          </header>\n\n          <!-- widget div-->\n          <div>\n\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\">\n\n              <!-- Success states for elements -->\n              <form class=\"smart-form\">\n                <header>Success states for elements</header>\n\n                <fieldset>\n                  <section>\n                    <label class=\"label\">Text input</label>\n                    <label class=\"input state-success\">\n                      <input type=\"text\">\n                    </label>\n\n                    <div class=\"note note-success\">This is a required field.</div>\n                  </section>\n\n                  <section>\n                    <label class=\"label\">File input</label>\n\n                    <div class=\"input input-file state-success\">\n                      <span class=\"button\"><input type=\"file\" id=\"file\" onchange=\"this.parentNode.nextSibling.value = this.value\">Browse</span><input type=\"text\" readonly>\n                    </div>\n                    <div class=\"note note-success\">This is a required field.</div>\n                  </section>\n                </fieldset>\n\n                <fieldset>\n                  <section>\n                    <label class=\"label\">Select</label>\n                    <label class=\"select state-success\">\n                      <select>\n                        <option value=\"0\">Choose name</option>\n                        <option value=\"1\">Alexandra</option>\n                        <option value=\"2\">Alice</option>\n                        <option value=\"3\" selected>Anastasia</option>\n                        <option value=\"4\">Avelina</option>\n                      </select>\n                      <i></i>\n                    </label>\n\n                    <div class=\"note note-success\">Thanks for your selection.</div>\n                  </section>\n                </fieldset>\n\n                <fieldset>\n                  <section>\n                    <label class=\"label\">Textarea</label>\n                    <label class=\"textarea state-success\">\n                      <textarea rows=\"3\"></textarea>\n                    </label>\n\n                    <div class=\"note note-success\">Thanks for your text.</div>\n                  </section>\n                </fieldset>\n\n                <fieldset>\n                  <section>\n                    <label class=\"label\">Radios</label>\n\n                    <div class=\"row\">\n                      <div class=\"col col-4\">\n                        <label class=\"radio state-success\"><input type=\"radio\" name=\"radio\"><i></i>Alexandra</label>\n                        <label class=\"radio state-success\"><input type=\"radio\" name=\"radio\"><i></i>Alice</label>\n                      </div>\n                      <div class=\"col col-4\">\n                        <label class=\"radio state-success\"><input type=\"radio\" name=\"radio\" checked><i></i>Avelina</label>\n                        <label class=\"radio state-success\"><input type=\"radio\" name=\"radio\"><i></i>Basilia</label>\n                      </div>\n                      <div class=\"col col-4\">\n                        <label class=\"radio state-success\"><input type=\"radio\" name=\"radio\"><i></i>Cassandra</label>\n                        <label class=\"radio state-success\"><input type=\"radio\" name=\"radio\"><i></i>Clemencia</label>\n                      </div>\n                    </div>\n                    <div class=\"note note-success\">Thanks for your selection.</div>\n                  </section>\n                </fieldset>\n\n                <fieldset>\n                  <section>\n                    <label class=\"label\">Checkboxes</label>\n\n                    <div class=\"row\">\n                      <div class=\"col col-4\">\n                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\"><i></i>Alexandra</label>\n                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" checked><i></i>Alice</label>\n                      </div>\n                      <div class=\"col col-4\">\n                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\"><i></i>Avelina</label>\n                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\"><i></i>Basilia</label>\n                      </div>\n                      <div class=\"col col-4\">\n                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" checked><i></i>Cassandra</label>\n                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\"><i></i>Clemencia</label>\n                      </div>\n                    </div>\n                    <div class=\"note note-success\">Thanks for your selection.</div>\n                  </section>\n                </fieldset>\n\n                <fieldset>\n                  <div class=\"row\">\n                    <section class=\"col col-5\">\n                      <label class=\"label\">Toggles based on radios</label>\n                      <label class=\"toggle state-success\"><input type=\"radio\" name=\"radio-toggle\" checked><i data-swchon-text=\"ON\" data-swchoff-text=\"OFF\"></i>Alexandra</label>\n                      <label class=\"toggle state-success\"><input type=\"radio\" name=\"radio-toggle\"><i data-swchon-text=\"ON\" data-swchoff-text=\"OFF\"></i>Anastasia</label>\n                      <label class=\"toggle state-success\"><input type=\"radio\" name=\"radio-toggle\"><i data-swchon-text=\"ON\" data-swchoff-text=\"OFF\"></i>Avelina</label>\n\n                      <div class=\"note note-success\">Thanks for your selection.</div>\n                    </section>\n\n                    <div class=\"col col-2\"></div>\n\n                    <section class=\"col col-5\">\n                      <label class=\"label\">Toggles based on checkboxes</label>\n                      <label class=\"toggle state-success\"><input type=\"checkbox\" name=\"checkbox-toggle\" checked><i data-swchon-text=\"ON\" data-swchoff-text=\"OFF\"></i>Cassandra</label>\n                      <label class=\"toggle state-success\"><input type=\"checkbox\" name=\"checkbox-toggle\"><i data-swchon-text=\"ON\" data-swchoff-text=\"OFF\"></i>Clemencia</label>\n                      <label class=\"toggle state-success\"><input type=\"checkbox\" name=\"checkbox-toggle\"><i data-swchon-text=\"ON\" data-swchoff-text=\"OFF\"></i>Desiderata</label>\n\n                      <div class=\"note note-success\">Thanks for your selection.</div>\n                    </section>\n                  </div>\n                </fieldset>\n\n                <footer>\n                  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                  <button type=\"button\" class=\"btn btn-default\" onclick=\"window.history.back();\">Back</button>\n                </footer>\n              </form>\n              <!--/ Success states for elements -->\n\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n\n      </article>\n      <!-- WIDGET END -->\n\n    </div>\n\n    <!-- end row -->\n\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n\n\n</div>\n<!-- END MAIN CONTENT -->\n"

/***/ }),

/***/ "./src/app/features/forms/form-validation/form-validation.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/forms/form-validation/form-validation.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FormValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidationComponent", function() { return FormValidationComponent; });
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

var FormValidationComponent = /** @class */ (function () {
    function FormValidationComponent() {
    }
    FormValidationComponent.prototype.ngOnInit = function () {
    };
    FormValidationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-form-validation',
            template: __webpack_require__(/*! ./form-validation.component.html */ "./src/app/features/forms/form-validation/form-validation.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], FormValidationComponent);
    return FormValidationComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/form-validation/form-validation.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/forms/form-validation/form-validation.module.ts ***!
  \**************************************************************************/
/*! exports provided: FormValidationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidationModule", function() { return FormValidationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_validation_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-validation.routing */ "./src/app/features/forms/form-validation/form-validation.routing.ts");
/* harmony import */ var _form_validation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-validation.component */ "./src/app/features/forms/form-validation/form-validation.component.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FormValidationModule = /** @class */ (function () {
    function FormValidationModule() {
    }
    FormValidationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _form_validation_routing__WEBPACK_IMPORTED_MODULE_2__["formValidationRouting"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_form_validation_component__WEBPACK_IMPORTED_MODULE_3__["FormValidationComponent"]]
        })
    ], FormValidationModule);
    return FormValidationModule;
}());



/***/ }),

/***/ "./src/app/features/forms/form-validation/form-validation.routing.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/forms/form-validation/form-validation.routing.ts ***!
  \***************************************************************************/
/*! exports provided: formValidationRoutes, formValidationRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formValidationRoutes", function() { return formValidationRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formValidationRouting", function() { return formValidationRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_validation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-validation.component */ "./src/app/features/forms/form-validation/form-validation.component.ts");


var formValidationRoutes = [{
        path: '',
        component: _form_validation_component__WEBPACK_IMPORTED_MODULE_1__["FormValidationComponent"]
    }];
var formValidationRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(formValidationRoutes);


/***/ })

}]);
//# sourceMappingURL=form-validation-form-validation-module.js.map