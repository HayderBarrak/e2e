(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-list-module"],{

/***/ "./src/app/features/app-views/projects/projects-list-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/app-views/projects/projects-list-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ProjectsListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsListRoutingModule", function() { return ProjectsListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projects_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-list.component */ "./src/app/features/app-views/projects/projects-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _projects_list_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsListComponent"]
    }];
var ProjectsListRoutingModule = /** @class */ (function () {
    function ProjectsListRoutingModule() {
    }
    ProjectsListRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], ProjectsListRoutingModule);
    return ProjectsListRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/app-views/projects/projects-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/features/app-views/projects/projects-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Projects', 'Overview']\" icon=\"file-text-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <!--\n      The ID \"widget-grid\" will start to initialize all widgets below\n      You do not need to use widgets if you dont want to. Simply remove\n      the <section></section> and you can use wells or panels instead\n      -->\n  <!-- widget grid -->\n  <sa-widgets-grid>\n    <!-- row -->\n    <div class=\"row\">\n      <!-- NEW WIDGET START -->\n      <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <div class=\"alert alert-info\">\n          <strong>NOTE:</strong> All the data is loaded from a seperate JSON file\n        </div>\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget class=\"well\">\n          <!-- widget options:\n              usage: <div sa-widget id=\"wid-id-0\" [editbutton]=\"false\">\n              [colorbutton]=\"false\"\n              [editbutton]=\"false\"\n              [togglebutton]=\"false\"\n              [deletebutton]=\"false\"\n              [fullscreenbutton]=\"false\"\n              [custombutton]=\"false\"\n              [collapsed]=\"true\"\n              [sortable]=\"false\"\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-comments\"></i> </span>\n\n            <h2>Widget Title </h2>\n          </header>\n          <!-- widget div-->\n          <div>\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\" data-sparkline-container=\"\">\n\n              <sa-datatable [options]=\"options\"\n                         [detailsFormat]=\"detailsFormat\"\n                         tableClass=\"display projects-table table table-striped table-bordered table-hover\"\n                         width=\"100%\">\n                <thead>\n                <tr>\n                  <th></th>\n                  <th>Projects</th>\n                  <th><i\n                    class=\"fa fa-fw fa-user text-muted hidden-md hidden-sm hidden-xs\"></i>\n                    EST\n                  </th>\n                  <th>Contacts</th>\n                  <th>Status</th>\n                  <th><i class=\"fa fa-circle txt-color-darken font-xs\"></i> Target/\n                    <i class=\"fa fa-circle text-danger font-xs\"></i> Actual\n                  </th>\n                  <th><i\n                    class=\"fa fa-fw fa-calendar text-muted hidden-md hidden-sm hidden-xs\"></i>\n                    Starts\n                  </th>\n                  <th><i\n                    class=\"fa fa-fw fa-calendar text-muted hidden-md hidden-sm hidden-xs\"></i>\n                    Ends\n                  </th>\n                  <th>Tracker</th>\n                </tr>\n                </thead>\n\n              </sa-datatable>\n            </div>\n            <!-- end widget content -->\n          </div>\n          <!-- end widget div -->\n        </div>\n        <!-- end widget -->\n      </article>\n      <!-- WIDGET END -->\n    </div>\n    <!-- end row -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/app-views/projects/projects-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/app-views/projects/projects-list.component.ts ***!
  \************************************************************************/
/*! exports provided: ProjectsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsListComponent", function() { return ProjectsListComponent; });
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

var ProjectsListComponent = /** @class */ (function () {
    function ProjectsListComponent() {
        this.options = {
            "ajax": 'assets/api/project-list.json',
            "iDisplayLength": 15,
            "columns": [
                {
                    "class": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": ''
                },
                { "data": "name" },
                { "data": "est" },
                { "data": "contacts" },
                { "data": "status" },
                { "data": "target-actual" },
                { "data": "starts" },
                { "data": "ends" },
                { "data": "tracker" }
            ],
            "order": [[1, 'asc']]
        };
    }
    ProjectsListComponent.prototype.ngOnInit = function () {
    };
    ProjectsListComponent.prototype.detailsFormat = function (d) {
        return "<table cell-padding=\"5\" cell-spacing=\"0\" border=\"0\" class=\"table table-hover table-condensed\">\n            <tbody><tr>\n                <td style=\"width:100px\">Project Title:</td>\n                <td>" + d.name + "</td>\n            </tr>\n            <tr>\n                <td>Deadline:</td>\n                <td>" + d.ends + "</td>\n            </tr>\n            <tr>\n                <td>Extra info:</td>\n                <td>And any further details here (images etc)...</td>\n            </tr>\n            <tr>\n                <td>Comments:</td>\n                <td>" + d.comments + "</td>\n            </tr>\n            <tr>\n                <td>Action:</td>\n                <td>" + d.action + "</td>\n            </tr></tbody>\n        </table>";
    };
    ProjectsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects-list.component.html */ "./src/app/features/app-views/projects/projects-list.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsListComponent);
    return ProjectsListComponent;
}());



/***/ }),

/***/ "./src/app/features/app-views/projects/projects-list.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/app-views/projects/projects-list.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProjectsListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsListModule", function() { return ProjectsListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _projects_list_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-list-routing.module */ "./src/app/features/app-views/projects/projects-list-routing.module.ts");
/* harmony import */ var _projects_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-list.component */ "./src/app/features/app-views/projects/projects-list.component.ts");
/* harmony import */ var _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/layout */ "./src/app/shared/layout/index.ts");
/* harmony import */ var _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/stats/stats.module */ "./src/app/shared/stats/stats.module.ts");
/* harmony import */ var _app_shared_ui_datatable_smartadmin_datatable_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/ui/datatable/smartadmin-datatable.module */ "./src/app/shared/ui/datatable/smartadmin-datatable.module.ts");
/* harmony import */ var _app_shared_widgets_smartadmin_widgets_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/widgets/smartadmin-widgets.module */ "./src/app/shared/widgets/smartadmin-widgets.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProjectsListModule = /** @class */ (function () {
    function ProjectsListModule() {
    }
    ProjectsListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _projects_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectsListRoutingModule"],
                _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__["SmartadminLayoutModule"],
                _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__["StatsModule"],
                _app_shared_ui_datatable_smartadmin_datatable_module__WEBPACK_IMPORTED_MODULE_6__["SmartadminDatatableModule"],
                _app_shared_widgets_smartadmin_widgets_module__WEBPACK_IMPORTED_MODULE_7__["SmartadminWidgetsModule"],
            ],
            declarations: [_projects_list_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsListComponent"]]
        })
    ], ProjectsListModule);
    return ProjectsListModule;
}());



/***/ })

}]);
//# sourceMappingURL=projects-projects-list-module.js.map