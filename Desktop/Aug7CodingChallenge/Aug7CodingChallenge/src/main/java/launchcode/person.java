package launchcode;

public class person {

        private String name;
        private int age;

    public person(String name, int age){
            this.name = name;
            this.age = age;
        }

        public String compareAge (person otherPerson){
            if (this.age < otherPerson.age) {
                return otherPerson.name + " is older than me.";
            } else if (this.age > otherPerson.age) {
                return otherPerson.name + " is younger than me.";
            } else {
                return otherPerson.name + " is the same age as me.";
            }
        }

        // Getters and setters (if needed)

        public String getName () {
            return name;
        }

        public void setName (String name){
            this.name = name;
        }

        public int getAge () {
            return age;
        }

        public void setAge ( int age){
            this.age = age;
        }
    }

