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
    'dojo/on',
    'dojo/_base/lang',
    'dojo/has',

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
    on,
    lang,
    has,

    BorderContainer,
    HeaderPane,
    TopMenuBar,
    TabContainer,
    ContentPane) {

    return declare(
      'uoiu.platform.PlatformApp',
      BorderContainer,
      {
        style : 'height:100%;width:100%;',

        addModuleToApp : function(
          moduleId,
          pId,
          title) {
          var tc = this.body, c = tc.getChildren(), tabId = moduleId;
          for ( var i = 0; i < c.length; i++) {
            if (c[i].tabId == tabId) {
              tc.selectChild(c[i]);
              return c[i];
            }
          }

          var p = new ContentPane(
            {
              tabId : tabId,
              title : title,
              closable : true,
              content : '<span id="loaderInner"></span>'
            });
          tc.addChild(p);
          tc.selectChild(p);

          if (!has(pId)) {
            p.set(
              'content',
              '['
                + pId
                + '] 应用不存在！');
            return p;
          }

          var pName = pId.replace(
            /[\-.]/g,
            '/');
          require(
            [
              pName
            ],
            function(
              featureModule) {

              //TODO 判断模型类型并做出相应处理

              var app = new featureModule(
                {
                  tabId : tabId,
                  title : title,
                  closable : true
                });

              var i = tc.getIndexOfChild(p);
              tc.addChild(
                app,
                i);
              tc.selectChild(app);
              tc.removeChild(p);

            });
        },

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
          on(
            topMenuBar,
            'topItemClick',
            lang.hitch(
              this,
              this._openAppBy));
          this.addChild(topMenuBar);
        },

        _setBody : function() {
          this.body = new TabContainer(
            {
              region : 'center'
            });
          this.addChild(this.body);
          this._setWorkbenchPane(this.body);
        },

        _openAppBy : function(
          menuModel) {
          this.addModuleToApp(
            menuModel.identifier,
            menuModel.packageIdentifier,
            menuModel.name);
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
              tabId : 'workbenchPane',
              title : '工作台',
              content : '<div style="height:100%;width:100%;position:relative;display:table;">'
                + '<div style="display:table-cell;vertical-align:middle;text-align:center;'
                + 'font-size:100px;color:lightGrey;">三 千 世 界</div></div>'
            });
        }

      });

  });
