package org.launchcode.java;

public interface Dessert {

    void judgesReaction(int score);
    default int  score(){
        return 10;
    }
}
