(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["normal-tables-normal-tables-module"],{

/***/ "./src/app/features/tables/normal-tables/normal-tables.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/features/tables/normal-tables/normal-tables.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Table', 'Normal Tables']\" icon=\"table\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <!-- widget grid -->\n  <sa-widgets-grid>\n\n\n    <div class=\"row\">\n      <article class=\"col-sm-12\">\n\n        <div sa-widget [editbutton]=\"false\" color=\"blueDark\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-table\"></i> </span>\n\n            <h2>Normal Table</h2>\n          </header>\n          <div>\n            <div class=\"widget-body\">\n              <p>Adds borders to any table row within <code>&lt;table&gt;</code> by adding the\n                <code>.table-bordered</code>\n                with the base class</p>\n\n              <div class=\"table-responsive\">\n\n                <table class=\"table table-bordered\">\n                  <thead>\n                  <tr>\n                    <th>Column name</th>\n                    <th>Column name</th>\n                    <th>Column name</th>\n                    <th>Column name</th>\n                  </tr>\n                  </thead>\n                  <tbody>\n                  <tr>\n                    <td>Row 1</td>\n                    <td>Row 2</td>\n                    <td>Row 3</td>\n                    <td>Row 4</td>\n                  </tr>\n                  <tr>\n                    <td>Row 1</td>\n                    <td>Row 2</td>\n                    <td>Row 3</td>\n                    <td>Row 4</td>\n                  </tr>\n                  <tr>\n                    <td>Row 1</td>\n                    <td>Row 2</td>\n                    <td>Row 3</td>\n                    <td>Row 4</td>\n                  </tr>\n                  <tr>\n                    <td>Row 1</td>\n                    <td>Row 2</td>\n                    <td>Row 3</td>\n                    <td>Row 4</td>\n                  </tr>\n                  <tr>\n                    <td>Row 1</td>\n                    <td>Row 2</td>\n                    <td>Row 3</td>\n                    <td>Row 4</td>\n                  </tr>\n                  <tr>\n                    <td>Row 1</td>\n                    <td>Row 2</td>\n                    <td>Row 3</td>\n                    <td>Row 4</td>\n                  </tr>\n                  </tbody>\n                </table>\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n        <div sa-widget [editbutton]=\"false\" color=\"darken\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-table\"></i> </span>\n\n            <h2>No Padding</h2>\n          </header>\n          <div>\n            <div class=\"widget-body no-padding\">\n              <alert type=\"info\" class=\"no-margin fade in\" dismisser=\"\">\n                <i class=\"fa-fw fa fa-info\"></i>\n                Adds zebra-striping to table row within <code>&lt;table&gt;</code> by adding the <code>.table-striped</code>\n                with the base class\n              </alert>\n              <div class=\"table-responsive\">\n\n                <table class=\"table table-bordered table-striped\">\n                  <thead>\n                  <tr>\n                    <th>Column name</th>\n                    <th>Column name</th>\n                    <th>Column name</th>\n                    <th>Column name</th>\n                  </tr>\n                  </thead>\n                  <tbody>\n                  <tr>\n                    <td>Row 1</td>\n                    <td>Row 2</td>\n                    <td>Row 3</td>\n                    <td>Row 4</td>\n                  </tr>\n                  <tr>\n                    <td>Row 1</td>\n                    <td>Row 2</td>\n                    <td>Row 3</td>\n                    <td>Row 4</td>\n                  </tr>\n                  <tr>\n                    <td>Row 1</td>\n                    <td>Row 2</td>\n                    <td>Row 3</td>\n                    <td>Row 4</td>\n                  </tr>\n                  <tr>\n                    <td>Row 1</td>\n                    <td>Row 2</td>\n                    <td>Row 3</td>\n                    <td>Row 4</td>\n                  </tr>\n                  <tr>\n                    <td>Row 1</td>\n                    <td>Row 2</td>\n                    <td>Row 3</td>\n                    <td>Row 4</td>\n                  </tr>\n                  <tr>\n                    <td>Row 1</td>\n                    <td>Row 2</td>\n                    <td>Row 3</td>\n                    <td>Row 4</td>\n                  </tr>\n                  </tbody>\n                </table>\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n      </article>\n\n      <article class=\"col-sm-12 col-md-12 col-lg-6\">\n        <div sa-widget [editbutton]=\"false\" color=\"greenDark\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-table\"></i> </span>\n\n            <h2>Table hover states</h2>\n          </header>\n          <div>\n            <div class=\"widget-body no-padding\">\n              <alert type=\"info\" class=\"no-margin\" dismisser=\"\">\n                <i class=\"fa-fw fa fa-info\"></i>\n                Enables hover effect <code>&lt;table&gt;</code> by adding the <code>.table-hover</code> with the\n                base class\n              </alert>\n              <div class=\"table-responsive\">\n\n                <table class=\"table table-hover\">\n                  <thead>\n                  <tr>\n                    <th>#</th>\n                    <th>First Name</th>\n                    <th>Last Name</th>\n                    <th>Username</th>\n                  </tr>\n                  </thead>\n                  <tbody>\n                  <tr>\n                    <td>1</td>\n                    <td>Mark</td>\n                    <td>Otto</td>\n                    <td>@mdo</td>\n                  </tr>\n                  <tr>\n                    <td>2</td>\n                    <td>Jacob</td>\n                    <td>Thornton</td>\n                    <td>@fat</td>\n                  </tr>\n                  <tr>\n                    <td>3</td>\n                    <td>Larry</td>\n                    <td>the Bird</td>\n                    <td>@twitter</td>\n                  </tr>\n                  <tr>\n                    <td>4</td>\n                    <td>Wise</td>\n                    <td>Man</td>\n                    <td>@myorange</td>\n                  </tr>\n                  </tbody>\n                </table>\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"col-sm-12 col-md-12 col-lg-6\">\n        <div sa-widget [editbutton]=\"false\" color=\"greenLight\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-table\"></i> </span>\n\n            <h2>Table TR with colors</h2>\n          </header>\n          <div>\n            <div class=\"widget-body no-padding\">\n              <alert type=\"info\" class=\"no-margin\" dismisser=\"\">\n                <i class=\"fa-fw fa fa-info\"></i>\n                Add custom colors to your TR and TD <code>&lt;tr&gt;</code> by adding <code>.success</code>, <code>.danger</code>,\n                <code>.warning</code> and <code>.info</code> respectively\n              </alert>\n              <div class=\"table-responsive\">\n\n                <table class=\"table\">\n                  <thead>\n                  <tr>\n                    <th>#</th>\n                    <th><i class=\"fa fa-building\"></i> Product</th>\n                    <th><i class=\"fa fa-calendar\"></i> Payment Taken</th>\n                    <th><i class=\"glyphicon glyphicon-send\"></i> Status</th>\n                  </tr>\n                  </thead>\n                  <tbody>\n                  <tr class=\"success\">\n                    <td>1</td>\n                    <td>TB - Monthly</td>\n                    <td>01/04/2012</td>\n                    <td>Approved</td>\n                  </tr>\n                  <tr class=\"danger\">\n                    <td>2</td>\n                    <td>TB - Monthly</td>\n                    <td>02/04/2012</td>\n                    <td>Declined</td>\n                  </tr>\n                  <tr class=\"warning\">\n                    <td>3</td>\n                    <td>TB - Monthly</td>\n                    <td>03/04/2012</td>\n                    <td>Pending</td>\n                  </tr>\n                  <tr class=\"info\">\n                    <td>4</td>\n                    <td>TB - Monthly</td>\n                    <td>04/04/2012</td>\n                    <td>Call in to confirm</td>\n                  </tr>\n                  </tbody>\n                </table>\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n      </article>\n    </div>\n    <div class=\"row\">\n      <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <div sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-table\"></i> </span>\n\n            <h2>Condenced table + combined prev. classes</h2>\n          </header>\n          <div>\n            <div class=\"widget-body no-padding\">\n              <alert type=\"warning\" class=\"no-margin\" dismisser=\"\">\n                <i class=\"fa-fw fa fa-info\"></i>\n                A combined table effect with all classes mentioned above added to <code>&lt;table&gt;</code>.\n                <code> .table-bordered .table-striped .table-condensed .table-hover .smart-form\n                  .has-tickbox </code>\n              </alert>\n\n              <div class=\"table-responsive\">\n\n                <table class=\"table table-bordered table-striped table-condensed table-hover smart-form has-tickbox\">\n                  <thead>\n                  <tr>\n                    <th>\n                    </th>\n                    <th>Column name <a href=\"\" class=\"btn btn-xs btn-default pull-right\"><i class=\"fa fa-filter\"></i></a></th>\n                    <th>Column name <a href=\"\" class=\"btn btn-xs btn-default pull-right\"><i class=\"fa fa-filter\"></i></a></th>\n                    <th>Column name <a href=\"\" class=\"btn btn-xs btn-default pull-right\"><i class=\"fa fa-filter\"></i></a></th>\n                    <th>Column name <a href=\"\" class=\"btn btn-xs btn-default pull-right\"><i class=\"fa fa-filter\"></i></a></th>\n                  </tr>\n                  </thead>\n                  <tbody>\n                  <tr>\n                    <td>\n                      <label class=\"checkbox\">\n                        <input type=\"checkbox\" name=\"checkbox-inline\">\n                        <i></i>\n                      </label>\n                    </td>\n                    <td>Row 1</td>\n                    <td>Row 2</td>\n                    <td>Row 3</td>\n                    <td>Row 4</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <label class=\"checkbox\">\n                        <input type=\"checkbox\" name=\"checkbox-inline\">\n                        <i></i>\n                      </label>\n                    </td>\n                    <td>Row 1</td>\n                    <td>Row 2</td>\n                    <td>Row 3</td>\n                    <td>Row 4</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <label class=\"checkbox\">\n                        <input type=\"checkbox\" name=\"checkbox-inline\">\n                        <i></i>\n                      </label>\n                    </td>\n                    <td>Row 1</td>\n                    <td>Row 2</td>\n                    <td>Row 3</td>\n                    <td>Row 4</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <label class=\"checkbox\">\n                        <input type=\"checkbox\" name=\"checkbox-inline\">\n                        <i></i>\n                      </label>\n                    </td>\n                    <td>Row 1</td>\n                    <td>Row 2</td>\n                    <td>Row 3</td>\n                    <td>Row 4</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <label class=\"checkbox\">\n                        <input type=\"checkbox\" name=\"checkbox-inline\">\n                        <i></i>\n                      </label>\n                    </td>\n                    <td>Row 1</td>\n                    <td>Row 2</td>\n                    <td>Row 3</td>\n                    <td>Row 4</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <label class=\"checkbox\">\n                        <input type=\"checkbox\" name=\"checkbox-inline\">\n                        <i></i>\n                      </label>\n                    </td>\n                    <td>Row 1</td>\n                    <td>Row 2</td>\n                    <td>Row 3</td>\n                    <td>Row 4</td>\n                  </tr>\n                  </tbody>\n                </table>\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </article>\n    </div>\n  </sa-widgets-grid>\n</div>\n"

/***/ }),

/***/ "./src/app/features/tables/normal-tables/normal-tables.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/tables/normal-tables/normal-tables.component.ts ***!
  \**************************************************************************/
/*! exports provided: NormalTablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalTablesComponent", function() { return NormalTablesComponent; });
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

var NormalTablesComponent = /** @class */ (function () {
    function NormalTablesComponent() {
    }
    NormalTablesComponent.prototype.ngOnInit = function () {
    };
    NormalTablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-normal-tables',
            template: __webpack_require__(/*! ./normal-tables.component.html */ "./src/app/features/tables/normal-tables/normal-tables.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], NormalTablesComponent);
    return NormalTablesComponent;
}());



/***/ }),

/***/ "./src/app/features/tables/normal-tables/normal-tables.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/tables/normal-tables/normal-tables.module.ts ***!
  \***********************************************************************/
/*! exports provided: NormalTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalTablesModule", function() { return NormalTablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _normal_tables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normal-tables.component */ "./src/app/features/tables/normal-tables/normal-tables.component.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NormalTablesModule = /** @class */ (function () {
    function NormalTablesModule() {
    }
    NormalTablesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                        path: '', component: _normal_tables_component__WEBPACK_IMPORTED_MODULE_2__["NormalTablesComponent"]
                    }])
            ],
            declarations: [
                _normal_tables_component__WEBPACK_IMPORTED_MODULE_2__["NormalTablesComponent"]
            ]
        })
    ], NormalTablesModule);
    return NormalTablesModule;
}());



/***/ })

}]);
//# sourceMappingURL=normal-tables-normal-tables-module.js.map