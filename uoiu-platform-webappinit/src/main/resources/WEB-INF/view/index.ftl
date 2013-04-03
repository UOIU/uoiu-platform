<!--
  ~ Copyright (c) 2013. UOIU
  ~ 
  ~ Licensed under the Apache License, Version 2.0 (the "License");
  ~ you may not use this file except in compliance with the License.
  ~ You may obtain a copy of the License at
  ~ 
  ~    http://www.apache.org/licenses/LICENSE-2.0
  ~ 
  ~ Unless required by applicable law or agreed to in writing, software
  ~ distributed under the License is distributed on an "AS IS" BASIS,
  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  ~ See the License for the specific language governing permissions and
  ~ limitations under the License.
  -->
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script type="text/javascript">var startTime = new Date();</script>
    
    <link rel="icon" type="image/png" href="/resources-web/favicon.png"><!-- Major Browsers -->
  	<!--[if IE]><link rel="SHORTCUT ICON" href="/resources-web/favicon.ico"/><![endif]--><!-- Internet Explorer-->
    
    <title>UOIU基础平台</title>
    
    <link rel=stylesheet href="${resourceUrl}/uoiu/resources/main.css"/>
    <link rel=stylesheet href="${resourceUrl}/dijit/themes/claro/document.css"/>
    <link rel=stylesheet href="${resourceUrl}/dijit/themes/claro/claro.css"/>
    
    <script type="text/javascript">
      dojoConfig={
        isDebug : true,
        async : true,
        locale : 'zh',
        skin : 'claro',
        urlLoginEnable : true,
        siteName : 'UOIU基础平台',
        resourceUrl : '${resourceUrl}', contextPath : '${ctx}',
        mainAppName : '${mainAppName}'
      };
    </script>
  
    <!-- required: dojo.js -->
    <script type="text/javascript" src="${resourceUrl}/dojo/dojo.js"></script>

    <script type="text/javascript">
      require(
        [
          'dojo/dom-style',
          'dojo/_base/fx',
          'uoiu/main' // main work is done in here
        ],
        function(
          domStyle,
          fx) {
          fadeInLoader = function() {
            domStyle.set(
              'loader',
              'display',
              '');
            domStyle.set(
              'loader',
              'opacity',
              '1');
          }
          fadeOutLoader = function() {
            setTimeout(
              function() {
                fx.fadeOut(
                  {
                    node : 'loader',
                    duration : 500,
                    onEnd : function() {
                      domStyle.set(
                        'loader',
                        'display',
                        'none');
                    }
                  }).play();
              },
              100);
          }
      
        });
    </script>
  </head>
  <body class="claro">
  	<div id="loader"><div id="loaderInner"></div></div>
  </body>
</html>