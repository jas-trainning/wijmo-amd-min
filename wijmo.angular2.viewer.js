﻿/*
    *
    * Wijmo Library 5.20163.234
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * http://wijmo.com/products/wijmo-5/license/
    *
    */
var __extends=this && this.__extends || function(d, b)
{
function __()
{
this.constructor = d
}
for (var p in b)
b.hasOwnProperty(p) && (d[p] = b[p]);
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
},
__decorate=this && this.__decorate || function(decorators, target, key, desc)
{
var c=arguments.length,
r=c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
d,
i;
if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
r = Reflect.decorate(decorators, target, key, desc);
else
for (i = decorators.length - 1; i >= 0; i--)
(d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
return c > 3 && r && Object.defineProperty(target, key, r), r
},
__param=this && this.__param || function(paramIndex, decorator)
{
return function(target, key)
{
decorator(target, key, paramIndex)
}
};
define(["require", "exports", 'wijmo/wijmo.viewer', '@angular/core', '@angular/core', '@angular/common', 'wijmo/wijmo.angular2.directiveBase'], function(require, exports, wjcViewer, core_1, core_2, common_1, wijmo_angular2_directiveBase_1)
{
"use strict";
var WjReportViewer=function(_super)
{
function WjReportViewer(elRef, injector)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjReportViewer, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-report-viewer', template: ""
}), __param(0, core_1.Inject(core_2.ElementRef)), __param(1, core_1.Inject(core_2.Injector))], WjReportViewer)
}(wjcViewer.ReportViewer),
WjPdfViewer,
moduleExports,
WjViewerModule;
exports.WjReportViewer = WjReportViewer;
WjPdfViewer = function(_super)
{
function WjPdfViewer(elRef, injector)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjPdfViewer, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-pdf-viewer', template: ""
}), __param(0, core_1.Inject(core_2.ElementRef)), __param(1, core_1.Inject(core_2.Injector))], WjPdfViewer)
}(wjcViewer.PdfViewer);
exports.WjPdfViewer = WjPdfViewer;
moduleExports = [WjReportViewer, WjPdfViewer];
WjViewerModule = function()
{
function WjViewerModule(){}
return __decorate([core_1.NgModule({
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
})], WjViewerModule)
}();
exports.WjViewerModule = WjViewerModule
})