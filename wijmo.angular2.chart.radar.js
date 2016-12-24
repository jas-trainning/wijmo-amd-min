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
define(["require", "exports", 'wijmo/wijmo.chart.radar', '@angular/core', '@angular/common', 'wijmo/wijmo.angular2.directiveBase', 'wijmo/wijmo.angular2.chart'], function(require, exports, wjcChartRadar, core_1, common_1, wijmo_angular2_directiveBase_1, wijmo_angular2_chart_1)
{
"use strict";
var WjFlexRadar=function(_super)
{
function WjFlexRadar(elRef, injector)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexRadar, _super), Object.defineProperty(WjFlexRadar.prototype, "tooltipContent", {
get: function()
{
return this.tooltip.content
}, set: function(value)
{
this.tooltip.content = value
}, enumerable: !0, configurable: !0
}), Object.defineProperty(WjFlexRadar.prototype, "labelContent", {
get: function()
{
return this.dataLabel.content
}, set: function(value)
{
this.dataLabel.content = value
}, enumerable: !0, configurable: !0
}), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-radar', template: ""
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFlexRadar)
}(wjcChartRadar.FlexRadar),
WjFlexRadarAxis,
WjFlexRadarSeries,
moduleExports,
WjChartRadarModule;
exports.WjFlexRadar = WjFlexRadar;
WjFlexRadarAxis = function(_super)
{
function WjFlexRadarAxis(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexRadarAxis, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-radar-axis', wjParentDirectives: [WjFlexRadar, core_1.forwardRef(function()
{
return WjFlexRadarSeries
}), ], template: ""
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFlexRadarAxis)
}(wjcChartRadar.FlexRadarAxis);
exports.WjFlexRadarAxis = WjFlexRadarAxis;
WjFlexRadarSeries = function(_super)
{
function WjFlexRadarSeries(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexRadarSeries, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-radar-series', wjParentDirectives: [WjFlexRadar], template: "<div><ng-content></ng-content></div>", wjSiblingDirectiveId: wijmo_angular2_chart_1.WjFlexChartSeries.SiblingId
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFlexRadarSeries)
}(wjcChartRadar.FlexRadarSeries);
exports.WjFlexRadarSeries = WjFlexRadarSeries;
moduleExports = [WjFlexRadar, WjFlexRadarAxis, WjFlexRadarSeries];
WjChartRadarModule = function()
{
function WjChartRadarModule(){}
return __decorate([core_1.NgModule({
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
})], WjChartRadarModule)
}();
exports.WjChartRadarModule = WjChartRadarModule
})