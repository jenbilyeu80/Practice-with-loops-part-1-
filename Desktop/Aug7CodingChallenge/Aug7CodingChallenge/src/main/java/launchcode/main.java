package launchcode;

public class main {
public static void main(String[] args){
    person p1 = new person("Samuel", 24);
    person p2 = new person("Joel", 36);
    person p3 = new person("Lily", 24);


    System.out.println(p1.compareAge(p2)); // "Joel is older than me."
    System.out.println(p2.compareAge(p1)); // "Samuel is younger than me."
    System.out.println(p1.compareAge(p3)); // "Lily is the same age as me."

}
}
