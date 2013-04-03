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
 * 一些乱七八糟功能
 * 
 * moduleName: uoiu/utils
 * 
 * @param 依赖的AMD模块
 * @param 回调函数
 * 
 */
define(
  [
    'dojo/_base/kernel',
    'dojo/io-query'
  ],
  function(
    dojo,
    ioQuery) {

    return {
      urlOpenModule : function(
        app) {
        var uri = window.location.toString();
        var query = uri.substring(
          uri.indexOf("?") + 1,
          uri.length);

        var queryObject = ioQuery.queryToObject(query);

        if (!queryObject.openModules) { return; }

        var openModules = queryObject.openModules.split(','), tc = app.body;

        dojo.forEach(
          openModules,
          function(
            moduleId) {

            app.addModuleToApp(
              moduleId,
              moduleId,
              moduleId);
          },
          this);
      }
    };

  });
