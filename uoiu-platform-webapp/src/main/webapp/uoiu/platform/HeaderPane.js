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
 * moduleName: uoiu/platform/HeaderPane
 * 
 * @param 依赖的AMD模块
 * @param 回调函数
 * @return 头部面板部件类
 */
define(
  [
    'dojo/_base/kernel',
    'dojo/_base/declare',
    'dojo/_base/lang', //
    'dojo/dom',
    'dojo/on',
    'dojo/dom-attr',
    'dojo/request',
    'dijit/_Widget',
    'dijit/_TemplatedMixin',

    'uoiu/platform/LoginTooltipDialog',
    'dijit/popup',

    'dijit/Menu',
    'dijit/MenuItem',
    'dijit/TooltipDialog'
  ],
  function(
    dojo,
    declare,
    lang,
    dom,
    on,
    domAttr,
    request,
    _Widget,
    _TemplatedMixin,

    LoginTooltipDialog,
    popup,

    Menu,
    MenuItem,
    TooltipDialog) {

    return declare(
      'uoiu.platform.HeaderPane',
      [
        _Widget,
        _TemplatedMixin
      ],
      {
        headerBrandingPath : 'resources-web/resources/images/header_branding.png',
        templateString : dojo.cache(
          'uoiu.platform',
          'templates/HeaderPane.html'),

        onLogin : function(
          userModel) {
          console.warn('未设置 onLogin');
        },
        onLogout : function() {
          console.warn('未设置 onLogout');
        },

        buildRendering : function() {
          this.inherited(arguments);

          this.set(
            'loggedIn',
            true);
        },
        _setLoggedInAttr : function(
          /* Boolean */loggedIn) {
          if (loggedIn) {
            domAttr.set(
              this.userNode,
              'innerHTML',
              'admin ▼');
            domAttr.set(
              this.loginNode,
              'innerHTML',
              '');

            if (!this.userMenuTooltipDialog) {
              var userMenu = new Menu(
                {
                  style : 'border:none'
                });
              userMenu.addChild(new MenuItem(
                {
                  label : '个人设置'
                }));
              userMenu.addChild(this.logoutItem = new MenuItem(
                {
                  label : '退出系统'
                }));
              on(
                this.logoutItem,
                'click',
                lang.hitch(
                  this,
                  this._onLogoutClick));

              var tooltipDialog = new TooltipDialog(
                {
                  id : 'userMenuTooltipDialog',
                  content : userMenu,
                  onMouseLeave : function() {
                    popup.close(tooltipDialog);
                  }
                });
              var userNode = this.userNode;
              on(
                this.userNode,
                'mouseover',
                function() {
                  popup.open({
                    popup : tooltipDialog,
                    around : userNode
                  });
                });
              this.userMenuTooltipDialog = tooltipDialog;
            }

          } else {
            domAttr.set(
              this.userNode,
              'innerHTML',
              '');
            domAttr.set(
              this.loginNode,
              'innerHTML',
              '登录');
            if (!this.userLoginTooltipDialog) {
              var loginTooltipDialog = new LoginTooltipDialog();
              var loginNode = this.loginNode;
              on(
                this.loginNode,
                'click',
                function() {
                  popup.open({
                    popup : loginTooltipDialog,
                    around : loginNode
                  });
                });
              this.userLoginTooltipDialog = loginTooltipDialog;
            }
          }
        },
        _onLoginClick : function() {
          //          this.set(
          //            'loggedIn',
          //            true);

          //          this.onLogin();

        },
        _onLogoutClick : function() {
          this.set(
            'loggedIn',
            false);

          popup.close(this.userMenuTooltipDialog);

          this.onLogout();
        }

      });

  });
