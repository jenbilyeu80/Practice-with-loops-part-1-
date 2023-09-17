package org.example;

import java.util.Scanner;

public class VersatileKidsandGum {
    public static void main(String[] args){
        int kids;
        int gumBalls;
        int gumBallsPerKid;

        Scanner keyboard=new Scanner(System.in);
        System.out.println("How many gumballs? How many kids?  ");
        gumBalls = keyboard.nextInt();
        kids= keyboard.nextInt();

        gumBallsPerKid = gumBalls/kids;
        System.out.println("Each kid gets " + gumBallsPerKid + " gumballs.");
        keyboard.close();
    }
}
