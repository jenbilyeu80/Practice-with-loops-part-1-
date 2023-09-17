package org.example;

import java.util.Scanner;

public class VersatileSnitSoft {
    public static void main(String[] args){
        Scanner keyboard=new Scanner(System.in);
        double amount;
        System.out.print("What is the price of the new car?");
        amount= keyboard.nextDouble();
        amount= amount + 25.00;
        System.out.println("We will bill $" + amount + "to your credit card.");
        keyboard.close();
    }
}
