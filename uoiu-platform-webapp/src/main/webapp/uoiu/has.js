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
 * 添加 has 模块
 * 
 * moduleName: uoiu/has
 * 
 * @param 依赖的AMD模块
 * @param 回调函数
 * 
 */
define(
  [
    'dojo/has'
  ],
  function(
    has) {

    has.add(
      'uoiu-infra-Icons',
      1);
    has.add(
      'uoiu-platform-PlatformApp',
      1);

  });
