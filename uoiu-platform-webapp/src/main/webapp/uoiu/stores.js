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
 * store key/value集合，key:StoreId,value:Store
 * 
 * moduleName: uoiu/stores
 * 
 * @param 依赖的AMD模块
 * @param 回调函数
 * @return object
 */
define(
  [
    'dojo/_base/kernel',
    'dojo/_base/lang',// lang.mixin
    'dojox/collections/Dictionary',
    'uoiu/storeFactory',
    'dojo/aspect',
    'dojo/Deferred',
    'dojo/store/util/QueryResults',
    'data/menus'
  ],
  function(
    dojo,
    lang,
    Dictionary,
    storeFactory,
    aspect,
    Deferred,
    QueryResults,
    menus) {

    /*=====
        var menusStore = stores.store('menus');
        var q = menusStore.query();
        q.then(function(
          menus) {
          console.debug(menus);
        });
        q.total.then(function(
          t) {
          console.debug(t)
        });
    =====*/

    return {
      isServerSide : false,

      _dictionary : new Dictionary(),

      store : function(
        storeId) {
        if (this._dictionary.containsKey(storeId)) { return this._dictionary
            .entry(storeId).value; }

        var store = this._createStore(storeId);

        this._dictionary.add(
          storeId,
          store);
        return store;
      },

      _createStore : function(
        storeId) {
        if (!this.isServerSide) {
          var data = this._getData(storeId);

          var store = storeFactory({
            data : data
          });

          aspect.after(
            store,
            'query',
            function(
              data) {
              var results = new Deferred();
              results.resolve(data);

              results.total = results.then(function() {
                return data.length;
              });
              return QueryResults(results);
            });

          return store;
        }

        var storeName = storeId.replace(
          /[\-.]/g,
          '/');
        return storeFactory({
          isServerStore : true,
          target : dojo.config.contextPath
            + '/'
            + storeName
        });
      },

      _getData : function(
        storeId) {

        switch (storeId) {
        case 'menus':
          return menus;

        default:
          console.warn('store:['
            + storeId
            + ']不存在，已返回[]数组！')
          return [];
        }

      }

    };
  });