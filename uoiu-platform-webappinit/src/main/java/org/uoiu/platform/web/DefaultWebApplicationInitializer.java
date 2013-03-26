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
package org.uoiu.platform.web;

import java.util.EnumSet;

import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.DispatcherServlet;

/**
 * 
 * 启动web容器后自动检测到该类，并进行设置。
 *
 * @version	1.0 2:58:34 PM
 * @author	yipeng
 *
 */
public class DefaultWebApplicationInitializer
  implements
  WebApplicationInitializer {

  /*
   * (non-Javadoc)
   * @see org.springframework.web.WebApplicationInitializer#onStartup(javax.servlet.ServletContext)
   */
  @Override
  public void onStartup(
    ServletContext servletContext)
    throws ServletException {
    AnnotationConfigWebApplicationContext appContext = new AnnotationConfigWebApplicationContext();
    //    appContext.register(AppConfig.class);
    appContext.getEnvironment().setActiveProfiles("webapp");
    servletContext.addListener(new ContextLoaderListener(appContext));

    AnnotationConfigWebApplicationContext mvcContext = new AnnotationConfigWebApplicationContext();
    mvcContext.register(MvcConfig.class);

    ServletRegistration.Dynamic dispatcher = servletContext.addServlet(
      "dispatcher",
      new DispatcherServlet(mvcContext));
    dispatcher.setLoadOnStartup(1);
    dispatcher.addMapping("/");

    FilterRegistration.Dynamic encodingFilter = servletContext.addFilter(
      "encodingFilter",
      characterEncodingFilter());
    encodingFilter.addMappingForUrlPatterns(
      EnumSet.of(DispatcherType.REQUEST),
      true,
      "/*");
  }

  private CharacterEncodingFilter characterEncodingFilter() {
    CharacterEncodingFilter encodingFilter = new CharacterEncodingFilter();
    encodingFilter.setForceEncoding(true);
    encodingFilter.setEncoding("UTF-8");
    return encodingFilter;
  }

}
