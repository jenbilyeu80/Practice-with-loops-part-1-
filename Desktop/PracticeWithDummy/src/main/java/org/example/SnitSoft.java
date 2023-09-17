package org.example;

public class SnitSoft {
    public static void main(String[]args){
        double amount;
        double shippingAndHandling;
        double total;

        amount=100.00;
        shippingAndHandling= 25.00;
        total= amount + shippingAndHandling;
        System.out.println("We will bill $" + total + " to your credit card." );
    }
}
