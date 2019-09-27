(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["datatables-case-datatables-case-module"],{

/***/ "./src/app/features/tables/datatables-case/datatables-case-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/tables/datatables-case/datatables-case-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DatatablesCaseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatablesCaseRoutingModule", function() { return DatatablesCaseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _datatables_case_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datatables-case.component */ "./src/app/features/tables/datatables-case/datatables-case.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _datatables_case_component__WEBPACK_IMPORTED_MODULE_2__["DatatablesCaseComponent"]
    }];
var DatatablesCaseRoutingModule = /** @class */ (function () {
    function DatatablesCaseRoutingModule() {
    }
    DatatablesCaseRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DatatablesCaseRoutingModule);
    return DatatablesCaseRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/tables/datatables-case/datatables-case.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/features/tables/datatables-case/datatables-case.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Table', 'Data Tables']\" icon=\"table\"\n                        class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n\n  <sa-widgets-grid>\n\n\n    <div class=\"row\">\n      <article class=\"col-sm-12\">\n\n\n        <div sa-widget [editbutton]=\"false\" color=\"darken\">\n          <header><span class=\"widget-icon\"> <i class=\"fa fa-table\"></i> </span>\n            <h2>Standard\n              Data Tables</h2></header>\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-datatable\n                [options]=\"{\n                colReorder: true,\n              ajax: 'assets/api/tables/datatables.standard.json',\n              columns: [ {data: 'id'}, {data: 'name'}, {data: 'phone'}, {data: 'company'}, {data: 'zip'}, {data: 'city'}, {data: 'date'} ] }\"\n                paginationLength=\"true\" tableClass=\"table table-striped table-bordered table-hover\"\n                width=\"100%\">\n                <thead>\n                <tr>\n                  <th data-hide=\"phone\">ID</th>\n                  <th data-class=\"expand\"><i\n                    class=\"fa fa-fw fa-user text-muted hidden-md hidden-sm hidden-xs\"></i>\n                    Name\n                  </th>\n                  <th data-hide=\"phone\"><i\n                    class=\"fa fa-fw fa-phone text-muted hidden-md hidden-sm hidden-xs\"></i>\n                    Phone\n                  </th>\n                  <th>Company</th>\n                  <th data-hide=\"phone,tablet\"><i\n                    class=\"fa fa-fw fa-map-marker txt-color-blue hidden-md hidden-sm hidden-xs\"></i>\n                    Zip\n                  </th>\n                  <th data-hide=\"phone,tablet\">City</th>\n                  <th data-hide=\"phone,tablet\"><i\n                    class=\"fa fa-fw fa-calendar txt-color-blue hidden-md hidden-sm hidden-xs\"></i>\n                    Date\n                  </th>\n                </tr>\n                </thead>\n              </sa-datatable>\n            </div>\n          </div>\n        </div>\n\n        <div sa-widget [editbutton]=\"false\" color=\"blueDark\">\n          <header><span class=\"widget-icon\"> <i class=\"fa fa-table\"></i> </span>\n            <h2>Column\n              Filters </h2></header>\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-datatable\n                [options]=\"{\n            ajax: 'assets/api/tables/datatables.filters.json',\n            columns: [ {data: 'name'}, {data: 'position'}, {data: 'office'}, {data: 'age'}, {data: 'date'}, {data: 'salary'} ] }\n            \"\n                filter=\"true\" tableClass=\"table table-condenced table-striped table-bordered\">\n                <thead>\n                <tr>\n                  <th class=\"hasinput\" [ngStyle]=\"{width:'17%'}\"><input type=\"text\"\n                                                                        class=\"form-control\"\n                                                                        placeholder=\"Filter Name\"/>\n                  </th>\n                  <th class=\"hasinput\" [ngStyle]=\"{width:'18%'}\">\n                    <div class=\"input-group\"><input class=\"form-control\"\n                                                    placeholder=\"Filter Position\"\n                                                    type=\"text\"/> <span\n                      class=\"input-group-addon\"> <span class=\"onoffswitch\"> <input\n                      type=\"checkbox\" name=\"start_interval\" class=\"onoffswitch-checkbox\"\n                      id=\"st3\"/> <label class=\"onoffswitch-label\" for=\"st3\"> <span\n                      class=\"onoffswitch-inner\" data-swchon-text=\"YES\"\n                      data-swchoff-text=\"NO\"></span> <span class=\"onoffswitch-switch\"></span> </label> </span> </span>\n                    </div>\n                  </th>\n                  <th class=\"hasinput\" [ngStyle]=\"{width:'10%'}\"><input type=\"text\"\n                                                                        class=\"form-control\"\n                                                                        placeholder=\"Filter Office\"/>\n                  </th>\n                  <th class=\"hasinput\" [ngStyle]=\"{width:'17%'}\"><input type=\"text\"\n                                                                        class=\"form-control\"\n                                                                        placeholder=\"Filter Age\"/>\n                  </th>\n                  <th class=\"hasinput icon-addon\"><input id=\"dateselect_filter\" type=\"text\"\n                                                         placeholder=\"Filter Date\"\n                                                         class=\"form-control datepicker\"\n                                                         data-dateformat=\"yy/mm/dd\"/>\n                  </th>\n                  <th class=\"hasinput\" [ngStyle]=\"{width:'16%'}\">\n                    <input type=\"text\" class=\"form-control\"\n                           placeholder=\"Filter Salary\"/>\n                  </th>\n                </tr>\n                <tr>\n                  <th data-class=\"expand\">Name</th>\n                  <th>Position</th>\n                  <th data-hide=\"phone\">Office</th>\n                  <th data-hide=\"phone\">Age</th>\n                  <th data-hide=\"phone,tablet\">Start date</th>\n                  <th data-hide=\"phone,tablet\">Salary</th>\n                </tr>\n                </thead>\n              </sa-datatable>\n            </div>\n          </div>\n        </div>\n\n\n        <div sa-widget [editbutton]=\"false\" color=\"blueDark\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-table\"></i> </span>\n            <h2>Hide / Show Columns </h2>\n          </header>\n          <div>\n            <div class=\"widget-body no-padding\">\n\n              <sa-datatable [options]=\"{\n                            ajax: 'assets/api/tables/datatables.standard.json',\n                 columns: [\n                 {data: 'id'},\n                 {data: 'name'},\n                 {data: 'phone'},\n                 {data: 'company'},\n                 {data: 'zip'},\n                 {data: 'city'},\n                 {data: 'date'}\n                 ],\n                 buttons: [\n                 'colvis'\n                 ]\n                 }\"\n                            tableClass=\"table table-striped table-bordered table-hover\"\n              >\n                <thead>\n                <tr>\n                  <th data-hide=\"phone\">ID</th>\n                  <th data-class=\"expand\">Name</th>\n                  <th>Phone</th>\n                  <th data-hide=\"phone\">Company</th>\n                  <th data-hide=\"phone,tablet\">Zip</th>\n                  <th data-hide=\"phone,tablet\">City</th>\n                  <th data-hide=\"phone,tablet\">Date</th>\n                </tr>\n                </thead>\n              </sa-datatable>\n\n            </div>\n          </div>\n        </div>\n\n\n        <div sa-widget [editbutton]=\"false\" color=\"blueDark\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-table\"></i> </span>\n            <h2>Export to PDF / Excel</h2>\n          </header>\n          <div>\n            <div class=\"widget-body no-padding\">\n\n              <sa-datatable\n                [options]=\"{\n                  ajax: 'assets/api/tables/datatables.standard.json',\n                columns: [\n                {data: 'id'},\n                {data: 'name'},\n                {data: 'phone'},\n                {data: 'company'},\n                {data: 'zip'},\n                {data: 'city'},\n                {data: 'date'}\n                ],\n                buttons: [\n                'copy', 'excel', 'pdf', 'print'\n                ]\n                }\"\n                tableClass=\"table table-striped table-bordered table-hover\"\n              >\n                <thead>\n                <tr>\n                  <th data-hide=\"mobile-p\">ID</th>\n                  <th data-class=\"expand\">Name</th>\n                  <th>Phone</th>\n                  <th data-hide=\"mobile-p\">Company</th>\n                  <th data-hide=\"mobile-p,tablet-p\">Zip</th>\n                  <th data-hide=\"mobile-p,tablet-p\">City</th>\n                  <th data-hide=\"mobile-p,tablet-p\">Date</th>\n                </tr>\n                </thead>\n              </sa-datatable>\n\n            </div>\n          </div>\n        </div>\n\n        <datatables-rest-demo></datatables-rest-demo>\n      </article>\n\n\n    </div>\n\n  </sa-widgets-grid>\n</div>\n"

/***/ }),

/***/ "./src/app/features/tables/datatables-case/datatables-case.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/tables/datatables-case/datatables-case.component.ts ***!
  \******************************************************************************/
/*! exports provided: DatatablesCaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatablesCaseComponent", function() { return DatatablesCaseComponent; });
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

var DatatablesCaseComponent = /** @class */ (function () {
    function DatatablesCaseComponent() {
    }
    DatatablesCaseComponent.prototype.ngOnInit = function () {
    };
    DatatablesCaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-datatables-case',
            template: __webpack_require__(/*! ./datatables-case.component.html */ "./src/app/features/tables/datatables-case/datatables-case.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], DatatablesCaseComponent);
    return DatatablesCaseComponent;
}());



/***/ }),

/***/ "./src/app/features/tables/datatables-case/datatables-case.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/tables/datatables-case/datatables-case.module.ts ***!
  \***************************************************************************/
/*! exports provided: DatatablesCaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatablesCaseModule", function() { return DatatablesCaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _datatables_case_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datatables-case.component */ "./src/app/features/tables/datatables-case/datatables-case.component.ts");
/* harmony import */ var _datatables_rest_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datatables-rest-demo.component */ "./src/app/features/tables/datatables-case/datatables-rest-demo.component.ts");
/* harmony import */ var _datatables_case_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datatables-case-routing.module */ "./src/app/features/tables/datatables-case/datatables-case-routing.module.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_shared_ui_datatable_smartadmin_datatable_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/ui/datatable/smartadmin-datatable.module */ "./src/app/shared/ui/datatable/smartadmin-datatable.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DatatablesCaseModule = /** @class */ (function () {
    function DatatablesCaseModule() {
    }
    DatatablesCaseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _app_shared_ui_datatable_smartadmin_datatable_module__WEBPACK_IMPORTED_MODULE_6__["SmartadminDatatableModule"],
                _datatables_case_routing_module__WEBPACK_IMPORTED_MODULE_4__["DatatablesCaseRoutingModule"]
            ],
            declarations: [
                _datatables_case_component__WEBPACK_IMPORTED_MODULE_2__["DatatablesCaseComponent"], _datatables_rest_demo_component__WEBPACK_IMPORTED_MODULE_3__["DatatablesRestDemoComponent"]
            ]
        })
    ], DatatablesCaseModule);
    return DatatablesCaseModule;
}());



/***/ }),

/***/ "./src/app/features/tables/datatables-case/datatables-rest-demo.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/features/tables/datatables-case/datatables-rest-demo.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div sa-widget [editbutton]=\"false\" color=\"blueDark\">\n\t<header>\n\t\t<span class=\"widget-icon\"> <i class=\"fa fa-table\"></i> </span>\n\t\t<h2>Datatables Rest Demo</h2>\n\t</header>\n\t<div>\n\t\t<div class=\"widget-body no-padding\">\n\n\t\t\t<sa-datatable [options]=\"options\" tableClass=\"table table-striped table-bordered table-hover\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th [style.width]=\"'8%'\" data-hide=\"mobile-p\">User ID</th>\n\t\t\t\t\t\t<th [style.width]=\"'8%'\" data-hide=\"mobile-p\">Post ID</th>\n\t\t\t\t\t\t<th>Title</th>\n\t\t\t\t\t\t<th data-class=\"expand\">Body</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\n\t\t\t\t<tfoot>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>User ID</th>\n\t\t\t\t\t\t<th>Post ID</th>\n\t\t\t\t\t\t<th>Title</th>\n\t\t\t\t\t\t<th>Body</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</tfoot>\n\t\t\t</sa-datatable>\n\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/features/tables/datatables-case/datatables-rest-demo.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/tables/datatables-case/datatables-rest-demo.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DatatablesRestDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatablesRestDemoComponent", function() { return DatatablesRestDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatatablesRestDemoComponent = /** @class */ (function () {
    function DatatablesRestDemoComponent(http) {
        var _this = this;
        this.http = http;
        this.REST_ROOT = 'https://jsonplaceholder.typicode.com';
        this.options = {
            dom: "Bfrtip",
            ajax: function (data, callback, settings) {
                _this.http.get(_this.REST_ROOT + '/posts')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return (data.data || data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError))
                    .subscribe(function (data) {
                    console.log('data from rest endpoint', data);
                    callback({
                        aaData: data.slice(0, 100)
                    });
                });
            },
            columns: [
                { data: "userId" },
                { data: "id" },
                { data: "title" },
                { data: "body" },
            ]
        };
    }
    DatatablesRestDemoComponent.prototype.ngOnInit = function () { };
    DatatablesRestDemoComponent.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errMsg);
    };
    DatatablesRestDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'datatables-rest-demo',
            template: __webpack_require__(/*! ./datatables-rest-demo.component.html */ "./src/app/features/tables/datatables-case/datatables-rest-demo.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DatatablesRestDemoComponent);
    return DatatablesRestDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=datatables-case-datatables-case-module.js.map