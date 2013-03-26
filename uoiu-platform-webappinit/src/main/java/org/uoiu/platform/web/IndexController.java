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
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.core.env.Environment;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

/**
 * 
 * Class description goes here.
 *
 * @version	1.0 2:56:34 PM
 * @author	yipeng
 *
 */
@RequestMapping
public class IndexController {

  @Inject
  Environment env;

  @RequestMapping(
    value = "/index",
    method = RequestMethod.GET)
  public ModelAndView index(
    @RequestParam(
      value = "username",
      required = false)
    String username,
    @RequestParam(
      value = "password",
      required = false)
    String password,
    @RequestParam(
      value = "mainAppName",
      required = false)
    String mainAppName,
    Model model,
    HttpServletRequest request) {

    System.out.println(username + ":" + password);

    ModelAndView mv = new ModelAndView("index");
    mv.addObject(
      "resourceUrl",
      "/resources-" + env.getProperty("application.version"));
    mv.addObject("ctx", request.getContextPath());
    mv.addObject("mainAppName", StringUtils.isEmpty(mainAppName)
      ? "uoiu/platform/PlatformApp"
      : mainAppName);
    return mv;
  }
}
