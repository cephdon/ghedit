define(["require","exports","vs/editor/common/modes/modesRegistry"],function(e,p,s){/*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
"use strict";s.ModesRegistry.registerCompatMode({id:"php",extensions:[".php",".php4",".php5",".phtml",".ctp"],aliases:["PHP","php"],mimetypes:["application/x-php"],moduleId:"vs/languages/php/common/php",ctorName:"PHPMode",deps:["text/html"]})});