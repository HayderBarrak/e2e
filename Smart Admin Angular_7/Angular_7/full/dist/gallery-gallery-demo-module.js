(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-gallery-demo-module"],{

/***/ "./src/app/features/app-views/gallery/gallery-demo-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/app-views/gallery/gallery-demo-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: GalleryDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryDemoRoutingModule", function() { return GalleryDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gallery_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery-demo.component */ "./src/app/features/app-views/gallery/gallery-demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _gallery_demo_component__WEBPACK_IMPORTED_MODULE_2__["GalleryDemoComponent"]
    }];
var GalleryDemoRoutingModule = /** @class */ (function () {
    function GalleryDemoRoutingModule() {
    }
    GalleryDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], GalleryDemoRoutingModule);
    return GalleryDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/app-views/gallery/gallery-demo.component.html":
/*!************************************************************************!*\
  !*** ./src/app/features/app-views/gallery/gallery-demo.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row hidden-mobile\">\n    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n      <h1 class=\"page-title txt-color-blueDark\">\n        <i class=\"fa-fw fa fa-picture-o\"></i>\n        Gallery <span>&gt;\n\t\t\tSmart Responsive gallery </span></h1>\n    </div>\n    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 text-align-right\">\n      <div class=\"page-title\">\n        <a (click)=\"(null)\" class=\"btn btn-default\">Upload</a>\n        <a (click)=\"(null)\" class=\"btn btn-default\">Load Library</a>\n      </div>\n    </div>\n  </div>\n  <!-- row -->\n  <div class=\"row\">\n    <!-- SuperBox -->\n      <sa-gallery class=\"col-sm-12\" [pictures]=\"pictures\" (deleteRequest)=\"onDelete($event)\" (editRequest)=\"onEdit($event)\"></sa-gallery>\n    <!-- /SuperBox -->\n  </div>\n  <!-- end row -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/app-views/gallery/gallery-demo.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/app-views/gallery/gallery-demo.component.ts ***!
  \**********************************************************************/
/*! exports provided: GalleryDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryDemoComponent", function() { return GalleryDemoComponent; });
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

var GalleryDemoComponent = /** @class */ (function () {
    function GalleryDemoComponent() {
        this.pictures = [
            {
                src: "assets/img/superbox/superbox-thumb-1.jpg",
                img: "assets/img/superbox/superbox-full-1.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-2.jpg",
                img: "assets/img/superbox/superbox-full-2.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-3.jpg",
                img: "assets/img/superbox/superbox-full-3.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-4.jpg",
                img: "assets/img/superbox/superbox-full-4.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-5.jpg",
                img: "assets/img/superbox/superbox-full-5.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "Study Time",
            },
            {
                src: "assets/img/superbox/superbox-thumb-6.jpg",
                img: "assets/img/superbox/superbox-full-6.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-7.jpg",
                img: "assets/img/superbox/superbox-full-7.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "New Styla",
            },
            {
                src: "assets/img/superbox/superbox-thumb-8.jpg",
                img: "assets/img/superbox/superbox-full-8.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "Cristpta",
            },
            {
                src: "assets/img/superbox/superbox-thumb-9.jpg",
                img: "assets/img/superbox/superbox-full-9.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-10.jpg",
                img: "assets/img/superbox/superbox-full-10.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-11.jpg",
                img: "assets/img/superbox/superbox-full-11.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "Elegance",
            },
            {
                src: "assets/img/superbox/superbox-thumb-12.jpg",
                img: "assets/img/superbox/superbox-full-12.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "China Town",
            },
            {
                src: "assets/img/superbox/superbox-thumb-13.jpg",
                img: "assets/img/superbox/superbox-full-13.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "Sky Diving",
            },
            {
                src: "assets/img/superbox/superbox-thumb-14.jpg",
                img: "assets/img/superbox/superbox-full-14.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-15.jpg",
                img: "assets/img/superbox/superbox-full-15.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-16.jpg",
                img: "assets/img/superbox/superbox-full-16.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-17.jpg",
                img: "assets/img/superbox/superbox-full-17.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "Snowpine",
            },
            {
                src: "assets/img/superbox/superbox-thumb-18.jpg",
                img: "assets/img/superbox/superbox-full-18.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-19.jpg",
                img: "assets/img/superbox/superbox-full-19.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-20.jpg",
                img: "assets/img/superbox/superbox-full-20.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "Dragon Fly",
            },
            {
                src: "assets/img/superbox/superbox-thumb-21.jpg",
                img: "assets/img/superbox/superbox-full-21.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "Kinds Road",
            },
            {
                src: "assets/img/superbox/superbox-thumb-22.jpg",
                img: "assets/img/superbox/superbox-full-22.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "Tokyo",
            },
            {
                src: "assets/img/superbox/superbox-thumb-23.jpg",
                img: "assets/img/superbox/superbox-full-23.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "Rome",
            },
            {
                src: "assets/img/superbox/superbox-thumb-24.jpg",
                img: "assets/img/superbox/superbox-full-24.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "Traning",
            }
        ];
    }
    GalleryDemoComponent.prototype.ngOnInit = function () {
    };
    GalleryDemoComponent.prototype.onDelete = function (picture) {
        console.log('GalleryDemoComponent onDelete', picture);
    };
    GalleryDemoComponent.prototype.onEdit = function (picture) {
        console.log('GalleryDemoComponent onEdit', picture);
    };
    GalleryDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery-demo',
            template: __webpack_require__(/*! ./gallery-demo.component.html */ "./src/app/features/app-views/gallery/gallery-demo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], GalleryDemoComponent);
    return GalleryDemoComponent;
}());



/***/ }),

/***/ "./src/app/features/app-views/gallery/gallery-demo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/app-views/gallery/gallery-demo.module.ts ***!
  \*******************************************************************/
/*! exports provided: GalleryDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryDemoModule", function() { return GalleryDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _gallery_demo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery-demo-routing.module */ "./src/app/features/app-views/gallery/gallery-demo-routing.module.ts");
/* harmony import */ var _gallery_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery-demo.component */ "./src/app/features/app-views/gallery/gallery-demo.component.ts");
/* harmony import */ var _app_shared_ui_gallery_gallery_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/ui/gallery/gallery.module */ "./src/app/shared/ui/gallery/gallery.module.ts");
/* harmony import */ var _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/stats/stats.module */ "./src/app/shared/stats/stats.module.ts");
/* harmony import */ var _app_shared_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/layout */ "./src/app/shared/layout/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var GalleryDemoModule = /** @class */ (function () {
    function GalleryDemoModule() {
    }
    GalleryDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _gallery_demo_routing_module__WEBPACK_IMPORTED_MODULE_2__["GalleryDemoRoutingModule"],
                _app_shared_ui_gallery_gallery_module__WEBPACK_IMPORTED_MODULE_4__["SmartadminGalleryModule"],
                _app_shared_layout__WEBPACK_IMPORTED_MODULE_6__["SmartadminLayoutModule"],
                _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__["StatsModule"],
            ],
            declarations: [_gallery_demo_component__WEBPACK_IMPORTED_MODULE_3__["GalleryDemoComponent"]]
        })
    ], GalleryDemoModule);
    return GalleryDemoModule;
}());



/***/ }),

/***/ "./src/app/shared/ui/gallery/gallery.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/ui/gallery/gallery.component.ts ***!
  \********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
        this.deleteRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    GalleryComponent.prototype.activate = function (picture) {
        this.pictures.filter(function (it) { return it.active && it != picture; }).map(this.deactivate);
        if (picture.active) {
            this.deactivate(picture);
            this.current = null;
        }
        else {
            picture.active = true;
            picture.state = this.current ? 'stay' : 'in';
            this.current = picture;
        }
    };
    GalleryComponent.prototype.deactivate = function (picture) {
        picture.active = false;
        picture.state = 'out';
    };
    GalleryComponent.prototype.deletePicture = function (picture) {
        this.deleteRequest.emit(picture);
    };
    GalleryComponent.prototype.editPicture = function (picture) {
        this.editRequest.emit(picture);
    };
    GalleryComponent.prototype.ngOnInit = function () {
        this.pictures.forEach(function (it) {
            it.active = false;
            it.state = 'out';
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GalleryComponent.prototype, "pictures", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GalleryComponent.prototype, "deleteRequest", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GalleryComponent.prototype, "editRequest", void 0);
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-gallery',
            styles: ["\n    .superbox-show.active{\n  display: block !important;\n    }\n\n"],
            template: "\n    <div class=\"superbox\">\n      <div  >      \n          <ng-template ngFor let-item=\"$implicit\" [ngForOf]=\"pictures\"><!--\n          --><div  \n             [@slideToggle]=\"item.state\"\n           class=\"superbox-list\" (click)=\"activate(item)\">\n              <img [src]=\"item.src\" [alt]=\"item.alt\" [title]=\"item.title\" class=\"superbox-img\"/>\n             </div><!--\n          --><div class=\"superbox-show\" [class.active]=\"item.active\" [@viewportToggle]=\"item.state\">\n              <img src=\"{{item.img}}\" *ngIf=\"item.active\" [@fadeToggle]=\"item.state\" class=\"superbox-current-img\">\n              <div id=\"imgInfoBox\" class=\"superbox-imageinfo inline-block\">\n                <h1>{{item.title}}</h1><span>\n                <p><em>{{item.img}}</em></p>\n                <p class=\"superbox-img-description\">{{item.alt}}</p>\n                <p>\n                  <a (click)=\"editPicture(item)\" class=\"btn btn-primary btn-sm\">Edit Image</a> \n                  <a (click)=\"deletePicture(item)\" class=\"btn btn-danger btn-sm\">Delete</a>\n                  </p></span> \n              </div>\n             \n              <div class=\"superbox-close txt-color-white\" (click)=\"deactivate(item)\"><i class=\"fa fa-times fa-lg\"></i></div>\n            </div\n            ></ng-template>\n        <div class=\"superbox-float\" ></div>\n      </div>\n    </div>\n  ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideToggle', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        backgroundColor: '#eee',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        backgroundColor: '#cfd8dc',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms ease-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('viewportToggle', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: 0,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '*',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('stay', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '*',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => in', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            display: 'block'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('in => stay', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0ms ease-out')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeToggle', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 1,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('stay', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 1,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms 250ms ease-out')
                    ]),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/shared/ui/gallery/gallery.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/ui/gallery/gallery.module.ts ***!
  \*****************************************************/
/*! exports provided: SmartadminGalleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartadminGalleryModule", function() { return SmartadminGalleryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.component */ "./src/app/shared/ui/gallery/gallery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SmartadminGalleryModule = /** @class */ (function () {
    function SmartadminGalleryModule() {
    }
    SmartadminGalleryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"]],
            exports: [_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"]],
        })
    ], SmartadminGalleryModule);
    return SmartadminGalleryModule;
}());



/***/ })

}]);
//# sourceMappingURL=gallery-gallery-demo-module.js.map