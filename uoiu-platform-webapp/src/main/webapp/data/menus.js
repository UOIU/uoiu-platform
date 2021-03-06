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
 * menus数据
 * 
 * moduleName: data/menus
 * 
 * @param 回调函数
 * @return []
 */
define(function() {

  return [
    {
      identifier : 'workbenchPane',
      name : '工作台',
      packageIdentifier : 'workbenchPane',
      type : 'MODULE',
      isRoot : true,
      isLeaf : true
    },
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
      identifier : 'uoiu2',
      name : '二千世界',
      packageIdentifier : 'uoiu2',
      type : 'PACKAGE',
      isRoot : true,
      isLeaf : true
    },
    {
      identifier : 'uoiu1',
      name : '一千世界',
      packageIdentifier : 'uoiu-platform-PlatformApp',
      type : 'PACKAGE',
      isRoot : true,
      isLeaf : true
    },
    {
      identifier : 'uoiu1-infra-Icons',
      name : '系统Icons',
      packageIdentifier : 'uoiu-infra-Icons',
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
  ];

});