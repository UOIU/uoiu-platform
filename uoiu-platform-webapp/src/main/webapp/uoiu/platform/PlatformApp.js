/*
 * Copyright (c) 2013. UOIU
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * 基础平台应用
 * 
 * moduleName: uoiu/platform/PlatformApp
 * 
 * @param 依赖的AMD模块
 * @param 回调函数
 * @return 应用部件类
 */
define(
  [
    'dojo/_base/kernel',
    'dojo/_base/declare',
    'dojo/io-query',
    'dijit/layout/BorderContainer',
    'uoiu/platform/HeaderPane',
    'uoiu/platform/TopMenuBar',
    'dijit/layout/TabContainer',
    'dijit/layout/ContentPane',

    'dojo/domReady!'
  ],
  function(
    dojo,
    declare,
    ioQuery,
    BorderContainer,
    HeaderPane,
    TopMenuBar,
    TabContainer,
    ContentPane,
    CheckBox) {

    return declare(
      'uoiu.platform.PlatformApp',
      BorderContainer,
      {
        style : 'height:100%;width:100%;',
        postCreate : function() {
          this._setHead();
          this._setBody();

          this.inherited(arguments);
        },
        _setHead : function() {
          var headerPane = new HeaderPane(
            {
              region : 'top'
            });
          this.addChild(headerPane);

          var topMenuBar = new TopMenuBar(
            {
              region : 'top'
            });
          this.addChild(topMenuBar);
        },

        _setBody : function() {
          this.body = new TabContainer(
            {
              region : 'center'
            });
          this.addChild(this.body);
          this._setWorkbenchPane(this.body);
          
          this._urlOpenModule(this.body,ioQuery);
        },

        /*
         *该功能暂时放这里，应用也应当以模块化来考虑扩展功能 
         */
        _urlOpenModule : function(tc,ioQuery) {
          var uri = window.location.toString();
          var query = uri.substring(
            uri.indexOf("?") + 1,
            uri.length);
          console.debug(query);
          var queryObject = ioQuery.queryToObject(query);

          if (!queryObject.openModule) { return; }

          var openModules = queryObject.openModule.split(',');

          dojo.forEach(
            openModules,
            function(
              moduleId) {
              var moduleName = moduleId.replace(
                /[\-.]/g,
                '/');

             var tabChildren = this.addModuleToApp(
                moduleId,
                moduleName,
                moduleName);
             tc.addChild(tabChildren);
            },
            this);
        },
        addModuleToApp : function(
          moduleId,
          moduleName,
          title) {
          return new ContentPane(
            {
              id : moduleId,
              title : title,
              content :'<div>测试TabContainer</div>'
            });
          
        },

        _setWorkbenchPane : function(
          tc) {
          var workbenchPane = this._createWorkbenchPane();

          tc.addChild(workbenchPane);
          tc.selectChild(workbenchPane);
        },
        _createWorkbenchPane : function() {
          return new ContentPane(
            {
              id : 'workbenchPane',
              title : '工作台',
              content : '<div style="height:100%;width:100%;position:relative;display:table;">'
                + '<div style="display:table-cell;vertical-align:middle;text-align:center;'
                + 'font-size:100px;color:lightGrey;">三 千 世 界</div></div>'
            });
        }

      });

  });
