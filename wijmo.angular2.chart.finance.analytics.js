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
define(["require", "exports", 'wijmo/wijmo.chart.finance.analytics', '@angular/core', '@angular/common', 'wijmo/wijmo.angular2.directiveBase', 'wijmo/wijmo.angular2.chart', 'wijmo/wijmo.angular2.chart.finance'], function(require, exports, wjcChartFinanceAnalytics, core_1, common_1, wijmo_angular2_directiveBase_1, wijmo_angular2_chart_1, wijmo_angular2_chart_finance_1)
{
"use strict";
var WjFlexChartFibonacci=function(_super)
{
function WjFlexChartFibonacci(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartFibonacci, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-fibonacci', wjParentDirectives: [wijmo_angular2_chart_finance_1.WjFinancialChart], template: "<div><ng-content></ng-content></div>", wjSiblingDirectiveId: wijmo_angular2_chart_1.WjFlexChartSeries.SiblingId
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFlexChartFibonacci)
}(wjcChartFinanceAnalytics.Fibonacci),
WjFlexChartFibonacciArcs,
WjFlexChartFibonacciFans,
WjFlexChartFibonacciTimeZones,
WjFlexChartAtr,
WjFlexChartCci,
WjFlexChartRsi,
WjFlexChartWilliamsR,
WjFlexChartMacd,
WjFlexChartMacdHistogram,
WjFlexChartStochastic,
WjFlexChartBollingerBands,
WjFlexChartEnvelopes,
moduleExports,
WjChartFinanceAnalyticsModule;
exports.WjFlexChartFibonacci = WjFlexChartFibonacci;
WjFlexChartFibonacciArcs = function(_super)
{
function WjFlexChartFibonacciArcs(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartFibonacciArcs, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-fibonacci-arcs', wjParentDirectives: [wijmo_angular2_chart_finance_1.WjFinancialChart], template: "<div><ng-content></ng-content></div>", wjSiblingDirectiveId: wijmo_angular2_chart_1.WjFlexChartSeries.SiblingId
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFlexChartFibonacciArcs)
}(wjcChartFinanceAnalytics.FibonacciArcs);
exports.WjFlexChartFibonacciArcs = WjFlexChartFibonacciArcs;
WjFlexChartFibonacciFans = function(_super)
{
function WjFlexChartFibonacciFans(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartFibonacciFans, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-fibonacci-fans', wjParentDirectives: [wijmo_angular2_chart_finance_1.WjFinancialChart], template: "<div><ng-content></ng-content></div>", wjSiblingDirectiveId: wijmo_angular2_chart_1.WjFlexChartSeries.SiblingId
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFlexChartFibonacciFans)
}(wjcChartFinanceAnalytics.FibonacciFans);
exports.WjFlexChartFibonacciFans = WjFlexChartFibonacciFans;
WjFlexChartFibonacciTimeZones = function(_super)
{
function WjFlexChartFibonacciTimeZones(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartFibonacciTimeZones, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-fibonacci-time-zones', wjParentDirectives: [wijmo_angular2_chart_finance_1.WjFinancialChart], template: "<div><ng-content></ng-content></div>", wjSiblingDirectiveId: wijmo_angular2_chart_1.WjFlexChartSeries.SiblingId
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFlexChartFibonacciTimeZones)
}(wjcChartFinanceAnalytics.FibonacciTimeZones);
exports.WjFlexChartFibonacciTimeZones = WjFlexChartFibonacciTimeZones;
WjFlexChartAtr = function(_super)
{
function WjFlexChartAtr(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartAtr, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-atr', wjParentDirectives: [wijmo_angular2_chart_finance_1.WjFinancialChart], template: "<div><ng-content></ng-content></div>", wjSiblingDirectiveId: wijmo_angular2_chart_1.WjFlexChartSeries.SiblingId
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFlexChartAtr)
}(wjcChartFinanceAnalytics.ATR);
exports.WjFlexChartAtr = WjFlexChartAtr;
WjFlexChartCci = function(_super)
{
function WjFlexChartCci(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartCci, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-cci', wjParentDirectives: [wijmo_angular2_chart_finance_1.WjFinancialChart], template: "<div><ng-content></ng-content></div>", wjSiblingDirectiveId: wijmo_angular2_chart_1.WjFlexChartSeries.SiblingId
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFlexChartCci)
}(wjcChartFinanceAnalytics.CCI);
exports.WjFlexChartCci = WjFlexChartCci;
WjFlexChartRsi = function(_super)
{
function WjFlexChartRsi(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartRsi, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-rsi', wjParentDirectives: [wijmo_angular2_chart_finance_1.WjFinancialChart], template: "<div><ng-content></ng-content></div>", wjSiblingDirectiveId: wijmo_angular2_chart_1.WjFlexChartSeries.SiblingId
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFlexChartRsi)
}(wjcChartFinanceAnalytics.RSI);
exports.WjFlexChartRsi = WjFlexChartRsi;
WjFlexChartWilliamsR = function(_super)
{
function WjFlexChartWilliamsR(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartWilliamsR, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-williams-r', wjParentDirectives: [wijmo_angular2_chart_finance_1.WjFinancialChart], template: "<div><ng-content></ng-content></div>", wjSiblingDirectiveId: wijmo_angular2_chart_1.WjFlexChartSeries.SiblingId
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFlexChartWilliamsR)
}(wjcChartFinanceAnalytics.WilliamsR);
exports.WjFlexChartWilliamsR = WjFlexChartWilliamsR;
WjFlexChartMacd = function(_super)
{
function WjFlexChartMacd(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartMacd, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-macd', wjParentDirectives: [wijmo_angular2_chart_finance_1.WjFinancialChart], template: "<div><ng-content></ng-content></div>", wjSiblingDirectiveId: wijmo_angular2_chart_1.WjFlexChartSeries.SiblingId
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFlexChartMacd)
}(wjcChartFinanceAnalytics.Macd);
exports.WjFlexChartMacd = WjFlexChartMacd;
WjFlexChartMacdHistogram = function(_super)
{
function WjFlexChartMacdHistogram(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartMacdHistogram, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-macd-histogram', wjParentDirectives: [wijmo_angular2_chart_finance_1.WjFinancialChart], template: "<div><ng-content></ng-content></div>", wjSiblingDirectiveId: wijmo_angular2_chart_1.WjFlexChartSeries.SiblingId
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFlexChartMacdHistogram)
}(wjcChartFinanceAnalytics.MacdHistogram);
exports.WjFlexChartMacdHistogram = WjFlexChartMacdHistogram;
WjFlexChartStochastic = function(_super)
{
function WjFlexChartStochastic(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartStochastic, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-stochastic', wjParentDirectives: [wijmo_angular2_chart_finance_1.WjFinancialChart], template: "<div><ng-content></ng-content></div>", wjSiblingDirectiveId: wijmo_angular2_chart_1.WjFlexChartSeries.SiblingId
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFlexChartStochastic)
}(wjcChartFinanceAnalytics.Stochastic);
exports.WjFlexChartStochastic = WjFlexChartStochastic;
WjFlexChartBollingerBands = function(_super)
{
function WjFlexChartBollingerBands(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartBollingerBands, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-bollinger-bands', wjParentDirectives: [wijmo_angular2_chart_finance_1.WjFinancialChart], template: "<div><ng-content></ng-content></div>", wjSiblingDirectiveId: wijmo_angular2_chart_1.WjFlexChartSeries.SiblingId
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFlexChartBollingerBands)
}(wjcChartFinanceAnalytics.BollingerBands);
exports.WjFlexChartBollingerBands = WjFlexChartBollingerBands;
WjFlexChartEnvelopes = function(_super)
{
function WjFlexChartEnvelopes(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartEnvelopes, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-envelopes', wjParentDirectives: [wijmo_angular2_chart_finance_1.WjFinancialChart], template: "<div><ng-content></ng-content></div>", wjSiblingDirectiveId: wijmo_angular2_chart_1.WjFlexChartSeries.SiblingId
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFlexChartEnvelopes)
}(wjcChartFinanceAnalytics.Envelopes);
exports.WjFlexChartEnvelopes = WjFlexChartEnvelopes;
moduleExports = [WjFlexChartFibonacci, WjFlexChartFibonacciArcs, WjFlexChartFibonacciFans, WjFlexChartFibonacciTimeZones, WjFlexChartAtr, WjFlexChartCci, WjFlexChartRsi, WjFlexChartWilliamsR, WjFlexChartMacd, WjFlexChartMacdHistogram, WjFlexChartStochastic, WjFlexChartBollingerBands, WjFlexChartEnvelopes];
WjChartFinanceAnalyticsModule = function()
{
function WjChartFinanceAnalyticsModule(){}
return __decorate([core_1.NgModule({
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
})], WjChartFinanceAnalyticsModule)
}();
exports.WjChartFinanceAnalyticsModule = WjChartFinanceAnalyticsModule
})