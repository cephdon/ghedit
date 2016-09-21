var __decorate=this&&this.__decorate||function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},__param=this&&this.__param||function(e,t){return function(r,o){t(r,o,e)}};define(["require","exports","vs/nls","vs/base/common/winjs.base","vs/base/common/paths","vs/base/node/encoding","vs/base/common/errors","vs/base/common/strings","vs/base/common/uri","vs/base/common/timer","vs/workbench/services/files/node/fileService","vs/platform/configuration/common/configuration","vs/platform/event/common/event","vs/platform/workspace/common/workspace","vs/base/common/actions","vs/platform/message/common/message","electron"],function(e,t,r,o,n,i,s,a,c,u,p,l,f,h,v,g,m){/*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
"use strict";var d="System.MissingMethodException",w=function(){function e(e,t,r,o){var s=this;this.configurationService=e,this.eventService=t,this.contextService=r,this.messageService=o;var a=this.configurationService.getConfiguration(),u=this.contextService.getConfiguration().env,l=[];l.push({resource:c["default"].file(u.appSettingsHome),encoding:i.UTF8}),this.contextService.getWorkspace()&&l.push({resource:c["default"].file(n.join(this.contextService.getWorkspace().resource.fsPath,".vscode")),encoding:i.UTF8});var f=[];a.files&&a.files.watcherExclude&&(f=Object.keys(a.files.watcherExclude).filter(function(e){return!!a.files.watcherExclude[e]}));var h={errorLogger:function(e){return s.onFileServiceError(e)},encoding:a.files&&a.files.encoding,encodingOverride:l,watcherIgnoredPatterns:f,verboseLogging:u.verboseLogging,debugBrkFileWatcherPort:u.debugBrkFileWatcherPort};"number"==typeof u.debugBrkFileWatcherPort&&console.warn("File Watcher STOPPED on first line for debugging on port "+u.debugBrkFileWatcherPort);var v=this.contextService.getWorkspace();this.raw=new p.FileService(v?v.resource.fsPath:void 0,h,this.eventService),this.registerListeners()}return e.prototype.onFileServiceError=function(e){s.onUnexpectedError(e),e&&e.indexOf(d)>=0&&this.messageService.show(g.Severity.Warning,{message:r.localize("netVersionError","The Microsoft .NET Framework 4.5 is required. Please follow the link to install it."),actions:[new v.Action("install.net",r.localize("installNet","Download .NET Framework 4.5"),null,(!0),function(){return m.shell.openExternal("https://go.microsoft.com/fwlink/?LinkId=786533"),o.TPromise.as(!0)})]})},e.prototype.registerListeners=function(){var e=this;this.configurationChangeListenerUnbind=this.configurationService.onDidUpdateConfiguration(function(t){return e.onConfigurationChange(t.config)})},e.prototype.onConfigurationChange=function(e){this.updateOptions(e.files)},e.prototype.updateOptions=function(e){this.raw.updateOptions(e)},e.prototype.resolveFile=function(e,t){return this.raw.resolveFile(e,t)},e.prototype.existsFile=function(e){return this.raw.existsFile(e)},e.prototype.resolveContent=function(e,t){var r=e.toString(),o=u.start(u.Topic.WORKBENCH,a.format("Load {0}",r));return this.raw.resolveContent(e,t).then(function(e){return o.stop(),e})},e.prototype.resolveStreamContent=function(e,t){var r=e.toString(),o=u.start(u.Topic.WORKBENCH,a.format("Load {0}",r));return this.raw.resolveStreamContent(e,t).then(function(e){return o.stop(),e})},e.prototype.resolveContents=function(e){return this.raw.resolveContents(e)},e.prototype.updateContent=function(e,t,r){var n=u.start(u.Topic.WORKBENCH,a.format("Save {0}",e.toString()));return this.raw.updateContent(e,t,r).then(function(e){return n.stop(),e},function(e){return n.stop(),o.TPromise.wrapError(e)})},e.prototype.moveFile=function(e,t,r){return this.raw.moveFile(e,t,r)},e.prototype.copyFile=function(e,t,r){return this.raw.copyFile(e,t,r)},e.prototype.createFile=function(e,t){return this.raw.createFile(e,t)},e.prototype.createFolder=function(e){return this.raw.createFolder(e)},e.prototype.rename=function(e,t){return this.raw.rename(e,t)},e.prototype.del=function(e,t){return t?this.doMoveItemToTrash(e):this.raw.del(e)},e.prototype.doMoveItemToTrash=function(e){var t=this.contextService.getWorkspace();if(!t)return o.TPromise.wrapError("Need a workspace to use this");var i=e.fsPath,s=m.shell.moveItemToTrash(i);return s?o.TPromise.as(null):o.TPromise.wrapError(new Error(r.localize("trashFailed","Failed to move '{0}' to the trash",n.basename(i))))},e.prototype.importFile=function(e,t){return this.raw.importFile(e,t).then(function(e){return{isNew:e&&e.isNew,stat:e&&e.stat}})},e.prototype.watchFileChanges=function(e){e&&"file"===e.scheme&&(this.contextService.isInsideWorkspace(e)||this.raw.watchFileChanges(e))},e.prototype.unwatchFileChanges=function(e){this.raw.unwatchFileChanges(e)},e.prototype.dispose=function(){this.configurationChangeListenerUnbind&&(this.configurationChangeListenerUnbind.dispose(),this.configurationChangeListenerUnbind=null),this.raw.dispose()},e=__decorate([__param(0,l.IConfigurationService),__param(1,f.IEventService),__param(2,h.IWorkspaceContextService),__param(3,g.IMessageService)],e)}();t.FileService=w});