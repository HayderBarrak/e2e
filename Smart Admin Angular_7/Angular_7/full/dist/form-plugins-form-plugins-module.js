(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-plugins-form-plugins-module"],{

/***/ "./src/app/features/forms/form-plugins/duallistbox-widget/duallistbox-widget.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/features/forms/form-plugins/duallistbox-widget/duallistbox-widget.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [custombutton]=\"false\">\n\n  <header>\n    <span class=\"widget-icon\"> <i class=\"fa fa-edit\"></i> </span>\n    <h2>Bootstrap Duallist Box  </h2>\n\n  </header>\n\n  <!-- widget div-->\n  <div>\n\n\n    <!-- widget content -->\n    <div class=\"widget-body\">\n\n\n      <duallistbox size=\"10\"\n                   [items]=\"options\"\n                   (itemsChange)=\"onChange($event)\"\n      [nonSelectedFilter]=\"filter\">\n\n      </duallistbox>\n\n    </div>\n    <!-- end widget content -->\n\n  </div>\n  <!-- end widget div -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/forms/form-plugins/duallistbox-widget/duallistbox-widget.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/features/forms/form-plugins/duallistbox-widget/duallistbox-widget.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DuallistboxWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuallistboxWidgetComponent", function() { return DuallistboxWidgetComponent; });
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

var DuallistboxWidgetComponent = /** @class */ (function () {
    function DuallistboxWidgetComponent() {
        this.options = [{ key: "option1", value: "Option 1" },
            { key: "option2", value: "Option 2" },
            { key: "option3", value: "Option 3" },
            { key: "option4", value: "Option 4" },
            { key: "option5", value: "Option 5" },
            { key: "option6", value: "Option 6" },
            { key: "option7", value: "Option 7" },
            { key: "option8", value: "Option 8", selected: true },
            { key: "option9", value: "Option 9", selected: true },
            { key: "option0", value: "Option 10" },
            { key: "option0", value: "Option 11" },
            { key: "option0", value: "Option 12" },
            { key: "option0", value: "Option 13" },
            { key: "option0", value: "Option 14" },
            { key: "option0", value: "Option 15" },
            { key: "option0", value: "Option 16" },
            { key: "option0", value: "Option 17" },
            { key: "option0", value: "Option 18" },
            { key: "option0", value: "Option 19" },
            { key: "option0", value: "Option 20" }];
        this.filter = 'ion ([7-9]|[1][0-2])';
    }
    DuallistboxWidgetComponent.prototype.onChange = function ($event) {
        console.log('\n items', $event, '\n\n');
        console.log('\n options', this.options, '\n\n');
    };
    DuallistboxWidgetComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DuallistboxWidgetComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DuallistboxWidgetComponent.prototype, "filter", void 0);
    DuallistboxWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'duallistbox-widget',
            template: __webpack_require__(/*! ./duallistbox-widget.component.html */ "./src/app/features/forms/form-plugins/duallistbox-widget/duallistbox-widget.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], DuallistboxWidgetComponent);
    return DuallistboxWidgetComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/form-plugins/form-plugins.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/features/forms/form-plugins/form-plugins.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Forms', 'Form Plugins']\" icon=\"pencil-square-o\"\n                        class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n\n  <!-- widget grid -->\n  <sa-widgets-grid>\n\n    <!-- row -->\n    <div class=\"row\">\n\n      <!-- NEW COL START -->\n      <article class=\"col-sm-12\">\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <x-editable-widget></x-editable-widget>\n        <!-- end widget -->\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [custombutton]=\"false\">\n          <!-- widget options:\n          usage: <div sa-widget [editbutton]=\"false\">\n\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [custombutton]=\"false\"\n          [collapsed]=\"true\"\n          [sortable]=\"false\"\n\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-edit\"></i> </span>\n            <h2>Sliders </h2>\n\n          </header>\n\n          <!-- widget div-->\n          <div>\n\n\n            <!-- widget content -->\n            <div class=\"widget-body\">\n\n              <form>\n\n                <fieldset>\n                  <legend>\n                    Smart Scale Slider\n                  </legend>\n                  <div class=\"row\">\n                    <div class=\"col-sm-6\">\n\n                      <div class=\"form-group\">\n                        <input ionSlider type=\"text\" data-min=\"0\" data-max=\"5000\" data-from=\"1000\"\n                               data-to=\"4000\" data-type=\"double\" data-step=\"1\" data-prefix=\"$\" data-prettify=\"false\"\n                               data-hasgrid=\"true\">\n                      </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n\n                      <div class=\"form-group\">\n                        <input ionSlider type=\"text\" data-min=\"10000\"  data-max=\"100000\" data-type=\"double\"\n                               data-step=\"500\" data-postfix=\" €\" data-from=\"3000\" data-to=\"90000\" data-hasgrid=\"true\">\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"col-sm-6\">\n\n                      <div class=\"form-group\">\n                        <input ionSlider type=\"text\" data-min=\"0\" data-from=\"2.3\" data-max=\"10\"\n                               data-type=\"single\" data-step=\"0.1\" data-postfix=\" mm\" data-prettify=\"false\"\n                               data-hasgrid=\"true\">\n                      </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n\n                      <div class=\"form-group\">\n                        <input ionSlider type=\"text\" data-min=\"-50\" data-max=\"50\" data-from=\"5\"\n                               data-to=\"25\" data-type=\"double\" data-step=\"1\" data-postfix=\"°\" data-prettify=\"false\"\n                               data-hasgrid=\"true\">\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"col-sm-12\">\n\n                      <div class=\"form-group\">\n                        <input ionSlider type=\"text\" data-min=\"0\" data-from=\"0\" data-max=\"10\"\n                               data-type=\"single\" data-step=\"0.1\" data-postfix=\" mm\" data-prettify=\"false\"\n                               data-hasgrid=\"true\">\n                      </div>\n                    </div>\n                  </div>\n\n                </fieldset>\n\n                <fieldset>\n                  <legend>\n                    noUi Slider\n                  </legend>\n                  <div class=\"row\">\n                    <div class=\"col-sm-6\">\n\n                      <div class=\"form-group\">\n                        <label>Default</label>\n                        <div [nouiSlider]=\"{\n                          start: 55,\n                          range: {\n                            min:2,\n                            max: 100\n                          },\n                          connect: 'lower'\n                        }\"></div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n\n                      <div class=\"form-group\">\n                        <label>Range slider (<span class=\"nouislider-value\">{{noUiSliderValue}}</span>)</label>\n                        <div [nouiSlider]=\"{start: noUiSliderValue,\n                          range: {\n                            min: 0,\n                            max: 1000\n                          },\n                          connect: true,\n                          step: 1\n                        }\" (change)=\"noUiSliderValue = $event\"></div>\n                      </div>\n\n                    </div>\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                      <div class=\"form-group\">\n                        <label>Default Slider (disabled)</label>\n                        <div [nouiSlider]=\"{\n                          start: 50,\n                          range: {\n                            min: 0,\n                            max: 100\n                          },\n                          connect: 'lower'\n                        }\" disabled=\"disabled\"></div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n\n                      <div class=\"form-group\">\n                        <label>Skips a beat</label>\n                        <div [nouiSlider]=\"{\n                          start: [55, 130],\n                          range: {\n                            min:0,\n                            max: 300\n                          },\n                          connect: true,\n                          step: 50\n                        }\" ></div>\n                      </div>\n\n                    </div>\n                  </div>\n                </fieldset>\n\n              </form>\n\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n\n\n        <duallistbox-widget></duallistbox-widget>\n\n      </article>\n      <!-- END COL -->\n\n    </div>\n\n    <!-- end row -->\n\n    <!-- START ROW -->\n\n    <div class=\"row\">\n\n      <!-- NEW COL START -->\n      <article class=\"col-sm-12 col-md-12 col-lg-6\">\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [custombutton]=\"false\">\n          <!-- widget options:\n          usage: <div sa-widget [editbutton]=\"false\">\n\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [custombutton]=\"false\"\n          [collapsed]=\"true\"\n          [sortable]=\"false\"\n\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-edit\"></i> </span>\n            <h2>Plugins & Enhancers </h2>\n\n          </header>\n\n          <!-- widget div-->\n          <div>\n\n\n            <!-- widget content -->\n            <div class=\"widget-body\">\n\n              <form class=\"\">\n\n                <fieldset>\n                  <legend>\n                    Select 2\n                  </legend>\n\n                  <div class=\"form-group\">\n                    <label>Select2 Plugin (select)</label>\n                    <select select2 style=\"width:100%\" class=\"select2\">\n                      <optgroup label=\"Alaskan/Hawaiian Time Zone\">\n                        <option value=\"AK\">Alaska</option>\n                        <option value=\"HI\">Hawaii</option>\n                      </optgroup>\n                      <optgroup label=\"Pacific Time Zone\">\n                        <option value=\"CA\">California</option>\n                        <option value=\"NV\">Nevada</option>\n                        <option value=\"OR\">Oregon</option>\n                        <option value=\"WA\">Washington</option>\n                      </optgroup>\n                      <optgroup label=\"Mountain Time Zone\">\n                        <option value=\"AZ\">Arizona</option>\n                        <option value=\"CO\">Colorado</option>\n                        <option value=\"ID\">Idaho</option>\n                        <option value=\"MT\">Montana</option>\n                        <option value=\"NE\">Nebraska</option>\n                        <option value=\"NM\">New Mexico</option>\n                        <option value=\"ND\">North Dakota</option>\n                        <option value=\"UT\">Utah</option>\n                        <option value=\"WY\">Wyoming</option>\n                      </optgroup>\n                      <optgroup label=\"Central Time Zone\">\n                        <option value=\"AL\">Alabama</option>\n                        <option value=\"AR\">Arkansas</option>\n                        <option value=\"IL\">Illinois</option>\n                        <option value=\"IA\">Iowa</option>\n                        <option value=\"KS\">Kansas</option>\n                        <option value=\"KY\">Kentucky</option>\n                        <option value=\"LA\">Louisiana</option>\n                        <option value=\"MN\">Minnesota</option>\n                        <option value=\"MS\">Mississippi</option>\n                        <option value=\"MO\">Missouri</option>\n                        <option value=\"OK\">Oklahoma</option>\n                        <option value=\"SD\">South Dakota</option>\n                        <option value=\"TX\">Texas</option>\n                        <option value=\"TN\">Tennessee</option>\n                        <option value=\"WI\">Wisconsin</option>\n                      </optgroup>\n                      <optgroup label=\"Eastern Time Zone\">\n                        <option value=\"CT\">Connecticut</option>\n                        <option value=\"DE\">Delaware</option>\n                        <option value=\"FL\">Florida</option>\n                        <option value=\"GA\">Georgia</option>\n                        <option value=\"IN\">Indiana</option>\n                        <option value=\"ME\">Maine</option>\n                        <option value=\"MD\">Maryland</option>\n                        <option value=\"MA\">Massachusetts</option>\n                        <option value=\"MI\">Michigan</option>\n                        <option value=\"NH\">New Hampshire</option>\n                        <option value=\"NJ\">New Jersey</option>\n                        <option value=\"NY\">New York</option>\n                        <option value=\"NC\">North Carolina</option>\n                        <option value=\"OH\">Ohio</option>\n                        <option value=\"PA\">Pennsylvania</option>\n                        <option value=\"RI\">Rhode Island</option>\n                        <option value=\"SC\">South Carolina</option>\n                        <option value=\"VT\">Vermont</option>\n                        <option value=\"VA\">Virginia</option>\n                        <option value=\"WV\">West Virginia</option>\n                      </optgroup>\n                    </select>\n\n                    <div class=\"note\">\n                      <strong>Usage:</strong> &lt;select select2 style=&quot;width:100%&quot; class=&quot;select2&quot;\n                      &quot;&gt;...&lt;/select&gt;\n                    </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label>Select2 Plugin (multi-select)</label>\n                    <select select2 multiple style=\"width:100%\" class=\"select2\">\n                      <optgroup label=\"Alaskan/Hawaiian Time Zone\">\n                        <option value=\"AK\">Alaska</option>\n                        <option value=\"HI\">Hawaii</option>\n                      </optgroup>\n                      <optgroup label=\"Pacific Time Zone\">\n                        <option value=\"CA\">California</option>\n                        <option value=\"NV\" selected=\"selected\">Nevada</option>\n                        <option value=\"OR\">Oregon</option>\n                        <option value=\"WA\">Washington</option>\n                      </optgroup>\n                      <optgroup label=\"Mountain Time Zone\">\n                        <option value=\"AZ\">Arizona</option>\n                        <option value=\"CO\">Colorado</option>\n                        <option value=\"ID\">Idaho</option>\n                        <option value=\"MT\" selected=\"selected\">Montana</option>\n                        <option value=\"NE\">Nebraska</option>\n                        <option value=\"NM\">New Mexico</option>\n                        <option value=\"ND\">North Dakota</option>\n                        <option value=\"UT\">Utah</option>\n                        <option value=\"WY\">Wyoming</option>\n                      </optgroup>\n                      <optgroup label=\"Central Time Zone\">\n                        <option value=\"AL\">Alabama</option>\n                        <option value=\"AR\">Arkansas</option>\n                        <option value=\"IL\">Illinois</option>\n                        <option value=\"IA\">Iowa</option>\n                        <option value=\"KS\">Kansas</option>\n                        <option value=\"KY\">Kentucky</option>\n                        <option value=\"LA\">Louisiana</option>\n                        <option value=\"MN\">Minnesota</option>\n                        <option value=\"MS\">Mississippi</option>\n                        <option value=\"MO\">Missouri</option>\n                        <option value=\"OK\">Oklahoma</option>\n                        <option value=\"SD\">South Dakota</option>\n                        <option value=\"TX\">Texas</option>\n                        <option value=\"TN\">Tennessee</option>\n                        <option value=\"WI\">Wisconsin</option>\n                      </optgroup>\n                      <optgroup label=\"Eastern Time Zone\">\n                        <option value=\"CT\">Connecticut</option>\n                        <option value=\"DE\">Delaware</option>\n                        <option value=\"FL\">Florida</option>\n                        <option value=\"GA\">Georgia</option>\n                        <option value=\"IN\">Indiana</option>\n                        <option value=\"ME\">Maine</option>\n                        <option value=\"MD\">Maryland</option>\n                        <option value=\"MA\">Massachusetts</option>\n                        <option value=\"MI\" selected=\"selected\">Michigan</option>\n                        <option value=\"NH\">New Hampshire</option>\n                        <option value=\"NJ\">New Jersey</option>\n                        <option value=\"NY\">New York</option>\n                        <option value=\"NC\">North Carolina</option>\n                        <option value=\"OH\">Ohio</option>\n                        <option value=\"PA\">Pennsylvania</option>\n                        <option value=\"RI\">Rhode Island</option>\n                        <option value=\"SC\">South Carolina</option>\n                        <option value=\"VT\">Vermont</option>\n                        <option value=\"VA\">Virginia</option>\n                        <option value=\"WV\">West Virginia</option>\n                      </optgroup>\n                    </select>\n\n                    <div class=\"note\">\n                      <strong>Usage:</strong> &lt;select select2 multiple style=&quot;width:100%&quot; class=&quot;select2&quot;\n                      &gt;...&lt;/select&gt;\n                    </div>\n                  </div>\n\n                </fieldset>\n\n                <fieldset>\n                  <legend>\n                    Date Picker (Jquery UI)\n                  </legend>\n\n                  <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                      <div class=\"form-group\">\n                        <label>Select a date (single):</label>\n                        <div class=\"input-group\">\n                          <input type=\"text\" name=\"mydate\" placeholder=\"Select a date\" class=\"form-control datepicker\"\n                                 [saUiDatepicker]=\"{\n                                    dateFormat: 'dd/mm/yy'\n                                 }\" >\n                          <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-sm-12\">\n                      <label>Select a date (range):</label>\n                    </div>\n                    <div class=\"col-sm-6\">\n\n                      <div class=\"form-group\">\n                        <div class=\"input-group\">\n                          <input class=\"form-control\" id=\"from\"  [saUiDatepicker]=\"{\n                                    dateFormat: 'dd/mm/yy',\n                                    defaultDate: '+1w',\n                                    changesMonth: true,\n                                    numberOfMonth: 3,\n                                    minRestrict: '#to'\n                                 }\"\n                              type=\"text\" placeholder=\"From\">\n                          <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n                        </div>\n                      </div>\n\n                    </div>\n                    <div class=\"col-sm-6\">\n\n                      <div class=\"form-group\">\n                        <div class=\"input-group\">\n                          <input class=\"form-control\" id=\"to\" [saUiDatepicker]=\"{\n                                    dateFormat: 'dd/mm/yy',\n                                    defaultDate: '+3w',\n                                    changesMonth: true,\n                                    numberOfMonth: 3,\n                                    maxRestrict: '#from'\n                                 }\"\n                                 type=\"text\" placeholder=\"Select a date\">\n                          <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n                        </div>\n                      </div>\n\n                    </div>\n\n                  </div>\n                </fieldset>\n\n                <fieldset>\n                  <legend>\n                    Bootstrap Timepicker\n                  </legend>\n\n                  <div class=\"row\">\n\n                    <div class=\"col-sm-12\">\n                      <div class=\"row\">\n\n                        <div class=\"col-sm-12\">\n                          <div class=\"form-group\">\n                            <label>Timepicker (default):</label>\n                            <div class=\"input-group\">\n                              <input class=\"form-control\" smartTimepicker type=\"text\"\n                                     placeholder=\"Select time\">\n                              <span class=\"input-group-addon\"><i class=\"fa fa-clock-o\"></i></span>\n                            </div>\n                          </div>\n                        </div>\n\n                      </div>\n                    </div>\n\n                  </div>\n\n                </fieldset>\n\n                <fieldset>\n                  <legend>\n                    Clockpicker\n                  </legend>\n\n                  <div class=\"row\">\n\n                    <div class=\"col-sm-12\">\n                      <div class=\"row\">\n\n                        <div class=\"col-sm-12\">\n                          <div class=\"form-group\">\n                            <label>Clockpicker:</label>\n                            <div class=\"input-group\">\n                              <input class=\"form-control\" smartClockpicker type=\"text\"\n                                     placeholder=\"Select time\" data-autoclose=\"true\">\n                              <span class=\"input-group-addon\"><i class=\"fa fa-clock-o\"></i></span>\n                            </div>\n                          </div>\n                        </div>\n\n                      </div>\n                    </div>\n\n                  </div>\n\n                </fieldset>\n\n                <fieldset>\n                  <legend>\n                    Spinners\n                  </legend>\n\n                  <div class=\"row\">\n\n                    <div class=\"col-sm-6 col-md-4 col-lg-4\">\n\n                      <div class=\"form-group\">\n                        <label>Default</label>\n                        <input class=\"form-control spinner-left\" name=\"spinner\" value=\"1\"\n                               [saUiSpinner]>\n                      </div>\n\n                    </div>\n                    <div class=\"col-sm-6 col-md-4 col-lg-4\">\n                      <div class=\"form-group\">\n                        <label>Decimal spinner</label>\n                        <input class=\"form-control\" id=\"spinner-decimal\" name=\"spinner-decimal\" value=\"7.99\"\n                               saUiSpinner=\"decimal\">\n                      </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4 col-lg-4\">\n                      <div class=\"form-group\">\n                        <label>Increment spinner</label>\n                        <input class=\"form-control spinner-both\" name=\"spinner-currency\" value=\"5\"\n                               saUiSpinner=\"currency\">\n                      </div>\n                    </div>\n                  </div>\n\n                </fieldset>\n\n                <fieldset>\n                  <legend>\n                    Color Pickers\n                  </legend>\n\n                  <div class=\"row\">\n\n                    <div class=\"col-sm-6\">\n\n                      <div class=\"form-group\">\n                        <label>Color Picker (HEX)</label>\n                        <input class=\"form-control\" saColorpicker type=\"text\" value=\"#8fff00\" />\n                      </div>\n\n                    </div>\n                    <div class=\"col-sm-6\">\n                      <div class=\"form-group\">\n                        <label>Color Picker (RGBA)</label>\n                        <input class=\"form-control\" [saColorpicker]=\"{\n                          format: 'rgba'\n                        }\" type=\"text\" value=\"rgba(0,194,255,0.78)\" />\n                      </div>\n                    </div>\n                  </div>\n\n                </fieldset>\n\n                <fieldset>\n                  <legend>\n                    Tags\n                  </legend>\n\n                  <div class=\"row\">\n\n                    <div class=\"col-sm-12\">\n                      <div class=\"form-group\">\n                        <label>Type and enter to add tag</label>\n                        <input smartTags class=\"form-control tagsinput\"\n                               value=\"Amsterdam,Washington,Sydney,Beijing,Cairo\" data-role=\"tagsinput\">\n                      </div>\n                    </div>\n\n                  </div>\n\n                </fieldset>\n\n                <div class=\"form-actions\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <button class=\"btn btn-default\" type=\"submit\">\n                        Cancel\n                      </button>\n                      <button class=\"btn btn-primary\" type=\"submit\">\n                        <i class=\"fa fa-save\"></i>\n                        Submit\n                      </button>\n                    </div>\n                  </div>\n                </div>\n\n              </form>\n\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n\n      </article>\n      <!-- END COL -->\n\n      <!-- NEW COL START -->\n      <article class=\"col-sm-12 col-md-12 col-lg-6\">\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [custombutton]=\"false\">\n          <!-- widget options:\n          usage: <div sa-widget [editbutton]=\"false\">\n\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [custombutton]=\"false\"\n          [collapsed]=\"true\"\n          [sortable]=\"false\"\n\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-edit\"></i> </span>\n            <h2>All Masking </h2>\n\n          </header>\n\n          <!-- widget div-->\n          <div>\n\n\n            <!-- widget content -->\n            <div class=\"widget-body\">\n              <p class=\"alert alert-info text-align-center\">\n                USAGE: &lt;input type=&quot;text&quot; <strong>saMaskedInput=&quot;99/99/9999&quot; saMaskedPlaceholder=\n                &quot;-&quot;&gt;</strong>\n              </p>\n\n              <form>\n\n                <fieldset>\n                  <legend>\n                    Input Masking made easier!\n                  </legend>\n\n                  <div class=\"form-group\">\n                    <label>Date masking</label>\n                    <div class=\"input-group\">\n                      <input type=\"text\" class=\"form-control\" saMaskedInput=\"99/99/9999\"\n                             saMaskedPlaceholder=\"-\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n                    </div>\n                    <p class=\"note\">\n                      Data format **/**/****\n                    </p>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label>Phone masking</label>\n                    <div class=\"input-group\">\n                      <input type=\"text\" class=\"form-control\" saMaskedInput=\"(999) 999-9999\"\n                             saMaskedPlaceholder=\"X\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-phone\"></i></span>\n                    </div>\n                    <p class=\"note\">\n                      Data format (XXX) XXX-XXXX\n                    </p>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label>Credit card masking</label>\n                    <div class=\"input-group\">\n                      <input type=\"text\" class=\"form-control\" saMaskedInput=\"9999-9999-9999-9999\"\n                             saMaskedPlaceholder=\"*\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-credit-card\"></i></span>\n                    </div>\n                    <p class=\"note\">\n                      Data format ****-****-****-****\n                    </p>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label>Serial number masking</label>\n                    <div class=\"input-group\">\n                      <input type=\"text\" class=\"form-control\" saMaskedInput=\"***-***-***-***-***-***\"\n                             saMaskedPlaceholder=\"_\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-asterisk\"></i></span>\n                    </div>\n                    <p class=\"note\">\n                      Data format ***-***-***-***-***-***\n                    </p>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label>Tax ID masking</label>\n                    <div class=\"input-group\">\n                      <input type=\"text\" class=\"form-control\" saMaskedInput=\"99-9999999\"\n                             saMaskedPlaceholder=\"X\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-briefcase\"></i></span>\n                    </div>\n                    <p class=\"note\">\n                      Data format 99-9999999\n                    </p>\n                  </div>\n\n                  <div class=\"form-actions\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <button class=\"btn btn-default\" type=\"submit\">\n                          Cancel\n                        </button>\n                        <button class=\"btn btn-primary\" type=\"submit\">\n                          <i class=\"fa fa-save\"></i>\n                          Submit\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n\n                </fieldset>\n              </form>\n\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [custombutton]=\"false\">\n          <!-- widget options:\n          usage: <div sa-widget [editbutton]=\"false\">\n\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [custombutton]=\"false\"\n          [collapsed]=\"true\"\n          [sortable]=\"false\"\n\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-edit\"></i> </span>\n            <h2>JS Knob </h2>\n\n          </header>\n\n          <!-- widget div-->\n          <div>\n\n\n            <!-- widget content -->\n            <div class=\"widget-body\">\n\n              <form>\n\n                <fieldset>\n                  <legend>\n                    JS Knob Input\n                  </legend>\n\n                  <div class=\"knobs-demo\">\n\n                    <div>\n                      <input [saKnob]=\"{\n                              width:120,\n                              height:120,\n                              displayinput:true,\n                              displayprevious:true,\n                              fgColor:'#428BCA'\n                            }\" value=\"35\"/>\n                    </div>\n\n                    <div>\n                      <input [saKnob]=\"{\n                               width:180,\n                               height:180,\n                               cursor:true,\n                               fgColor:'#222222',\n                               thickness:.3\n                             }\" value=\"29\">\n                    </div>\n\n                    <div>\n                      <input [saKnob]=\"{\n                               width:80,\n                               height:80,\n                               fgColor:'#71843F',\n                               angleoffset:-125,\n                               anglearc:250,\n                               thickness:.3\n                             }\" value=\"33\">\n                    </div>\n\n                  </div>\n\n                </fieldset>\n                <div class=\"form-actions\">\n\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <button class=\"btn btn-default\" type=\"submit\">\n                        Cancel\n                      </button>\n                      <button class=\"btn btn-primary\" type=\"submit\">\n                        <i class=\"fa fa-save\"></i>\n                        Submit\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </form>\n\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </div>\n        <!-- end widget -->\n      </article>\n      <!-- END COL -->\n\n    </div>\n\n    <!-- END ROW -->\n\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/forms/form-plugins/form-plugins.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/forms/form-plugins/form-plugins.component.ts ***!
  \***********************************************************************/
/*! exports provided: FormPluginsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPluginsComponent", function() { return FormPluginsComponent; });
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

var FormPluginsComponent = /** @class */ (function () {
    function FormPluginsComponent() {
        this.noUiSliderValue = [264, 776];
    }
    FormPluginsComponent.prototype.ngOnInit = function () {
    };
    FormPluginsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-form-plugins',
            template: __webpack_require__(/*! ./form-plugins.component.html */ "./src/app/features/forms/form-plugins/form-plugins.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], FormPluginsComponent);
    return FormPluginsComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/form-plugins/form-plugins.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/forms/form-plugins/form-plugins.module.ts ***!
  \********************************************************************/
/*! exports provided: FormPluginsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPluginsModule", function() { return FormPluginsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_plugins_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-plugins.routing */ "./src/app/features/forms/form-plugins/form-plugins.routing.ts");
/* harmony import */ var _form_plugins_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-plugins.component */ "./src/app/features/forms/form-plugins/form-plugins.component.ts");
/* harmony import */ var _x_editable_widget_x_editable_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./x-editable-widget/x-editable-widget.component */ "./src/app/features/forms/form-plugins/x-editable-widget/x-editable-widget.component.ts");
/* harmony import */ var _duallistbox_widget_duallistbox_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./duallistbox-widget/duallistbox-widget.component */ "./src/app/features/forms/form-plugins/duallistbox-widget/duallistbox-widget.component.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_shared_forms_input_smartadmin_input_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/forms/input/smartadmin-input.module */ "./src/app/shared/forms/input/smartadmin-input.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var FormPluginsModule = /** @class */ (function () {
    function FormPluginsModule() {
    }
    FormPluginsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _form_plugins_routing__WEBPACK_IMPORTED_MODULE_2__["formPluginsRouting"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _app_shared_forms_input_smartadmin_input_module__WEBPACK_IMPORTED_MODULE_7__["SmartadminInputModule"],
            ],
            declarations: [_form_plugins_component__WEBPACK_IMPORTED_MODULE_3__["FormPluginsComponent"], _x_editable_widget_x_editable_widget_component__WEBPACK_IMPORTED_MODULE_4__["XEditableWidgetComponent"], _duallistbox_widget_duallistbox_widget_component__WEBPACK_IMPORTED_MODULE_5__["DuallistboxWidgetComponent"]]
        })
    ], FormPluginsModule);
    return FormPluginsModule;
}());



/***/ }),

/***/ "./src/app/features/forms/form-plugins/form-plugins.routing.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/forms/form-plugins/form-plugins.routing.ts ***!
  \*********************************************************************/
/*! exports provided: formPluginsRoutes, formPluginsRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formPluginsRoutes", function() { return formPluginsRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formPluginsRouting", function() { return formPluginsRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_plugins_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-plugins.component */ "./src/app/features/forms/form-plugins/form-plugins.component.ts");


var formPluginsRoutes = [{
        path: '',
        component: _form_plugins_component__WEBPACK_IMPORTED_MODULE_1__["FormPluginsComponent"]
    }];
var formPluginsRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(formPluginsRoutes);


/***/ }),

/***/ "./src/app/features/forms/form-plugins/x-editable-widget/x-editable-widget.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/features/forms/form-plugins/x-editable-widget/x-editable-widget.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [custombutton]=\"false\">\n\n  <header>\n    <span class=\"widget-icon\"> <i class=\"fa fa-edit\"></i> </span>\n    <h2>x-ediable </h2>\n\n  </header>\n\n  <!-- widget div-->\n  <div>\n\n\n    <!-- widget content -->\n    <div class=\"widget-body\">\n      <div class=\"widget-body-toolbar\">\n\n        <div class=\"row\">\n\n          <div class=\"col-sm-6\">\n            <button id=\"enable\" class=\"btn btn btn-default\"\n                    [(ngModel)]=\"options.disabled\" btnCheckbox\n            >\n              enable / disable\n            </button>\n          </div>\n          <div class=\"col-sm-6 text-right\">\n            <on-off-switch title=\"Open Inline\"\n                           [(model)]=\"options.inline\"\n                           (change)=\"onChange()\"\n            ></on-off-switch>\n\n          </div>\n\n        </div>\n\n\n      </div>\n\n      <table id=\"user\" class=\"table table-bordered table-striped\"\n             style=\"clear:both\">\n        <tbody>\n        <tr>\n          <td style=\"width:30%\">Simple text field</td>\n          <td style=\"width:35%\">\n            <x-editable\n              type=\"text\"\n              originalTitle=\"Enter username\"\n              [mode]=\"options.mode\"\n              [disabled]=\"options.disabled\"\n              [(model)]=\"model.username\"\n              className=\"editable editable-click\">\n            </x-editable>\n\n          </td>\n          <td style=\"width:35%\">\n            {{model.username}}\n          </td>\n        </tr>\n        <tr>\n          <td>Empty text field, required</td>\n          <td>\n            <x-editable\n              type=\"text\"\n              placement=\"right\"\n              [mode]=\"options.mode\"\n              [disabled]=\"options.disabled\"\n              placeholder=\"Required\"\n              originalTitle=\"Enter your firstname\"\n              className=\"editable editable-click editable-empty\"\n              [(model)]=\"model.firstname\"\n            >{{model.firstname}}\n            </x-editable>\n          </td>\n          <td>\n            {{model.firstname}}\n          </td>\n        </tr>\n        <tr>\n          <td>Select, local array, custom display</td>\n          <td>\n            <x-editable\n              type=\"select\"\n              value=\"model.sex\"\n              [source]=\"genders\"\n              originalTitle=\"Select sex\"\n              [mode]=\"options.mode\"\n              [disabled]=\"options.disabled\"\n              [(model)]=\"model.sex\"\n              className=\"editable editable-click\"\n              style=\"color:rgb(128, 128, 128)\">\n            </x-editable>\n          </td>\n          <td>\n            {{model.sex}}\n          </td>\n        </tr>\n        <tr>\n          <td>Select, remote array, no buttons</td>\n          <td>\n            <x-editable\n\n              [mode]=\"options.mode\"\n              [disabled]=\"options.disabled\"\n              type=\"select\"\n              value=\"model.group\"\n              [source]=\"groups\"\n              showbuttons=\"false\"\n              originalTitle=\"Select group\"\n              [(model)]=\"model.group\"\n              className=\"editable editable-click\">\n            </x-editable>\n          </td>\n          <td>\n            {{model.group}}\n          </td>\n        </tr>\n        <tr>\n          <td>Select, error while loading</td>\n          <td>\n            <x-editable\n              [mode]=\"options.mode\"\n              [disabled]=\"options.disabled\"\n              type=\"select\"\n              value=\"0\"\n              source=\"/status\"\n              originalTitle=\"Select status\"\n              className=\"editable editable-click\">Active\n            </x-editable>\n          </td>\n          <td></td>\n        </tr>\n\n        <tr>\n          <td>Combodate (date)</td>\n          <td><x-editable\n            [mode]=\"options.mode\"\n            [disabled]=\"options.disabled\"\n            type=\"combodate\"\n            [(model)]=\"model.dob\"\n            value=\"1984-05-15\"\n            originalTitle=\"Select Date of birth\"\n            viewformat=\"DD/MM/YYYY\"\n            format=\"YYYY-MM-DD\"\n            [template]=\"'D / MMM / YYYY'\"\n            placement=\"right\"\n            pk=\"1\"\n            className=\"editable editable-click\"></x-editable>\n          </td>\n          <td>{{model.dob }}</td>\n        </tr>\n\n        <tr>\n          <td>Combodate (datetime)</td>\n          <td><x-editable\n            [mode]=\"options.mode\"\n            [disabled]=\"options.disabled\"\n            type=\"combodate\"\n            [(model)]=\"model.event\"\n            value=\"1984-05-15\"\n            originalTitle=\"Setup event date and time\"\n            viewformat=\"MMM D, YYYY, HH:mm\"\n            format=\"YYYY-MM-DD HH:mm\"\n            [template]=\"'D MMM YYYY  HH:mm'\"\n            placement=\"right\"\n            pk=\"1\"\n            className=\"editable editable-empty editable-click\"></x-editable>\n          </td>\n          <td>{{model.event}}</td>\n        </tr>\n\n\n        <tr>\n          <td>Textarea, buttons below. Submit by <i>ctrl+enter</i></td>\n          <td>\n            <x-editable\n              [mode]=\"options.mode\"\n              [disabled]=\"options.disabled\"\n              type=\"textarea\"\n              [(model)]=\"model.comments\"\n              originalTitle=\"Enter comments\"\n              placeholder=\"Your comments here...\"\n              className=\"editable editable-pre-wrapped editable-click\"></x-editable>\n          </td>\n          <td>{{model.comments}}</td>\n        </tr>\n\n\n        <tr>\n          <td>Checklist</td>\n          <td>\n            <x-editable\n              [mode]=\"options.mode\"\n              [disabled]=\"options.disabled\"\n              type=\"checklist\"\n              [(model)]=\"model.fruits\"\n              [source]=\"fruits\"\n              value=\"{{model.fruits}}\"\n              originalTitle=\"Select fruits\"\n              className=\"editable editable-click\"></x-editable>\n          </td>\n\n          <td>{{model.fruits}}</td>\n        </tr>\n\n        </tbody>\n      </table>\n\n\n\n\n    </div>\n    <!-- end widget content -->\n\n  </div>\n  <!-- end widget div -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/forms/form-plugins/x-editable-widget/x-editable-widget.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/forms/form-plugins/x-editable-widget/x-editable-widget.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: XEditableWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XEditableWidgetComponent", function() { return XEditableWidgetComponent; });
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

var XEditableWidgetComponent = /** @class */ (function () {
    function XEditableWidgetComponent() {
        this.model = {
            username: 'superuser',
            firstname: null,
            sex: 'not selected',
            group: "Admin",
            vacation: "25.02.2013",
            combodate: "15/05/1984",
            event: null,
            comments: 'awesome user!',
            state2: 'California',
            fruits: 'peach,apple',
            dob: '1984-05-15'
        };
        this.fruits = [
            { value: 'banana', text: 'banana' },
            { value: 'peach', text: 'peach' },
            { value: 'apple', text: 'apple' },
            { value: 'watermelon', text: 'watermelon' },
            { value: 'orange', text: 'orange' }
        ];
        this.genders = [
            { value: 'not selected', text: 'not selected' },
            { value: 'Male', text: 'Male' },
            { value: 'Female', text: 'Female' }
        ];
        this.groups = [
            { value: 'Guest', text: 'Guest' },
            { value: 'Service', text: 'Service' },
            { value: 'Customer', text: 'Customer' },
            { value: 'Operator', text: 'Operator' },
            { value: 'Support', text: 'Support' },
            { value: 'Admin', text: 'Admin' }
        ];
        this.options = {
            mode: 'inline',
            disabled: false,
            inline: true
        };
    }
    XEditableWidgetComponent.prototype.ngOnInit = function () {
    };
    XEditableWidgetComponent.prototype.onChange = function () {
        this.options.mode = this.options.inline ? 'inline' : 'popup';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], XEditableWidgetComponent.prototype, "options", void 0);
    XEditableWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'x-editable-widget',
            template: __webpack_require__(/*! ./x-editable-widget.component.html */ "./src/app/features/forms/form-plugins/x-editable-widget/x-editable-widget.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], XEditableWidgetComponent);
    return XEditableWidgetComponent;
}());



/***/ })

}]);
//# sourceMappingURL=form-plugins-form-plugins-module.js.map