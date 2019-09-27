(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flot-charts-flot-charts-module"],{

/***/ "./src/app/features/graphs/flot-charts/flot-charts.component.html":
/*!************************************************************************!*\
  !*** ./src/app/features/graphs/flot-charts/flot-charts.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n\n  <div class=\"row\">\n    <sa-big-breadcrumbs icon=\"bar-chart-o\" [items]=\"['Graphs', 'Flot Chart']\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <!-- widget grid -->\n  <sa-widgets-grid>\n\n    <!-- row -->\n\n    <div class=\"row\" *ngIf=\"flotData\">\n\n      <article class=\"col-sm-12 col-md-12 col-lg-12\">\n\n\n        <div sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Bar Chart</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body \">\n              <sa-flot-chart [data]=\"flotData.barChartData\"\n                         [options]=\"flotExamples.barChartDemoOptions\" ></sa-flot-chart>\n\n            </div>\n          </div>\n        </div>\n\n\n        <div sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Sin Chart</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body \">\n              <sa-flot-chart [data]=\"flotData.sinChartData\"\n                         [options]=\"flotExamples.sinChartDemoOptions\" ></sa-flot-chart>\n            </div>\n          </div>\n        </div>\n\n      </article>\n\n      <article class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n        <div sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Auto Updating Chart</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body \">\n              <sa-flot-chart [data]=\"updatingData\"\n                         [options]=\"flotExamples.autoUpdatingChartDemoOptions\" ></sa-flot-chart>\n            </div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n        <div sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Horizontal Bar Chart</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body \">\n              <sa-flot-chart [data]=\"flotData.horizontalBarChartData\"\n                         [options]=\"flotExamples.horizontalChartDemoOptions\" ></sa-flot-chart>\n            </div>\n          </div>\n        </div>\n      </article>\n\n\n      <article class=\"col-xs-12 col-sm-8 col-md-7 col-lg-7\">\n        <div sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Plot Percentiles</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body \">\n              <sa-flot-chart [data]=\"flotData.fillChartData\"\n                         [options]=\"flotExamples.fillChartDemoOptions\" ></sa-flot-chart>\n            </div>\n          </div>\n        </div>\n      </article>\n\n\n      <article class=\"col-xs-12 col-sm-4 col-md-5 col-lg-5\">\n\n        <div sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Pie Chart</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body \">\n              <sa-flot-chart [data]=\"flotData.pieChartData\"\n                         [options]=\"flotExamples.pieChartDemoOptions\" ></sa-flot-chart>\n            </div>\n          </div>\n        </div>\n      </article>\n      <article class=\"col-xs-12\">\n\n        <div sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Site Stats Chart</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body \">\n              <sa-flot-chart [data]=\"flotData.siteStatsData\"\n                         [options]=\"flotExamples.siteStatsDemoOptions\" ></sa-flot-chart>\n            </div>\n          </div>\n        </div>\n\n\n      </article>\n\n\n    </div>\n\n    <!-- end row -->\n\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n\n</div>\n<!-- END MAIN CONTENT -->\n"

/***/ }),

/***/ "./src/app/features/graphs/flot-charts/flot-charts.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/graphs/flot-charts/flot-charts.component.ts ***!
  \**********************************************************************/
/*! exports provided: FlotChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlotChartsComponent", function() { return FlotChartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _flot_examples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flot-examples */ "./src/app/features/graphs/flot-charts/flot-examples.ts");
/* harmony import */ var _app_core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlotChartsComponent = /** @class */ (function () {
    function FlotChartsComponent(jsonApiService) {
        this.jsonApiService = jsonApiService;
    }
    FlotChartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonApiService.fetch('/graphs/flot.json').subscribe(function (data) { return _this.flotData = data; });
        this.flotExamples = _flot_examples__WEBPACK_IMPORTED_MODULE_1__;
        this.interval = setInterval(function () {
            _this.updateStats();
        }, 1000);
        this.updateStats();
    };
    FlotChartsComponent.prototype.updateStats = function () {
        this.updatingData = [_flot_examples__WEBPACK_IMPORTED_MODULE_1__["FakeDataSource"].getRandomData()];
    };
    FlotChartsComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    FlotChartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-flot-charts',
            template: __webpack_require__(/*! ./flot-charts.component.html */ "./src/app/features/graphs/flot-charts/flot-charts.component.html"),
        }),
        __metadata("design:paramtypes", [_app_core_services__WEBPACK_IMPORTED_MODULE_2__["JsonApiService"]])
    ], FlotChartsComponent);
    return FlotChartsComponent;
}());



/***/ }),

/***/ "./src/app/features/graphs/flot-charts/flot-charts.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/graphs/flot-charts/flot-charts.module.ts ***!
  \*******************************************************************/
/*! exports provided: FlotChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlotChartsModule", function() { return FlotChartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _flot_charts_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flot-charts.routing */ "./src/app/features/graphs/flot-charts/flot-charts.routing.ts");
/* harmony import */ var _flot_charts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flot-charts.component */ "./src/app/features/graphs/flot-charts/flot-charts.component.ts");
/* harmony import */ var _app_shared_graphs_flot_chart_flot_chart_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/graphs/flot-chart/flot-chart.module */ "./src/app/shared/graphs/flot-chart/flot-chart.module.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FlotChartsModule = /** @class */ (function () {
    function FlotChartsModule() {
    }
    FlotChartsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _flot_charts_routing__WEBPACK_IMPORTED_MODULE_2__["flotChartsRouting"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _app_shared_graphs_flot_chart_flot_chart_module__WEBPACK_IMPORTED_MODULE_4__["FlotChartModule"]
            ],
            declarations: [_flot_charts_component__WEBPACK_IMPORTED_MODULE_3__["FlotChartsComponent"]]
        })
    ], FlotChartsModule);
    return FlotChartsModule;
}());



/***/ }),

/***/ "./src/app/features/graphs/flot-charts/flot-charts.routing.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/graphs/flot-charts/flot-charts.routing.ts ***!
  \********************************************************************/
/*! exports provided: flotChartsRoutes, flotChartsRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flotChartsRoutes", function() { return flotChartsRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flotChartsRouting", function() { return flotChartsRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _flot_charts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flot-charts.component */ "./src/app/features/graphs/flot-charts/flot-charts.component.ts");


var flotChartsRoutes = [
    {
        path: '',
        component: _flot_charts_component__WEBPACK_IMPORTED_MODULE_1__["FlotChartsComponent"]
    },
];
var flotChartsRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(flotChartsRoutes);


/***/ }),

/***/ "./src/app/features/graphs/flot-charts/flot-examples.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/graphs/flot-charts/flot-examples.ts ***!
  \**************************************************************/
/*! exports provided: colors, barChartDemoOptions, sinChartDemoOptions, horizontalChartDemoOptions, salesChartDemoOptions, fillChartDemoOptions, pieChartDemoOptions, siteStatsDemoOptions, autoUpdatingChartDemoOptions, FakeDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartDemoOptions", function() { return barChartDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinChartDemoOptions", function() { return sinChartDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "horizontalChartDemoOptions", function() { return horizontalChartDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salesChartDemoOptions", function() { return salesChartDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillChartDemoOptions", function() { return fillChartDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartDemoOptions", function() { return pieChartDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteStatsDemoOptions", function() { return siteStatsDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoUpdatingChartDemoOptions", function() { return autoUpdatingChartDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeDataSource", function() { return FakeDataSource; });
var colors = {
    "chartBorderColor": "#efefef",
    "chartGridColor": "#DDD",
    "charMain": "#E24913",
    "chartSecond": "#6595b4",
    "chartThird": "#FF9F01",
    "chartFourth": "#7e9d3a",
    "chartFifth": "#BD362F",
    "chartMono": "#000"
};
var barChartDemoOptions = {
    colors: [colors.chartSecond, colors.chartFourth, "#666", "#BBB"],
    grid: {
        show: true,
        hoverable: true,
        clickable: true,
        tickColor: colors.chartBorderColor,
        borderWidth: 0,
        borderColor: colors.chartBorderColor
    },
    legend: true,
    tooltip: true,
    tooltipOpts: {
        content: "<b>%x</b> = <span>%y</span>",
        defaultTheme: false
    }
};
var sinChartDemoOptions = {
    series: {
        lines: {
            show: true
        },
        points: {
            show: true
        }
    },
    grid: {
        hoverable: true,
        clickable: true,
        tickColor: colors.chartBorderColor,
        borderWidth: 0,
        borderColor: colors.chartBorderColor
    },
    tooltip: true,
    tooltipOpts: {
        //content : "Value <b>$x</b> Value <span>$y</span>",
        defaultTheme: false
    },
    colors: [colors.chartSecond, colors.chartFourth],
    yaxis: {
        min: -1.1,
        max: 1.1
    },
    xaxis: {
        min: 0,
        max: 15
    }
};
var horizontalChartDemoOptions = {
    colors: [colors.chartSecond, colors.chartFourth, "#666", "#BBB"],
    grid: {
        show: true,
        hoverable: true,
        clickable: true,
        tickColor: colors.chartBorderColor,
        borderWidth: 0,
        borderColor: colors.chartBorderColor
    },
    legend: true,
    tooltip: true,
    tooltipOpts: {
        content: "<b>%x</b> = <span>%y</span>",
        defaultTheme: false
    }
};
var salesChartDemoOptions = {
    xaxis: {
        mode: "time",
        tickLength: 5
    },
    series: {
        lines: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                        opacity: 0.1
                    }, {
                        opacity: 0.15
                    }]
            }
        },
        //points: { show: true },
        shadowSize: 0
    },
    selection: {
        mode: "x"
    },
    grid: {
        hoverable: true,
        clickable: true,
        tickColor: colors.chartBorderColor,
        borderWidth: 0,
        borderColor: colors.chartBorderColor
    },
    tooltip: true,
    tooltipOpts: {
        content: "Your sales for <b>%x</b> was <span>$%y</span>",
        dateFormat: "%y-%0m-%0d",
        defaultTheme: false
    },
    colors: [colors.chartSecond]
};
var fillChartDemoOptions = {
    xaxis: {
        tickDecimals: 0
    },
    yaxis: {
        tickFormatter: function (v) {
            return v + " cm";
        }
    }
};
var pieChartDemoOptions = {
    series: {
        pie: {
            show: true,
            innerRadius: 0.5,
            radius: 1,
            label: {
                show: false,
                radius: 2 / 3,
                formatter: function (label, series) {
                    return '<div style="font-size:11px;text-align:center;padding:4px;color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
                },
                threshold: 0.1
            }
        }
    },
    legend: {
        show: true,
        noColumns: 1,
        labelFormatter: null,
        labelBoxBorderColor: "#000",
        container: null,
        position: "ne",
        margin: [5, 10],
        backgroundColor: "#efefef",
        backgroundOpacity: 1 // set to 0 to avoid background
    },
    grid: {
        hoverable: true,
        clickable: true
    }
};
var siteStatsDemoOptions = {
    series: {
        lines: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                        opacity: 0.1
                    }, {
                        opacity: 0.15
                    }]
            }
        },
        points: {
            show: true
        },
        shadowSize: 0
    },
    yaxes: [{
            min: 20,
            tickLength: 5
        }],
    grid: {
        hoverable: true,
        clickable: true,
        tickColor: colors.chartBorderColor,
        borderWidth: 0,
        borderColor: colors.chartBorderColor
    },
    tooltip: true,
    tooltipOpts: {
        content: "%s for <b>%x:00 hrs</b> was %y",
        dateFormat: "%y-%0m-%0d",
        defaultTheme: false
    },
    colors: [colors.charMain, colors.chartSecond],
    xaxis: {
        mode: "time",
        tickLength: 10,
        ticks: 15,
        tickDecimals: 2
    },
    yaxis: {
        ticks: 15,
        tickDecimals: 0
    }
};
var autoUpdatingChartDemoOptions = {
    yaxis: {
        min: 0,
        max: 100
    },
    xaxis: {
        min: 0,
        max: 100
    },
    colors: [colors.chartFourth],
    series: {
        lines: {
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                        opacity: 0.4
                    }, {
                        opacity: 0
                    }]
            },
            steps: false
        }
    }
};
var FakeDataSource = {
    data: [],
    total: 200,
    getRandomData: function () {
        if (this.data.length > 0)
            this.data = this.data.slice(1);
        // do a random walk
        while (this.data.length < this.total) {
            var prev = this.data.length > 0 ? this.data[this.data.length - 1] : 50;
            var y = prev + Math.random() * 10 - 5;
            if (y < 0)
                y = 0;
            if (y > 100)
                y = 100;
            this.data.push(y);
        }
        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < this.data.length; ++i)
            res.push([i, this.data[i]]);
        return res;
    }
};


/***/ })

}]);
//# sourceMappingURL=flot-charts-flot-charts-module.js.map