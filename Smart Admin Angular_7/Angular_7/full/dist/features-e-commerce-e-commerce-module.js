(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-e-commerce-e-commerce-module"],{

/***/ "./src/app/features/e-commerce/e-commerce.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/e-commerce/e-commerce.module.ts ***!
  \**********************************************************/
/*! exports provided: ECommerceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECommerceModule", function() { return ECommerceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/features/e-commerce/orders/orders.component.ts");
/* harmony import */ var _products_view_products_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-view/products-view.component */ "./src/app/features/e-commerce/products-view/products-view.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/features/e-commerce/product-details/product-details.component.ts");
/* harmony import */ var _e_commerce_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./e-commerce.routing */ "./src/app/features/e-commerce/e-commerce.routing.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/features/e-commerce/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _app_shared_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/layout */ "./src/app/shared/layout/index.ts");
/* harmony import */ var _app_shared_widgets_smartadmin_widgets_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/widgets/smartadmin-widgets.module */ "./src/app/shared/widgets/smartadmin-widgets.module.ts");
/* harmony import */ var _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/stats/stats.module */ "./src/app/shared/stats/stats.module.ts");
/* harmony import */ var _app_shared_ui_datatable_smartadmin_datatable_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/shared/ui/datatable/smartadmin-datatable.module */ "./src/app/shared/ui/datatable/smartadmin-datatable.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ECommerceModule = /** @class */ (function () {
    function ECommerceModule() {
    }
    ECommerceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _e_commerce_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _app_shared_layout__WEBPACK_IMPORTED_MODULE_8__["SmartadminLayoutModule"],
                _app_shared_widgets_smartadmin_widgets_module__WEBPACK_IMPORTED_MODULE_9__["SmartadminWidgetsModule"],
                _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_10__["StatsModule"],
                _app_shared_ui_datatable_smartadmin_datatable_module__WEBPACK_IMPORTED_MODULE_11__["SmartadminDatatableModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"],
            ],
            declarations: [
                _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_2__["OrdersComponent"],
                _products_view_products_view_component__WEBPACK_IMPORTED_MODULE_3__["ProductsViewComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"]
            ]
        })
    ], ECommerceModule);
    return ECommerceModule;
}());



/***/ }),

/***/ "./src/app/features/e-commerce/e-commerce.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/e-commerce/e-commerce.routing.ts ***!
  \***********************************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/features/e-commerce/orders/orders.component.ts");
/* harmony import */ var _products_view_products_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-view/products-view.component */ "./src/app/features/e-commerce/products-view/products-view.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/features/e-commerce/product-details/product-details.component.ts");




var routes = [
    {
        path: 'orders',
        component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_1__["OrdersComponent"]
    },
    {
        path: 'products-view',
        component: _products_view_products_view_component__WEBPACK_IMPORTED_MODULE_2__["ProductsViewComponent"]
    },
    {
        path: 'product-details',
        component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsComponent"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/features/e-commerce/orders/orders.component.html":
/*!******************************************************************!*\
  !*** ./src/app/features/e-commerce/orders/orders.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['E-Commerce', 'Orders']\" icon=\"shopping-cart\"\n                        class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n\n    <sa-shopping-cart></sa-shopping-cart>\n  </div>\n  <!--\n      The ID \"widget-grid\" will start to initialize all widgets below\n      You do not need to use widgets if you dont want to. Simply remove\n      the <section></section> and you can use wells or panels instead\n      -->\n  <!-- widget grid -->\n  <sa-widgets-grid>\n    <!-- row -->\n    <div class=\"row\">\n      <!-- NEW WIDGET START -->\n      <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget class=\"well\">\n          <!-- widget options:\n              usage: <div sa-widget id=\"wid-id-0\" [editbutton]=\"false\">\n              [colorbutton]=\"false\"\n              [editbutton]=\"false\"\n              [togglebutton]=\"false\"\n              [deletebutton]=\"false\"\n              [fullscreenbutton]=\"false\"\n              [custombutton]=\"false\"\n              [collapsed]=\"true\"\n              [sortable]=\"false\"\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-comments\"></i> </span>\n\n            <h2>Widget Title </h2>\n          </header>\n          <!-- widget div-->\n          <div>\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\">\n\n              <sa-datatable\n                [options]=\"{\n                  ajax: 'assets/api/e-commerce/orders.json',\n                  columns: [\n                    {data: 'orderId'},\n                    {data: 'customerId'},\n                    {data: 'purchase'},\n                    {data: 'delivery'},\n                    {data: 'basePrice'},\n                    {data: 'postalZip'},\n                    {data: 'status'}\n                  ]\n              }\"\n                filter=\"true\" paginationLength=\"true\"\n                tableClass=\"display projects-table table table-striped table-bordered table-hover\"\n                width=\"100%\">\n                <thead>\n                <tr>\n                  <th class=\"hasinput\" style=\"width:10%\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Find ID\">\n                  </th>\n                  <th class=\"hasinput\" style=\"width:12%\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Filter Cust ID\">\n                  </th>\n                  <th class=\"hasinput icon-addon\">\n                    <input id=\"dateselect_filter\" type=\"text\" placeholder=\"Purchase Date\"\n                           class=\"form-control datepicker\" data-dateformat=\"yy/mm/dd\">\n                    <label for=\"dateselect_filter\" class=\"glyphicon glyphicon-calendar no-margin padding-top-15\"\n                           rel=\"tooltip\" title=\"\" data-original-title=\"Purchase Date\"></label>\n                  </th>\n                  <th class=\"hasinput\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Delivery Date\">\n                  </th>\n                  <th class=\"hasinput\" style=\"width:12%\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Base Price Filter\">\n                  </th>\n                  <th class=\"hasinput\" style=\"width:10%\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"ZipCode Filter\">\n                  </th>\n                  <th class=\"hasinput\" style=\"width:10%\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Status Filter\">\n                  </th>\n\n                </tr>\n                <tr>\n                  <th data-class=\"expand\">Order ID</th>\n                  <th>Cust ID / Phn</th>\n                  <th data-hide=\"phone, tablet\">Purchase</th>\n                  <th data-hide=\"phone, tablet\">Delivery</th>\n                  <th data-hide=\"phone,tablet\">Base Price</th>\n                  <th data-hide=\"phone,tablet\">Postal/Zip</th>\n                  <th>Status</th>\n                </tr>\n                </thead>\n\n              </sa-datatable>\n            </div>\n            <!-- end widget content -->\n          </div>\n          <!-- end widget div -->\n        </div>\n        <!-- end widget -->\n      </article>\n      <!-- WIDGET END -->\n    </div>\n    <!-- end row -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/e-commerce/orders/orders.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/e-commerce/orders/orders.component.ts ***!
  \****************************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
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

var OrdersComponent = /** @class */ (function () {
    function OrdersComponent() {
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/features/e-commerce/orders/orders.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/features/e-commerce/product-details/product-details.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/features/e-commerce/product-details/product-details.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" data-sparkline-container=\"\" data-easy-pie-chart-container=\"\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['E-Commerce', 'Product Details']\" icon=\"shopping-cart\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n\n    <sa-shopping-cart></sa-shopping-cart>\n  </div>\n  <!-- row -->\n  <sa-widgets-grid>\n\n    <!-- row -->\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-12 col-md-12 col-lg-12\">\n        <!-- product -->\n        <div class=\"product-content product-wrap clearfix product-deatil\">\n          <div class=\"row\">\n            <div class=\"col-md-5 col-sm-12 col-xs-12 \">\n              <div class=\"product-image\">\n\n\n                <carousel [interval]=\"3000\">\n                  <slide *ngFor=\"let slide of product.slides\"\n                         [active]=\"slide.active\">\n                    <img class=\"img-responsive\" [src]=\"slide.src\" style=\"margin:auto;\">\n                  </slide>\n                </carousel>\n\n\n              </div>\n            </div>\n            <div class=\"col-md-7 col-sm-12 col-xs-12\">\n\n              <h2 class=\"name\">\n                Product Name Title Here\n                <small>Product by <a (click)=\"(null)\">Adeline</a></small>\n                <i class=\"fa fa-star fa-2x text-primary\"></i>\n                <i class=\"fa fa-star fa-2x text-primary\"></i>\n                <i class=\"fa fa-star fa-2x text-primary\"></i>\n                <i class=\"fa fa-star fa-2x text-primary\"></i>\n                <i class=\"fa fa-star fa-2x text-muted\"></i>\n                <span class=\"fa fa-2x\"><h5>(109) Votes</h5></span>\n\n                <a (click)=\"(null)\">109 customer reviews</a>\n\n              </h2>\n              <hr>\n              <h3 class=\"price-container\">\n                $129.54\n                <small>*includes tax</small>\n              </h3>\n\n              <div class=\"certified\">\n                <ul>\n                  <li><a (click)=\"(null)\">Delivery time<span>7 Working Days</span></a></li>\n                  <li><a (click)=\"(null)\">Certified<span>Quality Assured</span></a></li>\n                </ul>\n              </div>\n              <hr>\n              <div class=\"description description-tabs\">\n\n\n                <ul id=\"myTab\" class=\"nav nav-pills\">\n                  <li class=\"active\"><a href=\"#more-information\" data-toggle=\"tab\" class=\"no-margin\">Product Description </a></li>\n                  <li class=\"\"><a href=\"#specifications\" data-toggle=\"tab\">Specifications</a></li>\n                  <li class=\"\"><a href=\"#reviews\" data-toggle=\"tab\">Reviews</a></li>\n                </ul>\n                <div id=\"myTabContent\" class=\"tab-content\">\n                  <div class=\"tab-pane fade active in\" id=\"more-information\">\n                    <br>\n                    <strong>Description Title</strong>\n                    <p>Integer egestas, orci id condimentum eleifend, nibh nisi pulvinar eros, vitae ornare massa neque ut orci. Nam aliquet lectus sed odio eleifend, at iaculis dolor egestas. Nunc elementum pellentesque augue sodales porta. Etiam aliquet rutrum turpis, feugiat sodales ipsum consectetur nec. </p>\n                  </div>\n                  <div class=\"tab-pane fade\" id=\"specifications\">\n                    <br>\n                    <dl class=\"\">\n                      <dt>Gravina</dt>\n                      <dd>Etiam porta sem malesuada magna mollis euismod.</dd>\n                      <dd>Donec id elit non mi porta gravida at eget metus.</dd>\n                      <dd>Eget lacinia odio sem nec elit.</dd>\n                      <br>\n\n                      <dt>Test lists</dt>\n                      <dd>A description list is perfect for defining terms.</dd>\n                      <br>\n\n                      <dt>Altra porta</dt>\n                      <dd>Vestibulum id ligula porta felis euismod semper</dd>\n                    </dl>\n                  </div>\n                  <div class=\"tab-pane fade\" id=\"reviews\">\n                    <br>\n                    <form method=\"post\" class=\"well padding-bottom-10\" onsubmit=\"return false;\">\n                      <textarea rows=\"2\" class=\"form-control\" placeholder=\"Write a review\"></textarea>\n                      <div class=\"margin-top-10\">\n                        <button type=\"submit\" class=\"btn btn-sm btn-primary pull-right\">\n                          Submit Review\n                        </button>\n                        <a (click)=\"(null)\" class=\"btn btn-link profile-link-btn\" rel=\"tooltip\" data-placement=\"bottom\" title=\"\" data-original-title=\"Add Location\"><i class=\"fa fa-location-arrow\"></i></a>\n                        <a (click)=\"(null)\" class=\"btn btn-link profile-link-btn\" rel=\"tooltip\" data-placement=\"bottom\" title=\"\" data-original-title=\"Add Voice\"><i class=\"fa fa-microphone\"></i></a>\n                        <a (click)=\"(null)\" class=\"btn btn-link profile-link-btn\" rel=\"tooltip\" data-placement=\"bottom\" title=\"\" data-original-title=\"Add Photo\"><i class=\"fa fa-camera\"></i></a>\n                        <a (click)=\"(null)\" class=\"btn btn-link profile-link-btn\" rel=\"tooltip\" data-placement=\"bottom\" title=\"\" data-original-title=\"Add File\"><i class=\"fa fa-file\"></i></a>\n                      </div>\n                    </form>\n\n                    <div class=\"chat-body no-padding profile-message\">\n                      <ul>\n                        <li class=\"message\">\n                          <img src=\"assets/img/avatars/1.png\" class=\"online\">\n                          <span class=\"message-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"(null)\" class=\"username\">\n                                                                        Alisha Molly\n                                                                        <span class=\"badge\">Purchase Verified</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star fa-2x text-primary\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star fa-2x text-primary\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star fa-2x text-primary\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star fa-2x text-primary\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star fa-2x text-muted\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                                                    </a>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCan't divide were divide fish forth fish to. Was can't form the, living life grass darkness very image let unto fowl isn't in blessed fill life yielding above all moved\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                          <ul class=\"list-inline font-xs\">\n                            <li>\n                              <a (click)=\"(null)\" class=\"text-info\"><i class=\"fa fa-thumbs-up\"></i> This was helpful (22)</a>\n                            </li>\n                            <li class=\"pull-right\">\n                              <small class=\"text-muted pull-right ultra-light\"> Posted 1 year ago </small>\n                            </li>\n                          </ul>\n                        </li>\n                        <li class=\"message\">\n                          <img src=\"assets/img/avatars/2.png\" class=\"online\">\n                          <span class=\"message-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"(null)\" class=\"username\">\n                                                                        Aragon Zarko\n                                                                        <span class=\"badge\">Purchase Verified</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star fa-2x text-primary\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star fa-2x text-primary\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star fa-2x text-primary\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star fa-2x text-primary\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star fa-2x text-primary\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                                                    </a>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tExcellent product, love it!\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                          <ul class=\"list-inline font-xs\">\n                            <li>\n                              <a (click)=\"(null)\" class=\"text-info\"><i class=\"fa fa-thumbs-up\"></i> This was helpful (22)</a>\n                            </li>\n                            <li class=\"pull-right\">\n                              <small class=\"text-muted pull-right ultra-light\"> Posted 1 year ago </small>\n                            </li>\n                          </ul>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n\n\n              </div>\n              <hr>\n              <div class=\"row\">\n                <div class=\"col-sm-12 col-md-6 col-lg-6\">\n\n                  <a (click)=\"(null)\" class=\"btn btn-success btn-lg\">Add to cart ($129.54)</a>\n\n                </div>\n                <div class=\"col-sm-12 col-md-6 col-lg-6\">\n                  <div class=\"btn-group pull-right\">\n                    <button class=\"btn btn-white btn-default\"><i class=\"fa fa-star\"></i> Add to wishlist </button>\n                    <button class=\"btn btn-white btn-default\"><i class=\"fa fa-envelope\"></i> Contact Seller</button>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n        <!-- end product -->\n      </div>\n\n      <div class=\"col-sm-12 col-md-12 col-lg-12\">\n        <!-- product -->\n        <div class=\"product-content product-wrap clearfix product-deatil\">\n          <div class=\"row\">\n            <div class=\"col-md-5 col-sm-12 col-xs-12 \">\n              <div class=\"product-image\">\n                <carousel [interval]=\"3000\">\n                  <slide *ngFor=\"let slide of product.slides\"\n                         [active]=\"slide.active\">\n                    <img class=\"img-responsive\" [src]=\"slide.src\" style=\"margin:auto;\">\n                  </slide>\n                </carousel>\n\n              </div>\n            </div>\n            <div class=\"col-md-7 col-sm-12 col-xs-12\">\n\n              <h2 class=\"name\">\n                Product Name Title Here\n                <small>Product by <a (click)=\"(null)\">Adeline</a></small>\n                <i class=\"fa fa-star fa-2x text-primary\"></i>\n                <i class=\"fa fa-star fa-2x text-primary\"></i>\n                <i class=\"fa fa-star fa-2x text-primary\"></i>\n                <i class=\"fa fa-star fa-2x text-primary\"></i>\n                <i class=\"fa fa-star fa-2x text-muted\"></i>\n                <span class=\"fa fa-2x\"><h5>(109) Votes</h5></span>\n\n                <a (click)=\"(null)\">109 customer reviews</a>\n\n              </h2>\n              <hr>\n              <div class=\"row\">\n\n                <div class=\"col-sm-6\">\n                  <h3 class=\"price-container\">\n                    $129.54\n                    <small>*includes tax</small>\n                  </h3>\n                </div>\n                <div class=\"col-sm-6 text-right\">\n                  <a (click)=\"(null)\" class=\"btn btn-primary\">Add to cart ($129.54)</a>\n                </div>\n              </div>\n\n\n\n\n\n              <hr>\n              <div class=\"description description-tabs\">\n\n\n                <ul id=\"myTab2\" class=\"nav nav-tabs\">\n                  <li class=\"active\"><a href=\"#more-information2\" data-toggle=\"tab\" class=\"no-margin\">Product Description </a></li>\n                  <li class=\"\"><a href=\"#specifications2\" data-toggle=\"tab\">Specifications</a></li>\n                  <li class=\"\"><a href=\"#reviews2\" data-toggle=\"tab\">Reviews</a></li>\n                </ul>\n                <div id=\"myTabContent2\" class=\"tab-content\">\n                  <div class=\"tab-pane fade active in\" id=\"more-information2\">\n                    <br>\n                    <strong>Description Title</strong>\n                    <p>Integer egestas, orci id condimentum eleifend, nibh nisi pulvinar eros, vitae ornare massa neque ut orci. Nam aliquet lectus sed odio eleifend, at iaculis dolor egestas. Nunc elementum pellentesque augue sodales porta. Etiam aliquet rutrum turpis, feugiat sodales ipsum consectetur nec. </p>\n                  </div>\n                  <div class=\"tab-pane fade\" id=\"specifications2\">\n                    <br>\n                    <dl class=\"\">\n                      <dt>Gravina</dt>\n                      <dd>Etiam porta sem malesuada magna mollis euismod.</dd>\n                      <dd>Donec id elit non mi porta gravida at eget metus.</dd>\n                      <dd>Eget lacinia odio sem nec elit.</dd>\n                      <br>\n\n                      <dt>Test lists</dt>\n                      <dd>A description list is perfect for defining terms.</dd>\n                      <br>\n\n                      <dt>Altra porta</dt>\n                      <dd>Vestibulum id ligula porta felis euismod semper</dd>\n                    </dl>\n                  </div>\n                  <div class=\"tab-pane fade\" id=\"reviews2\">\n                    <br>\n                    <form method=\"post\" class=\"well padding-bottom-10\" onsubmit=\"return false;\">\n                      <textarea rows=\"2\" class=\"form-control\" placeholder=\"Write a review\"></textarea>\n                      <div class=\"margin-top-10\">\n                        <button type=\"submit\" class=\"btn btn-sm btn-primary pull-right\">\n                          Submit Review\n                        </button>\n                        <a (click)=\"(null)\" class=\"btn btn-link profile-link-btn\" rel=\"tooltip\" data-placement=\"bottom\" title=\"\" data-original-title=\"Add Location\"><i class=\"fa fa-location-arrow\"></i></a>\n                        <a (click)=\"(null)\" class=\"btn btn-link profile-link-btn\" rel=\"tooltip\" data-placement=\"bottom\" title=\"\" data-original-title=\"Add Voice\"><i class=\"fa fa-microphone\"></i></a>\n                        <a (click)=\"(null)\" class=\"btn btn-link profile-link-btn\" rel=\"tooltip\" data-placement=\"bottom\" title=\"\" data-original-title=\"Add Photo\"><i class=\"fa fa-camera\"></i></a>\n                        <a (click)=\"(null)\" class=\"btn btn-link profile-link-btn\" rel=\"tooltip\" data-placement=\"bottom\" title=\"\" data-original-title=\"Add File\"><i class=\"fa fa-file\"></i></a>\n                      </div>\n                    </form>\n\n                    <div class=\"chat-body no-padding profile-message\">\n                      <ul>\n                        <li class=\"message\">\n                          <img src=\"assets/img/avatars/1.png\" class=\"online\">\n                          <span class=\"message-text\"> <a (click)=\"(null)\" class=\"username\">John Doe <small class=\"text-muted pull-right ultra-light\"> 2 Minutes ago </small></a> Can't divide were divide fish forth fish to. Was can't form the, living life grass darkness very image let unto fowl isn't in blessed fill life yielding above all moved </span>\n                          <ul class=\"list-inline font-xs\">\n                            <li>\n                              <a (click)=\"(null)\" class=\"text-info\"><i class=\"fa fa-reply\"></i> Reply</a>\n                            </li>\n                            <li>\n                              <a (click)=\"(null)\" class=\"text-danger\"><i class=\"fa fa-thumbs-up\"></i> Like</a>\n                            </li>\n                            <li>\n                              <a (click)=\"(null)\" class=\"text-muted\">Show All Comments (14)</a>\n                            </li>\n                            <li>\n                              <a (click)=\"(null)\" class=\"text-primary\">Hide</a>\n                            </li>\n                          </ul>\n                        </li>\n                        <li class=\"message message-reply\">\n                          <img src=\"assets/img/avatars/3.png\" class=\"online\">\n                          <span class=\"message-text\"> <a (click)=\"(null)\" class=\"username\">Serman Syla</a> eget lacinia odio sem nec eliteget lacinia odio sem nec elit. <i class=\"fa fa-smile-o txt-color-orange\"></i> </span>\n\n                          <ul class=\"list-inline font-xs\">\n                            <li>\n                              <a (click)=\"(null)\" class=\"text-muted\">1 minute ago </a>\n                            </li>\n                            <li>\n                              <a (click)=\"(null)\" class=\"text-danger\"><i class=\"fa fa-thumbs-up\"></i> Like</a>\n                            </li>\n                          </ul>\n\n                        </li>\n                        <li class=\"message message-reply\">\n                          <img src=\"assets/img/avatars/4.png\" class=\"online\">\n                          <span class=\"message-text\"> <a (click)=\"(null)\" class=\"username\">Sadi Orlaf </a> Eet lacinia odio sem nec elit. <i class=\"fa fa-smile-o txt-color-orange\"></i> </span>\n\n                          <ul class=\"list-inline font-xs\">\n                            <li>\n                              <a (click)=\"(null)\" class=\"text-muted\">a moment ago </a>\n                            </li>\n                            <li>\n                              <a (click)=\"(null)\" class=\"text-danger\"><i class=\"fa fa-thumbs-up\"></i> Like</a>\n                            </li>\n                          </ul>\n\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n\n\n              </div>\n              <hr>\n              <div class=\"row\">\n                <div class=\"col-sm-12 col-md-12 col-lg-12\">\n                  <div class=\"btn-group\">\n                    <button class=\"btn btn-white btn-default\"><i class=\"fa fa-star\"></i> Add to wishlist </button>\n                    <button class=\"btn btn-white btn-default\"><i class=\"fa fa-envelope\"></i> Contact Seller</button>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n        <!-- end product -->\n      </div>\n\n    </div>\n\n    <!-- end row -->\n\n  </sa-widgets-grid>\n  <!-- end row -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/e-commerce/product-details/product-details.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/features/e-commerce/product-details/product-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
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

var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent() {
        this.product = {
            slides: [
                {
                    src: 'assets/img/demo/e-comm/detail-1.png',
                },
                {
                    src: 'assets/img/demo/e-comm/detail-2.png'
                },
                {
                    src: 'assets/img/demo/e-comm/detail-3.png'
                }
            ]
        };
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
    };
    ProductDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/features/e-commerce/product-details/product-details.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/features/e-commerce/products-view/products-view.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/features/e-commerce/products-view/products-view.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" data-sparkline-container=\"\" data-easy-pie-chart-container=\"\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['E-Commerce', 'Products View']\" icon=\"shopping-cart\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n\n    <sa-shopping-cart></sa-shopping-cart>\n  </div>\n  <!-- row -->\n  <sa-widgets-grid>\n\n    <!-- row -->\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-6 col-md-6 col-lg-6\">\n        <!-- product -->\n        <div class=\"product-content product-wrap clearfix\">\n          <div class=\"row\">\n            <div class=\"col-md-5 col-sm-12 col-xs-12\">\n              <div class=\"product-image\">\n                <img src=\"assets/img/demo/e-comm/1.png\" alt=\"194x228\" class=\"img-responsive\">\n                <span class=\"tag2 hot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tHOT\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n              </div>\n            </div>\n            <div class=\"col-md-7 col-sm-12 col-xs-12\">\n              <div class=\"product-deatil\">\n                <h5 class=\"name\">\n                  <a routerLink=\"../product-details\">\n                    Product Name Title Here <span>Category</span>\n                  </a>\n                </h5>\n                <p class=\"price-container\">\n                  <span>$99</span>\n                </p>\n                <span class=\"tag1\"></span>\n              </div>\n              <div class=\"description\">\n                <p>Proin in ullamcorper lorem. Maecenas eu ipsum </p>\n              </div>\n              <div class=\"product-info smart-form\">\n                <div class=\"row\">\n                  <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                    <a (click)=\"(null)\" class=\"btn btn-success\">Add to cart</a>\n                  </div>\n                  <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                    <div class=\"rating\">\n                      <input type=\"radio\" name=\"stars-rating\" id=\"stars-rating-5\">\n                      <label for=\"stars-rating-5\"><i class=\"fa fa-star\"></i></label>\n                      <input type=\"radio\" name=\"stars-rating\" id=\"stars-rating-4\">\n                      <label for=\"stars-rating-4\"><i class=\"fa fa-star\"></i></label>\n                      <input type=\"radio\" name=\"stars-rating\" id=\"stars-rating-3\">\n                      <label for=\"stars-rating-3\"><i class=\"fa fa-star text-primary\"></i></label>\n                      <input type=\"radio\" name=\"stars-rating\" id=\"stars-rating-2\">\n                      <label for=\"stars-rating-2\"><i class=\"fa fa-star text-primary\"></i></label>\n                      <input type=\"radio\" name=\"stars-rating\" id=\"stars-rating-1\">\n                      <label for=\"stars-rating-1\"><i class=\"fa fa-star text-primary\"></i></label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- end product -->\n      </div>\n\n      <div class=\"col-sm-6 col-md-6 col-lg-6\">\n        <!-- product -->\n        <div class=\"product-content product-wrap clearfix\">\n          <div class=\"row\">\n            <div class=\"col-md-5 col-sm-12 col-xs-12\">\n              <div class=\"product-image\">\n                <img src=\"assets/img/demo/e-comm/2.png\" alt=\"194x228\" class=\"img-responsive\">\n                <span class=\"tag2 sale\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tSale\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n              </div>\n            </div>\n            <div class=\"col-md-7 col-sm-12 col-xs-12\">\n              <div class=\"product-deatil\">\n                <h5 class=\"name\">\n                  <a routerLink=\"../product-details\">\n                    Product Name Title Here <span>Category</span>\n                  </a>\n                </h5>\n                <p class=\"price-container\">\n                  <span>$109</span>\n                </p>\n                <span class=\"tag1\"></span>\n              </div>\n              <div class=\"description\">\n                <p>Proin in ullamcorper lorem. Maecenas eu ipsum </p>\n              </div>\n              <div class=\"product-info smart-form\">\n                <div class=\"row\">\n                  <div class=\"col-md-6 col-sm-6 col-xs-6\"> <a (click)=\"(null)\" class=\"btn btn-success\">Add to cart</a> </div>\n                  <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                    <div class=\"rating\">\n\n                      <input type=\"radio\" name=\"stars-rating\" id=\"stars-rating-5\">\n                      <label for=\"stars-rating-5\"><i class=\"fa fa-star\"></i></label>\n                      <input type=\"radio\" name=\"stars-rating\" id=\"stars-rating-4\">\n                      <label for=\"stars-rating-4\"><i class=\"fa fa-star\"></i></label>\n                      <input type=\"radio\" name=\"stars-rating\" id=\"stars-rating-3\">\n                      <label for=\"stars-rating-3\"><i class=\"fa fa-star text-primary\"></i></label>\n                      <input type=\"radio\" name=\"stars-rating\" id=\"stars-rating-2\">\n                      <label for=\"stars-rating-2\"><i class=\"fa fa-star text-primary\"></i></label>\n                      <input type=\"radio\" name=\"stars-rating\" id=\"stars-rating-1\">\n                      <label for=\"stars-rating-1\"><i class=\"fa fa-star text-primary\"></i></label>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- end product -->\n      </div>\n\n      <div class=\"col-sm-6 col-md-6 col-lg-4\">\n        <!-- product -->\n        <div class=\"product-content product-wrap clearfix\">\n          <div class=\"row\">\n            <div class=\"col-md-5 col-sm-12 col-xs-12\">\n              <div class=\"product-image\">\n                <img src=\"assets/img/demo/e-comm/3.png\" alt=\"194x228\" class=\"img-responsive\">\n                <span class=\"tag2 hot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tHOT\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n              </div>\n            </div>\n            <div class=\"col-md-7 col-sm-12 col-xs-12\">\n              <div class=\"product-deatil\">\n                <h5 class=\"name\">\n                  <a routerLink=\"../product-details\">\n                    Product Name Title Here <span>Category</span>\n                  </a>\n                </h5>\n                <p class=\"price-container\">\n                  <span>$399</span>\n                </p>\n                <span class=\"tag1\"></span>\n              </div>\n              <div class=\"description\">\n                <p>Proin in ullamcorper lorem. Maecenas eu ipsum </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- end product -->\n      </div>\n\n      <div class=\"col-sm-6 col-md-6 col-lg-4\">\n        <!-- product -->\n        <div class=\"product-content product-wrap clearfix\">\n          <div class=\"row\">\n            <div class=\"col-md-5 col-sm-12 col-xs-12\">\n              <div class=\"product-image\">\n                <img src=\"assets/img/demo/e-comm/4.png\" alt=\"194x228\" class=\"img-responsive\">\n                <span class=\"tag2 sale\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tSale\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n              </div>\n            </div>\n            <div class=\"col-md-7 col-sm-12 col-xs-12\">\n              <div class=\"product-deatil\">\n                <h5 class=\"name\">\n                  <a routerLink=\"../product-details\">\n                    Product Name Title Here <span>Category</span>\n                  </a>\n                </h5>\n                <p class=\"price-container\">\n                  <span>$19</span>\n                </p>\n                <span class=\"tag1\"></span>\n              </div>\n              <div class=\"description\">\n                <p>Proin in ullamcorper lorem. Maecenas eu ipsum </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- end product -->\n      </div>\n\n      <div class=\"col-sm-6 col-md-6 col-lg-4\">\n        <!-- product -->\n        <div class=\"product-content product-wrap clearfix\">\n          <div class=\"row\">\n            <div class=\"col-md-5 col-sm-12 col-xs-12\">\n              <div class=\"product-image\">\n                <img src=\"assets/img/demo/e-comm/5.png\" alt=\"194x228\" class=\"img-responsive\">\n                <span class=\"tag2 sale\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tSale\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n              </div>\n            </div>\n            <div class=\"col-md-7 col-sm-12 col-xs-12\">\n              <div class=\"product-deatil\">\n                <h5 class=\"name\">\n                  <a routerLink=\"../product-details\">\n                    Product Name Title Here <span>Category</span>\n                  </a>\n                </h5>\n                <p class=\"price-container\">\n                  <span>$195</span>\n                </p>\n                <span class=\"tag1\"></span>\n              </div>\n              <div class=\"description\">\n                <p>Proin in ullamcorper lorem. Maecenas eu ipsum </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- end product -->\n      </div>\n\n      <div class=\"col-sm-6 col-md-6 col-lg-4\">\n        <!-- product -->\n        <div class=\"product-content product-wrap clearfix\">\n          <div class=\"row\">\n            <div class=\"col-md-5 col-sm-12 col-xs-12\">\n              <div class=\"product-image\">\n                <img src=\"assets/img/demo/e-comm/7.png\" alt=\"194x228\" class=\"img-responsive\">\n                <span class=\"tag2 sale\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tSale\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n              </div>\n            </div>\n            <div class=\"col-md-7 col-sm-12 col-xs-12\">\n              <div class=\"product-deatil\">\n                <h5 class=\"name\">\n                  <a routerLink=\"../product-details\">\n                    Product Name Title Here <span>Category</span>\n                  </a>\n                </h5>\n                <p class=\"price-container\">\n                  <span>$99</span>\n                </p>\n                <span class=\"tag1\"></span>\n              </div>\n              <div class=\"description\">\n                <p>Proin in ullamcorper lorem. Maecenas eu ipsum </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- end product -->\n      </div>\n\n      <div class=\"col-sm-6 col-md-6 col-lg-4\">\n        <!-- product -->\n        <div class=\"product-content product-wrap clearfix\">\n          <div class=\"row\">\n            <div class=\"col-md-5 col-sm-12 col-xs-12\">\n              <div class=\"product-image\">\n                <img src=\"assets/img/demo/e-comm/8.png\" alt=\"194x228\" class=\"img-responsive\">\n                <span class=\"tag2 sale\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tSale\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n              </div>\n            </div>\n            <div class=\"col-md-7 col-sm-12 col-xs-12\">\n              <div class=\"product-deatil\">\n                <h5 class=\"name\">\n                  <a routerLink=\"../product-details\">\n                    Product Name Title Here <span>Category</span>\n                  </a>\n                </h5>\n                <p class=\"price-container\">\n                  <span>$109</span>\n                </p>\n                <span class=\"tag1\"></span>\n              </div>\n              <div class=\"description\">\n                <p>Proin in ullamcorper lorem. Maecenas eu ipsum </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- end product -->\n      </div>\n\n      <div class=\"col-sm-6 col-md-6 col-lg-4\">\n        <!-- product -->\n        <div class=\"product-content product-wrap clearfix\">\n          <div class=\"row\">\n            <div class=\"col-md-5 col-sm-12 col-xs-12\">\n              <div class=\"product-image\">\n                <img src=\"assets/img/demo/e-comm/9.png\" alt=\"194x228\" class=\"img-responsive\">\n                <span class=\"tag2 sale\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tSale\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n              </div>\n            </div>\n            <div class=\"col-md-7 col-sm-12 col-xs-12\">\n              <div class=\"product-deatil\">\n                <h5 class=\"name\">\n                  <a routerLink=\"../product-details\">\n                    Product Name Title Here <span>Category</span>\n                  </a>\n                </h5>\n                <p class=\"price-container\">\n                  <span>$399</span>\n                </p>\n                <span class=\"tag1\"></span>\n              </div>\n              <div class=\"description\">\n                <p>Proin in ullamcorper lorem. Maecenas eu ipsum</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- end product -->\n      </div>\n\n      <div class=\"col-sm-12 text-center\">\n        <a (click)=\"(null)\" class=\"btn btn-primary btn-lg\">Load more <i class=\"fa fa-arrow-down\"></i></a>\n      </div>\n\n    </div>\n\n    <!-- end row -->\n\n  </sa-widgets-grid>\n  <!-- end row -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/e-commerce/products-view/products-view.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/e-commerce/products-view/products-view.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsViewComponent", function() { return ProductsViewComponent; });
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

var ProductsViewComponent = /** @class */ (function () {
    function ProductsViewComponent() {
    }
    ProductsViewComponent.prototype.ngOnInit = function () {
    };
    ProductsViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-view',
            template: __webpack_require__(/*! ./products-view.component.html */ "./src/app/features/e-commerce/products-view/products-view.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ProductsViewComponent);
    return ProductsViewComponent;
}());



/***/ }),

/***/ "./src/app/features/e-commerce/shopping-cart/shopping-cart.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/features/e-commerce/shopping-cart/shopping-cart.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-8 text-right\">\n\n  <a (click)=\"(null)\" class=\"btn btn-default shop-btn\">\n    <i class=\"fa fa-3x fa-shopping-cart\"></i>\n    <span class=\"air air-top-right label-danger txt-color-white padding-5\">10</span>\n  </a>\n  <a (click)=\"(null)\" class=\"btn btn-default\">\n    <i class=\"fa fa-3x fa-print\"></i>\n  </a>\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/e-commerce/shopping-cart/shopping-cart.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/e-commerce/shopping-cart/shopping-cart.component.ts ***!
  \******************************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
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

var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent() {
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/features/e-commerce/shopping-cart/shopping-cart.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ })

}]);
//# sourceMappingURL=features-e-commerce-e-commerce-module.js.map