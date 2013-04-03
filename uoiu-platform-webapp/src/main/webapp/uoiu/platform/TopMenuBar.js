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

    'uoiu/stores',

    'dijit/MenuBar',
    'dijit/MenuBarItem',
    'dijit/PopupMenuBarItem',
    'dijit/Menu',
    'dijit/MenuItem',
    'dijit/PopupMenuItem',
    'dijit/DropDownMenu'
  ],
  function(
    dojo,
    declare,
    lang,

    stores,

    MenuBar,
    MenuBarItem,
    PopupMenuBarItem,
    Menu,
    MenuItem,
    PopupMenuItem,
    DropDownMenu) {

    return declare(
      'uoiu.platform.TopMenuBar',
      MenuBar,
      {
        onTopItemClick : function(
          menuModel) {
        },

        postCreate : function() {
          this._initMenuItem();

          this.inherited(arguments);
        },

        _initMenuItem : function() {
          var t = this, s = stores.store('menus'), q = s.query();

          q.then(lang.hitch(
            this,
            function(
              menus) {
              this._addChildren(
                this,
                menus);
            }));
        },

        _addChildren : function(
          parentMenu,
          children) {
          if (children == null
            || children.length == 0) { return; }

          dojo.forEach(
            children,
            function(
              item) {
              if (!item.isRoot) {
                if (item.isLeaf) {
                  parentMenu.addChild(new MenuItem(
                    {
                      label : item.name,
                      onClick : lang.hitch(
                        this,
                        function() {
                          this.onTopItemClick(item);
                        })
                    }));
                  return;
                }

                var pSubMenu = new DropDownMenu();
                this._addChildren(
                  pSubMenu,
                  item.children);

                parentMenu.addChild(new PopupMenuItem(
                  {
                    label : item.name,
                    popup : pSubMenu
                  }));
                return;
              }

              if (item.isLeaf) {
                parentMenu.addChild(new MenuBarItem(
                  {
                    label : item.name,
                    onClick : lang.hitch(
                      this,
                      function() {
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
                  style : 'font-weight:bold;',
                  label : item.name,
                  popup : pSubMenu
                }));
            },
            this);
        },
        _addMenuItem : function() {

        },
        _addPopupMenuItem : function() {

        }

      });

  });
