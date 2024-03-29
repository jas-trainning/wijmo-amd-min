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
define(["require", "exports", 'wijmo/wijmo.grid.detail', '@angular/core', '@angular/common', 'wijmo/wijmo.angular2.directiveBase', 'wijmo/wijmo.angular2.grid'], function(require, exports, wjcGridDetail, core_1, common_1, wijmo_angular2_directiveBase_1, wijmo_angular2_grid_1)
{
"use strict";
var WjFlexGridDetail=function(_super)
{
function WjFlexGridDetail(viewContainerRef, templateRef, domRenderer, elRef, injector)
{
var parentCmp=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.findTypeParentBehavior(injector, WjFlexGridDetail).directive;
_super.call(this, parentCmp);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector);
this._viewContainerRef = viewContainerRef;
this._templateRef = templateRef;
this._domRenderer = domRenderer;
this._init()
}
return __extends(WjFlexGridDetail, _super), WjFlexGridDetail.prototype._init = function()
{
var _this=this;
this.createDetailCell = function(row, col)
{
var templ=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.instantiateTemplate(_this.grid.hostElement, _this._viewContainerRef, _this._templateRef, _this._domRenderer),
viewRef=templ.viewRef,
templRoot=templ.rootElement;
return viewRef.context.row = row, viewRef.context.col = col, viewRef.context.item = row.dataItem, templRoot.parentElement.removeChild(templRoot), templRoot[WjFlexGridDetail._viewRefProp] = viewRef, templRoot
};
this.disposeDetailCell = function(row)
{
var viewRef,
idx;
row.detail && (viewRef = row.detail[WjFlexGridDetail._viewRefProp]) && (row.detail[WjFlexGridDetail._viewRefProp] = null, idx = _this._viewContainerRef.indexOf(viewRef), idx > -1 && _this._viewContainerRef.remove(idx))
}
}, WjFlexGridDetail._viewRefProp = '__wj_viewRef', WjFlexGridDetail = __decorate([wijmo_angular2_directiveBase_1.WjComponent({
wjIsDirective: !0, selector: '[wjFlexGridDetail]', wjParentDirectives: [wijmo_angular2_grid_1.WjFlexGrid], inputs: ['wjFlexGridDetail'], exportAs: 'wjFlexGridDetail'
}), __param(0, core_1.Inject(core_1.ViewContainerRef)), __param(1, core_1.Inject(core_1.TemplateRef)), __param(2, core_1.Inject(core_1.Renderer)), __param(3, core_1.Inject(core_1.ElementRef)), __param(4, core_1.Inject(core_1.Injector))], WjFlexGridDetail)
}(wjcGridDetail.FlexGridDetailProvider),
moduleExports,
WjGridDetailModule;
exports.WjFlexGridDetail = WjFlexGridDetail;
moduleExports = [WjFlexGridDetail];
WjGridDetailModule = function()
{
function WjGridDetailModule(){}
return __decorate([core_1.NgModule({
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
})], WjGridDetailModule)
}();
exports.WjGridDetailModule = WjGridDetailModule
})