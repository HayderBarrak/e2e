(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-layouts-form-layouts-module"],{

/***/ "./src/app/features/forms/form-layouts/checkout-form/checkout-form.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/features/forms/form-layouts/checkout-form/checkout-form.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"checkout-form\" class=\"smart-form\"\n      [saUiValidate]=\"validationOptions\"\n      novalidate=\"novalidate\">\n\n  <fieldset>\n    <div class=\"row\">\n      <section class=\"col col-6\">\n        <label class=\"input\"> <i class=\"icon-prepend fa fa-user\"></i>\n          <input type=\"text\" name=\"fname\" placeholder=\"First name\">\n        </label>\n      </section>\n      <section class=\"col col-6\">\n        <label class=\"input\"> <i class=\"icon-prepend fa fa-user\"></i>\n          <input type=\"text\" name=\"lname\" placeholder=\"Last name\">\n        </label>\n      </section>\n    </div>\n\n    <div class=\"row\">\n      <section class=\"col col-6\">\n        <label class=\"input\"> <i class=\"icon-prepend fa fa-envelope-o\"></i>\n          <input type=\"email\" name=\"email\" placeholder=\"E-mail\">\n        </label>\n      </section>\n      <section class=\"col col-6\">\n        <label class=\"input\"> <i class=\"icon-prepend fa fa-phone\"></i>\n          <input type=\"tel\" name=\"phone\" placeholder=\"Phone\" data-smart-masked-input=\"(999) 999-9999\">\n        </label>\n      </section>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"row\">\n      <section class=\"col col-5\">\n        <label class=\"select\">\n          <select name=\"country\">\n            <option value=\"0\" selected=\"\" disabled=\"\">Country</option>\n            <option value=\"{{country.key}}\" *ngFor=\"let country of countries\" >{{country.value}}</option>\n          </select> <i></i> </label>\n      </section>\n\n      <section class=\"col col-4\">\n        <label class=\"input\">\n          <input type=\"text\" name=\"city\" placeholder=\"City\">\n        </label>\n      </section>\n\n      <section class=\"col col-3\">\n        <label class=\"input\">\n          <input type=\"text\" name=\"code\" placeholder=\"Post code\">\n        </label>\n      </section>\n    </div>\n\n    <section>\n      <label for=\"address2\" class=\"input\">\n        <input type=\"text\" name=\"address2\" id=\"address2\" placeholder=\"Address\">\n      </label>\n    </section>\n\n    <section>\n      <label class=\"textarea\">\n        <textarea rows=\"3\" name=\"info\" placeholder=\"Additional info\"></textarea>\n      </label>\n    </section>\n  </fieldset>\n\n  <fieldset>\n    <section>\n      <div class=\"inline-group\">\n        <label class=\"radio\">\n          <input type=\"radio\" name=\"radio-inline\" checked=\"\">\n          <i></i>Visa</label>\n        <label class=\"radio\">\n          <input type=\"radio\" name=\"radio-inline\">\n          <i></i>MasterCard</label>\n        <label class=\"radio\">\n          <input type=\"radio\" name=\"radio-inline\">\n          <i></i>American Express</label>\n      </div>\n    </section>\n\n    <section>\n      <label class=\"input\">\n        <input type=\"text\" name=\"name\" placeholder=\"Name on card\">\n      </label>\n    </section>\n\n    <div class=\"row\">\n      <section class=\"col col-10\">\n        <label class=\"input\">\n          <input type=\"text\" name=\"card\" placeholder=\"Card number\" data-mask=\"9999-9999-9999-9999\">\n        </label>\n      </section>\n      <section class=\"col col-2\">\n        <label class=\"input\">\n          <input type=\"text\" name=\"cvv\" placeholder=\"CVV2\" data-mask=\"999\">\n        </label>\n      </section>\n    </div>\n\n    <div class=\"row\">\n      <label class=\"label col col-4\">Expiration date</label>\n      <section class=\"col col-5\">\n        <label class=\"select\">\n          <select name=\"month\">\n            <option value=\"0\" selected=\"\" disabled=\"\">Month</option>\n            <option value=\"1\">January</option>\n            <option value=\"1\">February</option>\n            <option value=\"3\">March</option>\n            <option value=\"4\">April</option>\n            <option value=\"5\">May</option>\n            <option value=\"6\">June</option>\n            <option value=\"7\">July</option>\n            <option value=\"8\">August</option>\n            <option value=\"9\">September</option>\n            <option value=\"10\">October</option>\n            <option value=\"11\">November</option>\n            <option value=\"12\">December</option>\n          </select> <i></i> </label>\n      </section>\n      <section class=\"col col-3\">\n        <label class=\"input\">\n          <input type=\"text\" name=\"year\" placeholder=\"Year\" data-mask=\"2099\">\n        </label>\n      </section>\n    </div>\n  </fieldset>\n\n  <footer>\n    <button type=\"submit\" class=\"btn btn-primary\">\n      Validate Form\n    </button>\n  </footer>\n</form>\n"

/***/ }),

/***/ "./src/app/features/forms/form-layouts/checkout-form/checkout-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/features/forms/form-layouts/checkout-form/checkout-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CheckoutFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutFormComponent", function() { return CheckoutFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared_forms_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/forms/common */ "./src/app/shared/forms/common/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutFormComponent = /** @class */ (function () {
    function CheckoutFormComponent() {
        this.validationOptions = {
            rules: {
                fname: {
                    required: true
                },
                lname: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                },
                country: {
                    required: true
                },
                city: {
                    required: true
                },
                code: {
                    required: true,
                    digits: true
                },
                address: {
                    required: true
                },
                name: {
                    required: true
                },
                card: {
                    required: true,
                    creditcard: true
                },
                cvv: {
                    required: true,
                    digits: true
                },
                month: {
                    required: true
                },
                year: {
                    required: true,
                    digits: true
                }
            },
            // Messages for form validation
            messages: {
                fname: {
                    required: 'Please enter your first name'
                },
                lname: {
                    required: 'Please enter your last name'
                },
                email: {
                    required: 'Please enter your email address',
                    email: 'Please enter a VALID email address'
                },
                phone: {
                    required: 'Please enter your phone number'
                },
                country: {
                    required: 'Please select your country'
                },
                city: {
                    required: 'Please enter your city'
                },
                code: {
                    required: 'Please enter code',
                    digits: 'Digits only please'
                },
                address: {
                    required: 'Please enter your full address'
                },
                name: {
                    required: 'Please enter name on your card'
                },
                card: {
                    required: 'Please enter your card number'
                },
                cvv: {
                    required: 'Enter CVV2',
                    digits: 'Digits only'
                },
                month: {
                    required: 'Select month'
                },
                year: {
                    required: 'Enter year',
                    digits: 'Digits only please'
                }
            },
            submitHandler: this.onSubmit
        };
    }
    CheckoutFormComponent.prototype.ngOnInit = function () {
        this.countries = _app_shared_forms_common__WEBPACK_IMPORTED_MODULE_1__["COUNTRIES"];
    };
    CheckoutFormComponent.prototype.onSubmit = function () {
        console.log('\n', 'submit handler for validated form', '\n\n');
    };
    CheckoutFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-checkout-form',
            template: __webpack_require__(/*! ./checkout-form.component.html */ "./src/app/features/forms/form-layouts/checkout-form/checkout-form.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CheckoutFormComponent);
    return CheckoutFormComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/form-layouts/comment-form/comment-form.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/features/forms/form-layouts/comment-form/comment-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"comment-form\" class=\"smart-form\" novalidate=\"novalidate\" [saUiValidate]=\"validationOptions\">\n  <header>\n    Comment form\n  </header>\n\n  <fieldset>\n    <div class=\"row\">\n      <section class=\"col col-4\">\n        <label class=\"label\">Name</label>\n        <label class=\"input\"> <i class=\"icon-append fa fa-user\"></i>\n          <input type=\"text\" name=\"name\"/>\n        </label>\n      </section>\n      <section class=\"col col-4\">\n        <label class=\"label\">E-mail</label>\n        <label class=\"input\"> <i class=\"icon-append fa fa-envelope-o\"></i>\n          <input type=\"email\" name=\"email\"/>\n        </label>\n      </section>\n      <section class=\"col col-4\">\n        <label class=\"label\">Website</label>\n        <label class=\"input\"> <i class=\"icon-append fa fa-globe\"></i>\n          <input type=\"url\" name=\"url\"/>\n        </label>\n      </section>\n    </div>\n\n    <section>\n      <label class=\"label\">Comment</label>\n      <label class=\"textarea\"> <i class=\"icon-append fa fa-comment\"></i>\n        <textarea rows=\"4\" name=\"comment\"></textarea>\n      </label>\n\n      <div class=\"note\">\n        You may use these HTML tags and attributes: &lt;a href=\"\" title=\"\"&gt;, &lt;abbr\n        title=\"\"&gt;,\n        &lt;acronym title=\"\"&gt;, &lt;b&gt;, &lt;blockquote cite=\"\"&gt;, &lt;cite&gt;, &lt;\n        code&gt;,\n        &lt;del datetime=\"\"&gt;, &lt;em&gt;, &lt;i&gt;, &lt;q cite=\"\"&gt;, &lt;strike&gt;, &lt;\n        strong&gt;.\n      </div>\n    </section>\n  </fieldset>\n\n  <footer>\n    <button type=\"submit\" name=\"submit\" class=\"btn btn-primary\">\n      Validate Form\n    </button>\n  </footer>\n\n  <div class=\"message\">\n    <i class=\"fa fa-check fa-lg\"></i>\n\n    <p>\n      Your comment was successfully added!\n    </p>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/features/forms/form-layouts/comment-form/comment-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/features/forms/form-layouts/comment-form/comment-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: CommentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentFormComponent", function() { return CommentFormComponent; });
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

var CommentFormComponent = /** @class */ (function () {
    function CommentFormComponent() {
        this.validationOptions = {
            // Rules for form validation
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                url: {
                    url: true
                },
                comment: {
                    required: true
                }
            },
            // Messages for form validation
            messages: {
                name: {
                    required: 'Enter your name',
                },
                email: {
                    required: 'Enter your email address',
                    email: 'Enter a VALID email'
                },
                url: {
                    email: 'Enter a VALID url'
                },
                comment: {
                    required: 'Please enter your comment'
                }
            },
            submitHandler: this.onSubmit
        };
    }
    CommentFormComponent.prototype.ngOnInit = function () {
    };
    CommentFormComponent.prototype.onSubmit = function () {
        console.log('\n', 'submit handler for validated form', '\n\n');
    };
    CommentFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-comment-form',
            template: __webpack_require__(/*! ./comment-form.component.html */ "./src/app/features/forms/form-layouts/comment-form/comment-form.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CommentFormComponent);
    return CommentFormComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/form-layouts/contact-form/contact-form.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/features/forms/form-layouts/contact-form/contact-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"contact-form\" class=\"smart-form\" novalidate=\"novalidate\" [saUiValidate]=\"validationOptions\">\n  <header>Contacts form</header>\n\n  <fieldset>\n    <div class=\"row\">\n      <section class=\"col col-6\">\n        <label class=\"label\">Name</label>\n        <label class=\"input\">\n          <i class=\"icon-append fa fa-user\"></i>\n          <input type=\"text\" name=\"name\" id=\"named\"/>\n        </label>\n      </section>\n      <section class=\"col col-6\">\n        <label class=\"label\">E-mail</label>\n        <label class=\"input\">\n          <i class=\"icon-append fa fa-envelope-o\"></i>\n          <input type=\"email\" name=\"email\" id=\"emaild\"/>\n        </label>\n      </section>\n    </div>\n\n    <section>\n      <label class=\"label\">Subject</label>\n      <label class=\"input\">\n        <i class=\"icon-append fa fa-tag\"></i>\n        <input type=\"text\" name=\"subject\" id=\"subject\"/>\n      </label>\n    </section>\n\n    <section>\n      <label class=\"label\">Message</label>\n      <label class=\"textarea\">\n        <i class=\"icon-append fa fa-comment\"></i>\n        <textarea rows=\"4\" name=\"message\" id=\"message\"></textarea>\n      </label>\n    </section>\n\n    <section>\n      <label class=\"checkbox\"><input type=\"checkbox\" name=\"copy\" id=\"copy\"/><i></i>Send a copy to\n        my\n        e-mail address</label>\n    </section>\n  </fieldset>\n\n  <footer>\n    <button type=\"submit\" class=\"btn btn-primary\">Validate Form</button>\n  </footer>\n\n  <div class=\"message\">\n    <i class=\"fa fa-thumbs-up\"></i>\n\n    <p>Your message was successfully sent!</p>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/features/forms/form-layouts/contact-form/contact-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/features/forms/form-layouts/contact-form/contact-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
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

var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent() {
        this.validationOptions = {
            // Rules for form validation
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            // Messages for form validation
            messages: {
                name: {
                    required: 'Please enter your name'
                },
                email: {
                    required: 'Please enter your email address',
                    email: 'Please enter a VALID email address'
                },
                message: {
                    required: 'Please enter your message'
                }
            },
            submitHandler: this.onSubmit
        };
    }
    ContactFormComponent.prototype.ngOnInit = function () {
    };
    ContactFormComponent.prototype.onSubmit = function () {
        console.log('\n', 'submit handler for validated form', '\n\n');
    };
    ContactFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-contact-form',
            template: __webpack_require__(/*! ./contact-form.component.html */ "./src/app/features/forms/form-layouts/contact-form/contact-form.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ContactFormComponent);
    return ContactFormComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/form-layouts/form-layouts.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/features/forms/form-layouts/form-layouts.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Forms', 'Form Layouts']\" icon=\"pencil-square-o\" class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9\"></sa-big-breadcrumbs>\n\n    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n      <!-- Button trigger modal -->\n      <a (click)=\"mdModal.show()\" class=\"btn btn-success btn-lg pull-right header-btn hidden-mobile\"><i class=\"fa fa-circle-arrow-up fa-lg\"></i> Launch form modal</a>\n    </div>\n  </div>\n\n\n  <div class=\"alert alert-block alert-success\" dismisser=\"\">\n\n    <h4 class=\"alert-heading\"><i class=\"fa fa-check-square-o\"></i> Check validation!</h4>\n\n    <p>\n      You may also check the form validation by clicking on the form action button. Please try and see the results\n      below!\n    </p>\n  </div>\n\n  <!-- widget grid -->\n\n  <sa-widgets-grid>\n\n\n    <!-- START ROW -->\n\n    <div class=\"row\">\n\n      <!-- NEW COL START -->\n      <article class=\"col-sm-12 col-md-12 col-lg-6\">\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\n\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-edit\"></i> </span>\n\n            <h2>Checkout Form </h2>\n\n          </header>\n\n          <!-- widget div-->\n          <div>\n\n\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\">\n\n              <sa-checkout-form></sa-checkout-form>\n\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n\n        <!-- Widget ID (each widget will need unique ID)-->\n\n        <div sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\n\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-edit\"></i> </span>\n\n            <h2>Order Form</h2>\n\n          </header>\n\n          <!-- widget div-->\n          <div>\n\n\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\">\n              <sa-order-form></sa-order-form>\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\n\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-edit\"></i> </span>\n\n            <h2>Review form </h2>\n\n          </header>\n\n          <!-- widget div-->\n          <div>\n\n\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\">\n\n              <sa-review-form></sa-review-form>\n\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n\n      </article>\n      <!-- END COL -->\n\n      <!-- NEW COL START -->\n      <article class=\"col-sm-12 col-md-12 col-lg-6\">\n\n        <!-- Widget ID (each widget will need unique ID)-->\n\n        <div sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\n\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-edit\"></i> </span>\n\n            <h2>Registration form </h2>\n\n          </header>\n\n          <!-- widget div-->\n          <div>\n\n\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\">\n\n              <sa-registration-form></sa-registration-form>\n\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-edit\"></i> </span>\n\n            <h2>Comment form </h2>\n\n          </header>\n\n          <!-- widget div-->\n          <div>\n\n\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\">\n\n              <sa-comment-form></sa-comment-form>\n\n\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-edit\"></i> </span>\n\n            <h2>Contacts form </h2>\n\n          </header>\n\n          <!-- widget div-->\n          <div>\n\n\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\">\n\n              <sa-contact-form></sa-contact-form>\n\n\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n\n\n      </article>\n      <!-- END COL -->\n\n    </div>\n\n    <!-- END ROW -->\n\n  </sa-widgets-grid>\n\n  <!-- end widget grid -->\n\n\n</div>\n\n\n<div bsModal #mdModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-md\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"mdModal.hide()\" aria-hidden=\"true\">\n          &times;\n        </button>\n        <h4 class=\"modal-title\">\n          <img src=\"assets/img/logo.png\" width=\"150\" alt=\"SmartAdmin\">\n        </h4>\n      </div>\n      <div class=\"modal-body no-padding\">\n\n        <form id=\"login-form\" class=\"smart-form\" [saUiValidate]=\"{\n          rules: {\n            email:{\n              required: true,\n              email: true\n            },\n            password: {\n              required: true\n            }\n          }\n        }\">\n\n          <fieldset>\n            <section>\n              <div class=\"row\">\n                <label class=\"label col col-2\">Username</label>\n\n                <div class=\"col col-10\">\n                  <label class=\"input\"> <i class=\"icon-append fa fa-user\"></i>\n                    <input type=\"email\" name=\"email\">\n                  </label>\n                </div>\n              </div>\n            </section>\n\n            <section>\n              <div class=\"row\">\n                <label class=\"label col col-2\">Password</label>\n\n                <div class=\"col col-10\">\n                  <label class=\"input\"> <i class=\"icon-append fa fa-lock\"></i>\n                    <input type=\"password\" name=\"password\">\n                  </label>\n\n                  <div class=\"note\">\n                    <a (click)=\"(null)\">Forgot password?</a>\n                  </div>\n                </div>\n              </div>\n            </section>\n\n            <section>\n              <div class=\"row\">\n                <div class=\"col col-2\"></div>\n                <div class=\"col col-10\">\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" name=\"remember\" checked=\"\">\n                    <i></i>Keep me logged in</label>\n                </div>\n              </div>\n            </section>\n          </fieldset>\n\n          <footer>\n            <button type=\"submit\" class=\"btn btn-primary\">\n              Sign in\n            </button>\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"mdModal.hide()\">\n              Cancel\n            </button>\n\n          </footer>\n        </form>\n\n\n      </div>\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/features/forms/form-layouts/form-layouts.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/forms/form-layouts/form-layouts.component.ts ***!
  \***********************************************************************/
/*! exports provided: FormLayoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLayoutsComponent", function() { return FormLayoutsComponent; });
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

var FormLayoutsComponent = /** @class */ (function () {
    function FormLayoutsComponent() {
    }
    FormLayoutsComponent.prototype.ngOnInit = function () {
    };
    FormLayoutsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-form-layouts',
            template: __webpack_require__(/*! ./form-layouts.component.html */ "./src/app/features/forms/form-layouts/form-layouts.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], FormLayoutsComponent);
    return FormLayoutsComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/form-layouts/form-layouts.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/forms/form-layouts/form-layouts.module.ts ***!
  \********************************************************************/
/*! exports provided: FormLayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLayoutsModule", function() { return FormLayoutsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _review_form_review_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review-form/review-form.component */ "./src/app/features/forms/form-layouts/review-form/review-form.component.ts");
/* harmony import */ var _order_form_order_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-form/order-form.component */ "./src/app/features/forms/form-layouts/order-form/order-form.component.ts");
/* harmony import */ var _comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment-form/comment-form.component */ "./src/app/features/forms/form-layouts/comment-form/comment-form.component.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/features/forms/form-layouts/contact-form/contact-form.component.ts");
/* harmony import */ var _form_layouts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-layouts.component */ "./src/app/features/forms/form-layouts/form-layouts.component.ts");
/* harmony import */ var _form_layouts_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-layouts.routing */ "./src/app/features/forms/form-layouts/form-layouts.routing.ts");
/* harmony import */ var _app_shared_forms_validation_smartadmin_validation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/forms/validation/smartadmin-validation.module */ "./src/app/shared/forms/validation/smartadmin-validation.module.ts");
/* harmony import */ var _app_shared_forms_input_smartadmin_input_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/forms/input/smartadmin-input.module */ "./src/app/shared/forms/input/smartadmin-input.module.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_features_forms_form_layouts_checkout_form_checkout_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/features/forms/form-layouts/checkout-form/checkout-form.component */ "./src/app/features/forms/form-layouts/checkout-form/checkout-form.component.ts");
/* harmony import */ var _app_features_forms_form_layouts_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/features/forms/form-layouts/registration-form/registration-form.component */ "./src/app/features/forms/form-layouts/registration-form/registration-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var FormLayoutsModule = /** @class */ (function () {
    function FormLayoutsModule() {
    }
    FormLayoutsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _form_layouts_routing__WEBPACK_IMPORTED_MODULE_6__["formLayoutsRouting"],
                _app_shared_forms_validation_smartadmin_validation_module__WEBPACK_IMPORTED_MODULE_7__["SmartadminValidationModule"],
                _app_shared_forms_input_smartadmin_input_module__WEBPACK_IMPORTED_MODULE_8__["SmartadminInputModule"]
            ],
            declarations: [_app_features_forms_form_layouts_checkout_form_checkout_form_component__WEBPACK_IMPORTED_MODULE_10__["CheckoutFormComponent"], _app_features_forms_form_layouts_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_11__["RegistrationFormComponent"],
                _review_form_review_form_component__WEBPACK_IMPORTED_MODULE_1__["ReviewFormComponent"], _order_form_order_form_component__WEBPACK_IMPORTED_MODULE_2__["OrderFormComponent"], _comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_3__["CommentFormComponent"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_4__["ContactFormComponent"],
                _form_layouts_component__WEBPACK_IMPORTED_MODULE_5__["FormLayoutsComponent"]
            ],
        })
    ], FormLayoutsModule);
    return FormLayoutsModule;
}());



/***/ }),

/***/ "./src/app/features/forms/form-layouts/form-layouts.routing.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/forms/form-layouts/form-layouts.routing.ts ***!
  \*********************************************************************/
/*! exports provided: formLayoutsRoutes, formLayoutsRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formLayoutsRoutes", function() { return formLayoutsRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formLayoutsRouting", function() { return formLayoutsRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_layouts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-layouts.component */ "./src/app/features/forms/form-layouts/form-layouts.component.ts");


var formLayoutsRoutes = [{
        path: '',
        component: _form_layouts_component__WEBPACK_IMPORTED_MODULE_1__["FormLayoutsComponent"]
    }];
var formLayoutsRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(formLayoutsRoutes);


/***/ }),

/***/ "./src/app/features/forms/form-layouts/order-form/order-form.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/features/forms/form-layouts/order-form/order-form.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"order-form\" class=\"smart-form\" novalidate=\"novalidate\" [saUiValidate]=\"validationOptions\">\n  <header>\n    Order services\n  </header>\n\n  <fieldset>\n    <div class=\"row\">\n      <section class=\"col col-6\">\n        <label class=\"input\"> <i class=\"icon-append fa fa-user\"></i>\n          <input type=\"text\" name=\"name\" placeholder=\"Name\"/>\n        </label>\n      </section>\n      <section class=\"col col-6\">\n        <label class=\"input\"> <i class=\"icon-append fa fa-briefcase\"></i>\n          <input type=\"text\" name=\"company\" placeholder=\"Company\"/>\n        </label>\n      </section>\n    </div>\n\n    <div class=\"row\">\n      <section class=\"col col-6\">\n        <label class=\"input\"> <i class=\"icon-append fa fa-envelope-o\"></i>\n          <input type=\"email\" name=\"email\" placeholder=\"E-mail\"/>\n        </label>\n      </section>\n      <section class=\"col col-6\">\n        <label class=\"input\"> <i class=\"icon-append fa fa-phone\"></i>\n          <input type=\"tel\" name=\"phone\" placeholder=\"Phone\" saMaskedInput=\"(999) 999-9999\" >\n        </label>\n      </section>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"row\">\n      <section class=\"col col-6\">\n        <label class=\"select\">\n          <select name=\"interested\">\n            <option value=\"0\" disabled>Interested in</option>\n            <option value=\"1\">design</option>\n            <option value=\"1\">development</option>\n            <option value=\"2\">illustration</option>\n            <option value=\"2\">branding</option>\n            <option value=\"3\">video</option>\n          </select> <i></i> </label>\n      </section>\n      <section class=\"col col-6\">\n        <label class=\"select\">\n          <select name=\"budget\">\n            <option value=\"0\" disabled>Budget</option>\n            <option value=\"1\">less than 5000$</option>\n            <option value=\"2\">5000$ - 10000$</option>\n            <option value=\"3\">10000$ - 20000$</option>\n            <option value=\"4\">more than 20000$</option>\n          </select> <i></i> </label>\n      </section>\n    </div>\n\n    <div class=\"row\">\n      <section class=\"col col-6\">\n        <label class=\"input\"> <i class=\"icon-append fa fa-calendar\"></i>\n          <input type=\"text\" name=\"startdate\" id=\"startdate\" [saUiDatepicker]=\"{minRestrict:'#finishdate'}\" placeholder=\"Expected start date\"/>\n        </label>\n      </section>\n      <section class=\"col col-6\">\n        <label class=\"input\"> <i class=\"icon-append fa fa-calendar\"></i>\n          <input type=\"text\" name=\"finishdate\" id=\"finishdate\" [saUiDatepicker]=\"{maxRestrict:'#startdate'}\" placeholder=\"Expected finish date\"/>\n        </label>\n      </section>\n    </div>\n\n    <section>\n      <sa-file-input></sa-file-input>\n    </section>\n\n    <section>\n      <label class=\"textarea\"> <i class=\"icon-append fa fa-comment\"></i>\n        <textarea rows=\"5\" name=\"comment\" placeholder=\"Tell us about your project\"></textarea>\n      </label>\n    </section>\n  </fieldset>\n  <footer>\n    <button type=\"submit\" class=\"btn btn-primary\">\n      Validate Form\n    </button>\n  </footer>\n</form>\n"

/***/ }),

/***/ "./src/app/features/forms/form-layouts/order-form/order-form.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/features/forms/form-layouts/order-form/order-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: OrderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFormComponent", function() { return OrderFormComponent; });
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

var OrderFormComponent = /** @class */ (function () {
    function OrderFormComponent() {
        this.validationOptions = {
            // Rules for form validation
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                },
                interested: {
                    required: true
                },
                budget: {
                    required: true
                }
            },
            // Messages for form validation
            messages: {
                name: {
                    required: 'Please enter your name'
                },
                email: {
                    required: 'Please enter your email address',
                    email: 'Please enter a VALID email address'
                },
                phone: {
                    required: 'Please enter your phone number'
                },
                interested: {
                    required: 'Please select interested service'
                },
                budget: {
                    required: 'Please select your budget'
                }
            },
            submitHandler: this.onSubmit
        };
    }
    OrderFormComponent.prototype.ngOnInit = function () {
    };
    OrderFormComponent.prototype.onSubmit = function () {
        console.log('\n', 'submit handler for validated form', '\n\n');
    };
    OrderFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-order-form',
            template: __webpack_require__(/*! ./order-form.component.html */ "./src/app/features/forms/form-layouts/order-form/order-form.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], OrderFormComponent);
    return OrderFormComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/form-layouts/registration-form/registration-form.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/features/forms/form-layouts/registration-form/registration-form.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"smart-form-register\" class=\"smart-form\"\n      [saUiValidate]=\"validationOptions\"\n      novalidate=\"novalidate\" >\n  <header>\n    Registration form\n  </header>\n\n  <fieldset>\n    <section>\n      <label class=\"input\"> <i class=\"icon-append fa fa-user\"></i>\n        <input type=\"text\" name=\"username\" placeholder=\"Username\"/>\n        <b class=\"tooltip tooltip-bottom-right\">Needed to enter the website</b> </label>\n    </section>\n\n\n    <section>\n      <label class=\"input\"> <i class=\"icon-append fa fa-envelope-o\"></i>\n        <input type=\"email\" name=\"email\" placeholder=\"Email address\"/>\n        <b class=\"tooltip tooltip-bottom-right\">Needed to verify your account</b> </label>\n    </section>\n\n    <section>\n      <label class=\"input\"> <i class=\"icon-append fa fa-lock\"></i>\n        <input type=\"password\" name=\"password\" placeholder=\"Password\" id=\"password\"/>\n        <b class=\"tooltip tooltip-bottom-right\">Don't forget your password</b> </label>\n    </section>\n\n    <section>\n      <label class=\"input\"> <i class=\"icon-append fa fa-lock\"></i>\n        <input type=\"password\" name=\"passwordConfirm\" placeholder=\"Confirm password\"/>\n        <b class=\"tooltip tooltip-bottom-right\">Don't forget your password</b> </label>\n    </section>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"row\">\n      <section class=\"col col-6\">\n        <label class=\"input\">\n          <input type=\"text\" name=\"firstname\" placeholder=\"First name\"\n          />\n        </label>\n      </section>\n      <section class=\"col col-6\">\n        <label class=\"input\">\n          <input type=\"text\" name=\"lastname\" placeholder=\"Last name\"\n          />\n        </label>\n      </section>\n    </div>\n\n    <div class=\"row\">\n      <section class=\"col col-6\">\n        <label class=\"select\">\n          <select name=\"gender\" >\n            <option value=\"0\" disabled>Gender</option>\n            <option value=\"1\">Male</option>\n            <option value=\"2\">Female</option>\n            <option value=\"3\">Prefer not to answer</option>\n          </select> <i></i> </label>\n      </section>\n      <section class=\"col col-6\">\n        <label class=\"input\"> <i class=\"icon-append fa fa-calendar\"></i>\n          <input type=\"text\" name=\"request\" placeholder=\"Request activation on\"\n                 saUiDatepicker date-format=\"dd/mm/yy\" />\n        </label>\n      </section>\n    </div>\n\n    <section>\n      <label class=\"checkbox\">\n        <input type=\"checkbox\" name=\"subscription\" id=\"subscription\"/>\n        <i></i>I want to receive news and special offers</label>\n      <label class=\"checkbox\">\n        <input type=\"checkbox\" name=\"terms\" id=\"terms\"/>\n        <i></i>I agree with the Terms and Conditions</label>\n    </section>\n  </fieldset>\n  <footer>\n    <button type=\"submit\" class=\"btn btn-primary\">\n      Validate Form\n    </button>\n  </footer>\n</form>\n"

/***/ }),

/***/ "./src/app/features/forms/form-layouts/registration-form/registration-form.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/forms/form-layouts/registration-form/registration-form.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: RegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function() { return RegistrationFormComponent; });
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

var RegistrationFormComponent = /** @class */ (function () {
    function RegistrationFormComponent() {
        this.validationOptions = {
            // Rules for form validation
            rules: {
                username: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 3,
                    maxlength: 20
                },
                passwordConfirm: {
                    required: true,
                    minlength: 3,
                    maxlength: 20,
                    equalTo: '#password'
                },
                firstname: {
                    required: true
                },
                lastname: {
                    required: true
                },
                gender: {
                    required: true
                },
                terms: {
                    required: true
                },
            },
            // Messages for form validation
            messages: {
                login: {
                    required: 'Please enter your login'
                },
                email: {
                    required: 'Please enter your email address',
                    email: 'Please enter a VALID email address'
                },
                password: {
                    required: 'Please enter your password'
                },
                passwordConfirm: {
                    required: 'Please enter your password one more time',
                    equalTo: 'Please enter the same password as above'
                },
                firstname: {
                    required: 'Please select your first name'
                },
                lastname: {
                    required: 'Please select your last name'
                },
                gender: {
                    required: 'Please select your gender'
                },
                terms: {
                    required: 'You must agree with Terms and Conditions'
                }
            },
            submitHandler: this.onSubmit
        };
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
    };
    RegistrationFormComponent.prototype.onSubmit = function () {
        console.log('\n', 'submit handler for validated form', '\n\n');
    };
    RegistrationFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-registration-form',
            template: __webpack_require__(/*! ./registration-form.component.html */ "./src/app/features/forms/form-layouts/registration-form/registration-form.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/form-layouts/review-form/review-form.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/features/forms/form-layouts/review-form/review-form.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"review-form\" class=\"smart-form\" novalidate=\"novalidate\" [saUiValidate]=\"validationOptions\">\n  <header>\n    Review form\n  </header>\n\n  <fieldset>\n    <section>\n      <label class=\"input\"> <i class=\"icon-append fa fa-user\"></i>\n        <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Your name\"/>\n      </label>\n    </section>\n\n    <section>\n      <label class=\"input\"> <i class=\"icon-append fa fa-envelope-o\"></i>\n        <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Your e-mail\"/>\n      </label>\n    </section>\n\n    <section>\n      <label class=\"label\"></label>\n      <label class=\"textarea\"> <i class=\"icon-append fa fa-comment\"></i>\n        <textarea rows=\"3\" name=\"review\" id=\"review\" placeholder=\"Text of the review\"></textarea>\n      </label>\n    </section>\n\n    <section>\n      <div class=\"rating\">\n        <input type=\"radio\" name=\"quality\" id=\"quality-5\"/>\n        <label for=\"quality-5\"><i class=\"fa fa-star\"></i></label>\n        <input type=\"radio\" name=\"quality\" id=\"quality-4\"/>\n        <label for=\"quality-4\"><i class=\"fa fa-star\"></i></label>\n        <input type=\"radio\" name=\"quality\" id=\"quality-3\"/>\n        <label for=\"quality-3\"><i class=\"fa fa-star\"></i></label>\n        <input type=\"radio\" name=\"quality\" id=\"quality-2\"/>\n        <label for=\"quality-2\"><i class=\"fa fa-star\"></i></label>\n        <input type=\"radio\" name=\"quality\" id=\"quality-1\"/>\n        <label for=\"quality-1\"><i class=\"fa fa-star\"></i></label>\n        Quality of the product\n      </div>\n\n      <div class=\"rating\">\n        <input type=\"radio\" name=\"reliability\" id=\"reliability-5\"/>\n        <label for=\"reliability-5\"><i class=\"fa fa-star\"></i></label>\n        <input type=\"radio\" name=\"reliability\" id=\"reliability-4\"/>\n        <label for=\"reliability-4\"><i class=\"fa fa-star\"></i></label>\n        <input type=\"radio\" name=\"reliability\" id=\"reliability-3\"/>\n        <label for=\"reliability-3\"><i class=\"fa fa-star\"></i></label>\n        <input type=\"radio\" name=\"reliability\" id=\"reliability-2\"/>\n        <label for=\"reliability-2\"><i class=\"fa fa-star\"></i></label>\n        <input type=\"radio\" name=\"reliability\" id=\"reliability-1\"/>\n        <label for=\"reliability-1\"><i class=\"fa fa-star\"></i></label>\n        Reliability of the product\n      </div>\n\n      <div class=\"rating\">\n        <input type=\"radio\" name=\"overall\" id=\"overall-5\"/>\n        <label for=\"overall-5\"><i class=\"fa fa-star\"></i></label>\n        <input type=\"radio\" name=\"overall\" id=\"overall-4\"/>\n        <label for=\"overall-4\"><i class=\"fa fa-star\"></i></label>\n        <input type=\"radio\" name=\"overall\" id=\"overall-3\"/>\n        <label for=\"overall-3\"><i class=\"fa fa-star\"></i></label>\n        <input type=\"radio\" name=\"overall\" id=\"overall-2\"/>\n        <label for=\"overall-2\"><i class=\"fa fa-star\"></i></label>\n        <input type=\"radio\" name=\"overall\" id=\"overall-1\"/>\n        <label for=\"overall-1\"><i class=\"fa fa-star\"></i></label>\n        Overall rating\n      </div>\n    </section>\n  </fieldset>\n  <footer>\n    <button type=\"submit\" class=\"btn btn-primary\">\n      Validate Form\n    </button>\n  </footer>\n</form>\n"

/***/ }),

/***/ "./src/app/features/forms/form-layouts/review-form/review-form.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/features/forms/form-layouts/review-form/review-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ReviewFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewFormComponent", function() { return ReviewFormComponent; });
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

var ReviewFormComponent = /** @class */ (function () {
    function ReviewFormComponent() {
        this.validationOptions = {
            // Rules for form validation
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                review: {
                    required: true,
                    minlength: 20
                },
                quality: {
                    required: true
                },
                reliability: {
                    required: true
                },
                overall: {
                    required: true
                }
            },
            // Messages for form validation
            messages: {
                name: {
                    required: 'Please enter your name'
                },
                email: {
                    required: 'Please enter your email address',
                    email: '<i class="fa fa-warning"></i><strong>Please enter a VALID email addres</strong>'
                },
                review: {
                    required: 'Please enter your review'
                },
                quality: {
                    required: 'Please rate quality of the product'
                },
                reliability: {
                    required: 'Please rate reliability of the product'
                },
                overall: {
                    required: 'Please rate the product'
                }
            },
            submitHandler: this.onSubmit
        };
    }
    ReviewFormComponent.prototype.ngOnInit = function () {
    };
    ReviewFormComponent.prototype.onSubmit = function () {
        console.log('\n', 'submit handler for validated form', '\n\n');
    };
    ReviewFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-review-form',
            template: __webpack_require__(/*! ./review-form.component.html */ "./src/app/features/forms/form-layouts/review-form/review-form.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ReviewFormComponent);
    return ReviewFormComponent;
}());



/***/ }),

/***/ "./src/app/shared/forms/common/countries.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/forms/common/countries.ts ***!
  \**************************************************/
/*! exports provided: COUNTRIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTRIES", function() { return COUNTRIES; });
var COUNTRIES = [
    { key: "244", value: "Aaland Islands" },
    { key: "1", value: "Afghanistan" },
    { key: "2", value: "Albania" },
    { key: "3", value: "Algeria" },
    { key: "4", value: "American Samoa" },
    { key: "5", value: "Andorra" },
    { key: "6", value: "Angola" },
    { key: "7", value: "Anguilla" },
    { key: "8", value: "Antarctica" },
    { key: "9", value: "Antigua and Barbuda" },
    { key: "10", value: "Argentina" },
    { key: "11", value: "Armenia" },
    { key: "12", value: "Aruba" },
    { key: "13", value: "Australia" },
    { key: "14", value: "Austria" },
    { key: "15", value: "Azerbaijan" },
    { key: "16", value: "Bahamas" },
    { key: "17", value: "Bahrain" },
    { key: "18", value: "Bangladesh" },
    { key: "19", value: "Barbados" },
    { key: "20", value: "Belarus" },
    { key: "21", value: "Belgium" },
    { key: "22", value: "Belize" },
    { key: "23", value: "Benin" },
    { key: "24", value: "Bermuda" },
    { key: "25", value: "Bhutan" },
    { key: "26", value: "Bolivia" },
    { key: "245", value: "Bonaire, Sint Eustatius and Saba" },
    { key: "27", value: "Bosnia and Herzegovina" },
    { key: "28", value: "Botswana" },
    { key: "29", value: "Bouvet Island" },
    { key: "30", value: "Brazil" },
    { key: "31", value: "British Indian Ocean Territory" },
    { key: "32", value: "Brunei Darussalam" },
    { key: "33", value: "Bulgaria" },
    { key: "34", value: "Burkina Faso" },
    { key: "35", value: "Burundi" },
    { key: "36", value: "Cambodia" },
    { key: "37", value: "Cameroon" },
    { key: "38", value: "Canada" },
    { key: "251", value: "Canary Islands" },
    { key: "39", value: "Cape Verde" },
    { key: "40", value: "Cayman Islands" },
    { key: "41", value: "Central African Republic" },
    { key: "42", value: "Chad" },
    { key: "43", value: "Chile" },
    { key: "44", value: "China" },
    { key: "45", value: "Christmas Island" },
    { key: "46", value: "Cocos (Keeling) Islands" },
    { key: "47", value: "Colombia" },
    { key: "48", value: "Comoros" },
    { key: "49", value: "Congo" },
    { key: "50", value: "Cook Islands" },
    { key: "51", value: "Costa Rica" },
    { key: "52", value: "Cote D'Ivoire" },
    { key: "53", value: "Croatia" },
    { key: "54", value: "Cuba" },
    { key: "246", value: "Curacao" },
    { key: "55", value: "Cyprus" },
    { key: "56", value: "Czech Republic" },
    { key: "237", value: "Democratic Republic of Congo" },
    { key: "57", value: "Denmark" },
    { key: "58", value: "Djibouti" },
    { key: "59", value: "Dominica" },
    { key: "60", value: "Dominican Republic" },
    { key: "61", value: "East Timor" },
    { key: "62", value: "Ecuador" },
    { key: "63", value: "Egypt" },
    { key: "64", value: "El Salvador" },
    { key: "65", value: "Equatorial Guinea" },
    { key: "66", value: "Eritrea" },
    { key: "67", value: "Estonia" },
    { key: "68", value: "Ethiopia" },
    { key: "69", value: "Falkland Islands (Malvinas)" },
    { key: "70", value: "Faroe Islands" },
    { key: "71", value: "Fiji" },
    { key: "72", value: "Finland" },
    { key: "74", value: "France, skypolitan" },
    { key: "75", value: "French Guiana" },
    { key: "76", value: "French Polynesia" },
    { key: "77", value: "French Southern Territories" },
    { key: "126", value: "FYROM" },
    { key: "78", value: "Gabon" },
    { key: "79", value: "Gambia" },
    { key: "80", value: "Georgia" },
    { key: "81", value: "Germany" },
    { key: "82", value: "Ghana" },
    { key: "83", value: "Gibraltar" },
    { key: "84", value: "Greece" },
    { key: "85", value: "Greenland" },
    { key: "86", value: "Grenada" },
    { key: "87", value: "Guadeloupe" },
    { key: "88", value: "Guam" },
    { key: "89", value: "Guatemala" },
    { key: "241", value: "Guernsey" },
    { key: "90", value: "Guinea" },
    { key: "91", value: "Guinea-Bissau" },
    { key: "92", value: "Guyana" },
    { key: "93", value: "Haiti" },
    { key: "94", value: "Heard and Mc Donald Islands" },
    { key: "95", value: "Honduras" },
    { key: "96", value: "Hong Kong" },
    { key: "97", value: "Hungary" },
    { key: "98", value: "Iceland" },
    { key: "99", value: "India" },
    { key: "100", value: "Indonesia" },
    { key: "101", value: "Iran (Islamic Republic of)" },
    { key: "102", value: "Iraq" },
    { key: "103", value: "Ireland" },
    { key: "104", value: "Israel" },
    { key: "105", value: "Italy" },
    { key: "106", value: "Jamaica" },
    { key: "107", value: "Japan" },
    { key: "240", value: "Jersey" },
    { key: "108", value: "Jordan" },
    { key: "109", value: "Kazakhstan" },
    { key: "110", value: "Kenya" },
    { key: "111", value: "Kiribati" },
    { key: "113", value: "Korea, Republic of" },
    { key: "114", value: "Kuwait" },
    { key: "115", value: "Kyrgyzstan" },
    { key: "116", value: "Lao People's Democratic Republic" },
    { key: "117", value: "Latvia" },
    { key: "118", value: "Lebanon" },
    { key: "119", value: "Lesotho" },
    { key: "120", value: "Liberia" },
    { key: "121", value: "Libyan Arab Jamahiriya" },
    { key: "122", value: "Liechtenstein" },
    { key: "123", value: "Lithuania" },
    { key: "124", value: "Luxembourg" },
    { key: "125", value: "Macau" },
    { key: "127", value: "Madagascar" },
    { key: "128", value: "Malawi" },
    { key: "129", value: "Malaysia" },
    { key: "130", value: "Maldives" },
    { key: "131", value: "Mali" },
    { key: "132", value: "Malta" },
    { key: "133", value: "Marshall Islands" },
    { key: "134", value: "Martinique" },
    { key: "135", value: "Mauritania" },
    { key: "136", value: "Mauritius" },
    { key: "137", value: "Mayotte" },
    { key: "138", value: "Mexico" },
    { key: "139", value: "Micronesia, Federated States of" },
    { key: "140", value: "Moldova, Republic of" },
    { key: "141", value: "Monaco" },
    { key: "142", value: "Mongolia" },
    { key: "242", value: "Montenegro" },
    { key: "143", value: "Montserrat" },
    { key: "144", value: "Morocco" },
    { key: "145", value: "Mozambique" },
    { key: "146", value: "Myanmar" },
    { key: "147", value: "Namibia" },
    { key: "148", value: "Nauru" },
    { key: "149", value: "Nepal" },
    { key: "150", value: "Netherlands" },
    { key: "151", value: "Netherlands Antilles" },
    { key: "152", value: "New Caledonia" },
    { key: "153", value: "New Zealand" },
    { key: "154", value: "Nicaragua" },
    { key: "155", value: "Niger" },
    { key: "156", value: "Nigeria" },
    { key: "157", value: "Niue" },
    { key: "158", value: "Norfolk Island" },
    { key: "112", value: "North Korea" },
    { key: "159", value: "Northern Mariana Islands" },
    { key: "160", value: "Norway" },
    { key: "161", value: "Oman" },
    { key: "162", value: "Pakistan" },
    { key: "163", value: "Palau" },
    { key: "247", value: "Palestinian Territory, Occupied" },
    { key: "164", value: "Panama" },
    { key: "165", value: "Papua New Guinea" },
    { key: "166", value: "Paraguay" },
    { key: "167", value: "Peru" },
    { key: "168", value: "Philippines" },
    { key: "169", value: "Pitcairn" },
    { key: "170", value: "Poland" },
    { key: "171", value: "Portugal" },
    { key: "172", value: "Puerto Rico" },
    { key: "173", value: "Qatar" },
    { key: "174", value: "Reunion" },
    { key: "175", value: "Romania" },
    { key: "176", value: "Russian Federation" },
    { key: "177", value: "Rwanda" },
    { key: "178", value: "Saint Kitts and Nevis" },
    { key: "179", value: "Saint Lucia" },
    { key: "180", value: "Saint Vincent and the Grenadines" },
    { key: "181", value: "Samoa" },
    { key: "182", value: "San Marino" },
    { key: "183", value: "Sao Tome and Principe" },
    { key: "184", value: "Saudi Arabia" },
    { key: "185", value: "Senegal" },
    { key: "243", value: "Serbia" },
    { key: "186", value: "Seychelles" },
    { key: "187", value: "Sierra Leone" },
    { key: "188", value: "Singapore" },
    { key: "189", value: "Slovak Republic" },
    { key: "190", value: "Slovenia" },
    { key: "191", value: "Solomon Islands" },
    { key: "192", value: "Somalia" },
    { key: "193", value: "South Africa" },
    { key: "194", value: "South Georgia &amp; South Sandwich Islands" },
    { key: "248", value: "South Sudan" },
    { key: "195", value: "Spain" },
    { key: "196", value: "Sri Lanka" },
    { key: "249", value: "St. Barthelemy" },
    { key: "197", value: "St. Helena" },
    { key: "250", value: "St. Martin (French part)" },
    { key: "198", value: "St. Pierre and Miquelon" },
    { key: "199", value: "Sudan" },
    { key: "200", value: "Suriname" },
    { key: "201", value: "Svalbard and Jan Mayen Islands" },
    { key: "202", value: "Swaziland" },
    { key: "203", value: "Sweden" },
    { key: "204", value: "Switzerland" },
    { key: "205", value: "Syrian Arab Republic" },
    { key: "206", value: "Taiwan" },
    { key: "207", value: "Tajikistan" },
    { key: "208", value: "Tanzania, United Republic of" },
    { key: "209", value: "Thailand" },
    { key: "210", value: "Togo" },
    { key: "211", value: "Tokelau" },
    { key: "212", value: "Tonga" },
    { key: "213", value: "Trinidad and Tobago" },
    { key: "214", value: "Tunisia" },
    { key: "215", value: "Turkey" },
    { key: "216", value: "Turkmenistan" },
    { key: "217", value: "Turks and Caicos Islands" },
    { key: "218", value: "Tuvalu" },
    { key: "219", value: "Uganda" },
    { key: "220", value: "Ukraine" },
    { key: "221", value: "United Arab Emirates" },
    { key: "222", value: "United Kingdom" },
    { key: "223", value: "United States" },
    { key: "224", value: "United States Minor Outlying Islands" },
    { key: "225", value: "Uruguay" },
    { key: "226", value: "Uzbekistan" },
    { key: "227", value: "Vanuatu" },
    { key: "228", value: "Vatican City State (Holy See)" },
    { key: "229", value: "Venezuela" },
    { key: "230", value: "Viet Nam" },
    { key: "231", value: "Virgin Islands (British)" },
    { key: "232", value: "Virgin Islands (U.S.)" },
    { key: "233", value: "Wallis and Futuna Islands" },
    { key: "234", value: "Western Sahara" },
    { key: "235", value: "Yemen" },
    { key: "238", value: "Zambia" },
    { key: "239", value: "Zimbabwe" }
];


/***/ }),

/***/ "./src/app/shared/forms/common/index.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/forms/common/index.ts ***!
  \**********************************************/
/*! exports provided: COUNTRIES, VALIDATION_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countries */ "./src/app/shared/forms/common/countries.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COUNTRIES", function() { return _countries__WEBPACK_IMPORTED_MODULE_0__["COUNTRIES"]; });

/* harmony import */ var _validation_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation-options */ "./src/app/shared/forms/common/validation-options.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VALIDATION_OPTIONS", function() { return _validation_options__WEBPACK_IMPORTED_MODULE_1__["VALIDATION_OPTIONS"]; });





/***/ }),

/***/ "./src/app/shared/forms/common/validation-options.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/forms/common/validation-options.ts ***!
  \***********************************************************/
/*! exports provided: VALIDATION_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATION_OPTIONS", function() { return VALIDATION_OPTIONS; });
var VALIDATION_OPTIONS = {
    errorElement: 'em',
    errorClass: 'invalid',
    highlight: function (element, errorClass, validClass) {
        $(element).addClass(errorClass).removeClass(validClass);
        $(element).parent().addClass('state-error').removeClass('state-success');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass(errorClass).addClass(validClass);
        $(element).parent().removeClass('state-error').addClass('state-success');
    },
    errorPlacement: function (error, element) {
        error.insertAfter(element.parent());
    }
};


/***/ })

}]);
//# sourceMappingURL=form-layouts-form-layouts-module.js.map