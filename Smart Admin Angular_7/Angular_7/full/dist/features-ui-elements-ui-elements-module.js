(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-ui-elements-ui-elements-module"],{

/***/ "./src/app/features/ui-elements/ui-elements.module.ts":
/*!************************************************************!*\
  !*** ./src/app/features/ui-elements/ui-elements.module.ts ***!
  \************************************************************/
/*! exports provided: UiElementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiElementsModule", function() { return UiElementsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ui_elements_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-elements.routing */ "./src/app/features/ui-elements/ui-elements.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UiElementsModule = /** @class */ (function () {
    function UiElementsModule() {
    }
    UiElementsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _ui_elements_routing__WEBPACK_IMPORTED_MODULE_1__["routing"],
            ],
            providers: [],
        })
    ], UiElementsModule);
    return UiElementsModule;
}());



/***/ }),

/***/ "./src/app/features/ui-elements/ui-elements.routing.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/ui-elements/ui-elements.routing.ts ***!
  \*************************************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    {
        path: "",
        redirectTo: "buttons",
        pathMatch: "full"
    },
    {
        path: "buttons",
        loadChildren: "./buttons/buttons.module#ButtonsModule",
        data: { pageTitle: "Buttons" }
    },
    {
        path: "grid",
        loadChildren: "./grid/grid.module#GridModule",
        data: { pageTitle: "Grid" }
    },
    {
        path: "typography",
        loadChildren: "./typography/typography.module#TypographyModule",
        data: { pageTitle: "Typography" }
    },
    {
        path: "tree-views",
        loadChildren: "./tree-views/tree-views.module#TreeViewsModule",
        data: { pageTitle: "Tree Views" }
    },
    {
        path: "nestable-lists",
        loadChildren: "./nestable-lists/nestable-lists.module#NestableListsModule",
        data: { pageTitle: "Nestable Lists" }
    },
    {
        path: "general",
        loadChildren: "./general-elements/general-elements.module#GeneralElementsModule",
        data: { pageTitle: "General Elements" }
    },
    {
        path: "icons",
        loadChildren: "./icons/icons.module#IconsModule",
        data: { pageTitle: "Icons" }
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=features-ui-elements-ui-elements-module.js.map