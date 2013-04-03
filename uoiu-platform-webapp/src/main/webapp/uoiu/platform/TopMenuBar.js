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
    'dojo/_base/lang',
    'dojo/_base/array',
    'dojo/request',

    'dijit/MenuBar',
    'dijit/MenuBarItem',
    'dijit/PopupMenuBarItem',
    'dijit/Menu',
    'dijit/MenuItem',
    'dijit/PopupMenuItem',
    'dijit/DropDownMenu',
    'dijit/PopupMenuItem',
    'dojo/store/Memory'
  ],
  function(
    dojo,
    declare,
    lang,
    array,

    request,

    MenuBar,
    MenuBarItem,
    PopupMenuBarItem,
    Menu,
    MenuItem,
    PopupMenuItem,
    DropDownMenu,
    PopupMenuItem,
    Memory) {

    return declare(
      'uoiu.platform.TopMenuBar',
      MenuBar,
      {
        target : dojo.config.contextPath
          + '/menus',
        data : [
          {
            identifier : 'uoiu',
            name : '三千世界',
            packageIdentifier : 'uoiu',
            type : 'PACKAGE',
            isRoot : true,
            isLeaf : false,
            children : [
              {
                identifier : 'uoiu-platform',
                name : '基础平台',
                packageIdentifier : 'uoiu-platform',
                type : 'PACKAGE',
                isRoot : false,
                isLeaf : false,
                children : [
                  {
                    identifier : 'uoiu-platform-PlatformApp',
                    name : '基础平台应用',
                    packageIdentifier : 'uoiu-platform-PlatformApp',
                    type : 'MODULE',
                    isRoot : false,
                    isLeaf : true
                  }
                ]
              },
              {
                identifier : 'uoiu-infra',
                name : '基础工具',
                packageIdentifier : 'uoiu-infra',
                type : 'PACKAGE',
                isRoot : false,
                isLeaf : false,
                children : [
                  {
                    identifier : 'uoiu-infra-Icons',
                    name : '系统Icons',
                    packageIdentifier : 'uoiu-infra-Icons',
                    type : 'MODULE',
                    isRoot : false,
                    isLeaf : true
                  }
                ]
              }
            ]
          },
          {
            identifier : 'uoiu1-infra-Icons',
            name : '系统Icons',
            packageIdentifier : 'uoiu1-infra-Icons',
            type : 'MODULE',
            isRoot : true,
            isLeaf : true
          },
          {
            identifier : 'uoiu-infra',
            name : '基础工具',
            packageIdentifier : 'uoiu-infra',
            type : 'MODULE',
            isRoot : true,
            isLeaf : true
          }
        ],

        onTopItemClick : function(
          menuModel) {
         
        },

        postCreate : function() {
          this._initMenuItem();

          this.inherited(arguments);
        },

        _initMenuItem : function() {
          var t = this;

          this._addChildren(
            this,
            this.data);
        },

        _addChildren : function(
          parentMenu,
          children) {
          if (children == null
            || children.length == 0) { return; }

          array.forEach(
            children,
            function(
              item) {
              if (!item.isRoot) {
                if (item.isLeaf) {
                 
                return; }

                parentMenu.addChild(new MenuItem(
                  {
                    label : item.name
                  }));
                return;
              }

              if (item.isLeaf) {
                parentMenu.addChild(new MenuBarItem(
                  {
                    label : item.name,
                    onClick : lang.hitch(
                      this,
                      function(
                       ) {
                        this.onTopItemClick(item);
                      })
                  }));
                return;
              }
              
              var pSubMenu = new DropDownMenu();
              this._addChildren(
                pSubMenu,
                item.children);

              parentMenu.addChild(new PopupMenuBarItem(
                {
                  label : item.name
                    + '▼',
                  popup : pSubMenu
                }));
            },
            this);
        }

      });

  });
