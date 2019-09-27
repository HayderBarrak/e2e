(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"],{

/***/ "./src/app/features/app-views/blog/blog-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/app-views/blog/blog-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: BlogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function() { return BlogRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.component */ "./src/app/features/app-views/blog/blog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"]
    }];
var BlogRoutingModule = /** @class */ (function () {
    function BlogRoutingModule() {
    }
    BlogRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], BlogRoutingModule);
    return BlogRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/app-views/blog/blog.component.html":
/*!*************************************************************!*\
  !*** ./src/app/features/app-views/blog/blog.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['App Views', 'Blog']\" icon=\"paragraph\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-9\">\n      <div class=\"well padding-10\">\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <img src=\"assets/img/superbox/superbox-full-15.jpg\" class=\"img-responsive\" alt=\"assets/img\">\n            <ul class=\"list-inline padding-10\">\n              <li>\n                <i class=\"fa fa-calendar\"></i>\n                <a (click)=\"(null)\"> March 12, 2015 </a>\n              </li>\n              <li>\n                <i class=\"fa fa-comments\"></i>\n                <a (click)=\"(null)\"> 38 Comments </a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-md-8 padding-left-0\">\n            <h3 class=\"margin-top-0\"><a (click)=\"(null)\"> Why Should You Make A Separate Mobile Website for your Business? </a><br><small class=\"font-xs\"><i>Published by <a (click)=\"(null)\">John Doe</a></i></small></h3>\n            <p>\n              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.\n              <br><br>Et harum quidem rerum facilis est et expedita distinctio lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero consectetur adipiscing elit magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Pellentesque viverra vehicula sem ut volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat.\n              <br><br>\n            </p>\n            <a class=\"btn btn-primary\" (click)=\"(null)\"> Read more </a>\n            <a class=\"btn btn-warning\" (click)=\"(null)\"> Edit </a>\n            <a class=\"btn btn-success\" (click)=\"(null)\"> Publish </a>\n          </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <img src=\"assets/img/superbox/superbox-full-19.jpg\" class=\"img-responsive\" alt=\"assets/img\">\n            <ul class=\"list-inline padding-10\">\n              <li>\n                <i class=\"fa fa-calendar\"></i>\n                <a (click)=\"(null)\"> March 12, 2015 </a>\n              </li>\n              <li>\n                <i class=\"fa fa-comments\"></i>\n                <a (click)=\"(null)\"> 38 Comments </a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-md-8 padding-left-0\">\n            <h3 class=\"margin-top-0\"><a (click)=\"(null)\"> Mums favorite shopping malls in USA </a><br><small class=\"font-xs\"><i>Published by <a (click)=\"(null)\">John Doe</a></i></small></h3>\n            <p>\n              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.\n              <br><br>Et harum quidem rerum facilis est et expedita distinctio lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero consectetur adipiscing elit magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Pellentesque viverra vehicula sem ut volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat.\n              <br><br>\n            </p>\n            <a class=\"btn btn-primary\" (click)=\"(null)\"> Read more </a>\n          </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <img src=\"assets/img/superbox/superbox-full-24.jpg\" class=\"img-responsive\" alt=\"assets/img\">\n            <ul class=\"list-inline padding-10\">\n              <li>\n                <i class=\"fa fa-calendar\"></i>\n                <a (click)=\"(null)\"> March 12, 2015 </a>\n              </li>\n              <li>\n                <i class=\"fa fa-comments\"></i>\n                <a (click)=\"(null)\"> 38 Comments </a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-md-8 padding-left-0\">\n            <h3 class=\"margin-top-0\"><a (click)=\"(null)\"> Best (and Basic) Practices of Mobile Web Design </a><br><small class=\"font-xs\"><i>Published by <a (click)=\"(null)\">John Doe</a></i></small></h3>\n            <p>\n              With the plethora of smartphones, mobile phones, and tablets available on the market today, research suggests that mobile devices will soon overtake PCs and laptops in a year. More and more,different platforms are made available for all types of consumers to access the web, even including TVs and gaming consoles.\n              <br><br>\n              And all this in rapid-fire turnover&#x2014;new models and technologies quickly coming and going like fashion trends. So much so that any website that is not mobile friendly cannot claim to be user-friendly anymore. Increasingly, web developers and designers utilize fluid layouts allowing users to browse across different platforms.\n              <br><br>\n            </p>\n            <a class=\"btn btn-primary\" (click)=\"(null)\"> Read more </a>\n          </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <img src=\"assets/img/superbox/superbox-full-7.jpg\" class=\"img-responsive\" alt=\"assets/img\">\n            <ul class=\"list-inline padding-10\">\n              <li>\n                <i class=\"fa fa-calendar\"></i>\n                <a (click)=\"(null)\"> March 12, 2015 </a>\n              </li>\n              <li>\n                <i class=\"fa fa-comments\"></i>\n                <a (click)=\"(null)\"> 38 Comments </a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-md-8 padding-left-0\">\n            <h3 class=\"margin-top-0\"><a (click)=\"(null)\"> Responsive Design: Best Practices for Designing a Website </a><br><small class=\"font-xs\"><i>Published by <a (click)=\"(null)\">John Doe</a></i></small></h3>\n            <p>\n              The term Responsive design means developing a website in a way that adapts all the computer screen resolutions. Particularly this concept allows a 4 column layout that is 1292px wide, on 1025px wide screen that is divided into 2 columns automatically. It is adaptable for android phones and tablet screens. This designing method is known as &#x201C;responsive web design&#x201D;\n              <br><br>\n              Responsive designing is a different concept from traditional web designing, so the question arises how you should build a good responsive website. Here is a general practices that can help you to build a responsive website design.\n              <br><br>\n            </p>\n            <a class=\"btn btn-primary\" (click)=\"(null)\"> Read more </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div class=\"well padding-10\">\n        <h5 class=\"margin-top-0\"><i class=\"fa fa-search\"></i> Blog Search...</h5>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\">\n          <span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default\" type=\"button\">\n                                        <i class=\"fa fa-search\"></i>\n                                    </button> </span>\n        </div>\n        <!-- /input-group -->\n      </div>\n      <!-- /well -->\n      <div class=\"well padding-10\">\n        <h5 class=\"margin-top-0\"><i class=\"fa fa-tags\"></i> Popular Tags:</h5>\n        <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <ul class=\"list-unstyled\">\n              <li>\n                <a href=\"\"><span class=\"badge badge-info\">Windows 8</span></a>\n              </li>\n              <li>\n                <a href=\"\"><span class=\"badge badge-info\">C#</span></a>\n              </li>\n              <li>\n                <a href=\"\"><span class=\"badge badge-info\">Windows Forms</span></a>\n              </li>\n              <li>\n                <a href=\"\"><span class=\"badge badge-info\">WPF</span></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-lg-6\">\n            <ul class=\"list-unstyled\">\n              <li>\n                <a href=\"\"><span class=\"badge badge-info\">Bootstrap</span></a>\n              </li>\n              <li>\n                <a href=\"\"><span class=\"badge badge-info\">Joomla!</span></a>\n              </li>\n              <li>\n                <a href=\"\"><span class=\"badge badge-info\">CMS</span></a>\n              </li>\n              <li>\n                <a href=\"\"><span class=\"badge badge-info\">Java</span></a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <!-- /well -->\n      <div class=\"well padding-10\">\n        <h5 class=\"margin-top-0\"><i class=\"fa fa-thumbs-o-up\"></i> Follow Us!</h5>\n        <ul class=\"no-padding no-margin\">\n          <p class=\"no-margin\">\n            <a title=\"Facebook\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-facebook fa-stack-1x\"></i></span></a>\n            <a title=\"Twitter\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-twitter fa-stack-1x\"></i></span></a>\n            <a title=\"Google+\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-google-plus fa-stack-1x\"></i></span></a>\n            <a title=\"Linkedin\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-linkedin fa-stack-1x\"></i></span></a>\n            <a title=\"GitHub\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-github fa-stack-1x\"></i></span></a>\n            <a title=\"Bitbucket\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-bitbucket fa-stack-1x\"></i></span></a>\n          </p>\n        </ul>\n      </div>\n      <!-- /well -->\n      <!-- /well -->\n      <div class=\"well padding-10\">\n        <h5 class=\"margin-top-0\"><i class=\"fa fa-fire\"></i> Popular Posts:</h5>\n        <ul class=\"no-padding list-unstyled\">\n          <li>\n            <a (click)=\"(null)\" class=\"margin-top-0\">WPF vs. Windows Forms-Which is better?</a>\n          </li>\n          <li>\n            <a (click)=\"(null)\" class=\"padding-top-5 display-block\">How to create responsive website with Bootstrap?</a>\n          </li>\n          <li>\n            <a (click)=\"(null)\" class=\"margin-top-5\">The best Joomla! templates 2014</a>\n          </li>\n          <li>\n            <a (click)=\"(null)\" class=\"margin-top-5\">ASP .NET cms list</a>\n          </li>\n          <li>\n            <a (click)=\"(null)\" class=\"margin-top-5\">C# Hello, World! program</a>\n          </li>\n          <li>\n            <a (click)=\"(null)\" class=\"margin-top-5\">Java random generator</a>\n          </li>\n        </ul>\n      </div>\n      <!-- /well -->\n      <!-- /well -->\n      <div class=\"well padding-10\">\n        <h5 class=\"margin-top-0\"><i class=\"fa fa-video-camera\"></i> Featured Videos:</h5>\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <ul class=\"list-group no-margin\">\n              <li class=\"list-group-item\">\n                <a href=\"\"> <span class=\"badge pull-right\">15</span> Photograph </a>\n              </li>\n              <li class=\"list-group-item\">\n                <a href=\"\"> <span class=\"badge pull-right\">30</span> Life style </a>\n              </li>\n              <li class=\"list-group-item\">\n                <a href=\"\"> <span class=\"badge pull-right\">9</span> Food </a>\n              </li>\n              <li class=\"list-group-item\">\n                <a href=\"\"> <span class=\"badge pull-right\">4</span> Travel world </a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-lg-12\">\n            <div class=\"margin-top-10\">\n              <iframe allowfullscreen frameborder=\"0\" height=\"210\"\n                      mozallowfullscreen=\"\"\n                      src=\"https://player.vimeo.com/video/87025094\"\n                      webkitallowfullscreen=\"\"\n                      width=\"100%\"></iframe>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /well -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/app-views/blog/blog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/app-views/blog/blog.component.ts ***!
  \***********************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
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

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/features/app-views/blog/blog.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/features/app-views/blog/blog.module.ts":
/*!********************************************************!*\
  !*** ./src/app/features/app-views/blog/blog.module.ts ***!
  \********************************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-routing.module */ "./src/app/features/app-views/blog/blog-routing.module.ts");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog.component */ "./src/app/features/app-views/blog/blog.component.ts");
/* harmony import */ var _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/layout */ "./src/app/shared/layout/index.ts");
/* harmony import */ var _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/stats/stats.module */ "./src/app/shared/stats/stats.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var BlogModule = /** @class */ (function () {
    function BlogModule() {
    }
    BlogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogRoutingModule"],
                _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__["SmartadminLayoutModule"],
                _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__["StatsModule"],
            ],
            declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"]]
        })
    ], BlogModule);
    return BlogModule;
}());



/***/ })

}]);
//# sourceMappingURL=blog-blog-module.js.map