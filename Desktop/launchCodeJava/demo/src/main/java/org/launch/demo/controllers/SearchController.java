package org.launch.demo.controllers;

import org.launch.demo.SearchForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/search")
public class SearchController {


    @PostMapping("/results")
    public String handleFormSubmission(SearchForm searchForm, Model model) {
        model.addAttribute("SearchForm", searchForm);
        return "results";
    }
}