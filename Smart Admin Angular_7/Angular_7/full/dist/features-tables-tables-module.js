(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-tables-tables-module"],{

/***/ "./src/app/features/tables/tables.module.ts":
/*!**************************************************!*\
  !*** ./src/app/features/tables/tables.module.ts ***!
  \**************************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tables_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tables.routing */ "./src/app/features/tables/tables.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _tables_routing__WEBPACK_IMPORTED_MODULE_1__["routing"]
            ],
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ }),

/***/ "./src/app/features/tables/tables.routing.ts":
/*!***************************************************!*\
  !*** ./src/app/features/tables/tables.routing.ts ***!
  \***************************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    {
        path: 'normal',
        loadChildren: './normal-tables/normal-tables.module#NormalTablesModule',
        data: { pageTitle: 'Normal' }
    },
    {
        path: 'datatables',
        loadChildren: './datatables-case/datatables-case.module#DatatablesCaseModule',
        data: { pageTitle: 'Datatables' }
    },
    {
        path: 'ngx-datatable',
        loadChildren: './ngx-datatable/ngx-datatable-case.module#NgxDatatableCaseModule',
        data: { pageTitle: 'NGx Datatable' }
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=features-tables-tables-module.js.map