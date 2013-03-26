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
 * 应用程序入口
 * 
 * moduleName: uoiu/main
 * 
 * @param 依赖的AMD模块
 * @param 回调函数
 * @return null
 */
define(
  [
    'dojo/_base/kernel'
  ],
  function(
    dojo) {

    require(
      [
        dojo.config.mainAppName,

        'dojo/domReady!'
      ],
      function(
        App) {
        var app = new App();
        app.placeAt(dojo.body());
        app.startup();

        fadeOutLoader();

        var loadCompleteTime = +new Date();
        console.log('系统应用总加载时间: '
          + (loadCompleteTime - startTime)
          + '毫秒。');
      });

  });
