(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bootstrap-editors-bootstrap-editors-module"],{

/***/ "./src/app/features/forms/bootstrap-editors/bootstrap-editors.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-editors/bootstrap-editors.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Forms', 'Bootstrap Editors']\" icon=\"pencil-square-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n\n\n  <!-- widget grid -->\n\n  <sa-widgets-grid>\n\n    <!-- row -->\n\n    <div class=\"row\">\n\n      <!-- NEW WIDGET START -->\n      <article class=\"col-sm-12 col-md-12 col-lg-6\">\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [togglebutton]=\"false\" [fullscreenbutton]=\"false\" [sortable]=\"false\" color=\"purple\">\n          <!-- widget options:\n          usage: <div sa-widget [editbutton]=\"false\">\n\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [custombutton]=\"false\"\n          [collapsed]=\"true\"\n          [sortable]=\"false\"\n\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-pencil\"></i> </span>\n\n            <h2>Markdown</h2>\n\n          </header>\n\n          <!-- widget div-->\n          <div>\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\">\n\n                <textarea markdownEditor class=\"custom-scroll\" data-height=\"270\">\n### Hello there\nHow are you?\n\nI have bellow task for you :\n\nSelect from this text...\nClick the bold on THIS WORD and make THESE ONE italic\nLink GOOGLE to google.com\nTest to insert image (and try to tab after write the image description)\nTest Preview\nAnd ending here... Click \"List\"\n\nEnjoy!\n                </textarea>\n\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget class=\"well\" [colorbutton]=\"false\" [editbutton]=\"false\" [togglebutton]=\"false\" [fullscreenbutton]=\"false\" [sortable]=\"false\">\n          <!-- widget options:\n          usage: <div sa-widget [editbutton]=\"false\">\n\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [custombutton]=\"false\"\n          [collapsed]=\"true\"\n          [sortable]=\"false\"\n\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-pencil\"></i> </span>\n\n            <h2>Markdown API</h2>\n\n          </header>\n\n          <!-- widget div-->\n          <div>\n            <!-- widget content -->\n            <div class=\"widget-body\">\n\n              <h3>Markdown API</h3>\n\n              <table class=\"table table-bordered table-striped\">\n                <thead>\n                <tr>\n                  <th>Method Name</th>\n                  <th>Description</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                  <td><code>\n                    showEditor()</code></td>\n                  <td>Toggle on the editor visibility</td>\n                </tr>\n                <tr>\n                  <td><code>\n                    showPreview()</code></td>\n                  <td>Toggle on the preview visibility</td>\n                </tr>\n                <tr>\n                  <td><code>\n                    hidePreview()</code></td>\n                  <td>Toggle off the editor visibility</td>\n                </tr>\n                <tr>\n                  <td><code>\n                    isDirty()</code></td>\n                  <td>Check the editor content state, return true if the original content was changed</td>\n                </tr>\n                <tr>\n                  <td><code>\n                    getContent()</code></td>\n                  <td>Get the editor content</td>\n                </tr>\n                <tr>\n                  <td><code>\n                    setContent(<em>string</em> content)</code></td>\n                  <td>Set the editor content</td>\n                </tr>\n                <tr>\n                  <td><code>\n                    findSelection(<em>string</em> words)</code></td>\n                  <td>Find some words/sentence within the editor and returned selection object(containing word\n                    position and other useful information).\n                  </td>\n                </tr>\n                <tr>\n                  <td><code>\n                    getSelection()</code></td>\n                  <td>Get the current selected chunk of words within the editor.</td>\n                </tr>\n                <tr>\n                  <td><code>\n                    setSelection(<em>int</em> start, <em>int</em> end)</code></td>\n                  <td>Tell the editor to select a span of words from <code>\n                    start</code> to <code>\n                    end</code>.\n                  </td>\n                </tr>\n                <tr>\n                  <td><code>\n                    replaceSelection(<em>string</em> content)</code></td>\n                  <td>Replace the current selected chunk of words within the editor with any content.</td>\n                </tr>\n                <tr>\n                  <td><code>\n                    getNextTab()</code></td>\n                  <td>Get the next tab memory. Returned selection object(containing word position and other useful\n                    information).\n                  </td>\n                </tr>\n                <tr>\n                  <td><code>\n                    setNextTab(<em>int</em> start, <em>int</em> end)</code></td>\n                  <td>Tell the editor to select a span of words from <code>\n                    start</code> to <code>\n                    end</code> at next <code>\n                    tab</code> keypress event.\n                  </td>\n                </tr>\n                <tr>\n                  <td><code>\n                    enableButtons(<em>string</em> name)</code></td>\n                  <td>Enabled a button by <code>\n                    name</code> that described in <code>\n                    buttons</code> or <code>\n                    additionalButtons</code> arrays. Passing <code>\n                    all</code> will enabled all buttons.\n                  </td>\n                </tr>\n                <tr>\n                  <td><code>\n                    disableButtons(<em>string</em> name)</code></td>\n                  <td>Disabled a button by <code>\n                    name</code> that described in <code>\n                    buttons</code> or <code>\n                    additionalButtons</code> arrays. Passing <code>\n                    all</code> will disabled all buttons.\n                  </td>\n                </tr>\n                </tbody>\n              </table>\n\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n\n      </article>\n      <!-- WIDGET END -->\n\n      <!-- NEW WIDGET START -->\n      <article class=\"col-sm-12 col-md-12 col-lg-6\">\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [togglebutton]=\"false\" [fullscreenbutton]=\"false\" [sortable]=\"false\" color=\"blue\">\n          <!-- widget options:\n          usage: <div sa-widget [editbutton]=\"false\">\n\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [custombutton]=\"false\"\n          [collapsed]=\"true\"\n          [sortable]=\"false\"\n\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-pencil\"></i> </span>\n\n            <h2>Summernote (Lightweight)</h2>\n\n          </header>\n\n          <!-- widget div-->\n          <div>\n\n\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\">\n\n              <div class=\"summernote\" [summernote]=\"{height: 180}\">\n\n              </div>\n\n              <div class=\"widget-footer smart-form\">\n\n                <div class=\"btn-group\">\n\n                  <button class=\"btn btn-sm btn-primary\" type=\"button\">\n                    <i class=\"fa fa-times\"></i> Cancel\n                  </button>\n\n                </div>\n                <div class=\"btn-group\">\n\n                  <button class=\"btn btn-sm btn-success\" type=\"button\">\n                    <i class=\"fa fa-check\"></i> Save\n                  </button>\n\n                </div>\n\n                <label class=\"checkbox pull-left\">\n                  <input type=\"checkbox\" checked=\"checked\" name=\"autosave\" id=\"autosave\">\n                  <i></i>Auto Save\n                </label>\n\n              </div>\n\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget class=\"well\">\n          <!-- widget options:\n          usage: <div sa-widget [editbutton]=\"false\">\n\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [custombutton]=\"false\"\n          [collapsed]=\"true\"\n          [sortable]=\"false\"\n\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-pencil\"></i> </span>\n\n            <h2>Example </h2>\n\n          </header>\n\n          <!-- widget div-->\n          <div>\n\n            <!-- widget content -->\n            <div class=\"widget-body\">\n\n              <h3>Summernote Example</h3>\n\n              <p>\n                <button class=\"btn btn-primary\" summernoteAttach=\".click2edit\" type=\"button\">\n                  Edit\n                </button>\n                <button class=\"btn btn-primary\" summernoteDetach=\".click2edit\" type=\"button\">\n                  Save\n                </button>\n              </p>\n              <p></p>\n\n              <div class=\"click2edit\">\n                To change this text with summernote, click `Edit` button\n              </div>\n\n              <h5>HTML:</h5>\n              <pre><code class=\"xml\">\n&lt;p&gt;\n  &lt;button class=&quot;btn btn-primary&quot; summernoteAttach=&quot;.click2edit&quot; type=&quot;button&quot;&gt;\n  Edit\n  &lt;/button&gt;\n  &lt;button class=&quot;btn btn-primary&quot; summernoteDetach=&quot;.click2edit&quot; type=&quot;button&quot;&gt;\n  Save\n  &lt;/button&gt;\n&lt;/p&gt;\n\n&lt;div class=&quot;click2edit&quot;&gt;\nTo change this text with summernote, click `Edit` button\n&lt;/div&gt;\n                </code></pre>\n              <h5>Script:</h5>\n              <pre><code class=\"javascript\">\n                    //no scripts required\n\t\t\t\t</code></pre>\n\n\n              <h5>Documentation:</h5>\n\n              <p class=\"alert alert-info\">\n                Full API for Summernote.js, including keybored shortcuts, PHP Examples, Django installation, and\n                Rails (gem) integration can be found <a href=\"http://hackerwins.github.io/summernote/features.html#api\">here</a>\n              </p>\n            </div>\n            <!-- end widget content -->\n\n\n            <!-- end widget div -->\n          </div>\n\n        </div>\n        <!-- end widget -->\n\n      </article>\n      <!-- WIDGET END -->\n\n    </div>\n\n    <!-- end row -->\n\n  </sa-widgets-grid>\n\n  <!-- end widget grid -->\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/forms/bootstrap-editors/bootstrap-editors.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-editors/bootstrap-editors.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BootstrapEditorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapEditorsComponent", function() { return BootstrapEditorsComponent; });
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

var BootstrapEditorsComponent = /** @class */ (function () {
    function BootstrapEditorsComponent() {
    }
    BootstrapEditorsComponent.prototype.ngOnInit = function () {
    };
    BootstrapEditorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bootstrap-editors',
            template: __webpack_require__(/*! ./bootstrap-editors.component.html */ "./src/app/features/forms/bootstrap-editors/bootstrap-editors.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], BootstrapEditorsComponent);
    return BootstrapEditorsComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/bootstrap-editors/bootstrap-editors.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-editors/bootstrap-editors.module.ts ***!
  \******************************************************************************/
/*! exports provided: BootstrapEditorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapEditorsModule", function() { return BootstrapEditorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bootstrap_editors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap-editors.component */ "./src/app/features/forms/bootstrap-editors/bootstrap-editors.component.ts");
/* harmony import */ var _bootstrap_editors_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap-editors.routing */ "./src/app/features/forms/bootstrap-editors/bootstrap-editors.routing.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_shared_forms_editors_smartadmin_editors_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/forms/editors/smartadmin-editors.module */ "./src/app/shared/forms/editors/smartadmin-editors.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var BootstrapEditorsModule = /** @class */ (function () {
    function BootstrapEditorsModule() {
    }
    BootstrapEditorsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _bootstrap_editors_routing__WEBPACK_IMPORTED_MODULE_3__["bootstrapEditorsRouting"],
                _app_shared_forms_editors_smartadmin_editors_module__WEBPACK_IMPORTED_MODULE_5__["SmartadminEditorsModule"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ],
            declarations: [_bootstrap_editors_component__WEBPACK_IMPORTED_MODULE_2__["BootstrapEditorsComponent"]]
        })
    ], BootstrapEditorsModule);
    return BootstrapEditorsModule;
}());



/***/ }),

/***/ "./src/app/features/forms/bootstrap-editors/bootstrap-editors.routing.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/forms/bootstrap-editors/bootstrap-editors.routing.ts ***!
  \*******************************************************************************/
/*! exports provided: bootstrapEditorsRoutes, bootstrapEditorsRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapEditorsRoutes", function() { return bootstrapEditorsRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapEditorsRouting", function() { return bootstrapEditorsRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bootstrap_editors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap-editors.component */ "./src/app/features/forms/bootstrap-editors/bootstrap-editors.component.ts");


var bootstrapEditorsRoutes = [{
        path: '',
        component: _bootstrap_editors_component__WEBPACK_IMPORTED_MODULE_1__["BootstrapEditorsComponent"]
    }];
var bootstrapEditorsRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(bootstrapEditorsRoutes);


/***/ })

}]);
//# sourceMappingURL=bootstrap-editors-bootstrap-editors-module.js.map