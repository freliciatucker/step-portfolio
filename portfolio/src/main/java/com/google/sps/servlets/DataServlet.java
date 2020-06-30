// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*; 
import java.util.*;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    ArrayList<String> list= new ArrayList<String>(3);
    list.add(0,"1");
    list.add(1,"2");
    list.add(2,"3");
    String json = convertToJson(list);
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  /**
   * Converts ArrayList<String> list into a JSON string using a for loop String concatentation.
   */
  private String convertToJson(ArrayList<String> list) {
    String json = "{";
     for (int i=0; i<list.size()-1; i++){
         json += list.get(i) + ", ";
     } 
    json += list.get(list.size()-1) + "}";
    return json;
  }
}
