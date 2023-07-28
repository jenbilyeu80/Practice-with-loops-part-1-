package org.launchcode.pets;

public class Dog extends Pet {
    public Dog(String name) {
        super(name);
    }
    @Override
    public void makeNoise(){
        System.out.println("Bark!");
        return;
    }
    public boolean equals(Object obj){
        // Sees if its the same address
        if (this == obj) return true;

        //Sees if its the ssame type of class
        if( !(obj instanceof Dog)) return false;

        // Casts it into that class type
        Dog dogInstance = (Dog) obj;

        // Customize to check what you want to see if its equal
        if ( dogInstance.getName().equals(this.getName())) return true;
        return false;

    }
}
