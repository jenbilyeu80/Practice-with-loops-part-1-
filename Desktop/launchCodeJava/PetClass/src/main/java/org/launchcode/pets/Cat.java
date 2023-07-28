package org.launchcode.pets;

public class Cat extends Pet {
    private int numOfToes;
    public Cat(String name, int numOfToes){
    super(name);
    this.numOfToes = numOfToes;
}

    @Override
    public void makeNoise() {
        System.out.println("Meow!");
        return;
    }
    public int getNumOfToes(){
        return this.numOfToes;}
}

