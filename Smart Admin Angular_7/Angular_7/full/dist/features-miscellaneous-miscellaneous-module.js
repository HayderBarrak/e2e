(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-miscellaneous-miscellaneous-module"],{

/***/ "./src/app/features/miscellaneous/miscellaneous.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/miscellaneous/miscellaneous.module.ts ***!
  \****************************************************************/
/*! exports provided: MiscellaneousModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousModule", function() { return MiscellaneousModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _miscellaneous_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miscellaneous.routing */ "./src/app/features/miscellaneous/miscellaneous.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MiscellaneousModule = /** @class */ (function () {
    function MiscellaneousModule() {
    }
    MiscellaneousModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _miscellaneous_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
            ],
            declarations: []
        })
    ], MiscellaneousModule);
    return MiscellaneousModule;
}());



/***/ }),

/***/ "./src/app/features/miscellaneous/miscellaneous.routing.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/miscellaneous/miscellaneous.routing.ts ***!
  \*****************************************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    {
        path: '',
        redirectTo: 'blank',
        pathMatch: 'full'
    },
    {
        path: 'blank',
        loadChildren: './blank/blank.module#BlankModule'
    },
    {
        path: 'ckeditor',
        loadChildren: './ckeditor/ckeditor.module#CkeditorModule'
    },
    {
        path: 'email-template',
        loadChildren: './email-template/email-template.module#EmailTemplateModule'
    },
    {
        path: 'error404',
        loadChildren: './error404/error404.module#Error404Module'
    },
    {
        path: 'error500',
        loadChildren: './error500/error500.module#Error500Module'
    },
    {
        path: 'invoice',
        loadChildren: './invoice/invoice.module#InvoiceModule'
    },
    {
        path: 'pricing-tables',
        loadChildren: './pricing-tables/pricing-tables.module#PricingTablesModule'
    },
    {
        path: 'search',
        loadChildren: './search/search.module#SearchModule'
    },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=features-miscellaneous-miscellaneous-module.js.map