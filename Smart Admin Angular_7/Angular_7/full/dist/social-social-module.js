(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["social-social-module"],{

/***/ "./src/app/features/dashboard/social/social-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/dashboard/social/social-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: SocialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRoutingModule", function() { return SocialRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _social_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social.component */ "./src/app/features/dashboard/social/social.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _social_component__WEBPACK_IMPORTED_MODULE_2__["SocialComponent"],
        data: { pageTitle: 'Social' }
    }];
var SocialRoutingModule = /** @class */ (function () {
    function SocialRoutingModule() {
    }
    SocialRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], SocialRoutingModule);
    return SocialRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/dashboard/social/social.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/features/dashboard/social/social.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n\n  <!-- row -->\n  <div class=\"row\">\n\n    <!-- col -->\n    <div class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\">\n      <h1 class=\"page-title txt-color-blueDark\"><!-- PAGE HEADER --><i class=\"fa-fw fa fa-home\"></i> Dashboard <span>>\n\t\t\t\t\t\t\tSocial Wall </span></h1>\n    </div>\n    <!-- end col -->\n\n  </div>\n  <!-- end row -->\n\n  <!--\n  The ID \"widget-grid\" will start to initialize all widgets below\n  You do not need to use widgets if you dont want to. Simply remove\n  the <section></section> and you can use wells or panels instead\n  -->\n\n  <!-- widget grid -->\n  <section id=\"widget-grid\" class=\"\">\n\n    <!-- row -->\n\n    <div class=\"row\">\n\n      <!-- a blank row to get started -->\n      <div class=\"col-sm-6 col-lg-4\">\n\n        <!-- your contents here -->\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body status\">\n            <div class=\"who clearfix\">\n              <img src=\"assets/img/avatars/5.png\" alt=\"img\" class=\"online\">\n              <span class=\"name\"><b>Karrigan Mean</b> shared a photo</span>\n              <span class=\"from\"><b>1 days ago</b> via Mobile, Sydney, Australia</span>\n            </div>\n            <div class=\"image\"><img src=\"assets/img/realestate/6.png\" alt=\"img\">\n            </div>\n            <ul class=\"links\">\n              <li>\n                <a (click)=\"(null)\"><i class=\"fa fa-thumbs-o-up\"></i> Like</a>\n              </li>\n              <li>\n                <a (click)=\"(null)\"><i class=\"fa fa-comment-o\"></i> Comment</a>\n              </li>\n              <li>\n                <a (click)=\"(null)\"><i class=\"fa fa-share-square-o\"></i> Share</a>\n              </li>\n            </ul>\n            <ul class=\"comments\">\n              <li>\n                <img src=\"assets/img/avatars/sunny.png\" alt=\"img\" class=\"online\">\n                <span class=\"name\">John Doe</span>\n                Looks like a nice house, when did you get it? Are we having the party there next week? ;)\n              </li>\n              <li>\n                <img src=\"assets/img/avatars/2.png\" alt=\"img\" class=\"online\">\n                <span class=\"name\">Alice Wonder</span>\n                Seems cool.\n              </li>\n              <li>\n                <img src=\"assets/img/avatars/sunny.png\" alt=\"img\" class=\"online\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Post your comment...\">\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body status\">\n            <div class=\"who clearfix\">\n              <h4>See anyone you know? Connect with them</h4>\n            </div>\n            <div class=\"row\">\n              <div class=\"text\">\n                <div class=\"col-sm-12 col-md-6 col-lg-4\">\n                  <div class=\"well text-center connect\">\n                    <img src=\"assets/img/avatars/female.png\" alt=\"img\" class=\"margin-bottom-5 margin-top-5\">\n                    <br>\n                    <span class=\"font-xs\"><b>Jennifer Lezly</b></span>\n                    <a (click)=\"(null)\" class=\"btn btn-xs btn-success margin-top-5 margin-bottom-5\"> <span class=\"font-xs\">Connect</span> </a>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 col-md-6 col-lg-4\">\n                  <div class=\"well text-center connect\">\n                    <img src=\"assets/img/avatars/female.png\" alt=\"img\" class=\"margin-bottom-5 margin-top-5\">\n                    <br>\n                    <span class=\"font-xs\"><b>Jennifer Lezly</b></span>\n                    <a (click)=\"(null)\" class=\"btn btn-xs btn-success margin-top-5 margin-bottom-5\"> <span class=\"font-xs\">Connect</span> </a>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 col-md-6 col-lg-4\">\n                  <div class=\"well text-center connect\">\n                    <img src=\"assets/img/avatars/female.png\" alt=\"img\" class=\"margin-bottom-5 margin-top-5\">\n                    <br>\n                    <span class=\"font-xs\"><b>Jennifer Lezly</b></span>\n                    <a (click)=\"(null)\" class=\"btn btn-xs btn-success margin-top-5 margin-bottom-5\"> <span class=\"font-xs\">Connect</span> </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <ul class=\"links text-right\">\n              <li class=\"\">\n                <a (click)=\"(null)\">Find people you know <i class=\"fa fa-arrow-right\"></i> </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"col-sm-6 col-lg-4\">\n\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body status\">\n            <div class=\"who clearfix\">\n              <img src=\"assets/img/avatars/sunny.png\" alt=\"img\" class=\"online\">\n              <span class=\"name\"><b>John Doe</b> sent you a message</span>\n              <span class=\"from\"><b>1 days ago</b> via Mobile, Dubai</span>\n            </div>\n            <div class=\"text\">\n              Just landed in Dubai. My body must have lost like 4 liters of moisture, its 50 degrees here!!\n            </div>\n            <ul class=\"links\">\n              <li>\n                <a (click)=\"(null)\"><i class=\"fa fa-comment\"></i> Reply</a>\n              </li>\n              <li>\n                <a (click)=\"(null)\"><i class=\"fa fa-share-square-o\"></i> Share</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body status smart-form vote\">\n            <div class=\"who clearfix\">\n              <img src=\"assets/img/avatars/3.png\" alt=\"img\" class=\"offline\">\n              <span class=\"name\"><b>Alliz Yaen</b> started a question poll</span>\n              <span class=\"from\"><b>2 days ago</b> via Mobile, Sydney, Australia</span>\n            </div>\n            <div class=\"image\">\n              <strong>How did you guys like the movie <i>\"Albert The Einstine?\"</i> I reckon it was an awesome movie! </strong>\n            </div>\n            <ul class=\"comments\">\n              <li>\n                <label class=\"radio\">\n                  <input type=\"radio\" name=\"radio\">\n                  <i></i>It was a great movie! </label>\n              </li>\n              <li>\n                <label class=\"radio\">\n                  <input type=\"radio\" name=\"radio\">\n                  <i></i>The Movie could have been better... </label>\n              </li>\n              <li>\n                <label class=\"radio\">\n                  <input type=\"radio\" name=\"radio\">\n                  <i></i>It was a boring documentry :( </label>\n              </li>\n              <li class=\"text-right\">\n                <a (click)=\"(null)\" class=\"btn btn-xs btn-primary\">Submit Vote</a>\n              </li>\n            </ul>\n\n            <ul class=\"links\">\n              <li>\n                <a (click)=\"(null)\"><i class=\"fa fa-thumbs-o-up\"></i> Like</a>\n              </li>\n              <li>\n                <a (click)=\"(null)\"><i class=\"fa fa-comment-o\"></i> Comment</a>\n              </li>\n              <li>\n                <a (click)=\"(null)\"><i class=\"fa fa-share-square-o\"></i> Share</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"panel panel-default\">\n\n          <div class=\"panel-body status\">\n\n            <div class=\"who clearfix\">\n              <h4>Latest Forum Posts</h4>\n            </div>\n\n            <div class=\"who clearfix\">\n              <img src=\"assets/img/avatars/2.png\" alt=\"img\" class=\"busy\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"name font-sm\"> <span class=\"text-muted\">Posted by</span> <b> Karrigan Mean <span class=\"pull-right font-xs text-muted\"><i>3 minutes ago</i></span> </b>\n\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"(null)\" class=\"font-md\">Business Requirement Docs</a> </span>\n            </div>\n\n            <div class=\"who clearfix\">\n              <img src=\"assets/img/avatars/3.png\" alt=\"img\" class=\"offline\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"name font-sm\"> <span class=\"text-muted\">Posted by</span> <b> Alliz Yaen <span class=\"pull-right font-xs text-muted\"><i>2 days ago</i></span> </b>\n\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"(null)\" class=\"font-md\">Maecenas nec odio et ante tincidun</a> </span>\n            </div>\n\n            <div class=\"who clearfix\">\n              <img src=\"assets/img/avatars/4.png\" alt=\"img\" class=\"away\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"name font-sm\"> <span class=\"text-muted\">Posted by</span> <b> Barley Kartzukh <span class=\"pull-right font-xs text-muted\"><i>1 month ago</i></span> </b>\n\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"(null)\" class=\"font-md\">Tincidun nec Gasket Mask </a> </span>\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class=\"col-sm-6 col-lg-4\">\n\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body status\">\n            <div class=\"who clearfix\">\n              <img src=\"assets/img/avatars/sunny.png\" alt=\"img\" class=\"busy\">\n              <span class=\"name\"><b>You</b> shared a blog</span>\n              <span class=\"from\"><b>1 days ago</b> via Mobile, Sydney, Australia</span>\n            </div>\n            <div class=\"text\">\n              <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque in mauris elit. Ut nec arcu pretium eros varius porta vitae sit amet ipsum. Suspendisse porttitor, libero in rutrum pretium, lectus arcu maximus massa, ut condimentum metus libero laoreet lectus. Phasellus a lectus pulvinar, lacinia sem quis, suscipit turpis.\n                <br>\n                <br>\n                Nam ipsum orci, blandit in lectus ut, viverra vehicula nisl. Proin eu arcu ut neque tempus viverra nec ac tellus. <strong>[</strong><a (click)=\"(null)\">Keep reading</a><strong>]</strong>\n            </div>\n            <ul class=\"links\">\n              <li>\n                <a (click)=\"(null)\"><i class=\"fa fa-thumbs-o-up\"></i> Like</a>\n              </li>\n              <li>\n                <a (click)=\"(null)\"><i class=\"fa fa-comment-o\"></i> Comment</a>\n              </li>\n              <li>\n                <a (click)=\"(null)\"><i class=\"fa fa-share-square-o\"></i> Share</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body status\">\n            <div class=\"who clearfix\">\n              <h4>Live Twitter Feed</h4>\n            </div>\n            <div class=\"text\">\n\n              <blockquote class=\"twitter-tweet\">\n                <p lang=\"en\" xml:lang=\"en\">\n                  Sunsets don’t get much better than this one over <a href=\"https://twitter.com/GrandTetonNPS\" target=\"_blank\">@GrandTetonNPS</a>. <a href=\"https://twitter.com/hashtag/nature?src=hash\" target=\"_blank\">#nature</a> <a href=\"https://twitter.com/hashtag/sunset?src=hash\">#sunset</a> <a href=\"http://t.co/YuKy2rcjyU\" target=\"_blank\">pic.twitter.com/YuKy2rcjyU</a>\n                </p>\n                — US Dept of Interior (@Interior) <a href=\"https://twitter.com/Interior/status/463440424141459456\" target=\"_blank\">May 5, 2014</a>\n              </blockquote>\n\n            </div>\n            <ul class=\"links text-right\">\n              <li class=\"\">\n                <a (click)=\"(null)\">Next <i class=\"fa fa-arrow-right\"></i> </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body status\">\n            <div class=\"who clearfix\">\n              <h4>Live Chat</h4>\n            </div>\n\n            <div id=\"chat-body\" class=\"chat-body custom-scroll\">\n              <ul>\n                <li class=\"message\">\n                  <img src=\"assets/img/avatars/5.png\" class=\"online\" alt=\"\">\n                  <div class=\"message-text\">\n                    <time>\n                      2014-01-13\n                    </time> <a (click)=\"(null)\" class=\"username\">Sadi Orlaf</a> Hey did you meet the new board of director? He's a bit of an arse if you ask me...anyway here is the report you requested. I am off to launch with Lisa and Andrew, you wanna join?\n                    <p class=\"chat-file row\">\n                      <b class=\"pull-left col-sm-6\"> <!--<i class=\"fa fa-spinner fa-spin\"></i>--> <i class=\"fa fa-file\"></i> report-2013-demographic-report-annual-earnings.xls </b>\n                      <span class=\"col-sm-6 pull-right\"> <a (click)=\"(null)\" class=\"btn btn-xs btn-default\">cancel</a> <a (click)=\"(null)\" class=\"btn btn-xs btn-success\">save</a> </span>\n                    </p>\n                  </div>\n                </li>\n                <li class=\"message\">\n                  <img src=\"assets/img/avatars/sunny.png\" class=\"online\" alt=\"\">\n                  <div class=\"message-text\">\n                    <time>\n                      2014-01-13\n                    </time> <a (click)=\"(null)\" class=\"username\">John Doe</a> Haha! Yeah I know what you mean. Thanks for the file Sadi! <i class=\"fa fa-smile-o txt-color-orange\"></i>\n                  </div>\n                </li>\n              </ul>\n            </div>\n\n            <div class=\"chat-footer\">\n\n              <!-- CHAT TEXTAREA -->\n              <div class=\"textarea-div\">\n\n                <div class=\"typearea\">\n                  <textarea placeholder=\"Write a reply...\" id=\"textarea-expand\" class=\"custom-scroll\"></textarea>\n                </div>\n\n              </div>\n\n              <!-- CHAT REPLY/SEND -->\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"textarea-controls\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-primary pull-right\">\n                                                    Reply\n                                                </button> <span class=\"pull-right smart-form\" style=\"margin-top: 3px; margin-right: 10px;\"> <label class=\"checkbox pull-right\">\n                                                <input type=\"checkbox\" name=\"subscription\" id=\"subscription\">\n                                                <i></i>Press <strong> ENTER </strong> to send </label> </span> <a (click)=\"(null)\" class=\"pull-left\"><i class=\"fa fa-camera fa-fw fa-lg\"></i></a> </span>\n\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n    <!-- end row -->\n\n  </section>\n  <!-- end widget grid -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/dashboard/social/social.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/dashboard/social/social.component.ts ***!
  \***************************************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SocialComponent = /** @class */ (function () {
    function SocialComponent() {
    }
    SocialComponent.prototype.ngOnInit = function () {
    };
    SocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/app/features/dashboard/social/social.component.html"),
        })
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/app/features/dashboard/social/social.module.ts":
/*!************************************************************!*\
  !*** ./src/app/features/dashboard/social/social.module.ts ***!
  \************************************************************/
/*! exports provided: SocialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialModule", function() { return SocialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _social_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-routing.module */ "./src/app/features/dashboard/social/social-routing.module.ts");
/* harmony import */ var _social_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social.component */ "./src/app/features/dashboard/social/social.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SocialModule = /** @class */ (function () {
    function SocialModule() {
    }
    SocialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _social_routing_module__WEBPACK_IMPORTED_MODULE_2__["SocialRoutingModule"]
            ],
            declarations: [_social_component__WEBPACK_IMPORTED_MODULE_3__["SocialComponent"]]
        })
    ], SocialModule);
    return SocialModule;
}());



/***/ })

}]);
//# sourceMappingURL=social-social-module.js.map