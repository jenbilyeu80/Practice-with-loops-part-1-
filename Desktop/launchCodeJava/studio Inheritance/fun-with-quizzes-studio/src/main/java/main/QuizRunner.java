package main;

public class QuizRunner {

public static void main(String[] args) {
    Quiz myQuiz = new Quiz();

    MultipleChoiceQuestion myMultiChoiceQuestion = new MultipleChoiceQuestion("What sound does a dog make?\nA: Bark\nB: Quack\nPlease just type a single letter as an answer", "a");
    myQuiz.addQuestion(myMultiChoiceQuestion);

    CheckBoxQuestion myCheckBoxQuestion = new CheckBoxQuestion(" Select all that apply, Which animals can fly?\nA: Penguins\nB: Doves\nC: Owls", "A,B");
    myQuiz.addQuestion(myCheckBoxQuestion);

    TrueFalseQuestion myTrueFalseQuestion = new TrueFalseQuestion(" Dogs are omnivores?\n True or False", "True");
    myQuiz.addQuestion(myTrueFalseQuestion);

    myQuiz.runQuiz();
}
}
