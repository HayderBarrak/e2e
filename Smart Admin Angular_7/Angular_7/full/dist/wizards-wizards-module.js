(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wizards-wizards-module"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/fuelux/js/wizard.js":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/fuelux/js/wizard.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* global jQuery:true */\n\n/*\n * Fuel UX Wizard\n * https://github.com/ExactTarget/fuelux\n *\n * Copyright (c) 2014 ExactTarget\n * Licensed under the BSD New license.\n */\n\n// -- BEGIN UMD WRAPPER PREFACE --\n\n// For more information on UMD visit:\n// https://github.com/umdjs/umd/blob/master/jqueryPlugin.js\n\n(function umdFactory (factory) {\n\tif (typeof define === 'function' && define.amd) {\n\t\t// if AMD loader is available, register as an anonymous module.\n\t\tdefine(['jquery'], factory);\n\t} else if (typeof exports === 'object') {\n\t\t// Node/CommonJS\n\t\tmodule.exports = factory(require('jquery'));\n\t} else {\n\t\t// OR use browser globals if AMD is not present\n\t\tfactory(jQuery);\n\t}\n}(function WizardWrapper ($) {\n\t// -- END UMD WRAPPER PREFACE --\n\n\t// -- BEGIN MODULE CODE HERE --\n\n\tvar old = $.fn.wizard;\n\n\t// WIZARD CONSTRUCTOR AND PROTOTYPE\n\n\tvar Wizard = function (element, options) {\n\t\tthis.$element = $(element);\n\t\tthis.options = $.extend({}, $.fn.wizard.defaults, options);\n\t\tthis.options.disablePreviousStep = (this.$element.attr('data-restrict') === 'previous') ? true : this.options.disablePreviousStep;\n\t\tthis.currentStep = this.options.selectedItem.step;\n\t\tthis.numSteps = this.$element.find('.steps li').length;\n\t\tthis.$prevBtn = this.$element.find('button.btn-prev');\n\t\tthis.$nextBtn = this.$element.find('button.btn-next');\n\n\t\tvar kids = this.$nextBtn.children().detach();\n\t\tthis.nextText = $.trim(this.$nextBtn.text());\n\t\tthis.$nextBtn.append(kids);\n\n\t\tvar steps = this.$element.children('.steps-container');\n\t\t// maintains backwards compatibility with < 3.8, will be removed in the future\n\t\tif (steps.length === 0) {\n\t\t\tsteps = this.$element;\n\t\t\tthis.$element.addClass('no-steps-container');\n\t\t\tif (window && window.console && window.console.warn) {\n\t\t\t\twindow.console.warn('please update your wizard markup to include \".steps-container\" as seen in http://getfuelux.com/javascript.html#wizard-usage-markup');\n\t\t\t}\n\t\t}\n\t\tsteps = steps.find('.steps');\n\n\t\t// handle events\n\t\tthis.$prevBtn.on('click.fu.wizard', $.proxy(this.previous, this));\n\t\tthis.$nextBtn.on('click.fu.wizard', $.proxy(this.next, this));\n\t\tsteps.on('click.fu.wizard', 'li.complete', $.proxy(this.stepclicked, this));\n\n\t\tthis.selectedItem(this.options.selectedItem);\n\n\t\tif (this.options.disablePreviousStep) {\n\t\t\tthis.$prevBtn.attr('disabled', true);\n\t\t\tthis.$element.find('.steps').addClass('previous-disabled');\n\t\t}\n\t};\n\n\tWizard.prototype = {\n\n\t\tconstructor: Wizard,\n\n\t\tdestroy: function () {\n\t\t\tthis.$element.remove();\n\t\t\t// any external bindings [none]\n\t\t\t// empty elements to return to original markup [none]\n\t\t\t// returns string of markup\n\t\t\treturn this.$element[0].outerHTML;\n\t\t},\n\n\t\t//index is 1 based\n\t\t//second parameter can be array of objects [{ ... }, { ... }] or you can pass n additional objects as args\n\t\t//object structure is as follows (all params are optional): { badge: '', label: '', pane: '' }\n\t\taddSteps: function (index) {\n\t\t\tvar items = [].slice.call(arguments).slice(1);\n\t\t\tvar $steps = this.$element.find('.steps');\n\t\t\tvar $stepContent = this.$element.find('.step-content');\n\t\t\tvar i, l, $pane, $startPane, $startStep, $step;\n\n\t\t\tindex = (index === -1 || (index > (this.numSteps + 1))) ? this.numSteps + 1 : index;\n\t\t\tif (items[0] instanceof Array) {\n\t\t\t\titems = items[0];\n\t\t\t}\n\n\t\t\t$startStep = $steps.find('li:nth-child(' + index + ')');\n\t\t\t$startPane = $stepContent.find('.step-pane:nth-child(' + index + ')');\n\t\t\tif ($startStep.length < 1) {\n\t\t\t\t$startStep = null;\n\t\t\t}\n\n\t\t\tfor (i = 0, l = items.length; i < l; i++) {\n\t\t\t\t$step = $('<li data-step=\"' + index + '\"><span class=\"badge badge-info\"></span></li>');\n\t\t\t\t$step.append(items[i].label || '').append('<span class=\"chevron\"></span>');\n\t\t\t\t$step.find('.badge').append(items[i].badge || index);\n\n\t\t\t\t$pane = $('<div class=\"step-pane\" data-step=\"' + index + '\"></div>');\n\t\t\t\t$pane.append(items[i].pane || '');\n\n\t\t\t\tif (!$startStep) {\n\t\t\t\t\t$steps.append($step);\n\t\t\t\t\t$stepContent.append($pane);\n\t\t\t\t} else {\n\t\t\t\t\t$startStep.before($step);\n\t\t\t\t\t$startPane.before($pane);\n\t\t\t\t}\n\n\t\t\t\tindex++;\n\t\t\t}\n\n\t\t\tthis.syncSteps();\n\t\t\tthis.numSteps = $steps.find('li').length;\n\t\t\tthis.setState();\n\t\t},\n\n\t\t//index is 1 based, howMany is number to remove\n\t\tremoveSteps: function (index, howMany) {\n\t\t\tvar action = 'nextAll';\n\t\t\tvar i = 0;\n\t\t\tvar $steps = this.$element.find('.steps');\n\t\t\tvar $stepContent = this.$element.find('.step-content');\n\t\t\tvar $start;\n\n\t\t\thowMany = (howMany !== undefined) ? howMany : 1;\n\n\t\t\tif (index > $steps.find('li').length) {\n\t\t\t\t$start = $steps.find('li:last');\n\t\t\t} else {\n\t\t\t\t$start = $steps.find('li:nth-child(' + index + ')').prev();\n\t\t\t\tif ($start.length < 1) {\n\t\t\t\t\taction = 'children';\n\t\t\t\t\t$start = $steps;\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t\t$start[action]().each(function () {\n\t\t\t\tvar item = $(this);\n\t\t\t\tvar step = item.attr('data-step');\n\t\t\t\tif (i < howMany) {\n\t\t\t\t\titem.remove();\n\t\t\t\t\t$stepContent.find('.step-pane[data-step=\"' + step + '\"]:first').remove();\n\t\t\t\t} else {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\n\t\t\t\ti++;\n\t\t\t});\n\n\t\t\tthis.syncSteps();\n\t\t\tthis.numSteps = $steps.find('li').length;\n\t\t\tthis.setState();\n\t\t},\n\n\t\tsetState: function () {\n\t\t\tvar canMovePrev = (this.currentStep > 1);//remember, steps index is 1 based...\n\t\t\tvar isFirstStep = (this.currentStep === 1);\n\t\t\tvar isLastStep = (this.currentStep === this.numSteps);\n\n\t\t\t// disable buttons based on current step\n\t\t\tif (!this.options.disablePreviousStep) {\n\t\t\t\tthis.$prevBtn.attr('disabled', (isFirstStep === true || canMovePrev === false));\n\t\t\t}\n\n\t\t\t// change button text of last step, if specified\n\t\t\tvar last = this.$nextBtn.attr('data-last');\n\t\t\tif (last) {\n\t\t\t\tthis.lastText = last;\n\t\t\t\t// replace text\n\t\t\t\tvar text = this.nextText;\n\t\t\t\tif (isLastStep === true) {\n\t\t\t\t\ttext = this.lastText;\n\t\t\t\t\t// add status class to wizard\n\t\t\t\t\tthis.$element.addClass('complete');\n\t\t\t\t} else {\n\t\t\t\t\tthis.$element.removeClass('complete');\n\t\t\t\t}\n\n\t\t\t\tvar kids = this.$nextBtn.children().detach();\n\t\t\t\tthis.$nextBtn.text(text).append(kids);\n\t\t\t}\n\n\t\t\t// reset classes for all steps\n\t\t\tvar $steps = this.$element.find('.steps li');\n\t\t\t$steps.removeClass('active').removeClass('complete');\n\t\t\t$steps.find('span.badge').removeClass('badge-info').removeClass('badge-success');\n\n\t\t\t// set class for all previous steps\n\t\t\tvar prevSelector = '.steps li:lt(' + (this.currentStep - 1) + ')';\n\t\t\tvar $prevSteps = this.$element.find(prevSelector);\n\t\t\t$prevSteps.addClass('complete');\n\t\t\t$prevSteps.find('span.badge').addClass('badge-success');\n\n\t\t\t// set class for current step\n\t\t\tvar currentSelector = '.steps li:eq(' + (this.currentStep - 1) + ')';\n\t\t\tvar $currentStep = this.$element.find(currentSelector);\n\t\t\t$currentStep.addClass('active');\n\t\t\t$currentStep.find('span.badge').addClass('badge-info');\n\n\t\t\t// set display of target element\n\t\t\tvar $stepContent = this.$element.find('.step-content');\n\t\t\tvar target = $currentStep.attr('data-step');\n\t\t\t$stepContent.find('.step-pane').removeClass('active');\n\t\t\t$stepContent.find('.step-pane[data-step=\"' + target + '\"]:first').addClass('active');\n\n\t\t\t// reset the wizard position to the left\n\t\t\tthis.$element.find('.steps').first().attr('style', 'margin-left: 0');\n\n\t\t\t// check if the steps are wider than the container div\n\t\t\tvar totalWidth = 0;\n\t\t\tthis.$element.find('.steps > li').each(function () {\n\t\t\t\ttotalWidth += $(this).outerWidth();\n\t\t\t});\n\t\t\tvar containerWidth = 0;\n\t\t\tif (this.$element.find('.actions').length) {\n\t\t\t\tcontainerWidth = this.$element.width() - this.$element.find('.actions').first().outerWidth();\n\t\t\t} else {\n\t\t\t\tcontainerWidth = this.$element.width();\n\t\t\t}\n\n\t\t\tif (totalWidth > containerWidth) {\n\t\t\t\t// set the position so that the last step is on the right\n\t\t\t\tvar newMargin = totalWidth - containerWidth;\n\t\t\t\tthis.$element.find('.steps').first().attr('style', 'margin-left: -' + newMargin + 'px');\n\n\t\t\t\t// set the position so that the active step is in a good\n\t\t\t\t// position if it has been moved out of view\n\t\t\t\tif (this.$element.find('li.active').first().position().left < 200) {\n\t\t\t\t\tnewMargin += this.$element.find('li.active').first().position().left - 200;\n\t\t\t\t\tif (newMargin < 1) {\n\t\t\t\t\t\tthis.$element.find('.steps').first().attr('style', 'margin-left: 0');\n\t\t\t\t\t} else {\n\t\t\t\t\t\tthis.$element.find('.steps').first().attr('style', 'margin-left: -' + newMargin + 'px');\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t\t// only fire changed event after initializing\n\t\t\tif (typeof (this.initialized) !== 'undefined') {\n\t\t\t\tvar e = $.Event('changed.fu.wizard');\n\t\t\t\tthis.$element.trigger(e, {\n\t\t\t\t\tstep: this.currentStep\n\t\t\t\t});\n\t\t\t}\n\n\t\t\tthis.initialized = true;\n\t\t},\n\n\t\tstepclicked: function (e) {\n\t\t\tvar li = $(e.currentTarget);\n\t\t\tvar index = this.$element.find('.steps li').index(li);\n\n\t\t\tif (index < this.currentStep && this.options.disablePreviousStep) {//enforce restrictions\n\t\t\t\treturn;\n\t\t\t} else {\n\t\t\t\tvar evt = $.Event('stepclicked.fu.wizard');\n\t\t\t\tthis.$element.trigger(evt, {\n\t\t\t\t\tstep: index + 1\n\t\t\t\t});\n\t\t\t\tif (evt.isDefaultPrevented()) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tthis.currentStep = (index + 1);\n\t\t\t\tthis.setState();\n\t\t\t}\n\t\t},\n\n\t\tsyncSteps: function () {\n\t\t\tvar i = 1;\n\t\t\tvar $steps = this.$element.find('.steps');\n\t\t\tvar $stepContent = this.$element.find('.step-content');\n\n\t\t\t$steps.children().each(function () {\n\t\t\t\tvar item = $(this);\n\t\t\t\tvar badge = item.find('.badge');\n\t\t\t\tvar step = item.attr('data-step');\n\n\t\t\t\tif (!isNaN(parseInt(badge.html(), 10))) {\n\t\t\t\t\tbadge.html(i);\n\t\t\t\t}\n\n\t\t\t\titem.attr('data-step', i);\n\t\t\t\t$stepContent.find('.step-pane[data-step=\"' + step + '\"]:last').attr('data-step', i);\n\t\t\t\ti++;\n\t\t\t});\n\t\t},\n\n\t\tprevious: function () {\n\t\t\tif (this.options.disablePreviousStep || this.currentStep === 1) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tvar e = $.Event('actionclicked.fu.wizard');\n\t\t\tthis.$element.trigger(e, {\n\t\t\t\tstep: this.currentStep,\n\t\t\t\tdirection: 'previous'\n\t\t\t});\n\t\t\tif (e.isDefaultPrevented()) {\n\t\t\t\treturn;\n\t\t\t}// don't increment ...what? Why?\n\n\t\t\tthis.currentStep -= 1;\n\t\t\tthis.setState();\n\n\t\t\t// only set focus if focus is still on the $nextBtn (avoid stomping on a focus set programmatically in actionclicked callback)\n\t\t\tif (this.$prevBtn.is(':focus')) {\n\t\t\t\tvar firstFormField = this.$element.find('.active').find('input, select, textarea')[0];\n\n\t\t\t\tif (typeof firstFormField !== 'undefined') {\n\t\t\t\t\t// allow user to start typing immediately instead of having to click on the form field.\n\t\t\t\t\t$(firstFormField).focus();\n\t\t\t\t} else if (this.$element.find('.active input:first').length === 0 && this.$prevBtn.is(':disabled')) {\n\t\t\t\t\t//only set focus on a button as the last resort if no form fields exist and the just clicked button is now disabled\n\t\t\t\t\tthis.$nextBtn.focus();\n\t\t\t\t}\n\n\t\t\t}\n\t\t},\n\n\t\tnext: function () {\n\t\t\tvar e = $.Event('actionclicked.fu.wizard');\n\t\t\tthis.$element.trigger(e, {\n\t\t\t\tstep: this.currentStep,\n\t\t\t\tdirection: 'next'\n\t\t\t});\n\t\t\tif (e.isDefaultPrevented()) {\n\t\t\t\treturn;\n\t\t\t}// respect preventDefault in case dev has attached validation to step and wants to stop propagation based on it.\n\n\t\t\tif (this.currentStep < this.numSteps) {\n\t\t\t\tthis.currentStep += 1;\n\t\t\t\tthis.setState();\n\t\t\t} else {//is last step\n\t\t\t\tthis.$element.trigger('finished.fu.wizard');\n\t\t\t}\n\n\t\t\t// only set focus if focus is still on the $nextBtn (avoid stomping on a focus set programmatically in actionclicked callback)\n\t\t\tif (this.$nextBtn.is(':focus')) {\n\t\t\t\tvar firstFormField = this.$element.find('.active').find('input, select, textarea')[0];\n\n\t\t\t\tif (typeof firstFormField !== 'undefined') {\n\t\t\t\t\t// allow user to start typing immediately instead of having to click on the form field.\n\t\t\t\t\t$(firstFormField).focus();\n\t\t\t\t} else if (this.$element.find('.active input:first').length === 0 && this.$nextBtn.is(':disabled')) {\n\t\t\t\t\t//only set focus on a button as the last resort if no form fields exist and the just clicked button is now disabled\n\t\t\t\t\tthis.$prevBtn.focus();\n\t\t\t\t}\n\n\t\t\t}\n\t\t},\n\n\t\tselectedItem: function (selectedItem) {\n\t\t\tvar retVal, step;\n\n\t\t\tif (selectedItem) {\n\t\t\t\tstep = selectedItem.step || -1;\n\t\t\t\t//allow selection of step by data-name\n\t\t\t\tstep = Number(this.$element.find('.steps li[data-name=\"' + step + '\"]').first().attr('data-step')) || Number(step);\n\n\t\t\t\tif (1 <= step && step <= this.numSteps) {\n\t\t\t\t\tthis.currentStep = step;\n\t\t\t\t\tthis.setState();\n\t\t\t\t} else {\n\t\t\t\t\tstep = this.$element.find('.steps li.active:first').attr('data-step');\n\t\t\t\t\tif (!isNaN(step)) {\n\t\t\t\t\t\tthis.currentStep = parseInt(step, 10);\n\t\t\t\t\t\tthis.setState();\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\tretVal = this;\n\t\t\t} else {\n\t\t\t\tretVal = {\n\t\t\t\t\tstep: this.currentStep\n\t\t\t\t};\n\t\t\t\tif (this.$element.find('.steps li.active:first[data-name]').length) {\n\t\t\t\t\tretVal.stepname = this.$element.find('.steps li.active:first').attr('data-name');\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t\treturn retVal;\n\t\t}\n\t};\n\n\n\t// WIZARD PLUGIN DEFINITION\n\n\t$.fn.wizard = function (option) {\n\t\tvar args = Array.prototype.slice.call(arguments, 1);\n\t\tvar methodReturn;\n\n\t\tvar $set = this.each(function () {\n\t\t\tvar $this = $(this);\n\t\t\tvar data = $this.data('fu.wizard');\n\t\t\tvar options = typeof option === 'object' && option;\n\n\t\t\tif (!data) {\n\t\t\t\t$this.data('fu.wizard', (data = new Wizard(this, options)));\n\t\t\t}\n\n\t\t\tif (typeof option === 'string') {\n\t\t\t\tmethodReturn = data[option].apply(data, args);\n\t\t\t}\n\t\t});\n\n\t\treturn (methodReturn === undefined) ? $set : methodReturn;\n\t};\n\n\t$.fn.wizard.defaults = {\n\t\tdisablePreviousStep: false,\n\t\tselectedItem: {\n\t\t\tstep: -1\n\t\t}//-1 means it will attempt to look for \"active\" class in order to set the step\n\t};\n\n\t$.fn.wizard.Constructor = Wizard;\n\n\t$.fn.wizard.noConflict = function () {\n\t\t$.fn.wizard = old;\n\t\treturn this;\n\t};\n\n\n\t// DATA-API\n\n\t$(document).on('mouseover.fu.wizard.data-api', '[data-initialize=wizard]', function (e) {\n\t\tvar $control = $(e.target).closest('.wizard');\n\t\tif (!$control.data('fu.wizard')) {\n\t\t\t$control.wizard($control.data());\n\t\t}\n\t});\n\n\t// Must be domReady for AMD compatibility\n\t$(function () {\n\t\t$('[data-initialize=wizard]').each(function () {\n\t\t\tvar $this = $(this);\n\t\t\tif ($this.data('fu.wizard')) return;\n\t\t\t$this.wizard($this.data());\n\t\t});\n\t});\n\n\t// -- BEGIN UMD WRAPPER AFTERWORD --\n}));\n// -- END UMD WRAPPER AFTERWORD --\n"

/***/ }),

/***/ "./node_modules/script-loader/index.js!./node_modules/fuelux/js/wizard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/script-loader!./node_modules/fuelux/js/wizard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !./node_modules/script-loader/addScript.js */ "./node_modules/script-loader/addScript.js")(__webpack_require__(/*! !./node_modules/raw-loader!./node_modules/fuelux/js/wizard.js */ "./node_modules/raw-loader/index.js!./node_modules/fuelux/js/wizard.js"))

/***/ }),

/***/ "./src/app/features/forms/wizards/basic-wizard-widget/basic-wizard-widget.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/features/forms/wizards/basic-wizard-widget/basic-wizard-widget.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div sa-widget [editbutton]=\"false\" [deletebutton]=\"false\" color=\"darken\">\n  <!-- widget options:\n  usage: <div sa-widget [editbutton]=\"false\">\n\n  [colorbutton]=\"false\"\n  [editbutton]=\"false\"\n  [togglebutton]=\"false\"\n  [deletebutton]=\"false\"\n  [fullscreenbutton]=\"false\"\n  [custombutton]=\"false\"\n  [collapsed]=\"true\"\n  [sortable]=\"false\"\n\n  -->\n  <header>\n    <span class=\"widget-icon\"> <i class=\"fa fa-check\"></i> </span>\n\n    <h2>Very Basic Wizard Example </h2>\n\n  </header>\n\n  <!-- widget div-->\n  <div>\n\n    <!-- widget content -->\n    <div class=\"widget-body\">\n\n      <div class=\"row\">\n        <form novalidate=\"novalidate\">\n          <div class=\"col-sm-12\">\n            <div class=\"form-bootstrapWizard clearfix\">\n              <ul class=\"bootstrapWizard\">\n                <li *ngFor=\"let pane of steps; let i = index\" [class.active]=\"activeStep == pane\">\n                  <a (click)=\"setActiveStep(pane)\"> <span class=\"step\">\n                    <span *ngIf=\"!pane.checked\">{{i + 1}}</span>\n                    <i class=\"fa fa-check\" *ngIf=\"pane.checked\"></i>\n                  </span> <span class=\"title\">{{pane.title}}</span>\n                  </a>\n                </li>\n              </ul>\n            </div>\n            <div class=\"tab-content\">\n              <div class=\"tab-pane\" [class.active]=\"activeStep.key == 'step1'\">\n                <br>\n\n                <h3><strong>Step 1 </strong> - Basic Information</h3>\n\n                <div class=\"row\">\n\n                  <div class=\"col-sm-12\">\n                    <div class=\"form-group\" [ngClass]=\"{\n                      'has-success':email.valid && activeStep.submitted,\n                      'has-error':!email.valid && activeStep.submitted\n                      }\">\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-envelope fa-lg fa-fw\"></i></span>\n                        <input class=\"form-control input-lg\" placeholder=\"email@address.com\" type=\"email\"\n                               name=\"email\" #email=\"ngModel\"\n                               required [(ngModel)]=\"model.email\">\n                      </div>\n                      <span [class.hidden]=\"email.valid || !activeStep.submitted\" class=\"help-block\">\n                          We need your email address to contact you\n                        </span>\n                    </div>\n\n                  </div>\n\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{\n                      'has-success':firstname.valid && activeStep.submitted,\n                      'has-error':!firstname.valid && activeStep.submitted\n                      }\">\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-user fa-lg fa-fw\"></i></span>\n                        <input class=\"form-control input-lg\" placeholder=\"First Name\" type=\"text\"\n                               name=\"firstname\" #firstname=\"ngModel\"\n                               required [(ngModel)]=\"model.firstname\" >\n                      </div>\n                      <span [class.hidden]=\"firstname.valid || !activeStep.submitted\" class=\"help-block\">\n                          Please specify your First name\n                        </span>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{\n                      'has-success':lastname.valid && activeStep.submitted,\n                      'has-error':!lastname.valid && activeStep.submitted\n                      }\">\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-user fa-lg fa-fw\"></i></span>\n                        <input class=\"form-control input-lg\" placeholder=\"Last Name\" type=\"text\"\n                               name=\"lastname\" #lastname=\"ngModel\"\n                               required [(ngModel)]=\"model.lastname\">\n                      </div>\n                      <span [class.hidden]=\"lastname.valid || !activeStep.submitted\" class=\"help-block\">\n                          Please specify your Last name\n                        </span>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n              <div class=\"tab-pane\" [class.active]=\"activeStep.key == 'step2'\">\n                <br>\n\n                <h3><strong>Step 2</strong> - Billing Information</h3>\n\n                <div class=\"row\">\n                  <div class=\"col-sm-4\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" [ngClass]=\"{\n                      'has-success':country.valid && activeStep.submitted,\n                      'has-error':!country.valid && activeStep.submitted\n                      }\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-flag fa-lg fa-fw\"></i></span>\n                        <select name=\"country\" required [(ngModel)]=\"model.country\" #country=\"ngModel\"\n                                class=\"form-control input-lg\">\n                          <option value=\"\" selected=\"selected\">Select Country</option>\n                          <option value=\"United States\">United States</option>\n                          <option value=\"United Kingdom\">United Kingdom</option>\n                          <option value=\"Afghanistan\">Afghanistan</option>\n                          <option value=\"Albania\">Albania</option>\n                          <option value=\"Algeria\">Algeria</option>\n                          <option value=\"American Samoa\">American Samoa</option>\n                          <option value=\"Andorra\">Andorra</option>\n                          <option value=\"Angola\">Angola</option>\n                          <option value=\"Anguilla\">Anguilla</option>\n                          <option value=\"Antarctica\">Antarctica</option>\n                          <option value=\"Antigua and Barbuda\">Antigua and Barbuda</option>\n                          <option value=\"Argentina\">Argentina</option>\n                          <option value=\"Armenia\">Armenia</option>\n                          <option value=\"Aruba\">Aruba</option>\n                          <option value=\"Australia\">Australia</option>\n                          <option value=\"Austria\">Austria</option>\n                          <option value=\"Azerbaijan\">Azerbaijan</option>\n                          <option value=\"Bahamas\">Bahamas</option>\n                          <option value=\"Bahrain\">Bahrain</option>\n                          <option value=\"Bangladesh\">Bangladesh</option>\n                          <option value=\"Barbados\">Barbados</option>\n                          <option value=\"Belarus\">Belarus</option>\n                          <option value=\"Belgium\">Belgium</option>\n                          <option value=\"Belize\">Belize</option>\n                          <option value=\"Benin\">Benin</option>\n                          <option value=\"Bermuda\">Bermuda</option>\n                          <option value=\"Bhutan\">Bhutan</option>\n                          <option value=\"Bolivia\">Bolivia</option>\n                          <option value=\"Bosnia and Herzegovina\">Bosnia and Herzegovina</option>\n                          <option value=\"Botswana\">Botswana</option>\n                          <option value=\"Bouvet Island\">Bouvet Island</option>\n                          <option value=\"Brazil\">Brazil</option>\n                          <option value=\"British Indian Ocean Territory\">British Indian Ocean Territory</option>\n                          <option value=\"Brunei Darussalam\">Brunei Darussalam</option>\n                          <option value=\"Bulgaria\">Bulgaria</option>\n                          <option value=\"Burkina Faso\">Burkina Faso</option>\n                          <option value=\"Burundi\">Burundi</option>\n                          <option value=\"Cambodia\">Cambodia</option>\n                          <option value=\"Cameroon\">Cameroon</option>\n                          <option value=\"Canada\">Canada</option>\n                          <option value=\"Cape Verde\">Cape Verde</option>\n                          <option value=\"Cayman Islands\">Cayman Islands</option>\n                          <option value=\"Central African Republic\">Central African Republic</option>\n                          <option value=\"Chad\">Chad</option>\n                          <option value=\"Chile\">Chile</option>\n                          <option value=\"China\">China</option>\n                          <option value=\"Christmas Island\">Christmas Island</option>\n                          <option value=\"Cocos (Keeling) Islands\">Cocos (Keeling) Islands</option>\n                          <option value=\"Colombia\">Colombia</option>\n                          <option value=\"Comoros\">Comoros</option>\n                          <option value=\"Congo\">Congo</option>\n                          <option value=\"Congo, The Democratic Republic of The\">Congo, The Democratic Republic of\n                            The\n                          </option>\n                          <option value=\"Cook Islands\">Cook Islands</option>\n                          <option value=\"Costa Rica\">Costa Rica</option>\n                          <option value=\"Cote D'ivoire\">Cote D'ivoire</option>\n                          <option value=\"Croatia\">Croatia</option>\n                          <option value=\"Cuba\">Cuba</option>\n                          <option value=\"Cyprus\">Cyprus</option>\n                          <option value=\"Czech Republic\">Czech Republic</option>\n                          <option value=\"Denmark\">Denmark</option>\n                          <option value=\"Djibouti\">Djibouti</option>\n                          <option value=\"Dominica\">Dominica</option>\n                          <option value=\"Dominican Republic\">Dominican Republic</option>\n                          <option value=\"Ecuador\">Ecuador</option>\n                          <option value=\"Egypt\">Egypt</option>\n                          <option value=\"El Salvador\">El Salvador</option>\n                          <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\n                          <option value=\"Eritrea\">Eritrea</option>\n                          <option value=\"Estonia\">Estonia</option>\n                          <option value=\"Ethiopia\">Ethiopia</option>\n                          <option value=\"Falkland Islands (Malvinas)\">Falkland Islands (Malvinas)</option>\n                          <option value=\"Faroe Islands\">Faroe Islands</option>\n                          <option value=\"Fiji\">Fiji</option>\n                          <option value=\"Finland\">Finland</option>\n                          <option value=\"France\">France</option>\n                          <option value=\"French Guiana\">French Guiana</option>\n                          <option value=\"French Polynesia\">French Polynesia</option>\n                          <option value=\"French Southern Territories\">French Southern Territories</option>\n                          <option value=\"Gabon\">Gabon</option>\n                          <option value=\"Gambia\">Gambia</option>\n                          <option value=\"Georgia\">Georgia</option>\n                          <option value=\"Germany\">Germany</option>\n                          <option value=\"Ghana\">Ghana</option>\n                          <option value=\"Gibraltar\">Gibraltar</option>\n                          <option value=\"Greece\">Greece</option>\n                          <option value=\"Greenland\">Greenland</option>\n                          <option value=\"Grenada\">Grenada</option>\n                          <option value=\"Guadeloupe\">Guadeloupe</option>\n                          <option value=\"Guam\">Guam</option>\n                          <option value=\"Guatemala\">Guatemala</option>\n                          <option value=\"Guinea\">Guinea</option>\n                          <option value=\"Guinea-bissau\">Guinea-bissau</option>\n                          <option value=\"Guyana\">Guyana</option>\n                          <option value=\"Haiti\">Haiti</option>\n                          <option value=\"Heard Island and Mcdonald Islands\">Heard Island and Mcdonald Islands</option>\n                          <option value=\"Holy See (Vatican City State)\">Holy See (Vatican City State)</option>\n                          <option value=\"Honduras\">Honduras</option>\n                          <option value=\"Hong Kong\">Hong Kong</option>\n                          <option value=\"Hungary\">Hungary</option>\n                          <option value=\"Iceland\">Iceland</option>\n                          <option value=\"India\">India</option>\n                          <option value=\"Indonesia\">Indonesia</option>\n                          <option value=\"Iran, Islamic Republic of\">Iran, Islamic Republic of</option>\n                          <option value=\"Iraq\">Iraq</option>\n                          <option value=\"Ireland\">Ireland</option>\n                          <option value=\"Israel\">Israel</option>\n                          <option value=\"Italy\">Italy</option>\n                          <option value=\"Jamaica\">Jamaica</option>\n                          <option value=\"Japan\">Japan</option>\n                          <option value=\"Jordan\">Jordan</option>\n                          <option value=\"Kazakhstan\">Kazakhstan</option>\n                          <option value=\"Kenya\">Kenya</option>\n                          <option value=\"Kiribati\">Kiribati</option>\n                          <option value=\"Korea, Democratic People's Republic of\">Korea, Democratic People's Republic\n                            of\n                          </option>\n                          <option value=\"Korea, Republic of\">Korea, Republic of</option>\n                          <option value=\"Kuwait\">Kuwait</option>\n                          <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\n                          <option value=\"Lao People's Democratic Republic\">Lao People's Democratic Republic</option>\n                          <option value=\"Latvia\">Latvia</option>\n                          <option value=\"Lebanon\">Lebanon</option>\n                          <option value=\"Lesotho\">Lesotho</option>\n                          <option value=\"Liberia\">Liberia</option>\n                          <option value=\"Libyan Arab Jamahiriya\">Libyan Arab Jamahiriya</option>\n                          <option value=\"Liechtenstein\">Liechtenstein</option>\n                          <option value=\"Lithuania\">Lithuania</option>\n                          <option value=\"Luxembourg\">Luxembourg</option>\n                          <option value=\"Macao\">Macao</option>\n                          <option value=\"Macedonia, The Former Yugoslav Republic of\">Macedonia, The Former Yugoslav\n                            Republic of\n                          </option>\n                          <option value=\"Madagascar\">Madagascar</option>\n                          <option value=\"Malawi\">Malawi</option>\n                          <option value=\"Malaysia\">Malaysia</option>\n                          <option value=\"Maldives\">Maldives</option>\n                          <option value=\"Mali\">Mali</option>\n                          <option value=\"Malta\">Malta</option>\n                          <option value=\"Marshall Islands\">Marshall Islands</option>\n                          <option value=\"Martinique\">Martinique</option>\n                          <option value=\"Mauritania\">Mauritania</option>\n                          <option value=\"Mauritius\">Mauritius</option>\n                          <option value=\"Mayotte\">Mayotte</option>\n                          <option value=\"Mexico\">Mexico</option>\n                          <option value=\"Micronesia, Federated States of\">Micronesia, Federated States of</option>\n                          <option value=\"Moldova, Republic of\">Moldova, Republic of</option>\n                          <option value=\"Monaco\">Monaco</option>\n                          <option value=\"Mongolia\">Mongolia</option>\n                          <option value=\"Montserrat\">Montserrat</option>\n                          <option value=\"Morocco\">Morocco</option>\n                          <option value=\"Mozambique\">Mozambique</option>\n                          <option value=\"Myanmar\">Myanmar</option>\n                          <option value=\"Namibia\">Namibia</option>\n                          <option value=\"Nauru\">Nauru</option>\n                          <option value=\"Nepal\">Nepal</option>\n                          <option value=\"Netherlands\">Netherlands</option>\n                          <option value=\"Netherlands Antilles\">Netherlands Antilles</option>\n                          <option value=\"New Caledonia\">New Caledonia</option>\n                          <option value=\"New Zealand\">New Zealand</option>\n                          <option value=\"Nicaragua\">Nicaragua</option>\n                          <option value=\"Niger\">Niger</option>\n                          <option value=\"Nigeria\">Nigeria</option>\n                          <option value=\"Niue\">Niue</option>\n                          <option value=\"Norfolk Island\">Norfolk Island</option>\n                          <option value=\"Northern Mariana Islands\">Northern Mariana Islands</option>\n                          <option value=\"Norway\">Norway</option>\n                          <option value=\"Oman\">Oman</option>\n                          <option value=\"Pakistan\">Pakistan</option>\n                          <option value=\"Palau\">Palau</option>\n                          <option value=\"Palestinian Territory, Occupied\">Palestinian Territory, Occupied</option>\n                          <option value=\"Panama\">Panama</option>\n                          <option value=\"Papua New Guinea\">Papua New Guinea</option>\n                          <option value=\"Paraguay\">Paraguay</option>\n                          <option value=\"Peru\">Peru</option>\n                          <option value=\"Philippines\">Philippines</option>\n                          <option value=\"Pitcairn\">Pitcairn</option>\n                          <option value=\"Poland\">Poland</option>\n                          <option value=\"Portugal\">Portugal</option>\n                          <option value=\"Puerto Rico\">Puerto Rico</option>\n                          <option value=\"Qatar\">Qatar</option>\n                          <option value=\"Reunion\">Reunion</option>\n                          <option value=\"Romania\">Romania</option>\n                          <option value=\"Russian Federation\">Russian Federation</option>\n                          <option value=\"Rwanda\">Rwanda</option>\n                          <option value=\"Saint Helena\">Saint Helena</option>\n                          <option value=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option>\n                          <option value=\"Saint Lucia\">Saint Lucia</option>\n                          <option value=\"Saint Pierre and Miquelon\">Saint Pierre and Miquelon</option>\n                          <option value=\"Saint Vincent and The Grenadines\">Saint Vincent and The Grenadines</option>\n                          <option value=\"Samoa\">Samoa</option>\n                          <option value=\"San Marino\">San Marino</option>\n                          <option value=\"Sao Tome and Principe\">Sao Tome and Principe</option>\n                          <option value=\"Saudi Arabia\">Saudi Arabia</option>\n                          <option value=\"Senegal\">Senegal</option>\n                          <option value=\"Serbia and Montenegro\">Serbia and Montenegro</option>\n                          <option value=\"Seychelles\">Seychelles</option>\n                          <option value=\"Sierra Leone\">Sierra Leone</option>\n                          <option value=\"Singapore\">Singapore</option>\n                          <option value=\"Slovakia\">Slovakia</option>\n                          <option value=\"Slovenia\">Slovenia</option>\n                          <option value=\"Solomon Islands\">Solomon Islands</option>\n                          <option value=\"Somalia\">Somalia</option>\n                          <option value=\"South Africa\">South Africa</option>\n                          <option value=\"South Georgia and The South Sandwich Islands\">South Georgia and The South\n                            Sandwich Islands\n                          </option>\n                          <option value=\"Spain\">Spain</option>\n                          <option value=\"Sri Lanka\">Sri Lanka</option>\n                          <option value=\"Sudan\">Sudan</option>\n                          <option value=\"Suriname\">Suriname</option>\n                          <option value=\"Svalbard and Jan Mayen\">Svalbard and Jan Mayen</option>\n                          <option value=\"Swaziland\">Swaziland</option>\n                          <option value=\"Sweden\">Sweden</option>\n                          <option value=\"Switzerland\">Switzerland</option>\n                          <option value=\"Syrian Arab Republic\">Syrian Arab Republic</option>\n                          <option value=\"Taiwan, Province of China\">Taiwan, Province of China</option>\n                          <option value=\"Tajikistan\">Tajikistan</option>\n                          <option value=\"Tanzania, United Republic of\">Tanzania, United Republic of</option>\n                          <option value=\"Thailand\">Thailand</option>\n                          <option value=\"Timor-leste\">Timor-leste</option>\n                          <option value=\"Togo\">Togo</option>\n                          <option value=\"Tokelau\">Tokelau</option>\n                          <option value=\"Tonga\">Tonga</option>\n                          <option value=\"Trinidad and Tobago\">Trinidad and Tobago</option>\n                          <option value=\"Tunisia\">Tunisia</option>\n                          <option value=\"Turkey\">Turkey</option>\n                          <option value=\"Turkmenistan\">Turkmenistan</option>\n                          <option value=\"Turks and Caicos Islands\">Turks and Caicos Islands</option>\n                          <option value=\"Tuvalu\">Tuvalu</option>\n                          <option value=\"Uganda\">Uganda</option>\n                          <option value=\"Ukraine\">Ukraine</option>\n                          <option value=\"United Arab Emirates\">United Arab Emirates</option>\n                          <option value=\"United Kingdom\">United Kingdom</option>\n                          <option value=\"United States\">United States</option>\n                          <option value=\"United States Minor Outlying Islands\">United States Minor Outlying Islands\n                          </option>\n                          <option value=\"Uruguay\">Uruguay</option>\n                          <option value=\"Uzbekistan\">Uzbekistan</option>\n                          <option value=\"Vanuatu\">Vanuatu</option>\n                          <option value=\"Venezuela\">Venezuela</option>\n                          <option value=\"Viet Nam\">Viet Nam</option>\n                          <option value=\"Virgin Islands, British\">Virgin Islands, British</option>\n                          <option value=\"Virgin Islands, U.S.\">Virgin Islands, U.S.</option>\n                          <option value=\"Wallis and Futuna\">Wallis and Futuna</option>\n                          <option value=\"Western Sahara\">Western Sahara</option>\n                          <option value=\"Yemen\">Yemen</option>\n                          <option value=\"Zambia\">Zambia</option>\n                          <option value=\"Zimbabwe\">Zimbabwe</option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" [ngClass]=\"{\n                      'has-success':city.valid && activeStep.submitted,\n                      'has-error':!city.valid && activeStep.submitted\n                      }\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-map-marker fa-lg fa-fw\"></i></span>\n                        <select class=\"form-control input-lg\" required [(ngModel)]=\"model.city\" #city=\"ngModel\"\n                                name=\"city\">\n                          <option value=\"\" selected=\"selected\">Select City</option>\n                          <option>Amsterdam</option>\n                          <option>Atlanta</option>\n                          <option>Baltimore</option>\n                          <option>Boston</option>\n                          <option>Buenos Aires</option>\n                          <option>Calgary</option>\n                          <option>Chicago</option>\n                          <option>Denver</option>\n                          <option>Dubai</option>\n                          <option>Frankfurt</option>\n                          <option>Hong Kong</option>\n                          <option>Honolulu</option>\n                          <option>Houston</option>\n                          <option>Kuala Lumpur</option>\n                          <option>London</option>\n                          <option>Los Angeles</option>\n                          <option>Melbourne</option>\n                          <option>Mexico City</option>\n                          <option>Miami</option>\n                          <option>Minneapolis</option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" [ngClass]=\"{\n                      'has-success':postal.valid && activeStep.submitted,\n                      'has-error':!postal.valid && activeStep.submitted\n                      }\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-envelope-o fa-lg fa-fw\"></i></span>\n                        <input class=\"form-control input-lg\" placeholder=\"Postal Code\" type=\"text\" name=\"postal\"\n                               [(ngModel)]=\"model.postal\" #postal=\"ngModel\" required minLength=\"4\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" [ngClass]=\"{\n                      'has-success':wphone.valid && activeStep.submitted,\n                      'has-error':!wphone.valid && activeStep.submitted\n                      }\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-phone fa-lg fa-fw\"></i></span>\n                        <input class=\"form-control input-lg\" saMaskedInput=\"+99 (999) 999-9999\"\n                               saMaskedPlaceholder=\"X\" placeholder=\"+1\" type=\"text\" name=\"wphone\"\n                               [(ngModel)]=\"model.wphone\" #wphone=\"ngModel\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" [ngClass]=\"{\n                      'has-success':hphone.valid && activeStep.submitted,\n                      'has-error':!hphone.valid && activeStep.submitted\n                      }\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-mobile fa-lg fa-fw\"></i></span>\n                        <input class=\"form-control input-lg\" saMaskedInput=\"+99 (999) 999-9999\"\n                               saMaskedPlaceholder=\"X\" placeholder=\"+1\" type=\"text\" name=\"hphone\"\n                               [(ngModel)]=\"model.hphone\" #hphone=\"ngModel\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"tab-pane\" [class.active]=\"activeStep.key == 'step3'\">\n                <br>\n\n                <h3><strong>Step 3</strong> - Domain Setup</h3>\n\n                <alert type=\"info\" dismissible=\"true\">\n                  <i class=\"fa-fw fa fa-info\"></i>\n                  <strong>Info!</strong> Place an info message box if you wish.\n                </alert>\n                <div class=\"form-group\">\n                  <label>This is a label</label>\n                  <input class=\"form-control input-lg\" placeholder=\"Another input box here...\" type=\"text\" name=\"etc\"\n                         id=\"etc\">\n                </div>\n              </div>\n              <div class=\"tab-pane\" [class.active]=\"activeStep.key == 'step4'\">\n                <br>\n\n                <h3><strong>Step 4</strong> - Save Form</h3>\n                <br>\n\n                <h1 class=\"text-center text-success\"><strong><i class=\"fa fa-check fa-lg\"></i> Complete</strong></h1>\n                <h4 class=\"text-center\">Click next to finish</h4>\n                <br>\n                <br>\n              </div>\n\n              <div class=\"form-actions\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <ul class=\"pager wizard no-margin\">\n                      <li class=\"previous\">\n                        <a (click)=\"prevStep()\" [class.disabled]=\"steps.indexOf(activeStep) == 0\"\n                                class=\"btn btn-lg btn-default\"> Previous\n                        </a>\n                      </li>\n                      <li class=\"next\">\n                        <a (click)=\"nextStep()\" [class.disabled]=\"activeStep.submitted && !activeStep.valid\" class=\"btn btn-lg txt-color-darken\"> Next\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </form>\n      </div>\n\n    </div>\n    <!-- end widget content -->\n\n  </div>\n  <!-- end widget div -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/forms/wizards/basic-wizard-widget/basic-wizard-widget.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/forms/wizards/basic-wizard-widget/basic-wizard-widget.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BasicWizardWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicWizardWidgetComponent", function() { return BasicWizardWidgetComponent; });
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


var BasicWizardWidgetComponent = /** @class */ (function () {
    function BasicWizardWidgetComponent() {
        this.model = {
            email: '',
            firstname: '',
            lastname: '',
            country: '',
            city: '',
            postal: '',
            wphone: '',
            hphone: ''
        };
        this.steps = [
            {
                key: 'step1',
                title: 'Basic information',
                valid: false,
                checked: false,
                submitted: false,
            },
            {
                key: 'step2',
                title: 'Billing information',
                valid: false,
                checked: false,
                submitted: false,
            },
            {
                key: 'step3',
                title: 'Domain Setup',
                valid: true,
                checked: false,
                submitted: false,
            },
            {
                key: 'step4',
                title: 'Save Form',
                valid: true,
                checked: false,
                submitted: false,
            },
        ];
        this.activeStep = this.steps[0];
    }
    BasicWizardWidgetComponent.prototype.ngOnInit = function () {
    };
    BasicWizardWidgetComponent.prototype.setActiveStep = function (steo) {
        this.activeStep = steo;
    };
    BasicWizardWidgetComponent.prototype.prevStep = function () {
        var idx = this.steps.indexOf(this.activeStep);
        if (idx > 0) {
            this.activeStep = this.steps[idx - 1];
        }
    };
    BasicWizardWidgetComponent.prototype.nextStep = function () {
        this.activeStep.submitted = true;
        if (!this.activeStep.valid) {
            return;
        }
        this.activeStep.checked = true;
        if (this.steps.every(function (it) { return (it.valid && it.checked); })) {
            this.onWizardComplete(this.model);
        }
        else {
            var idx = this.steps.indexOf(this.activeStep);
            this.activeStep = null;
            while (!this.activeStep) {
                idx = idx == this.steps.length - 1 ? 0 : idx + 1;
                if (!this.steps[idx].valid || !this.steps[idx].checked) {
                    this.activeStep = this.steps[idx];
                }
            }
        }
    };
    BasicWizardWidgetComponent.prototype.onWizardComplete = function (data) {
        console.log('basic wizard complete', data);
    };
    // custom change detection
    BasicWizardWidgetComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (!this.lastModel) {
            // backup model to compare further with
            this.lastModel = Object.assign({}, this.model);
        }
        else {
            if (Object.keys(this.model).some(function (it) { return _this.model[it] != _this.lastModel[it]; })) {
                // change detected
                this.steps.find(function (it) { return it.key == 'step1'; }).valid = !!(this.model.email && this.model.firstname && this.model.lastname);
                this.steps.find(function (it) { return it.key == 'step2'; }).valid = !!(this.model.country && this.model.city && this.model.postal);
                this.lastModel = Object.assign({}, this.model);
            }
        }
    };
    BasicWizardWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'basic-wizard-widget',
            template: __webpack_require__(/*! ./basic-wizard-widget.component.html */ "./src/app/features/forms/wizards/basic-wizard-widget/basic-wizard-widget.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('changePane', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: 0,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '*',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms 300ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], BasicWizardWidgetComponent);
    return BasicWizardWidgetComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/wizards/fuel-ux-wizard-widget/fuel-ux-wizard-widget.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/features/forms/wizards/fuel-ux-wizard-widget/fuel-ux-wizard-widget.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div sa-widget [editbutton]=\"false\" [deletebutton]=\"false\">\n  <!-- widget options:\n  usage: <div sa-widget [editbutton]=\"false\">\n\n  [colorbutton]=\"false\"\n  [editbutton]=\"false\"\n  [togglebutton]=\"false\"\n  [deletebutton]=\"false\"\n  [fullscreenbutton]=\"false\"\n  [custombutton]=\"false\"\n  [collapsed]=\"true\"\n  [sortable]=\"false\"\n\n  -->\n  <header>\n    <h2>Fuel Wizard </h2>\n\n  </header>\n\n  <!-- widget div-->\n  <div>\n\n    <!-- widget content -->\n    <div class=\"widget-body fuelux\">\n      <fuel-ux-wizard (complete)=\"onWizardComplete($event)\">\n        <div class=\"wizard\">\n          <div class=\"steps-container\">\n            <ul class=\"steps\">\n              <li data-step=\"1\" class=\"active\">\n                <span class=\"badge badge-info\">1</span>Step 1<span class=\"chevron\"></span>\n              </li>\n              <li data-step=\"2\">\n                <span class=\"badge\">2</span>Step 2<span class=\"chevron\"></span>\n              </li>\n              <li data-step=\"3\">\n                <span class=\"badge\">3</span>Step 3<span class=\"chevron\"></span>\n              </li>\n              <li data-step=\"4\">\n                <span class=\"badge\">4</span>Step 4<span class=\"chevron\"></span>\n              </li>\n              <li data-step=\"5\">\n                <span class=\"badge\">5</span>Step 5<span class=\"chevron\"></span>\n              </li>\n            </ul>\n          </div>\n          <div class=\"actions\">\n            <button type=\"button\" class=\"btn btn-sm btn-primary btn-prev\">\n              <i class=\"fa fa-arrow-left\"></i>Prev\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-success btn-next\" data-last=\"Finish\">\n              Next<i class=\"fa fa-arrow-right\"></i>\n            </button>\n          </div>\n        </div>\n        <div class=\"step-content\">\n          <form class=\"form-horizontal\">\n\n            <div class=\"step-pane active\" data-step=\"1\">\n              <h3><strong>Step 1 </strong> - Validation states</h3>\n\n              <!-- wizard form starts here -->\n              <fieldset>\n\n                <div class=\"form-group has-warning\">\n                  <label class=\"col-md-2 control-label\">Input warning</label>\n\n                  <div class=\"col-md-10\">\n                    <div class=\"input-group\">\n                      <input class=\"form-control\" type=\"text\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-warning\"></i></span>\n                    </div>\n                    <span class=\"help-block\">Something may have gone wrong</span>\n                  </div>\n\n                </div>\n\n                <div class=\"form-group has-error\">\n                  <label class=\"col-md-2 control-label\">Input error</label>\n\n                  <div class=\"col-md-10\">\n                    <div class=\"input-group\">\n                      <input class=\"form-control\" type=\"text\">\n                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-remove-circle\"></i></span>\n                    </div>\n                    <span class=\"help-block\"><i class=\"fa fa-warning\"></i> Please correct the error</span>\n                  </div>\n                </div>\n\n                <div class=\"form-group has-success\">\n                  <label class=\"col-md-2 control-label\">Input success</label>\n\n                  <div class=\"col-md-10\">\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-dollar\"></i></span>\n                      <input class=\"form-control\" type=\"text\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-check\"></i></span>\n                    </div>\n                    <span class=\"help-block\">Something may have gone wrong</span>\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label class=\"control-label col-md-2\">Input icon success</label>\n\n                  <div class=\"col-md-10\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-12\">\n\n                        <div class=\"input-icon-left\">\n                          <i class=\"fa txt-color-green fa-check\"></i>\n                          <input class=\"form-control\" placeholder=\"Left Icon\" type=\"text\">\n                        </div>\n\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </fieldset>\n\n            </div>\n\n            <div class=\"step-pane\" data-step=\"2\">\n              <h3><strong>Step 2 </strong> - Alerts</h3>\n\n              <alert type=\"warning\" dismissible=\"true\">\n                <i class=\"fa-fw fa fa-warning\"></i>\n                <strong>Warning</strong> Your monthly traffic is reaching limit.\n              </alert>\n\n              <alert type=\"success\" dismissible=\"true\">\n                <i class=\"fa-fw fa fa-check\"></i>\n                <strong>Success</strong> The page has been added.\n              </alert>\n\n              <alert type=\"info\" dismissible=\"true\">\n                <i class=\"fa-fw fa fa-info\"></i>\n                <strong>Info!</strong> You have 198 unread messages.\n              </alert>\n\n              <alert type=\"danger\" dismissible=\"true\">\n                <i class=\"fa-fw fa fa-times\"></i>\n                <strong>Error!</strong> The daily cronjob has failed.\n              </alert>\n\n            </div>\n\n            <div class=\"step-pane\" data-step=\"3\">\n              <h3><strong>Step 3 </strong> - Wizard continued</h3>\n              <br>\n              <br>\n\n              <h1 class=\"text-center text-primary\"> This will be your Step 3 </h1>\n              <br>\n              <br>\n              <br>\n              <br>\n            </div>\n\n            <div class=\"step-pane\" data-step=\"4\">\n              <h3><strong>Step 4 </strong> - Wizard continued...</h3>\n              <br>\n              <br>\n\n              <h1 class=\"text-center text-danger\"> This will be your Step 4 </h1>\n              <br>\n              <br>\n              <br>\n              <br>\n            </div>\n\n            <div class=\"step-pane\" data-step=\"5\">\n              <h3><strong>Step 5 </strong> - Finished!</h3>\n              <br>\n              <br>\n\n              <h1 class=\"text-center text-success\"><i class=\"fa fa-check\"></i> Congratulations!\n                <br>\n                <small>Click finish to end wizard</small>\n              </h1>\n              <br>\n              <br>\n              <br>\n              <br>\n            </div>\n\n          </form>\n        </div>\n      </fuel-ux-wizard>\n    </div>\n    <!-- end widget content -->\n\n  </div>\n  <!-- end widget div -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/forms/wizards/fuel-ux-wizard-widget/fuel-ux-wizard-widget.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/features/forms/wizards/fuel-ux-wizard-widget/fuel-ux-wizard-widget.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: FuelUxWizardWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelUxWizardWidgetComponent", function() { return FuelUxWizardWidgetComponent; });
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

var FuelUxWizardWidgetComponent = /** @class */ (function () {
    function FuelUxWizardWidgetComponent() {
    }
    FuelUxWizardWidgetComponent.prototype.ngOnInit = function () {
    };
    FuelUxWizardWidgetComponent.prototype.onWizardComplete = function (data) {
        console.log('fuel-ux wizard complete', data);
    };
    FuelUxWizardWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuel-ux-wizard-widget',
            template: __webpack_require__(/*! ./fuel-ux-wizard-widget.component.html */ "./src/app/features/forms/wizards/fuel-ux-wizard-widget/fuel-ux-wizard-widget.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], FuelUxWizardWidgetComponent);
    return FuelUxWizardWidgetComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/wizards/wizards.component.html":
/*!***************************************************************!*\
  !*** ./src/app/features/forms/wizards/wizards.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Forms', 'Wizards']\" icon=\"table\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n\n\n  <!-- widget grid -->\n  <sa-widgets-grid>\n\n    <!-- row -->\n    <div class=\"row\">\n\n      <!-- NEW WIDGET START -->\n      <article class=\"col-sm-12 col-md-12 col-lg-6\">\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <basic-wizard-widget></basic-wizard-widget>\n        <!-- end widget -->\n\n      </article>\n      <!-- WIDGET END -->\n\n      <!-- NEW WIDGET START -->\n      <article class=\"col-sm-12 col-md-12 col-lg-6\">\n\n        <!-- Widget ID (each widget will need unique ID)-->\n          <fuel-ux-wizard-widget></fuel-ux-wizard-widget>\n        <!-- end widget -->\n\n      </article>\n      <!-- WIDGET END -->\n\n    </div>\n\n    <!-- end row -->\n\n  </sa-widgets-grid>\n\n\n  <!-- end widget grid -->\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/forms/wizards/wizards.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/forms/wizards/wizards.component.ts ***!
  \*************************************************************/
/*! exports provided: WizardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardsComponent", function() { return WizardsComponent; });
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

var WizardsComponent = /** @class */ (function () {
    function WizardsComponent() {
    }
    WizardsComponent.prototype.ngOnInit = function () {
    };
    WizardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wizards',
            template: __webpack_require__(/*! ./wizards.component.html */ "./src/app/features/forms/wizards/wizards.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], WizardsComponent);
    return WizardsComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/wizards/wizards.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/forms/wizards/wizards.module.ts ***!
  \**********************************************************/
/*! exports provided: WizardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardsModule", function() { return WizardsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _wizards_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wizards.routing */ "./src/app/features/forms/wizards/wizards.routing.ts");
/* harmony import */ var _wizards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wizards.component */ "./src/app/features/forms/wizards/wizards.component.ts");
/* harmony import */ var _basic_wizard_widget_basic_wizard_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-wizard-widget/basic-wizard-widget.component */ "./src/app/features/forms/wizards/basic-wizard-widget/basic-wizard-widget.component.ts");
/* harmony import */ var _fuel_ux_wizard_widget_fuel_ux_wizard_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fuel-ux-wizard-widget/fuel-ux-wizard-widget.component */ "./src/app/features/forms/wizards/fuel-ux-wizard-widget/fuel-ux-wizard-widget.component.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_shared_forms_wizards_smartadmin_wizards_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/forms/wizards/smartadmin-wizards.module */ "./src/app/shared/forms/wizards/smartadmin-wizards.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var WizardsModule = /** @class */ (function () {
    function WizardsModule() {
    }
    WizardsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _wizards_routing__WEBPACK_IMPORTED_MODULE_2__["wizardsRouting"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _app_shared_forms_wizards_smartadmin_wizards_module__WEBPACK_IMPORTED_MODULE_7__["SmartadminWizardsModule"]
            ],
            declarations: [_wizards_component__WEBPACK_IMPORTED_MODULE_3__["WizardsComponent"], _basic_wizard_widget_basic_wizard_widget_component__WEBPACK_IMPORTED_MODULE_4__["BasicWizardWidgetComponent"], _fuel_ux_wizard_widget_fuel_ux_wizard_widget_component__WEBPACK_IMPORTED_MODULE_5__["FuelUxWizardWidgetComponent"]]
        })
    ], WizardsModule);
    return WizardsModule;
}());



/***/ }),

/***/ "./src/app/features/forms/wizards/wizards.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/forms/wizards/wizards.routing.ts ***!
  \***********************************************************/
/*! exports provided: wizardsRoutes, wizardsRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wizardsRoutes", function() { return wizardsRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wizardsRouting", function() { return wizardsRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wizards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wizards.component */ "./src/app/features/forms/wizards/wizards.component.ts");


var wizardsRoutes = [{
        path: '',
        component: _wizards_component__WEBPACK_IMPORTED_MODULE_1__["WizardsComponent"]
    }];
var wizardsRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(wizardsRoutes);


/***/ }),

/***/ "./src/app/shared/forms/wizards/fuel-ux-wizard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/forms/wizards/fuel-ux-wizard.component.ts ***!
  \******************************************************************/
/*! exports provided: FuelUxWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelUxWizardComponent", function() { return FuelUxWizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var script_loader_fuelux_js_wizard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! script-loader!fuelux/js/wizard.js */ "./node_modules/script-loader/index.js!./node_modules/fuelux/js/wizard.js");
/* harmony import */ var script_loader_fuelux_js_wizard_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(script_loader_fuelux_js_wizard_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuelUxWizardComponent = /** @class */ (function () {
    function FuelUxWizardComponent(el) {
        this.el = el;
        this.complete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FuelUxWizardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var element = $(this.el.nativeElement);
        var wizard = element.wizard();
        var $form = element.find("form");
        wizard.on("actionclicked.fu.wizard", function (e, data) {
            if ($form.data("validator")) {
                if (!$form.valid()) {
                    $form.data("validator").focusInvalid();
                    e.preventDefault();
                }
            }
        });
        wizard.on("finished.fu.wizard", function (e, data) {
            var formData = {};
            $form.serializeArray().forEach(function (field) {
                formData[field.name] = field.value;
            });
            _this.complete.emit(formData);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FuelUxWizardComponent.prototype, "complete", void 0);
    FuelUxWizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "fuel-ux-wizard",
            template: "\n    <div>\n      <ng-content></ng-content>\n    </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FuelUxWizardComponent);
    return FuelUxWizardComponent;
}());



/***/ }),

/***/ "./src/app/shared/forms/wizards/smartadmin-wizards.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/forms/wizards/smartadmin-wizards.module.ts ***!
  \*******************************************************************/
/*! exports provided: SmartadminWizardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartadminWizardsModule", function() { return SmartadminWizardsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fuel_ux_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fuel-ux-wizard.component */ "./src/app/shared/forms/wizards/fuel-ux-wizard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SmartadminWizardsModule = /** @class */ (function () {
    function SmartadminWizardsModule() {
    }
    SmartadminWizardsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_fuel_ux_wizard_component__WEBPACK_IMPORTED_MODULE_2__["FuelUxWizardComponent"]],
            exports: [_fuel_ux_wizard_component__WEBPACK_IMPORTED_MODULE_2__["FuelUxWizardComponent"]]
        })
    ], SmartadminWizardsModule);
    return SmartadminWizardsModule;
}());



/***/ })

}]);
//# sourceMappingURL=wizards-wizards-module.js.map