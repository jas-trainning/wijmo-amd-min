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
define(["require", "exports", 'wijmo/wijmo.grid.grouppanel', '@angular/core', 'wijmo/wijmo.angular2.directiveBase'], function(require, exports, wjcGridGrouppanel, core_1, wijmo_angular2_directiveBase_1)
{
"use strict";
var WjGroupPanel=function(_super)
{
function WjGroupPanel(elRef, injector)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjGroupPanel, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-group-panel', template: ""
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjGroupPanel)
}(wjcGridGrouppanel.GroupPanel),
moduleExports,
WjGridGrouppanelModule;
exports.WjGroupPanel = WjGroupPanel;
moduleExports = [WjGroupPanel];
WjGridGrouppanelModule = function()
{
function WjGridGrouppanelModule(){}
return __decorate([core_1.NgModule({
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
})], WjGridGrouppanelModule)
}();
exports.WjGridGrouppanelModule = WjGridGrouppanelModule
})