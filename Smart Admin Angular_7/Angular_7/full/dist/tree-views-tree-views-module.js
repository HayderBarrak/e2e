(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tree-views-tree-views-module"],{

/***/ "./src/app/features/ui-elements/tree-views/tree-views.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/features/ui-elements/tree-views/tree-views.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['UI Elements', 'Tree View']\" icon=\"desktop\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <!-- widget grid -->\n  <sa-widgets-grid>\n    <!-- row -->\n    <div class=\"row\">\n      <!-- NEW WIDGET START -->\n      <article class=\"col-sm-12 col-md-12 col-lg-6\">\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [editbutton]=\"false\" color=\"orange\">\n          <!-- widget options:\n          usage: <div sa-widget id=\"wid-id-0\" [editbutton]=\"false\">\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [custombutton]=\"false\"\n          [collapsed]=\"true\"\n          [sortable]=\"false\"\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-lg fa-calendar\"></i> </span>\n            <h2>Organizing view </h2>\n          </header>\n          <!-- widget div-->\n          <div>            <!-- widget content -->\n            <div class=\"widget-body\">\n              <div class=\"widget-body-toolbar bg-color-white\">\n                <form class=\"form-inline\" role=\"form\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-10\">\n                      <div class=\"form-group\">\n                        <label class=\"sr-only\">Task title</label>\n                        <input [(ngModel)]=\"task\" name=\"task\" class=\"form-control input-sm\" placeholder=\"My Task\">\n                      </div>\n                      <div class=\"form-group\">\n                        <label class=\"sr-only\">Pick Week</label>\n                        <select [(ngModel)]=\"week\" name=\"week\" class=\"form-control input-sm\">\n                          <option>Week 1</option>\n                          <option>Week 2</option>\n                        </select>\n                      </div>\n                      <div class=\"form-group\">\n                        <label class=\"sr-only\">Days</label>\n                        <select [(ngModel)]=\"day\" name=\"day\" class=\"form-control input-sm\">\n\n                          <option [value]=\"day\" *ngFor=\"let day of days\">{{day}}</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-2 text-align-right\">\n                      <button (click)=\"add()\" class=\"btn btn-warning btn-xs\">\n                        <i class=\"fa fa-plus\"></i> Add\n                      </button>\n                    </div>\n                  </div>\n                </form>\n              </div>\n              <div >\n                <sa-tree-view [items]=\"demo1\" (change)=\"changeLstener($event)\" ></sa-tree-view>\n              </div>\n            </div>\n            <!-- end widget content -->\n          </div>\n          <!-- end widget div -->\n        </div>\n        <!-- end widget -->\n      </article>\n      <!-- WIDGET END -->\n      <!-- NEW WIDGET START -->\n      <article class=\"col-sm-12 col-md-12 col-lg-6\">\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [editbutton]=\"false\" color=\"blue\">\n          <!-- widget options:\n          usage: <div sa-widget id=\"wid-id-0\" [editbutton]=\"false\">\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [custombutton]=\"false\"\n          [collapsed]=\"true\"\n          [sortable]=\"false\"\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-sitemap\"></i> </span>\n            <h2>Simple View </h2>\n          </header>\n          <!-- widget div-->\n          <div>            <!-- widget content -->\n            <div class=\"widget-body\">\n              <div class=\"tree smart-form\">\n                <sa-tree-view [items]=\"demo2\" (change)=\"changeLstener($event)\"></sa-tree-view>\n              </div>\n            </div>\n            <!-- end widget content -->\n          </div>\n          <!-- end widget div -->\n        </div>\n        <!-- end widget -->\n      </article>\n      <!-- WIDGET END -->\n    </div>\n    <!-- end row -->\n    <!-- row -->\n    <div class=\"row\">\n    </div>\n    <!-- end row -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/ui-elements/tree-views/tree-views.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/ui-elements/tree-views/tree-views.component.ts ***!
  \*************************************************************************/
/*! exports provided: TreeViewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeViewsComponent", function() { return TreeViewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeViewsComponent = /** @class */ (function () {
    function TreeViewsComponent(jsonApiService) {
        this.jsonApiService = jsonApiService;
        this.days = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ];
    }
    TreeViewsComponent.prototype.add = function () {
        console.log(this.task, this.day);
    };
    TreeViewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonApiService.fetch('/ui-examples/tree-view.json').subscribe(function (data) {
            _this.demo1 = data.demo1;
            _this.demo2 = data.demo2;
        });
    };
    TreeViewsComponent.prototype.changeLstener = function (payload) {
        console.log('change payload', payload);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TreeViewsComponent.prototype, "task", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TreeViewsComponent.prototype, "week", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TreeViewsComponent.prototype, "day", void 0);
    TreeViewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-tree-views',
            template: __webpack_require__(/*! ./tree-views.component.html */ "./src/app/features/ui-elements/tree-views/tree-views.component.html"),
        }),
        __metadata("design:paramtypes", [_app_core_services__WEBPACK_IMPORTED_MODULE_1__["JsonApiService"]])
    ], TreeViewsComponent);
    return TreeViewsComponent;
}());



/***/ }),

/***/ "./src/app/features/ui-elements/tree-views/tree-views.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/ui-elements/tree-views/tree-views.module.ts ***!
  \**********************************************************************/
/*! exports provided: TreeViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeViewsModule", function() { return TreeViewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tree_views_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree-views.routing */ "./src/app/features/ui-elements/tree-views/tree-views.routing.ts");
/* harmony import */ var _tree_views_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree-views.component */ "./src/app/features/ui-elements/tree-views/tree-views.component.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_shared_ui_tree_view_tree_view_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/ui/tree-view/tree-view.module */ "./src/app/shared/ui/tree-view/tree-view.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TreeViewsModule = /** @class */ (function () {
    function TreeViewsModule() {
    }
    TreeViewsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _tree_views_routing__WEBPACK_IMPORTED_MODULE_2__["treeViewsRouting"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _app_shared_ui_tree_view_tree_view_module__WEBPACK_IMPORTED_MODULE_5__["TreeViewModule"]
            ],
            declarations: [_tree_views_component__WEBPACK_IMPORTED_MODULE_3__["TreeViewsComponent"]]
        })
    ], TreeViewsModule);
    return TreeViewsModule;
}());



/***/ }),

/***/ "./src/app/features/ui-elements/tree-views/tree-views.routing.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/ui-elements/tree-views/tree-views.routing.ts ***!
  \***********************************************************************/
/*! exports provided: treeViewsRoutes, treeViewsRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeViewsRoutes", function() { return treeViewsRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeViewsRouting", function() { return treeViewsRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tree_views_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree-views.component */ "./src/app/features/ui-elements/tree-views/tree-views.component.ts");


var treeViewsRoutes = [{
        path: '',
        component: _tree_views_component__WEBPACK_IMPORTED_MODULE_1__["TreeViewsComponent"]
    }];
var treeViewsRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(treeViewsRoutes);


/***/ }),

/***/ "./src/app/shared/ui/tree-view/tree-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/ui/tree-view/tree-view.component.ts ***!
  \************************************************************/
/*! exports provided: TreeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeViewComponent", function() { return TreeViewComponent; });
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

var TreeViewComponent = /** @class */ (function () {
    function TreeViewComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TreeViewComponent.prototype.ngOnChanges = function () {
        this.items && this.render();
    };
    TreeViewComponent.prototype.render = function () {
        var root = this.el.nativeElement.getElementsByTagName('div')[0];
        root.appendChild(this.createBranch(this.items, { expanded: true }));
    };
    TreeViewComponent.prototype.createChild = function (item) {
        var _this = this;
        var i, branch;
        var li = document.createElement('li');
        li.innerHTML = item.content;
        if (item.children) {
            li.className += ' parent_li';
            i = this.addPlusMinusSign(li, item);
            branch = this.createBranch(item.children, item);
            li.appendChild(branch);
        }
        this.renderer.listen(li, 'click', function (event) {
            event.stopPropagation();
            if (item.children) {
                item.expanded = !item.expanded;
                _this.togglePlusMinusSign(i, item);
                branch.className = item.expanded ? '' : 'hidden';
            }
            _this.change.emit(item);
        });
        return li;
    };
    TreeViewComponent.prototype.createBranch = function (items, parent) {
        var _this = this;
        var ul = document.createElement('ul');
        items.forEach(function (item) {
            ul.appendChild(_this.createChild(item));
        });
        ul.className = parent.expanded ? '' : 'hidden';
        return ul;
    };
    TreeViewComponent.prototype.addPlusMinusSign = function (li, item) {
        var i = document.createElement('i');
        this.togglePlusMinusSign(i, item);
        var span = li.getElementsByTagName('span')[0];
        if (span) {
            span.appendChild(i);
        }
        else {
            li.appendChild(i);
        }
        return i;
    };
    TreeViewComponent.prototype.togglePlusMinusSign = function (i, item) {
        i.className = item.expanded ? 'sa-icon fa fa-lg fa-minus-circle' : 'sa-icon fa fa-lg fa-plus-circle';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TreeViewComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TreeViewComponent.prototype, "change", void 0);
    TreeViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-tree-view',
            template: '<div class="sa-tree-view tree"></div>',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], TreeViewComponent);
    return TreeViewComponent;
}());



/***/ }),

/***/ "./src/app/shared/ui/tree-view/tree-view.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/ui/tree-view/tree-view.module.ts ***!
  \*********************************************************/
/*! exports provided: TreeViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeViewModule", function() { return TreeViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tree_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree-view.component */ "./src/app/shared/ui/tree-view/tree-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TreeViewModule = /** @class */ (function () {
    function TreeViewModule() {
    }
    TreeViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_tree_view_component__WEBPACK_IMPORTED_MODULE_2__["TreeViewComponent"]],
            exports: [_tree_view_component__WEBPACK_IMPORTED_MODULE_2__["TreeViewComponent"]]
        })
    ], TreeViewModule);
    return TreeViewModule;
}());



/***/ })

}]);
//# sourceMappingURL=tree-views-tree-views-module.js.map