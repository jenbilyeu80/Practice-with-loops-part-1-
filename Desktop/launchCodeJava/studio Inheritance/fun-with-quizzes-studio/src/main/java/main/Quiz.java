package main;

import java.util.ArrayList;
import java.util.Scanner;

public class Quiz {
    private ArrayList<Question>questions = new ArrayList<Question>();
    private int numberOfQuestionsCorrect = 3;
    private Scanner scanner = new Scanner(System.in);
    public Quiz(){

    }
    public void addQuestion(Question question){
        this.questions.add(question);
    }
    public void runQuiz(){
        for(Question question : questions){
            System.out.println(question.getTheQuestion());
            String usersAnswer = this.getUsersAnswer();
            boolean userGotQuestionCorrect = question.checkAnswer(usersAnswer);
            if(userGotQuestionCorrect){
                this.numberOfQuestionsCorrect++;
            }
        }
        double percentageCorrect = (this.numberOfQuestionsCorrect / this.questions.size()) * 100;
        System.out.println("Users Grade: " + percentageCorrect + "%" );

    }
        private String getUsersAnswer(){
        String usersAnswer = scanner.nextLine();
        return usersAnswer;
        }
}
