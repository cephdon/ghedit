/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends=this&&this.__extends||function(e,t){function o(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)},__decorate=this&&this.__decorate||function(e,t,o,r){var i,n=arguments.length,c=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(c=(n<3?i(c):n>3?i(t,o,c):i(t,o))||c);return n>3&&c&&Object.defineProperty(t,o,c),c},__param=this&&this.__param||function(e,t){return function(o,r){t(o,r,e)}};define(["require","exports","vs/nls","vs/workbench/parts/emmet/node/emmetActions","vs/editor/common/editorCommonExtensions","vs/platform/configuration/common/configuration"],function(e,t,o,r,i,n){"use strict";var c=function(e){function t(t,o,r){e.call(this,t,o,r,"select_previous_item")}return __extends(t,e),t.ID="editor.emmet.action.selectPreviousItem",t=__decorate([__param(2,n.IConfigurationService)],t)}(r.BasicEmmetEditorAction),s=function(e){function t(t,o,r){e.call(this,t,o,r,"select_next_item")}return __extends(t,e),t.ID="editor.emmet.action.selectNextItem",t=__decorate([__param(2,n.IConfigurationService)],t)}(r.BasicEmmetEditorAction);i.CommonEditorRegistry.registerEditorAction(new i.EditorActionDescriptor(c,c.ID,o.localize("selectPreviousItem","Emmet: Select Previous Item"),(void 0),"Emmet: Select Previous Item")),i.CommonEditorRegistry.registerEditorAction(new i.EditorActionDescriptor(s,s.ID,o.localize("selectNextItem","Emmet: Select Next Item"),(void 0),"Emmet: Select Next Item"))});