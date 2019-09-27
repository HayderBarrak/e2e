(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-forms-forms-showcase-module"],{

/***/ "./src/app/features/forms/forms-showcase.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/forms/forms-showcase.module.ts ***!
  \*********************************************************/
/*! exports provided: FormsShowcaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsShowcaseModule", function() { return FormsShowcaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _forms_showcase_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms-showcase.routing */ "./src/app/features/forms/forms-showcase.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FormsShowcaseModule = /** @class */ (function () {
    function FormsShowcaseModule() {
    }
    FormsShowcaseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _forms_showcase_routing__WEBPACK_IMPORTED_MODULE_1__["routing"],
            ],
            providers: [],
            entryComponents: []
        })
    ], FormsShowcaseModule);
    return FormsShowcaseModule;
}());



/***/ }),

/***/ "./src/app/features/forms/forms-showcase.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/forms/forms-showcase.routing.ts ***!
  \**********************************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    { path: 'editors',
        loadChildren: './bootstrap-editors/bootstrap-editors.module#BootstrapEditorsModule',
        data: { pageTitle: 'Bootstrap Editors' }
    },
    { path: 'bootstrap-elements',
        loadChildren: './bootstrap-elements/bootstrap-elements.module#BootstrapElementsModule',
        data: { pageTitle: 'Bootstrap Elements' }
    },
    {
        path: 'bootstrap-validation',
        loadChildren: './bootstrap-validation/bootstrap-validation.module#BootstrapValidationModule',
        data: { pageTitle: 'Bootstrap Validation' }
    },
    {
        path: 'dropzone',
        loadChildren: './dropzone-showcase/dropzone-showcase.module#DropzoneShowcaseModule',
        data: { pageTitle: 'Dropzone' }
    },
    {
        path: 'elements',
        loadChildren: './form-elements/form-elements.module#FormElementsModule',
        data: { pageTitle: 'Elements' }
    },
    {
        path: 'layouts',
        loadChildren: './form-layouts/form-layouts.module#FormLayoutsModule',
        data: { pageTitle: 'Layouts' }
    },
    {
        path: 'plugins',
        loadChildren: './form-plugins/form-plugins.module#FormPluginsModule',
        data: { pageTitle: 'Plugins' }
    },
    {
        path: 'validation',
        loadChildren: './form-validation/form-validation.module#FormValidationModule',
        data: { pageTitle: 'Validation' }
    },
    {
        path: 'wizards',
        loadChildren: './wizards/wizards.module#WizardsModule',
        data: { pageTitle: 'Wizards' }
    },
    {
        path: 'image-cropping',
        loadChildren: './image-cropping/image-editor.module#ImageEditorModule',
        data: { pageTitle: 'Image Cropping' }
    },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=features-forms-forms-showcase-module.js.map