package org.launchcode.hellospring.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@ResponseBody
public class HelloController {
    @RequestMapping(method = {RequestMethod.GET, RequestMethod.POST}, value = "hello")
    public String helloWithQueryParam(@RequestParam String name, @RequestParam String language) {
        String properGreeting = HelloController.createMessage(name, language);
        return properGreeting;
    }

        @GetMapping("hello/{name}")
        public String helloWithQueryParam2(@PathVariable String name){return " Hello " + name + "!";}


        @GetMapping("form")
        public String helloForm () {
//@GetMapping("hello-names")
            //      public String helloNames(Model model){
            // List<String> names = new ArrayList<>();
            //names.add("LaunchCode");
            //names.add("Java");
            //names.add("JavaScript");
            //model.addAttribute("names",names);
            //return "hello-list";
            //  }
            return "<html>" +
                    "<body>" +
                    "<form action= 'hello' method='post'>" +//submit a request to /hello
                    "<input type= 'text' name='name' />" +
                    "<select name='language'>" +
                    "<option value='English'>English</option>" +
                    "<option value='Spanish'>Spanish</option>" +
                    "<option value='French'>French</option>" +
                    "<option value='Italian'>Italian</option>" +
                    "<option value='German'>German</option>" +
                    "</select>" +
                    "<input type= 'submit' value='Greet Me!' />" +
                    "</form>" +
                    "</html>";
        }
        public static String createMessage(String name, String language){
            switch (language) {
                case "Spanish":
                    return "Hola," + name;
                case "French":
                    return "Bonjour," + name;
                case "Italian":
                    return "Ciao," + name;
                case "German":
                    return "Hallo," + name;
                case "English":
                default:
                    return "Hello," + name;
            }

        }
    }