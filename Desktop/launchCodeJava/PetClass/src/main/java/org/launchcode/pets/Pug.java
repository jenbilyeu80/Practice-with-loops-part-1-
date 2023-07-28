package org.launchcode.pets;

public class Pug extends Dog {

   private boolean hasBigEyes;
    public Pug(String name, boolean hasBigEyes) {
        super(name);
        this.hasBigEyes=hasBigEyes;
    }

    @Override
    public void makeNoise() {
        System.out.println("snort");
    }
}
