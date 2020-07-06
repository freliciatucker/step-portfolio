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
p   
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {
    private ArrayList<String> list= new ArrayList<String>();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("text/html;");
   
    list.add("1");
    list.add("2");
    list.add("3");
    String json = convertToJson();
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }
  

  /** Servlet that processes form. */
  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Get the input from the form.
    String text = "Hi, " + getParameter(request, "text-input", "") + "!";
    boolean iceCream = Boolean.parseBoolean(getParameter(request, "ice-cream", "false"));
    boolean pizza = Boolean.parseBoolean(getParameter(request, "pizza", "false"));

    // If applies, add ice cream comment.
    if (iceCream) {
      text += " I like ice cream too!";
    }

    // If applies, add pizza comment.
    if (pizza) {
      text += " Pizza is the best <3.";
    }

    // Respond with the result.
    response.setContentType("text/html;");
    response.getWriter().println(text);

    Entity commentEntity = new Entity("comment");
    commentEntity.setProperty("name", getParameter(request, "text-input", ""));
    commentEntity.setProperty("ice Cream", iceCream);
    commentEntity.setProperty("pizza", pizza);

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    datastore.put(commentEntity);
  }

  /**
   * @return the request parameter, or the default value if the parameter
   *         was not specified by the client
   */
  private String getParameter(HttpServletRequest request, String name, String defaultValue) {
    String value = request.getParameter(name);
    if (value == null) {
      return defaultValue;
    }
    return value;
  }

  /**
   * Converts ArrayList<String> list into a JSON string
   */
  private String convertToJson() {
    // empty list case
    if (list.size()==0)
    return "empty list.";

    StringBuilder toConvert = new StringBuilder();
    toConvert.append("{");
     for (int i=0; i<list.size()-1; i++){
         toConvert.append(list.get(i) + ", ");
    } 

    toConvert.append(list.get(list.size()-1) + "}");
    return toConvert.toString();
  }
}
