package org.launchcode.java;

public class Cake implements Dessert {
    private int sweetnessScale;

    public Cake(int sweetnessScale){
        this.sweetnessScale=sweetnessScale;
    }
    public void taste(){

    }
    public void judgesReaction(int score){
        System.out.println("Amazing");
    }
}
