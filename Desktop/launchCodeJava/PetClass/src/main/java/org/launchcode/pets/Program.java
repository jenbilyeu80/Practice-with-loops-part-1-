package org.launchcode.pets;

import java.util.HashMap;

public class Program {
    public static void main(String[] args){
        HashMap<Integer, Pet> myPetShop= new HashMap<>();
        myPetShop.put(1, new Dog("Stark"));
        myPetShop.put(2, new Cat("Bella", 18));
        myPetShop.put(3, new Pug("Moe", true));

        for (Integer key : myPetShop.keySet()){
            System.out.println(myPetShop.get(key));
        }


        Pet myDog = new Dog("Bart");
        Pet myCat = new Cat("Fergus",18);

Pug pug = new Pug("Moe", true);


        Dog myCastedDog = (Dog) myDog;

        pug.makeNoise();
    }
}
