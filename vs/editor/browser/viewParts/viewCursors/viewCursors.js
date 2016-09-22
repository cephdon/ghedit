/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends=this&&this.__extends||function(r,o){function t(){this.constructor=r}for(var e in o)o.hasOwnProperty(e)&&(r[e]=o[e]);r.prototype=null===o?Object.create(o):(t.prototype=o.prototype,new t)};define(["require","exports","vs/editor/common/editorCommon","vs/editor/browser/editorBrowser","vs/editor/browser/view/viewPart","vs/editor/browser/viewParts/viewCursors/viewCursor","vs/base/browser/styleMutator","vs/base/common/async","vs/base/browser/browser","vs/css!./viewCursors"],function(r,o,t,e,s,i,n,a,u){"use strict";var d=!u.isIE9,h=function(r){function o(o){r.call(this,o),this._readOnly=this._context.configuration.editor.readOnly,this._cursorBlinking=this._context.configuration.editor.viewInfo.cursorBlinking,this._cursorStyle=this._context.configuration.editor.viewInfo.cursorStyle,this._primaryCursor=new i.ViewCursor(this._context,(!1)),this._secondaryCursors=[],this._domNode=n.createFastDomNode(document.createElement("div")),this._updateDomClassName(),this._domNode.domNode.appendChild(this._primaryCursor.getDomNode()),this._startCursorBlinkAnimation=new a.TimeoutTimer,this._compatBlink=new a.IntervalTimer,this._blinkingEnabled=!1,this._editorHasFocus=!1,this._updateBlinking()}return __extends(o,r),o.prototype.dispose=function(){r.prototype.dispose.call(this),this._startCursorBlinkAnimation.dispose(),this._compatBlink.dispose()},o.prototype.getDomNode=function(){return this._domNode.domNode},o.prototype.onModelFlushed=function(){this._primaryCursor.onModelFlushed();for(var r=0,o=this._secondaryCursors.length;r<o;r++){var t=this._secondaryCursors[r].getDomNode();t.parentNode.removeChild(t)}return this._secondaryCursors=[],!0},o.prototype.onModelDecorationsChanged=function(r){return r.inlineDecorationsChanged},o.prototype.onModelLinesDeleted=function(r){return!0},o.prototype.onModelLineChanged=function(r){return!0},o.prototype.onModelLinesInserted=function(r){return!0},o.prototype.onModelTokensChanged=function(r){var o=function(o){return r.fromLineNumber<=o.lineNumber&&o.lineNumber<=r.toLineNumber};if(o(this._primaryCursor.getPosition()))return!0;for(var t=0;t<this._secondaryCursors.length;t++)if(o(this._secondaryCursors[t].getPosition()))return!0;return!1},o.prototype.onCursorPositionChanged=function(r){if(this._primaryCursor.onCursorPositionChanged(r.position,r.isInEditableRange),this._updateBlinking(),this._secondaryCursors.length<r.secondaryPositions.length)for(var o=r.secondaryPositions.length-this._secondaryCursors.length,t=0;t<o;t++){var e=new i.ViewCursor(this._context,(!0));this._primaryCursor.getDomNode().parentNode.insertBefore(e.getDomNode(),this._primaryCursor.getDomNode().nextSibling),this._secondaryCursors.push(e)}else if(this._secondaryCursors.length>r.secondaryPositions.length)for(var s=this._secondaryCursors.length-r.secondaryPositions.length,t=0;t<s;t++)this._secondaryCursors[0].getDomNode().parentNode.removeChild(this._secondaryCursors[0].getDomNode()),this._secondaryCursors.splice(0,1);for(var t=0;t<r.secondaryPositions.length;t++)this._secondaryCursors[t].onCursorPositionChanged(r.secondaryPositions[t],r.isInEditableRange);return!0},o.prototype.onCursorSelectionChanged=function(r){return!1},o.prototype.onConfigurationChanged=function(r){r.readOnly&&(this._readOnly=this._context.configuration.editor.readOnly),r.viewInfo.cursorBlinking&&(this._cursorBlinking=this._context.configuration.editor.viewInfo.cursorBlinking),r.viewInfo.cursorStyle&&(this._cursorStyle=this._context.configuration.editor.viewInfo.cursorStyle),this._primaryCursor.onConfigurationChanged(r),this._updateBlinking(),(r.viewInfo.cursorStyle||r.viewInfo.cursorBlinking)&&this._updateDomClassName();for(var o=0,t=this._secondaryCursors.length;o<t;o++)this._secondaryCursors[o].onConfigurationChanged(r);return!0},o.prototype.onLayoutChanged=function(r){return!0},o.prototype.onScrollChanged=function(r){return!0},o.prototype.onZonesChanged=function(){return!0},o.prototype.onViewFocusChanged=function(r){return this._editorHasFocus=r,this._updateBlinking(),!1},o.prototype.getPosition=function(){return this._primaryCursor.getPosition()},o.prototype._getCursorBlinking=function(){return this._editorHasFocus?this._readOnly||!this._primaryCursor.getIsInEditableRange()?t.TextEditorCursorBlinkingStyle.Solid:this._cursorBlinking:t.TextEditorCursorBlinkingStyle.Hidden},o.prototype._updateBlinking=function(){var r=this;this._startCursorBlinkAnimation.cancel(),this._compatBlink.cancel();var e=this._getCursorBlinking(),s=e===t.TextEditorCursorBlinkingStyle.Hidden,i=e===t.TextEditorCursorBlinkingStyle.Solid;s?this._hide():this._show(),this._blinkingEnabled=!1,this._updateDomClassName(),s||i||(d?this._startCursorBlinkAnimation.setIfNotSet(function(){r._blinkingEnabled=!0,r._updateDomClassName()},o.BLINK_INTERVAL):this._compatBlink.cancelAndSet(function(){return r._compatBlinkUpdate()},o.BLINK_INTERVAL))},o.prototype._updateDomClassName=function(){this._domNode.setClassName(this._getClassName())},o.prototype._getClassName=function(){var r=e.ClassNames.VIEW_CURSORS_LAYER;switch(this._cursorStyle){case t.TextEditorCursorStyle.Line:r+=" cursor-line-style";break;case t.TextEditorCursorStyle.Block:r+=" cursor-block-style";break;case t.TextEditorCursorStyle.Underline:r+=" cursor-underline-style";break;default:r+=" cursor-line-style"}if(this._blinkingEnabled)switch(this._getCursorBlinking()){case t.TextEditorCursorBlinkingStyle.Blink:r+=" cursor-blink";break;case t.TextEditorCursorBlinkingStyle.Smooth:r+=" cursor-smooth";break;case t.TextEditorCursorBlinkingStyle.Phase:r+=" cursor-phase";break;case t.TextEditorCursorBlinkingStyle.Expand:r+=" cursor-expand";break;case t.TextEditorCursorBlinkingStyle.Solid:r+=" cursor-solid";break;default:r+=" cursor-solid"}else r+=" cursor-solid";return r},o.prototype._compatBlinkUpdate=function(){this._isVisible?this._hide():this._show()},o.prototype._show=function(){this._primaryCursor.show();for(var r=0,o=this._secondaryCursors.length;r<o;r++)this._secondaryCursors[r].show();this._isVisible=!0},o.prototype._hide=function(){this._primaryCursor.hide();for(var r=0,o=this._secondaryCursors.length;r<o;r++)this._secondaryCursors[r].hide();this._isVisible=!1},o.prototype.prepareRender=function(r){if(!this.shouldRender())throw new Error("I did not ask to render!");this._primaryCursor.prepareRender(r);for(var o=0,t=this._secondaryCursors.length;o<t;o++)this._secondaryCursors[o].prepareRender(r)},o.prototype.render=function(r){this._primaryCursor.render(r);for(var o=0,t=this._secondaryCursors.length;o<t;o++)this._secondaryCursors[o].render(r)},o.BLINK_INTERVAL=500,o}(s.ViewPart);o.ViewCursors=h});