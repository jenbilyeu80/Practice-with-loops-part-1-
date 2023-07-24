package org.launch.demo;

import org.launch.demo.controllers.SearchController;

public class SearchForm extends SearchController {
    private String searchBy;
    private String searchTerm;


    public String getSearchBy() {
        return searchBy;
    }

    public void setSearchBy(String searchBy) {
        this.searchBy = searchBy;
    }

    public String getSearchTerm() {
        return searchTerm;
    }

    public void setSearchTerm(String searchTerm) {
        this.searchTerm = searchTerm;
    }

}