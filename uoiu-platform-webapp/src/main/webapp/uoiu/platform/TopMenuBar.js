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
 * 顶部导航菜单：根据当前登录人所加载的导航菜单
 * 
 * moduleName: uoiu/platform/TopMenuBar
 * 
 * @param 依赖的AMD模块
 * @param 回调函数
 * @return 顶部导航菜单部件类
 */
define(
  [
    'dojo/_base/kernel',
    'dojo/_base/declare',

    'dojo/request',

    'dijit/MenuBar',
    'dijit/MenuBarItem',
    'dijit/PopupMenuBarItem',
    'dijit/Menu',
    'dijit/MenuItem',
    'dijit/PopupMenuItem'
  ],
  function(
    dojo,
    declare,

    request,

    MenuBar,
    MenuBarItem,
    PopupMenuBarItem,
    Menu,
    MenuItem,
    PopupMenuItem) {

    return declare(
      'uoiu.platform.TopMenuBar',
      MenuBar,
      {
        target : dojo.config.contextPath
          + '/menus',
        postCreate : function() {
          this._initMenuItem();

          this.inherited(arguments);
        },

        _initMenuItem : function() {
          var t = this;

          this.addChild(this.loadItem = new MenuBarItem(
            {
              label : '卍'
            }));
          this.addChild(this.loadItem = new MenuBarItem(
            {
              label : '指标体系库'
            }));
          this.addChild(this.loadItem = new MenuBarItem(
            {
              label : '指标体系设计'
            }));
          this.addChild(this.loadItem = new MenuBarItem(
            {
              label : '指标数据采集'
            }));
          this.addChild(this.loadItem = new MenuBarItem(
            {
              label : '指标数据分析'
            }));
          this.addChild(this.loadItem = new MenuBarItem(
            {
              label : '系统管理'
            }));
          this.addChild(this.loadItem = new MenuBarItem(
            {
              label : '日志管理'
            }));
          this.addChild(this.loadItem = new MenuBarItem(
            {
              label : '帮助'
            }));

        }

      });

  });
