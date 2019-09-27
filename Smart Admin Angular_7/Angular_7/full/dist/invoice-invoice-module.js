(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-invoice-module"],{

/***/ "./src/app/features/miscellaneous/invoice/invoice-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/miscellaneous/invoice/invoice-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: InvoiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceRoutingModule", function() { return InvoiceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _invoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice.component */ "./src/app/features/miscellaneous/invoice/invoice.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _invoice_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceComponent"]
    }];
var InvoiceRoutingModule = /** @class */ (function () {
    function InvoiceRoutingModule() {
    }
    InvoiceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], InvoiceRoutingModule);
    return InvoiceRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/miscellaneous/invoice/invoice.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/features/miscellaneous/invoice/invoice.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <!-- widget grid -->\n  <sa-widgets-grid>\n    <!-- row -->\n    <div class=\"row\">\n      <!-- NEW WIDGET START -->\n      <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget class=\"well\" [colorbutton]=\"false\" [editbutton]=\"false\" [deletebutton]=\"false\" [sortable]=\"false\" color=\"darken\">\n          <!-- widget options:\n                          usage: <div sa-widget id=\"wid-id-0\" [editbutton]=\"false\">\n                          [colorbutton]=\"false\"\n                          [editbutton]=\"false\"\n                          [togglebutton]=\"false\"\n                          [deletebutton]=\"false\"\n                          [fullscreenbutton]=\"false\"\n                          [custombutton]=\"false\"\n                          [collapsed]=\"true\"\n                          [sortable]=\"false\"\n                          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-barcode\"></i> </span>\n            <h2>Item #44761 </h2>\n          </header>\n          <!-- widget div-->\n          <div>\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\">\n              <div class=\"widget-body-toolbar\">\n                <div class=\"row\">\n                  <div class=\"col-sm-4\">\n                    <div class=\"input-group\">\n                      <input class=\"form-control\" type=\"text\" placeholder=\"Type invoice number or date...\">\n                      <div class=\"input-group-btn\">\n                        <button class=\"btn btn-default\" type=\"button\">\n                          <i class=\"fa fa-search\"></i> Search\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-8 text-align-right\">\n                    <div class=\"btn-group\">\n                      <a (click)=\"(null)\" class=\"btn btn-sm btn-primary\"> <i class=\"fa fa-edit\"></i> Edit </a>\n                    </div>\n                    <div class=\"btn-group\">\n                      <a (click)=\"(null)\" class=\"btn btn-sm btn-success\"> <i class=\"fa fa-plus\"></i> Create New </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"padding-10\">\n                <br>\n                <div class=\"pull-left\">\n                  <img src=\"assets/img/logo-blacknwhite.png\" width=\"150\" height=\"32\" alt=\"invoice icon\">\n                  <address>\n                    <br>\n                    <strong>SmartAdmin, Inc.</strong>\n                    <br>\n                    231 Ajax Rd,\n                    <br>\n                    Detroit MI - 48212, USA\n                    <br>\n                    <abbr title=\"Phone\">P:</abbr> (123) 456-7890\n                  </address>\n                </div>\n                <div class=\"pull-right\">\n                  <h1 class=\"font-400\">invoice</h1>\n                </div>\n                <div class=\"clearfix\"></div>\n                <br>\n                <br>\n                <div class=\"row\">\n                  <div class=\"col-sm-9\">\n                    <h4 class=\"semi-bold\">Rogers, Inc.</h4>\n                    <address>\n                      <strong>Mr. Simon Hedger</strong>\n                      <br>\n                      342 Mirlington Road,\n                      <br>\n                      Calfornia, CA 431464\n                      <br>\n                      <abbr title=\"Phone\">P:</abbr> (467) 143-4317\n                    </address>\n                  </div>\n                  <div class=\"col-sm-3\">\n                    <div>\n                      <div>\n                        <strong>INVOICE NO :</strong>\n                        <span class=\"pull-right\"> #AA-454-4113-00 </span>\n                      </div>\n                    </div>\n                    <div>\n                      <div class=\"font-md\">\n                        <strong>INVOICE DATE :</strong>\n                        <span class=\"pull-right\"> <i class=\"fa fa-calendar\"></i> 15/02/13 </span>\n                      </div>\n                    </div>\n                    <br>\n                    <div class=\"well well-sm  bg-color-darken txt-color-white no-border\">\n                      <div class=\"fa-lg\">\n                        Total Due :\n                        <span class=\"pull-right\"> 4,972 USD** </span>\n                      </div>\n                    </div>\n                    <br>\n                    <br>\n                  </div>\n                </div>\n                <table class=\"table table-hover\">\n                  <thead>\n                  <tr>\n                    <th class=\"text-center\">QTY</th>\n                    <th>ITEM</th>\n                    <th>DESCRIPTION</th>\n                    <th>PRICE</th>\n                    <th>SUBTOTAL</th>\n                  </tr>\n                  </thead>\n                  <tbody>\n                  <tr>\n                    <td class=\"text-center\"><strong>1</strong></td>\n                    <td><a (click)=\"(null)\">Print and Web Logo Design</a></td>\n                    <td>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam\n                      rem aperiam xplicabo.\n                    </td>\n                    <td>$1,300.00</td>\n                    <td>$1,300.00</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-center\"><strong>1</strong></td>\n                    <td><a (click)=\"(null)\">SEO Management</a></td>\n                    <td>Sit voluptatem accusantium doloremque laudantium inventore veritatis et quasi architecto beatae\n                      vitae dicta sunt explicabo.\n                    </td>\n                    <td>$1,400.00</td>\n                    <td>$1,400.00</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-center\"><strong>1</strong></td>\n                    <td><a (click)=\"(null)\">Backend Support and Upgrade</a></td>\n                    <td>Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</td>\n                    <td>$1,700.00</td>\n                    <td>$1,700.00</td>\n                  </tr>\n                  <tr>\n                    <td colspan=\"4\">Total</td>\n                    <td><strong>$4,400.00</strong></td>\n                  </tr>\n                  <tr>\n                    <td colspan=\"4\">HST/GST</td>\n                    <td><strong>13%</strong></td>\n                  </tr>\n                  </tbody>\n                </table>\n                <div class=\"invoice-footer\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-7\">\n                      <div class=\"payment-methods\">\n                        <h5>Payment Methods</h5>\n                        <img src=\"assets/img/invoice/paypal.png\" width=\"64\" height=\"64\" alt=\"paypal\">\n                        <img src=\"assets/img/invoice/americanexpress.png\" width=\"64\" height=\"64\" alt=\"american express\">\n                        <img src=\"assets/img/invoice/mastercard.png\" width=\"64\" height=\"64\" alt=\"mastercard\">\n                        <img src=\"assets/img/invoice/visa.png\" width=\"64\" height=\"64\" alt=\"visa\">\n                      </div>\n                    </div>\n                    <div class=\"col-sm-5\">\n                      <div class=\"invoice-sum-total pull-right\">\n                        <h3><strong>Total: <span class=\"text-success\">$4,972 USD</span></strong></h3>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                      <p class=\"note\">**To avoid any excess penalty charges, please make payments within 30 days of the\n                        due date. There will be a 2% interest charge per month on all late invoices.</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- end widget content -->\n          </div>\n          <!-- end widget div -->\n        </div>\n        <!-- end widget -->\n      </article>\n      <!-- WIDGET END -->\n    </div>\n    <!-- end row -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/miscellaneous/invoice/invoice.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/miscellaneous/invoice/invoice.component.ts ***!
  \*********************************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
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

var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent() {
    }
    InvoiceComponent.prototype.ngOnInit = function () {
    };
    InvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/features/miscellaneous/invoice/invoice.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/features/miscellaneous/invoice/invoice.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/miscellaneous/invoice/invoice.module.ts ***!
  \******************************************************************/
/*! exports provided: InvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice-routing.module */ "./src/app/features/miscellaneous/invoice/invoice-routing.module.ts");
/* harmony import */ var _invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice.component */ "./src/app/features/miscellaneous/invoice/invoice.component.ts");
/* harmony import */ var _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/layout */ "./src/app/shared/layout/index.ts");
/* harmony import */ var _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/stats/stats.module */ "./src/app/shared/stats/stats.module.ts");
/* harmony import */ var _app_shared_widgets_smartadmin_widgets_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/widgets/smartadmin-widgets.module */ "./src/app/shared/widgets/smartadmin-widgets.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var InvoiceModule = /** @class */ (function () {
    function InvoiceModule() {
    }
    InvoiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _invoice_routing_module__WEBPACK_IMPORTED_MODULE_2__["InvoiceRoutingModule"],
                _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__["SmartadminLayoutModule"],
                _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__["StatsModule"],
                _app_shared_widgets_smartadmin_widgets_module__WEBPACK_IMPORTED_MODULE_6__["SmartadminWidgetsModule"],
            ],
            declarations: [_invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"]]
        })
    ], InvoiceModule);
    return InvoiceModule;
}());



/***/ })

}]);
//# sourceMappingURL=invoice-invoice-module.js.map