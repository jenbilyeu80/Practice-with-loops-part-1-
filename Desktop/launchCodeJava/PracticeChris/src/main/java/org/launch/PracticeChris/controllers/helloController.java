package org.launch.PracticeChris.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.websocket.server.PathParam;

@Controller
@ResponseBody
public class helloController {

    //@GetMapping("hello")
    //@ResponseBody
    //public String hello(){
      //  return"Hello, Spring!";
    //}

    @GetMapping("goodbye")
    public String goodbye(){return"Goodbye, Spring!";}
    @GetMapping("hello")
    public String helloWithQueryParam(@RequestParam String name){return "Hello, " + name + "!";}
    @GetMapping("{name}")
    public String helloWithPathParam(@PathVariable String name){
        return "Hello,  " + name + "!";
    }
    @GetMapping("form")
    public String helloForm(){
       return  "<html>" +
               "<body>" +
               "<form action= 'hello'>" +
               "<input type= 'text' name = 'name'>" +
               "<input type= 'submit' value='Greet me!'>" +
               "</form>" +
               "</body>" +
               "</html>";

    }
}