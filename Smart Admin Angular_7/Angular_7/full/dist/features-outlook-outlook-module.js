(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-outlook-outlook-module"],{

/***/ "./src/app/features/outlook/compose/compose.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/features/outlook/compose/compose.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrap custom-scroll sa-outlook-content\" *ngIf=\"message\">\n  <h2 class=\"email-open-header\">\n    Compose New Email <span class=\"label txt-color-white\">draft</span>\n    <a tooltip-placement=\"left\" uib-tooltip=\"Print\" class=\"txt-color-darken pull-right\"><i class=\"fa fa-print\"></i></a>\n  </h2>\n\n  <form enctype=\"multipart/form-data\" class=\"form-horizontal\">\n\n    <div class=\"inbox-info-bar no-padding\">\n      <div class=\"row\">\n        <div class=\"form-group\">\n          <label class=\"control-label col-md-1\"><strong>To</strong></label>\n\n          <div class=\"col-md-11\">\n            <select multiple style=\"width:100%\" data-select-search=\"true\" select2>\n              <option value=\"sunny.orlaf@smartadmin.com\" selected=\"selected\">sunny.orlaf@smartadmin.com\n              </option>\n              <option value=\"rachael.hawi@smartadmin.com\">rachael.hawi@smartadmin.com</option>\n              <option value=\"michael.safiel@smartadmin.com\">michael.safiel@smartadmin.com</option>\n              <option value=\"alex.jones@infowars.com\">alex.jones@infowars.com</option>\n              <option value=\"oruf.matalla@gmail.com\">oruf.matalla@gmail.com</option>\n              <option value=\"hr@smartadmin.com\">hr@smartadmin.com</option>\n              <option value=\"IT@smartadmin.com\">IT@smartadmin.com</option>\n            </select>\n            <em><a (click)=\"carbonCopy = true\" *ngIf=\"!carbonCopy\" tooltip-placement=\"bottom\"\n                   uib-tooltip=\"Carbon Copy\">CC</a></em>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"inbox-info-bar no-padding\" *ngIf=\"carbonCopy\">\n      <div class=\"row\">\n        <div class=\"form-group\">\n          <label class=\"control-label col-md-1\"><strong>CC</strong></label>\n\n          <div class=\"col-md-11\">\n            <select multiple style=\"width:100%\" select2 data-select-search=\"true\">\n              <option value=\"sunny.orlaf@smartadmin.com\">sunny.orlaf@smartadmin.com</option>\n              <option value=\"rachael.hawi@smartadmin.com\">rachael.hawi@smartadmin.com</option>\n              <option value=\"michael.safiel@smartadmin.com\">michael.safiel@smartadmin.com</option>\n              <option value=\"alex.jones@infowars.com\">alex.jones@infowars.com</option>\n              <option value=\"oruf.matalla@gmail.com\">oruf.matalla@gmail.com</option>\n              <option value=\"hr@smartadmin.com\">hr@smartadmin.com</option>\n              <option value=\"IT@smartadmin.com\">IT@smartadmin.com</option>\n            </select>\n            <em><a (click)=\"blindCarbonCopy=true\" *ngIf=\"!blindCarbonCopy\" tooltip-placement=\"bottom\"\n                   uib-tooltip=\"Blind Carbon Copy\">BCC</a></em>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"inbox-info-bar no-padding\" *ngIf=\"blindCarbonCopy\">\n      <div class=\"row\">\n        <div class=\"form-group\">\n          <label class=\"control-label col-md-1\"><strong>BCC</strong></label>\n\n          <div class=\"col-md-11\">\n            <select multiple style=\"width:100%\" select2 data-select-search=\"true\">\n              <option value=\"sunny.orlaf@smartadmin.com\">sunny.orlaf@smartadmin.com</option>\n              <option value=\"rachael.hawi@smartadmin.com\">rachael.hawi@smartadmin.com</option>\n              <option value=\"michael.safiel@smartadmin.com\">michael.safiel@smartadmin.com</option>\n              <option value=\"alex.jones@infowars.com\">alex.jones@infowars.com</option>\n              <option value=\"oruf.matalla@gmail.com\">oruf.matalla@gmail.com</option>\n              <option value=\"hr@smartadmin.com\">hr@smartadmin.com</option>\n              <option value=\"IT@smartadmin.com\">IT@smartadmin.com</option>\n            </select>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"inbox-info-bar no-padding\">\n      <div class=\"row\">\n        <div class=\"form-group\">\n          <label class=\"control-label col-md-1\"><strong>Subject</strong></label>\n\n          <div class=\"col-md-11\">\n            <input class=\"form-control\" placeholder=\"Email Subject\" type=\"text\"\n                   value=\"{{message.subject}}\">\n            <em><a class=\"show-next\" (click)=\"attachments = true\" tooltip-placement=\"bottom\" uib-tooltip=\"Attachments\"><i\n              class=\"fa fa-paperclip fa-lg\"></i></a></em>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"inbox-info-bar no-padding \" *ngIf=\"attachments\">\n      <div class=\"row\">\n        <div class=\"form-group\">\n          <label class=\"control-label col-md-1\"><strong>Attachments</strong></label>\n\n          <div class=\"col-md-11\">\n            <input class=\"form-control fileinput\" type=\"file\" multiple=\"multiple\">\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"inbox-message no-padding\">\n\n      <div id=\"emailbody\"  [summernote]=\"{height: 500}\" >\n\n\n      </div>\n    </div>\n\n    <div class=\"inbox-compose-footer\">\n\n      <button class=\"btn btn-danger\" type=\"button\">\n        Disregard\n      </button>\n\n      <button class=\"btn btn-info\" type=\"button\">\n        Draft\n      </button>\n\n      <button *ngIf=\"!sending\" (click)=\"send()\"\n              class=\"btn btn-primary pull-right\" type=\"button\">\n        Send <i class=\"fa fa-arrow-circle-right fa-lg\"></i>\n      </button>\n      <button *ngIf=\"sending\" class=\"btn btn-primary pull-right\" type=\"button\">\n        <i class=\"fa fa-refresh fa-spin\"></i>   Sending...\n      </button>\n\n\n    </div>\n\n  </form>\n\n  <div class=\"email-infobox\">\n\n    <div class=\"well well-sm well-light\">\n      <h5>Related Invoice</h5>\n      <ul class=\"list-unstyled\">\n        <li>\n          <i class=\"fa fa-file fa-fw text-success\"></i><a href-void> #4831 - Paid</a>\n        </li>\n        <li>\n          <i class=\"fa fa-file fa-fw text-danger\"></i><a href-void><strong> #4835 - Unpaid</strong></a>\n        </li>\n      </ul>\n\n\n    </div>\n\n    <div class=\"well well-sm well-light\">\n      <h5>Upcoming Meetings</h5>\n\n      <p>\n        <span class=\"label label-success\"><i class=\"fa fa-check\"></i> <del>Agenda Review @ 10 AM</del> </span>\n      </p>\n\n      <p>\n        <span class=\"label label-primary\"><i class=\"fa fa-clock-o\"></i> Client Meeting @ 2:30 PM</span>\n      </p>\n\n      <p>\n        <span class=\"label label-warning\"><i class=\"fa fa-clock-o\"></i> Salary Review @ 4:00 PM</span>\n      </p>\n    </div>\n\n    <ul class=\"list-inline\">\n      <li><img src=\"assets/img/avatars/5.png\" alt=\"me\" width=\"30px\"></li>\n      <li><img src=\"assets/img/avatars/3.png\" alt=\"me\" width=\"30px\"></li>\n      <li><img src=\"assets/img/avatars/sunny.png\" alt=\"me\" width=\"30px\"></li>\n      <li><a href-void>1 more</a></li>\n    </ul>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/outlook/compose/compose.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/outlook/compose/compose.component.ts ***!
  \***************************************************************/
/*! exports provided: ComposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeComponent", function() { return ComposeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_outlook_message_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/outlook-message.class */ "./src/app/features/outlook/shared/outlook-message.class.ts");
/* harmony import */ var _shared_outlook_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/outlook.service */ "./src/app/features/outlook/shared/outlook.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComposeComponent = /** @class */ (function () {
    function ComposeComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.carbonCopy = false;
        this.blindCarbonCopy = false;
        this.attachments = false;
        this.sending = false;
    }
    ComposeComponent.prototype.ngOnInit = function () {
        this.message = new _shared_outlook_message_class__WEBPACK_IMPORTED_MODULE_2__["OutlookMessage"]({});
    };
    ComposeComponent.prototype.send = function () {
        var _this = this;
        this.sending = true;
        setTimeout(function () {
            _this.router.navigate(['/outlook']);
        }, 2000);
    };
    ComposeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-compose',
            template: __webpack_require__(/*! ./compose.component.html */ "./src/app/features/outlook/compose/compose.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_outlook_service__WEBPACK_IMPORTED_MODULE_3__["OutlookService"]])
    ], ComposeComponent);
    return ComposeComponent;
}());



/***/ }),

/***/ "./src/app/features/outlook/details/details.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/features/outlook/details/details.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrap custom-scroll sa-outlook-content\" *ngIf=\"message\">\n  <h2 class=\"email-open-header\">\n    {{message.subject}} <span class=\"label txt-color-white\">{{message.folder}}</span>\n    <a (click)=\"(null)\" tooltip-placement=\"left\" uib-tooltip=\"Print\" class=\"txt-color-darken pull-right\"><i class=\"fa fa-print\"></i></a>\n  </h2>\n\n  <div class=\"inbox-info-bar\">\n    <div class=\"row\">\n      <div class=\"col-sm-9\">\n        <img src=\"{{message.contact.picture}}\" alt=\"me\" class=\"away\">\n        <strong>{{message.contact.name}}</strong>\n        <span class=\"hidden-mobile\">&lt;{{message.contact.email}}&gt;to <strong>me</strong> on <i>{{message.date | moment : 'HH:mmA, D MMMM YYYY'}}</i></span>\n      </div>\n      <div class=\"col-sm-3 text-right\">\n\n        <div class=\"btn-group text-left\" dropdown>\n          <a [routerLink]=\"['../../reply/' + message._id]\" class=\"btn btn-primary btn-sm replythis\">\n            <i class=\"fa fa-reply\"></i> Reply\n          </a>\n          <button class=\"btn btn-primary btn-sm dropdown-toggle\" dropdownToggle>\n            <i class=\"fa fa-angle-down\"></i>\n          </button>\n          <ul class=\"dropdown-menu\" *dropdownMenu>\n            <li>\n              <a [routerLink]=\"['../../reply/' + message._id]\" class=\"replythis\"><i class=\"fa fa-reply\"></i> Reply</a>\n            </li>\n            <li>\n              <a (click)=\"(null)\" class=\"replythis\"><i class=\"fa fa-mail-forward\"></i>\n                Forward</a>\n            </li>\n            <li>\n              <a (click)=\"(null)\"><i class=\"fa fa-print\"></i> Print</a>\n            </li>\n            <li class=\"divider\"></li>\n            <li>\n              <a (click)=\"(null)\"><i class=\"fa fa-ban\"></i> Mark as spam!</a>\n            </li>\n            <li>\n              <a (click)=\"(null)\"><i class=\"fa fa-trash-o\"></i> Delete forever</a>\n            </li>\n          </ul>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"inbox-message\" [innerHTML]=\"message.body\"></div>\n\n  <div class=\"inbox-download\" *ngIf=\"message.attachments.length\">\n    {{message.attachments.length}} attachment(s) — <a (click)=\"(null)\"> Download all attachments</a>\n\n    <ul class=\"inbox-download-list\">\n      <li *ngFor=\"let attachment of message.attachments\">\n        <div class=\"well well-sm\">\n\t\t\t\t<span *ngIf=\"attachment.picture\">\n\t\t\t\t\t<img src=\"{{attachment.picture}}\">\n\t\t\t\t</span>\n                <span *ngIf=\"!attachment.picture\">\n\t\t\t\t\t<i class=\"fa fa-file\"></i>\n\t\t\t\t</span>\n          <br>\n          <strong>{{attachment.name}}</strong>\n          <br>\n          {{attachment.size}}\n          <br>\n          <a (click)=\"(null)\"> Download</a> | <a (click)=\"(null)\"> View</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"email-infobox\">\n\n    <div class=\"well well-sm well-light\">\n      <h5>Related Invoice</h5>\n      <ul class=\"list-unstyled\">\n        <li>\n          <i class=\"fa fa-file fa-fw text-success\"></i><a (click)=\"(null)\"> #4831 - Paid</a>\n        </li>\n        <li>\n          <i class=\"fa fa-file fa-fw text-danger\"></i><a (click)=\"(null)\"><strong> #4835 - Unpaid</strong></a>\n        </li>\n      </ul>\n\n\n    </div>\n\n    <div class=\"well well-sm well-light\">\n      <h5>Upcoming Meetings</h5>\n\n      <p>\n        <span class=\"label label-success\"><i class=\"fa fa-check\"></i> <del>Agenda Review @ 10 AM</del> </span>\n      </p>\n\n      <p>\n        <span class=\"label label-primary\"><i class=\"fa fa-clock-o\"></i> Client Meeting @ 2:30 PM</span>\n      </p>\n\n      <p>\n        <span class=\"label label-warning\"><i class=\"fa fa-clock-o\"></i> Salary Review @ 4:00 PM</span>\n      </p>\n    </div>\n\n    <ul class=\"list-inline\">\n      <li><img src=\"assets/img/avatars/5.png\" alt=\"me\" width=\"30px\"></li>\n      <li><img src=\"assets/img/avatars/3.png\" alt=\"me\" width=\"30px\"></li>\n      <li><img src=\"assets/img/avatars/sunny.png\" alt=\"me\" width=\"30px\"></li>\n      <li><a (click)=\"(null)\">1 more</a></li>\n    </ul>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/outlook/details/details.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/outlook/details/details.component.ts ***!
  \***************************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_outlook_message_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/outlook-message.class */ "./src/app/features/outlook/shared/outlook-message.class.ts");
/* harmony import */ var _shared_outlook_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/outlook.service */ "./src/app/features/outlook/shared/outlook.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.route.params.subscribe(function (params) {
            _this.messageSub = _this.service.getMessage(params['id']).subscribe(function (message) {
                return _this.message = new _shared_outlook_message_class__WEBPACK_IMPORTED_MODULE_2__["OutlookMessage"](message);
            });
        });
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/features/outlook/details/details.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_outlook_service__WEBPACK_IMPORTED_MODULE_3__["OutlookService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/features/outlook/folder/folder.component.html":
/*!***************************************************************!*\
  !*** ./src/app/features/outlook/folder/folder.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrap custom-scroll sa-outlook-content \">\n  <table id=\"inbox-table\" class=\"table table-striped table-hover\" >\n    <tbody>\n    <tr id=\"msg1\" [class.unread]=\"!message.read\" *ngFor=\"let message of messages\">\n      <td class=\"inbox-table-icon\">\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"message.selected\" class=\"checkbox style-2\">\n            <span></span> </label>\n        </div>\n      </td>\n      <td class=\"inbox-data-from hidden-xs hidden-sm\"\n          [routerLink]=\"['../details/'+message._id]\"\n          >\n        <div>\n          {{message.contact.name}}\n        </div>\n      </td>\n      <td class=\"inbox-data-message\"\n          [routerLink]=\"['../details/'+message._id]\"\n      >\n        <div>\n          <span><message-labels [message]=\"message\"></message-labels> {{message.subject}}</span>\n          {{message.getBodyTeaser()}}\n        </div>\n      </td>\n      <td class=\"inbox-data-attachment hidden-xs\"\n          [routerLink]=\"['../details/'+message._id]\"\n      >\n        <div>\n          <a *ngIf=\"message.hasAttachments()\" [tooltip]=\"message.fullAttachmentsTooltip()\" placement=\"left\" class=\"txt-color-darken\"><i\n            class=\"fa fa-paperclip fa-lg\"></i></a>\n        </div>\n      </td>\n      <td class=\"inbox-data-date hidden-xs\">\n        <div>{{message.date | moment : 'HH:MM a'}}\n        </div>\n      </td>\n    </tr>\n\n    </tbody>\n  </table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/outlook/folder/folder.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/outlook/folder/folder.component.ts ***!
  \*************************************************************/
/*! exports provided: FolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderComponent", function() { return FolderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_outlook_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/outlook.service */ "./src/app/features/outlook/shared/outlook.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FolderComponent = /** @class */ (function () {
    function FolderComponent(route, router, outlookService) {
        this.route = route;
        this.router = router;
        this.outlookService = outlookService;
    }
    FolderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeFolderSub = this.route.params.subscribe(function (params) {
            var folder = params['folder'];
            _this.outlookService.getMessages(folder);
        });
        this.outlookService.messages.subscribe(function (messages) {
            _this.messages = messages;
        });
    };
    FolderComponent.prototype.ngOnDestroy = function () {
        this.activeFolderSub.unsubscribe();
    };
    FolderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-folder',
            template: __webpack_require__(/*! ./folder.component.html */ "./src/app/features/outlook/folder/folder.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_outlook_service__WEBPACK_IMPORTED_MODULE_2__["OutlookService"]])
    ], FolderComponent);
    return FolderComponent;
}());



/***/ }),

/***/ "./src/app/features/outlook/outlook.component.html":
/*!*********************************************************!*\
  !*** ./src/app/features/outlook/outlook.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" class=\"sa-outlook-content\">\n  <div class=\"inbox-nav-bar no-content-padding\">\n\n    <h1 class=\"page-title txt-color-blueDark hidden-tablet\">\n      <i class=\"fa fa-fw fa-inbox\"></i> Inbox </h1>\n\n    <div class=\"btn-group visible-tablet\" dropdown>\n      <button class=\"btn btn-default dropdown-toggle\" dropdownToggle>\n        {{activeFolder?.name}}\n        <i class=\"fa fa-caret-down\"></i>\n      </button>\n      <ul class=\"dropdown-menu\" *dropdownMenu>\n        <li [class.active]=\"folder.key == activeFolder.key\" *ngFor=\"let folder of outlook.folders\">\n          <a [routerLink]=\"[folder.key]\">{{folder.name}}\n            <i *ngIf=\"folder.key == activeFolder.key\" class=\"fa fa-check\"></i>\n          </a>\n        </li>\n      </ul>\n\n    </div>\n\n    <div class=\"inbox-checkbox-triggered\">\n\n      <div class=\"btn-group\">\n        <a placement=\"bottom\" tooltip=\"Mark Important\" class=\"btn btn-default\">\n          <strong>\n            <i class=\"fa fa-exclamation fa-lg text-danger\"></i>\n          </strong>\n        </a>\n        <a placement=\"bottom\" tooltip=\"Move to folder\" class=\"btn btn-default\">\n          <strong>\n            <i class=\"fa fa-folder-open fa-lg\"></i>\n          </strong>\n        </a>\n        <a (click)=\"deleteSelected()\" placement=\"bottom\" tooltip=\"Delete\" class=\"deletebutton btn btn-default\">\n          <strong>\n            <i class=\"fa fa-trash-o fa-lg\"></i>\n          </strong>\n        </a>\n      </div>\n\n    </div>\n\n    <a id=\"compose-mail-mini\" class=\"btn btn-primary pull-right hidden-desktop visible-tablet\">\n      <strong>\n        <i class=\"fa fa-file fa-lg\"></i>\n      </strong>\n    </a>\n\n    <div class=\"btn-group pull-right inbox-paging\">\n      <a class=\"btn btn-default btn-sm\">\n        <strong>\n          <i class=\"fa fa-chevron-left\"></i>\n        </strong>\n      </a>\n      <a class=\"btn btn-default btn-sm\">\n        <strong>\n          <i class=\"fa fa-chevron-right\"></i>\n        </strong>\n      </a>\n    </div>\n    <span class=\"pull-right\">\n      <strong>1-30</strong> of\n      <strong>{{activeFolder.total}}</strong>\n    </span>\n\n  </div>\n\n  <div id=\"inbox-content\" class=\"inbox-body no-content-padding\" >\n\n    <div class=\"inbox-side-bar\">\n\n      <a [routerLink]=\"['compose']\" id=\"compose-mail\" class=\"btn btn-primary btn-block\">\n        <strong>Compose</strong>\n      </a>\n\n      <h6> Folder\n        <a tooltip=\"Refresh\" placement=\"right\" class=\"pull-right txt-color-darken\">\n          <i class=\"fa fa-refresh\"></i>\n        </a>\n      </h6>\n\n      <ul class=\"inbox-menu-lg\">\n        <li [class.active]=\"folder.key == activeFolder.key\" *ngFor=\"let folder of outlook.folders\">\n          <a [routerLink]=\"[folder.key]\"> {{folder.name}}\n            <span *ngIf=\"folder.unread\">({{folder.unread}})</span>\n          </a>\n\n        </li>\n      </ul>\n\n      <h6> Quick Access\n        <a placement=\"right\" data-tooltip=\"Add Another\" class=\"pull-right txt-color-darken\">\n          <i class=\"fa fa-plus\"></i>\n        </a>\n      </h6>\n\n      <ul class=\"inbox-menu-sm\">\n        <li *ngFor=\"let label of outlook.labels\">\n          <a>{{label.name}} ({{label.count}})</a>\n        </li>\n      </ul>\n\n      <div class=\"air air-bottom inbox-space\" *ngIf=\"outlook.space\">\n\n        {{outlook.space.free}} of\n        <strong>{{outlook.space.total}}</strong>\n        <a data-tooltip=\"Empty Spam\" data-placement=\"top\" class=\"pull-right txt-color-darken\">\n          <i class=\"fa fa-trash-o fa-lg\"></i>\n        </a>\n\n\n        <div class=\"progress-micro\">\n          <progressbar value=\"{{outlook.space.ratio}}\"></progressbar>\n        </div>\n\n      </div>\n\n    </div>\n\n\n    <div [@routerTransition]=\"getState(o)\">\n        <router-outlet #o=\"outlet\"></router-outlet>\n    </div>\n\n\n\n    <div class=\"inbox-footer\">\n\n      <div class=\"row\">\n\n        <div class=\"col-xs-6 col-sm-1\">\n\n          <div class=\"txt-color-white hidden-desktop visible-mobile\" *ngIf=\"outlook.space\">\n            {{outlook.space.free}} of\n            <strong>{{outlook.space.total}}</strong>\n            <div class=\"progress-micro\">\n              <progressbar value=\"{{outlook.space.ratio}}\"></progressbar>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xs-6 col-sm-11 text-right\">\n          <div class=\"txt-color-white inline-block\">\n            <i class=\"txt-color-blueLight hidden-mobile\">Last account activity\n              <i class=\"fa fa-clock-o\"></i> 52 mins ago |</i> Displaying\n            <strong>44 of 259</strong>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/outlook/outlook.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/outlook/outlook.component.ts ***!
  \*******************************************************/
/*! exports provided: OutlookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlookComponent", function() { return OutlookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_outlook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/outlook */ "./src/app/features/outlook/shared/outlook.ts");
/* harmony import */ var _shared_outlook_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/outlook.service */ "./src/app/features/outlook/shared/outlook.service.ts");
/* harmony import */ var _app_shared_utils_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/utils/animations */ "./src/app/shared/utils/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OutlookComponent = /** @class */ (function () {
    function OutlookComponent(route, router, outlookService) {
        this.route = route;
        this.router = router;
        this.outlookService = outlookService;
        this.outlook = new _shared_outlook__WEBPACK_IMPORTED_MODULE_2__["Outlook"]();
        this.activeFolder = new _shared_outlook__WEBPACK_IMPORTED_MODULE_2__["Folder"]();
    }
    OutlookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.outlookSub = this.outlookService.getOutlook().subscribe(function (outlook) {
            _this.outlook = outlook;
        });
        this.activeFolderSub = this.outlookService.activeFolder.subscribe(function (folder) {
            _this.activeFolderKey = folder;
            if (_this.outlook.folders) {
                _this.activeFolder = _this.outlook.folders.find(function (it) { return it.key == folder; });
            }
        });
    };
    OutlookComponent.prototype.ngOnDestroy = function () {
        this.outlookSub.unsubscribe();
        this.activeFolderSub.unsubscribe();
    };
    OutlookComponent.prototype.deleteSelected = function () {
        this.outlookService.deleteSelected();
    };
    OutlookComponent.prototype.getState = function (outlet) {
        var ss = outlet.activatedRoute.snapshot;
        // return unique string that is used as state identifier in router animation
        return (outlet.activatedRouteData.state ||
            (ss.url.length
                ? ss.url[0].path
                : ss.parent.url.length
                    ? ss.parent.url[0].path
                    : null));
    };
    OutlookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-outlook',
            template: __webpack_require__(/*! ./outlook.component.html */ "./src/app/features/outlook/outlook.component.html"),
            animations: [_app_shared_utils_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_outlook_service__WEBPACK_IMPORTED_MODULE_3__["OutlookService"]])
    ], OutlookComponent);
    return OutlookComponent;
}());



/***/ }),

/***/ "./src/app/features/outlook/outlook.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/outlook/outlook.module.ts ***!
  \****************************************************/
/*! exports provided: OutlookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlookModule", function() { return OutlookModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _outlook_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outlook.routing */ "./src/app/features/outlook/outlook.routing.ts");
/* harmony import */ var _outlook_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outlook.component */ "./src/app/features/outlook/outlook.component.ts");
/* harmony import */ var _folder_folder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folder/folder.component */ "./src/app/features/outlook/folder/folder.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ "./src/app/features/outlook/details/details.component.ts");
/* harmony import */ var _replay_replay_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./replay/replay.component */ "./src/app/features/outlook/replay/replay.component.ts");
/* harmony import */ var _compose_compose_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compose/compose.component */ "./src/app/features/outlook/compose/compose.component.ts");
/* harmony import */ var _shared_outlook_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/outlook.service */ "./src/app/features/outlook/shared/outlook.service.ts");
/* harmony import */ var _shared_message_labels_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/message-labels.component */ "./src/app/features/outlook/shared/message-labels.component.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_shared_forms_editors_smartadmin_editors_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/forms/editors/smartadmin-editors.module */ "./src/app/shared/forms/editors/smartadmin-editors.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var OutlookModule = /** @class */ (function () {
    function OutlookModule() {
    }
    OutlookModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _outlook_component__WEBPACK_IMPORTED_MODULE_2__["OutlookComponent"],
                _folder_folder_component__WEBPACK_IMPORTED_MODULE_3__["FolderComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"],
                _replay_replay_component__WEBPACK_IMPORTED_MODULE_5__["ReplayComponent"],
                _compose_compose_component__WEBPACK_IMPORTED_MODULE_6__["ComposeComponent"],
                _shared_message_labels_component__WEBPACK_IMPORTED_MODULE_8__["MessageLabelsComponent"],
            ],
            imports: [
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _outlook_routing__WEBPACK_IMPORTED_MODULE_1__["routing"],
                _app_shared_forms_editors_smartadmin_editors_module__WEBPACK_IMPORTED_MODULE_10__["SmartadminEditorsModule"],
            ],
            providers: [_shared_outlook_service__WEBPACK_IMPORTED_MODULE_7__["OutlookService"]],
            entryComponents: [_outlook_component__WEBPACK_IMPORTED_MODULE_2__["OutlookComponent"]],
        })
    ], OutlookModule);
    return OutlookModule;
}());



/***/ }),

/***/ "./src/app/features/outlook/outlook.routing.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/outlook/outlook.routing.ts ***!
  \*****************************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _outlook_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outlook.component */ "./src/app/features/outlook/outlook.component.ts");
/* harmony import */ var _folder_folder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folder/folder.component */ "./src/app/features/outlook/folder/folder.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/details.component */ "./src/app/features/outlook/details/details.component.ts");
/* harmony import */ var _replay_replay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./replay/replay.component */ "./src/app/features/outlook/replay/replay.component.ts");
/* harmony import */ var _compose_compose_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compose/compose.component */ "./src/app/features/outlook/compose/compose.component.ts");






var routes = [
    {
        path: '',
        component: _outlook_component__WEBPACK_IMPORTED_MODULE_1__["OutlookComponent"],
        children: [
            {
                path: '',
                redirectTo: 'inbox',
                pathMatch: 'full'
            },
            {
                path: 'details/:id',
                component: _details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"]
            },
            {
                path: 'reply/:id',
                component: _replay_replay_component__WEBPACK_IMPORTED_MODULE_4__["ReplayComponent"]
            },
            {
                path: 'compose',
                component: _compose_compose_component__WEBPACK_IMPORTED_MODULE_5__["ComposeComponent"]
            },
            {
                path: ':folder',
                component: _folder_folder_component__WEBPACK_IMPORTED_MODULE_2__["FolderComponent"]
            }
        ]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/features/outlook/replay/replay.component.html":
/*!***************************************************************!*\
  !*** ./src/app/features/outlook/replay/replay.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrap custom-scroll sa-outlook-content\" *ngIf=\"replayTo\">\n  <h2 class=\"email-open-header\">\n    Reply to > {{replayTo.subject}} <span class=\"label txt-color-white\">{{replayTo.folder}}</span>\n    <a tooltip-placement=\"left\" uib-tooltip=\"Print\" class=\"txt-color-darken pull-right\"><i class=\"fa fa-print\"></i></a>\n  </h2>\n\n  <form enctype=\"multipart/form-data\" class=\"form-horizontal\">\n\n    <div class=\"inbox-info-bar no-padding\">\n      <div class=\"row\">\n        <div class=\"form-group\">\n          <label class=\"control-label col-md-1\"><strong>To</strong></label>\n\n          <div class=\"col-md-11\">\n            <select multiple style=\"width:100%\" data-select-search=\"true\" select2>\n              <option value=\"sunny.orlaf@smartadmin.com\" selected=\"selected\">sunny.orlaf@smartadmin.com\n              </option>\n              <option value=\"rachael.hawi@smartadmin.com\">rachael.hawi@smartadmin.com</option>\n              <option value=\"michael.safiel@smartadmin.com\">michael.safiel@smartadmin.com</option>\n              <option value=\"alex.jones@infowars.com\">alex.jones@infowars.com</option>\n              <option value=\"oruf.matalla@gmail.com\">oruf.matalla@gmail.com</option>\n              <option value=\"hr@smartadmin.com\">hr@smartadmin.com</option>\n              <option value=\"IT@smartadmin.com\">IT@smartadmin.com</option>\n            </select>\n            <em><a (click)=\"carbonCopy = true\" *ngIf=\"!carbonCopy\" tooltip-placement=\"bottom\"\n                   uib-tooltip=\"Carbon Copy\">CC</a></em>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"inbox-info-bar no-padding\" *ngIf=\"carbonCopy\">\n      <div class=\"row\">\n        <div class=\"form-group\">\n          <label class=\"control-label col-md-1\"><strong>CC</strong></label>\n\n          <div class=\"col-md-11\">\n            <select multiple style=\"width:100%\" select2 data-select-search=\"true\">\n              <option value=\"sunny.orlaf@smartadmin.com\">sunny.orlaf@smartadmin.com</option>\n              <option value=\"rachael.hawi@smartadmin.com\">rachael.hawi@smartadmin.com</option>\n              <option value=\"michael.safiel@smartadmin.com\">michael.safiel@smartadmin.com</option>\n              <option value=\"alex.jones@infowars.com\">alex.jones@infowars.com</option>\n              <option value=\"oruf.matalla@gmail.com\">oruf.matalla@gmail.com</option>\n              <option value=\"hr@smartadmin.com\">hr@smartadmin.com</option>\n              <option value=\"IT@smartadmin.com\">IT@smartadmin.com</option>\n            </select>\n            <em><a (click)=\"blindCarbonCopy=true\" *ngIf=\"!blindCarbonCopy\" tooltip-placement=\"bottom\"\n                   uib-tooltip=\"Blind Carbon Copy\">BCC</a></em>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"inbox-info-bar no-padding\" *ngIf=\"blindCarbonCopy\">\n      <div class=\"row\">\n        <div class=\"form-group\">\n          <label class=\"control-label col-md-1\"><strong>BCC</strong></label>\n\n          <div class=\"col-md-11\">\n            <select multiple style=\"width:100%\" select2 data-select-search=\"true\">\n              <option value=\"sunny.orlaf@smartadmin.com\">sunny.orlaf@smartadmin.com</option>\n              <option value=\"rachael.hawi@smartadmin.com\">rachael.hawi@smartadmin.com</option>\n              <option value=\"michael.safiel@smartadmin.com\">michael.safiel@smartadmin.com</option>\n              <option value=\"alex.jones@infowars.com\">alex.jones@infowars.com</option>\n              <option value=\"oruf.matalla@gmail.com\">oruf.matalla@gmail.com</option>\n              <option value=\"hr@smartadmin.com\">hr@smartadmin.com</option>\n              <option value=\"IT@smartadmin.com\">IT@smartadmin.com</option>\n            </select>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"inbox-info-bar no-padding\">\n      <div class=\"row\">\n        <div class=\"form-group\">\n          <label class=\"control-label col-md-1\"><strong>Subject</strong></label>\n\n          <div class=\"col-md-11\">\n            <input class=\"form-control\" placeholder=\"Email Subject\" type=\"text\"\n                   value=\"{{replayTo.subject}}\">\n            <em><a class=\"show-next\" (click)=\"attachments = true\" tooltip-placement=\"bottom\" uib-tooltip=\"Attachments\"><i\n              class=\"fa fa-paperclip fa-lg\"></i></a></em>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"inbox-info-bar no-padding \" *ngIf=\"attachments\">\n      <div class=\"row\">\n        <div class=\"form-group\">\n          <label class=\"control-label col-md-1\"><strong>Attachments</strong></label>\n\n          <div class=\"col-md-11\">\n            <input class=\"form-control fileinput\" type=\"file\" multiple=\"multiple\">\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"inbox-message no-padding\">\n\n      <div id=\"emailbody\"  summernote>\n\n\n        <br><br>Thanks,<br><strong>John Doe</strong><br><br>\n\n\n        <div class=\"email-reply-text\">\n          <p>\n            {{replayTo.contact.name}} <span class=\"text-primary\">&lt;{{replayTo.contact.email}}&gt;</span>\n            to me on {{replayTo.date}}\n          </p>\n\n          <div [innerHTML]=\"replayTo.body\"></div>\n\n\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"inbox-compose-footer\">\n\n      <button class=\"btn btn-danger\" type=\"button\">\n        Disregard\n      </button>\n\n      <button class=\"btn btn-info\" type=\"button\">\n        Draft\n      </button>\n\n      <button *ngIf=\"!sending\" (click)=\"send()\"\n              class=\"btn btn-primary pull-right\" type=\"button\">\n        Send <i class=\"fa fa-arrow-circle-right fa-lg\"></i>\n      </button>\n      <button *ngIf=\"sending\" class=\"btn btn-primary pull-right\" type=\"button\">\n        <i class=\"fa fa-refresh fa-spin\"></i>   Sending...\n      </button>\n\n\n    </div>\n\n  </form>\n\n  <div class=\"email-infobox\">\n\n    <div class=\"well well-sm well-light\">\n      <h5>Related Invoice</h5>\n      <ul class=\"list-unstyled\">\n        <li>\n          <i class=\"fa fa-file fa-fw text-success\"></i><a href-void> #4831 - Paid</a>\n        </li>\n        <li>\n          <i class=\"fa fa-file fa-fw text-danger\"></i><a href-void><strong> #4835 - Unpaid</strong></a>\n        </li>\n      </ul>\n\n\n    </div>\n\n    <div class=\"well well-sm well-light\">\n      <h5>Upcoming Meetings</h5>\n\n      <p>\n        <span class=\"label label-success\"><i class=\"fa fa-check\"></i> <del>Agenda Review @ 10 AM</del> </span>\n      </p>\n\n      <p>\n        <span class=\"label label-primary\"><i class=\"fa fa-clock-o\"></i> Client Meeting @ 2:30 PM</span>\n      </p>\n\n      <p>\n        <span class=\"label label-warning\"><i class=\"fa fa-clock-o\"></i> Salary Review @ 4:00 PM</span>\n      </p>\n    </div>\n\n    <ul class=\"list-inline\">\n      <li><img src=\"assets/img/avatars/5.png\" alt=\"me\" width=\"30px\"></li>\n      <li><img src=\"assets/img/avatars/3.png\" alt=\"me\" width=\"30px\"></li>\n      <li><img src=\"assets/img/avatars/sunny.png\" alt=\"me\" width=\"30px\"></li>\n      <li><a href-void>1 more</a></li>\n    </ul>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/outlook/replay/replay.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/outlook/replay/replay.component.ts ***!
  \*************************************************************/
/*! exports provided: ReplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplayComponent", function() { return ReplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_outlook_message_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/outlook-message.class */ "./src/app/features/outlook/shared/outlook-message.class.ts");
/* harmony import */ var _shared_outlook_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/outlook.service */ "./src/app/features/outlook/shared/outlook.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReplayComponent = /** @class */ (function () {
    function ReplayComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.carbonCopy = false;
        this.blindCarbonCopy = false;
        this.attachments = false;
        this.sending = false;
    }
    ReplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.route.params.subscribe(function (params) {
            _this.replayToSub = _this.service.getMessage(params['id']).subscribe(function (message) {
                return _this.replayTo = new _shared_outlook_message_class__WEBPACK_IMPORTED_MODULE_2__["OutlookMessage"](message);
            });
        });
    };
    ReplayComponent.prototype.ngOnDestroy = function () {
        this.replayToSub.unsubscribe();
        this.paramsSub.unsubscribe();
    };
    ReplayComponent.prototype.send = function () {
        var _this = this;
        this.sending = true;
        setTimeout(function () {
            _this.router.navigate(['/outlook']);
        }, 2000);
    };
    ReplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-replay',
            template: __webpack_require__(/*! ./replay.component.html */ "./src/app/features/outlook/replay/replay.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_outlook_service__WEBPACK_IMPORTED_MODULE_3__["OutlookService"]])
    ], ReplayComponent);
    return ReplayComponent;
}());



/***/ }),

/***/ "./src/app/features/outlook/shared/message-labels.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/outlook/shared/message-labels.component.ts ***!
  \*********************************************************************/
/*! exports provided: MessageLabelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageLabelsComponent", function() { return MessageLabelsComponent; });
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

var MessageLabelsComponent = /** @class */ (function () {
    function MessageLabelsComponent() {
        this.LABELS = {
            home: {
                name: "HOME",
                color: "teal"
            },
            work: {
                name: "WORK",
                color: "orange"
            }
        };
    }
    MessageLabelsComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MessageLabelsComponent.prototype, "message", void 0);
    MessageLabelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'message-labels',
            template: '<span *ngFor="let label of message.labels" class="label bg-color-{{LABELS[label].color}}">{{LABELS[label].name}}</span>',
        }),
        __metadata("design:paramtypes", [])
    ], MessageLabelsComponent);
    return MessageLabelsComponent;
}());



/***/ }),

/***/ "./src/app/features/outlook/shared/outlook-message.class.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/outlook/shared/outlook-message.class.ts ***!
  \******************************************************************/
/*! exports provided: OutlookMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlookMessage", function() { return OutlookMessage; });
var OutlookMessage = /** @class */ (function () {
    function OutlookMessage(message) {
        this.selected = false;
        this._id = message._id;
        this.contact = message.contact;
        this.read = message.read;
        this.subject = message.subject;
        this.folder = message.folder;
        this.date = message.date;
        this.body = message.body;
        this.attachments = message.attachments;
        this.labels = message.labels;
    }
    OutlookMessage.prototype.getBodyTeaser = function () {
        var clearBody = this.body.replace(/<[^<>]+?>/gm, ' ').replace(/(\s{2}|\n)/gm, ' ');
        var teaserMaxLength = 55 - this.subject.length;
        return clearBody.length > teaserMaxLength ? clearBody.substring(0, teaserMaxLength) + '...' : clearBody;
    };
    OutlookMessage.prototype.hasAttachments = function () {
        return this.attachments && this.attachments.length;
    };
    OutlookMessage.prototype.fullAttachmentsTooltip = function () {
        return 'FILES: ' + this.attachments.map(function (it) { return it.name; }).join(', ');
    };
    return OutlookMessage;
}());



/***/ }),

/***/ "./src/app/features/outlook/shared/outlook.service.ts":
/*!************************************************************!*\
  !*** ./src/app/features/outlook/shared/outlook.service.ts ***!
  \************************************************************/
/*! exports provided: OutlookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlookService", function() { return OutlookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _outlook_message_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outlook-message.class */ "./src/app/features/outlook/shared/outlook-message.class.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OutlookService = /** @class */ (function () {
    function OutlookService(jsonApiService) {
        this.jsonApiService = jsonApiService;
        this.state = {
            lastFolder: '',
            messages: []
        };
        this.activeFolder = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.messages = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    OutlookService.prototype.getOutlook = function () {
        return this.jsonApiService.fetch('/outlook/outlook.json');
    };
    OutlookService.prototype.getMessages = function (folder) {
        var _this = this;
        this.jsonApiService.fetch('/outlook/' + folder + '.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.mapToMessages), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            _this.state.lastFolder = folder;
            _this.state.messages = data;
            _this.activeFolder.next(folder);
            _this.messages.next(_this.state.messages);
            return data;
        }))
            .subscribe();
    };
    OutlookService.prototype.getMessage = function (id) {
        return this.jsonApiService.fetch('/outlook/message.json');
    };
    OutlookService.prototype.deleteSelected = function () {
        this.messages.next(this.state.messages.filter(function (it) { return !it.selected; }));
    };
    OutlookService.prototype.mapToMessages = function (rawMessages) {
        return rawMessages.map(function (it) { return new _outlook_message_class__WEBPACK_IMPORTED_MODULE_1__["OutlookMessage"](it); });
    };
    OutlookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_core_services__WEBPACK_IMPORTED_MODULE_3__["JsonApiService"]])
    ], OutlookService);
    return OutlookService;
}());



/***/ }),

/***/ "./src/app/features/outlook/shared/outlook.ts":
/*!****************************************************!*\
  !*** ./src/app/features/outlook/shared/outlook.ts ***!
  \****************************************************/
/*! exports provided: Folder, Outlook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Folder", function() { return Folder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Outlook", function() { return Outlook; });
var Folder = /** @class */ (function () {
    function Folder() {
    }
    return Folder;
}());

var Outlook = /** @class */ (function () {
    function Outlook() {
    }
    return Outlook;
}());



/***/ })

}]);
//# sourceMappingURL=features-outlook-outlook-module.js.map