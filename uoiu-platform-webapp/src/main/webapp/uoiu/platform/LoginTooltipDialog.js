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
 * 
 * moduleName: uoiu/platform/LoginTooltipDialog
 * 
 * @param 依赖的AMD模块
 * @param 回调函数
 * @return LoginTooltipDialog
 */
define(
  [
    'dojo/_base/kernel',
    'dojo/_base/declare',
    'dojo/request',
    'dojo/_base/Deferred',//Deferred.when

    'dijit/popup',

    'dijit/form/ValidationTextBox',
    'dijit/form/Button',
    'dojox/layout/ContentPane',
    'dojox/layout/TableContainer',
    'dijit/form/Form',
    'dijit/TooltipDialog',
    'dijit/_WidgetsInTemplateMixin'
  ],
  function(
    dojo,
    declare,
    request,
    Deferred,

    popup,

    ValidationTextBox,
    Button,
    ContentPane,
    TableContainer,
    Form,
    TooltipDialog,
    _WidgetsInTemplateMixin) {

    return declare(
      'uoiu.platform.LoginTooltipDialog',
      [
        TooltipDialog,
        _WidgetsInTemplateMixin
      ],
      {
        title : '系统登录',
        templateString : dojo.cache(
          'uoiu.platform',
          'templates/LoginDialogForm.html'),
        widgetsInTemplate : true,

        onLogin : function(
          userModel) {
        },
        buildRendering : function() {
          this.inherited(arguments);
        },

        onSubmit : function() {
          var t = this;

          if (!this.validate()) { return; }
          var userModel = this.get('value');
          request(
            dojo.config.sessionUrl,
            {
              method : 'POST',//
              data : dojo.toJson(userModel),//
              headers : {
                'Content-Type' : 'application/json'
              },//
              handleAs : 'json'
            }).then(
            function(
              data) {

              dojo.publish(
                'appMessageTopic',
                [
                  {
                    message : '登录成功！'
                  }
                ]);

              t.onLoginSuccess(data);

              t.hide().then(
                function() {
                  t.destroy();
                });

            });
        },

        _onCancel : function() {
          popup.close(this);
        }

      });

  });
