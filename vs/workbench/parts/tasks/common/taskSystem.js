define(["require","exports"],function(n,t){/*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
"use strict";!function(n){n[n.NotConfigured=0]="NotConfigured",n[n.RunningTask=1]="RunningTask",n[n.NoBuildTask=2]="NoBuildTask",n[n.NoTestTask=3]="NoTestTask",n[n.ConfigValidationError=4]="ConfigValidationError",n[n.TaskNotFound=5]="TaskNotFound",n[n.NoValidTaskRunner=6]="NoValidTaskRunner",n[n.UnknownError=7]="UnknownError"}(t.TaskErrors||(t.TaskErrors={}));var r=(t.TaskErrors,function(){function n(n,t,r){this.severity=n,this.message=t,this.code=r}return n}());t.TaskError=r;var o;!function(n){n.shortcut="shortcut",n.command="command"}(o=t.Triggers||(t.Triggers={})),function(n){n[n.Always=0]="Always",n[n.Silent=1]="Silent",n[n.Never=2]="Never"}(t.ShowOutput||(t.ShowOutput={}));var e,e=t.ShowOutput;!function(n){function t(t){return t=t.toLowerCase(),"always"===t?n.Always:"silent"===t?n.Silent:"never"===t?n.Never:void 0}n.fromString=t}(e=t.ShowOutput||(t.ShowOutput={}));var i;!function(n){n.Active="active",n.Inactive="inactive"}(i=t.TaskSystemEvents||(t.TaskSystemEvents={})),function(n){n[n.SingleRun=0]="SingleRun",n[n.Watching=1]="Watching"}(t.TaskType||(t.TaskType={}));t.TaskType});