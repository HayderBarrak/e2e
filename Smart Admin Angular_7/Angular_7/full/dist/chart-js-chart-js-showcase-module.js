(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chart-js-chart-js-showcase-module"],{

/***/ "./src/app/features/graphs/chart-js/chart-js-showcase.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/features/graphs/chart-js/chart-js-showcase.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\"  >\n\n  <div class=\"row\">\n    <sa-big-breadcrumbs icon=\"bar-chart-o\" [items]=\"['Graphs', 'Chart.js']\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <!-- widget grid -->\n  <sa-widgets-grid>\n\n    <div class=\"row\"  *ngIf=\"chartjsData\">\n      <article class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n        <div sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n            <h2>Line Chart</h2>\n          </header>\n          <div>\n            <div class=\"widget-body\">\n              <sa-chart-js type=\"line\" [data]=\"chartjsData['line-chart']\"></sa-chart-js>\n            </div>\n          </div>\n        </div>\n\n        <div sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n            <h2>Radar Chart</h2>\n          </header>\n          <div>\n            <div class=\"widget-body\">\n              <sa-chart-js type=\"radar\" [data]=\"chartjsData['radar-chart']\"></sa-chart-js>\n            </div>\n          </div>\n        </div>\n\n        <div sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n            <h2>Polar Chart</h2>\n          </header>\n          <div>\n            <div class=\"widget-body\">\n              <sa-chart-js type=\"polarArea\" [data]=\"chartjsData['polar-chart']\"></sa-chart-js>\n            </div>\n          </div>\n        </div>\n\n      </article>\n\n      <article class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n\n        <div sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n            <h2>Bar Chart</h2>\n          </header>\n          <div>\n            <div class=\"widget-body\">\n              <sa-chart-js type=\"bar\" [data]=\"chartjsData['bar-chart']\"></sa-chart-js>\n            </div>\n          </div>\n        </div>\n\n\n        <div sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n            <h2>Doughnut Chart</h2>\n          </header>\n          <div>\n            <div class=\"widget-body\">\n              <sa-chart-js type=\"doughnut\" [data]=\"chartjsData['doughnut-chart']\"></sa-chart-js>\n            </div>\n          </div>\n        </div>\n\n\n        <div sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n            <h2>Pie Chart</h2>\n          </header>\n          <div>\n            <div class=\"widget-body\">\n              <sa-chart-js type=\"pie\" [data]=\"chartjsData['pie-chart']\"></sa-chart-js>\n            </div>\n          </div>\n        </div>\n\n      </article>\n    </div>\n  </sa-widgets-grid>\n</div>\n"

/***/ }),

/***/ "./src/app/features/graphs/chart-js/chart-js-showcase.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/graphs/chart-js/chart-js-showcase.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChartJsShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartJsShowcaseComponent", function() { return ChartJsShowcaseComponent; });
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


var ChartJsShowcaseComponent = /** @class */ (function () {
    function ChartJsShowcaseComponent(jsonApiService) {
        this.jsonApiService = jsonApiService;
    }
    ChartJsShowcaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonApiService.fetch('/graphs/chartjs.json').subscribe(function (data) {
            _this.chartjsData = data;
        });
    };
    ChartJsShowcaseComponent.prototype.ngOnDestroy = function () { };
    ChartJsShowcaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-chart-js-showcase',
            template: __webpack_require__(/*! ./chart-js-showcase.component.html */ "./src/app/features/graphs/chart-js/chart-js-showcase.component.html"),
        }),
        __metadata("design:paramtypes", [_app_core_services__WEBPACK_IMPORTED_MODULE_1__["JsonApiService"]])
    ], ChartJsShowcaseComponent);
    return ChartJsShowcaseComponent;
}());



/***/ }),

/***/ "./src/app/features/graphs/chart-js/chart-js-showcase.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/graphs/chart-js/chart-js-showcase.module.ts ***!
  \**********************************************************************/
/*! exports provided: ChartJsShowcaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartJsShowcaseModule", function() { return ChartJsShowcaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chart_js_showcase_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-js-showcase.routing */ "./src/app/features/graphs/chart-js/chart-js-showcase.routing.ts");
/* harmony import */ var _chart_js_showcase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart-js-showcase.component */ "./src/app/features/graphs/chart-js/chart-js-showcase.component.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_shared_graphs_chart_js_chart_js_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/graphs/chart-js/chart-js.module */ "./src/app/shared/graphs/chart-js/chart-js.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChartJsShowcaseModule = /** @class */ (function () {
    function ChartJsShowcaseModule() {
    }
    ChartJsShowcaseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _chart_js_showcase_routing__WEBPACK_IMPORTED_MODULE_2__["chartJsShowcaseRouting"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _app_shared_graphs_chart_js_chart_js_module__WEBPACK_IMPORTED_MODULE_5__["ChartJsModule"],
            ],
            declarations: [_chart_js_showcase_component__WEBPACK_IMPORTED_MODULE_3__["ChartJsShowcaseComponent"]]
        })
    ], ChartJsShowcaseModule);
    return ChartJsShowcaseModule;
}());



/***/ }),

/***/ "./src/app/features/graphs/chart-js/chart-js-showcase.routing.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/graphs/chart-js/chart-js-showcase.routing.ts ***!
  \***********************************************************************/
/*! exports provided: chartJsShowcaseRoutes, chartJsShowcaseRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartJsShowcaseRoutes", function() { return chartJsShowcaseRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartJsShowcaseRouting", function() { return chartJsShowcaseRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chart_js_showcase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart-js-showcase.component */ "./src/app/features/graphs/chart-js/chart-js-showcase.component.ts");


var chartJsShowcaseRoutes = [
    {
        path: '',
        component: _chart_js_showcase_component__WEBPACK_IMPORTED_MODULE_1__["ChartJsShowcaseComponent"]
    }
];
var chartJsShowcaseRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(chartJsShowcaseRoutes);


/***/ }),

/***/ "./src/app/shared/graphs/chart-js/chart-js.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/graphs/chart-js/chart-js.component.ts ***!
  \**************************************************************/
/*! exports provided: ChartJsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartJsComponent", function() { return ChartJsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chart_js_presets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart-js.presets */ "./src/app/shared/graphs/chart-js/chart-js.presets.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartJsComponent = /** @class */ (function () {
    function ChartJsComponent(el) {
        this.el = el;
        this.width = '100%';
    }
    ChartJsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.t.bind(null, /*! chart.js */ "./node_modules/chart.js/src/chart.js", 7)).then(function (chartJs) {
            _this.render();
        });
    };
    ChartJsComponent.prototype.render = function () {
        var _this = this;
        var ctx = this.getCtx();
        var data = this.data;
        if (data.datasets && data.datasets.length && _chart_js_presets__WEBPACK_IMPORTED_MODULE_1__["presets"][this.type] && _chart_js_presets__WEBPACK_IMPORTED_MODULE_1__["presets"][this.type].dataset) {
            data.datasets = data.datasets.map(function (it) {
                return Object.assign({}, _chart_js_presets__WEBPACK_IMPORTED_MODULE_1__["presets"][_this.type].dataset, it);
            });
        }
        var chart = new Chart(ctx, {
            type: this.type,
            data: data,
            options: _chart_js_presets__WEBPACK_IMPORTED_MODULE_1__["presets"][this.type] ? _chart_js_presets__WEBPACK_IMPORTED_MODULE_1__["presets"][this.type].options : {}
        });
        chart.update();
    };
    ChartJsComponent.prototype.getCtx = function () {
        return this.el.nativeElement.querySelector('canvas').getContext('2d');
    };
    ChartJsComponent.prototype.randomScalingFactor = function () {
        return Math.round(Math.random() * 100);
    };
    ;
    ChartJsComponent.prototype.randomColorFactor = function () {
        return Math.round(Math.random() * 255);
    };
    ;
    ChartJsComponent.prototype.randomColor = function (opacity) {
        return 'rgba(' + this.randomColorFactor() + ',' + this.randomColorFactor() + ',' + this.randomColorFactor() + ',' + (opacity || '.3') + ')';
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChartJsComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ChartJsComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ChartJsComponent.prototype, "width", void 0);
    ChartJsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-chart-js',
            template: "\n  <div>\n  <canvas></canvas>\n  </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ChartJsComponent);
    return ChartJsComponent;
}());



/***/ }),

/***/ "./src/app/shared/graphs/chart-js/chart-js.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/graphs/chart-js/chart-js.module.ts ***!
  \***********************************************************/
/*! exports provided: ChartJsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartJsModule", function() { return ChartJsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chart_js_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-js.component */ "./src/app/shared/graphs/chart-js/chart-js.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChartJsModule = /** @class */ (function () {
    function ChartJsModule() {
    }
    ChartJsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_chart_js_component__WEBPACK_IMPORTED_MODULE_2__["ChartJsComponent"]],
            exports: [_chart_js_component__WEBPACK_IMPORTED_MODULE_2__["ChartJsComponent"]],
        })
    ], ChartJsModule);
    return ChartJsModule;
}());



/***/ }),

/***/ "./src/app/shared/graphs/chart-js/chart-js.presets.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/graphs/chart-js/chart-js.presets.ts ***!
  \************************************************************/
/*! exports provided: presets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "presets", function() { return presets; });
var presets = {
    line: {
        dataset: {
            pointBorderColor: '#fff',
            pointRadius: 4,
            borderColor: 'rgba(0,0,0,0.15)',
            pointBorderWidth: 1,
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'label'
            },
            hover: {
                mode: 'dataset'
            },
            legend: {
                display: false
            },
            scales: {
                gridLines: {
                    color: 'rgba(192,192,192,0.1)'
                },
                xAxes: [{
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: 'Month'
                        }
                    }],
                yAxes: [{
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: 'Value'
                        },
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 100,
                        }
                    }]
            }
        }
    },
    radar: {
        dataset: {},
        options: {
            legend: {
                display: false
            },
            scale: {
                reverse: false,
                lineWidth: 0,
                gridLines: {
                    color: 'rgba(192,192,192,0.1)'
                },
                ticks: {
                    display: false
                }
            }
        }
    },
    polarArea: {
        dataset: {},
        options: {
            responsive: true,
            legend: {
                display: false
            },
            title: {
                display: false
            },
            scale: {
                gridLines: {
                    color: 'rgba(192,192,192,0.1)'
                },
                ticks: {
                    beginAtZero: true
                },
                reverse: false
            },
            animateRotate: false
        }
    },
    bar: {
        dataset: {
            borderWifth: 2
        },
        options: {
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(192,192,192,0.1)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(192,192,192,0.1)'
                        }
                    }]
            },
            legend: {
                display: false
            },
            responsive: true
        }
    },
    doughnut: {
        dataset: {},
        options: {
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(192,192,192,0.1)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(192,192,192,0.1)'
                        }
                    }]
            },
            responsive: true,
            legend: {
                display: false
            }
        }
    },
    pie: {
        dataset: {},
        options: {
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(192,192,192,0.1)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(192,192,192,0.1)'
                        }
                    }]
            },
            legend: {
                display: false
            },
            responsive: true
        }
    }
};


/***/ })

}]);
//# sourceMappingURL=chart-js-chart-js-showcase-module.js.map