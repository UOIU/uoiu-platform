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
 * Store工厂
 * 
 * moduleName: uoiu/storeFactory
 * 
 * @param 依赖的AMD模块
 * @param 回调函数
 * @return function
 */
define(
  [
    'dojo/_base/kernel',
    'dojo/_base/lang',// lang.mixin
    'dojo/store/JsonRest',
    'dojo/store/Memory',
    'dojo/data/ObjectStore',
  ],
  function(
    dojo,
    lang,
    JsonRestStore,
    Memory,
    ObjectStore) {

    var emptyStore = new Memory(
      {
        idProperty : 'identifier',
        data : []
      });

    return function(
      args) {
      if (!args) { return emptyStore; }

      var options = lang.mixin(
        {
          isServerStore : false,
          idProperty : 'identifier'
        },
        args);
      if (options.isServerStore) {
        options.sortParam = 'sortBy';
        return new JsonRestStore(
          options);
      }

      return new Memory(
        options);

    };
  });
