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

import javax.inject.Inject;

import org.springframework.beans.factory.config.PropertiesFactoryBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.freemarker.FreeMarkerViewResolver;

/**
 * 
 * Class description goes here.
 *
 * @version	1.0 2:56:34 PM
 * @author	yipeng
 *
 */
@Configuration
@EnableWebMvc
@ImportResource({ "classpath:/META-INF/spring/springmvc-servlet.xml" })
@PropertySource("/WEB-INF/spring/application.properties")
public class MvcConfig extends WebMvcConfigurerAdapter {

  @Inject
  Environment env;

  @Bean
  public PropertiesFactoryBean applicationProps() {
    PropertiesFactoryBean applicationProps = new PropertiesFactoryBean();
    //    applicationProps.setLocation(new ClassPathResource(
    //      "/WEB-INF/spring/application.properties"));
    return applicationProps;
  }

  @Override
  public void addResourceHandlers(
    ResourceHandlerRegistry registry) {
    // 设置一年的缓存时间以最大化的利用浏览器缓存和减少服务器压力
    registry
      .addResourceHandler("/resources-web/**", "/favicon.ico")
      .addResourceLocations(
        "classpath:/WEB-INF/favicon.ico",
        "/",
        "classpath:/WEB-INF/");// .setCachePeriod(31556926);

    // 当新版本的应用部署后资源可能改变，推荐请求资源时在路径中加入版本戳，这样就可以强制客户端请求新版本的应用资源。
    registry
      .addResourceHandler(
        "/resources-" + env.getProperty("application.version") + "/**")
      .addResourceLocations("/", "classpath:/META-INF/public-web-resources/");// .setCachePeriod(31556926);

  }

  /**
   * FreeMarker的视图配置
   * @return
   */
  @Bean
  public FreeMarkerViewResolver configureFreeMarkerViewResolver() {
    FreeMarkerViewResolver freeMarkerViewResolver = new FreeMarkerViewResolver();
    freeMarkerViewResolver.setCache(true);
    freeMarkerViewResolver.setPrefix("");
    freeMarkerViewResolver.setSuffix(".ftl");
    freeMarkerViewResolver.setContentType("text/html;charset=UTF-8");
    freeMarkerViewResolver.setRequestContextAttribute("request");
    freeMarkerViewResolver.setExposeSpringMacroHelpers(true);
    freeMarkerViewResolver.setExposeRequestAttributes(true);
    freeMarkerViewResolver.setExposeSessionAttributes(true);
    return freeMarkerViewResolver;
  }

}
