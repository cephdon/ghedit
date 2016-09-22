define(["require","exports","vs/editor/common/core/range"],function(t,n,e){/*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
"use strict";var i=function(){function t(t,n){this._selection=t,this._isMovingLeft=n}return t.prototype.getEditOperations=function(t,n){var i=this._selection;if(this._selectionId=n.trackSelection(i),i.startLineNumber===i.endLineNumber&&(!this._isMovingLeft||0!==i.startColumn)&&(this._isMovingLeft||i.endColumn!==t.getLineMaxColumn(i.startLineNumber))){var s,o,r,u=i.selectionStartLineNumber,a=t.getLineContent(u);this._isMovingLeft?(s=a.substring(0,i.startColumn-2),o=a.substring(i.startColumn-1,i.endColumn-1),r=a.substring(i.startColumn-2,i.startColumn-1)+a.substring(i.endColumn-1)):(s=a.substring(0,i.startColumn-1)+a.substring(i.endColumn-1,i.endColumn),o=a.substring(i.startColumn-1,i.endColumn-1),r=a.substring(i.endColumn));var d=s+o+r;n.addEditOperation(new e.Range(u,1,u,t.getLineMaxColumn(u)),null),n.addEditOperation(new e.Range(u,1,u,1),d),this._cutStartIndex=i.startColumn+(this._isMovingLeft?-1:1),this._cutEndIndex=this._cutStartIndex+i.endColumn-i.startColumn,this._moved=!0}},t.prototype.computeCursorState=function(t,n){var e=n.getTrackedSelection(this._selectionId);return this._moved&&(e=e.setStartPosition(e.startLineNumber,this._cutStartIndex),e=e.setEndPosition(e.startLineNumber,this._cutEndIndex)),e},t}();n.MoveCarretCommand=i});