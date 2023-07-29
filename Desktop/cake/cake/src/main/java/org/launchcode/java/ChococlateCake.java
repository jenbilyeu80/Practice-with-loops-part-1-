package org.launchcode.java;

public class ChococlateCake extends Cake {
    public ChococlateCake(int sweetnessScale) {
        super(sweetnessScale);
    }

    @Override
    public void taste() {
        System.out.println("Choco goodness");
    }
}

