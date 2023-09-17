package org.example;

import java.util.Scanner;

public class MakingChange {
    public static void main(String[] args){
        Scanner keyboard= new Scanner (System.in);
        int quarters, dimes, nickels, cents;
        int whatsLeft, total;
        System.out.println("How many cents do you have? ");
        total = keyboard.nextInt();
        quarters = total / 25;
        whatsLeft= total % 25;

        dimes = total / 10;
        whatsLeft = total % 10;

        nickels = total / 5;
        whatsLeft = total % 5;

        cents = whatsLeft;

        System.out.println("From " + total + " cents you get");
        System.out.println(quarters + " quarters");
        System.out.println(dimes + " dimes");
        System.out.println(nickels + " nickels");
        System.out.println(cents + " cents");
        keyboard.close();

    }
}
