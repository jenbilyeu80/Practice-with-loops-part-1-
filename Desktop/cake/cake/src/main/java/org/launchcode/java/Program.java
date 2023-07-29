package org.launchcode.java;

import java.util.ArrayList;

public class Program {
    public static void main(String [] args){
        ArrayList<Cake>myCakes= new ArrayList<>();
        ChococlateCake chocoCake = new ChococlateCake(10);
        CheeseCake cheessy = new CheeseCake(6);
        
        myCakes.add(chocoCake);
        myCakes.add(cheessy);


        for (Cake cake : myCakes){
            cake.taste();
        }
    }
}
