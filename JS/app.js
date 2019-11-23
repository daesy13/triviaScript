'use strict';

// things needed for the function
// quiz questions
// where to put the quiz
// where to put the scores
// a submit button

// grabbing elements from html
var quizContainer = document.getElementById('quiz');
var scoresContainer = document.getElementById('scores');
var submitButton = document.getElementById('submit');

// array objects for our questions
var ourQuestions = [
  {
    question: 'What saying is the joker known for?',
    answers: {
      a: 'Why so serious',
      b: 'Knock knock',
      c: 'The world is your oyster'
    },
    correctAnswer: 'a'
  },
  {
    question: 'Against what opposing team did Babe Ruth hit his first career home run?',
    answers: {
      a: 'Seattle Mariners',
      b: 'New York Yankees',
      c: 'Houston Astros',
    },
    correctAnswer: 'b'
  },
  {
    question: 'How did the Navy SEALs get their name?',
    answers: {
      a: 'Swimming ability',
      b: 'Favorite animal of the President daughter',
      c: 'Sea air land',
    },
    correctAnswer: 'c'

  }

];

showQuiz(ourQuestions, quizContainer, scoresContainer, submitButton);

// function which holds the quiz questions
function showQuiz(questions, quizContainer, scoresContainer, submitButton){

  function showQuestions(questions, quizContainer){

    var outcome = [];
    var answers;
    var letter;

    // we loop through each questions
    for(var i = 0; i < questions.length; i++){

      // the current list of answers should be an empty array
      answers = [];


      // loop through each answer available to a question
      for(letter in questions[i].answers){

        // add an html checkbox
        answers.push(
          '<label' + '<input type="radio" name="question ' + i + ' " value=" ' + letter + ' "> ' + letter + ': ' + questions[i].answers[letter] + '</label>'
        );
      }

      // pushing the question and the answer to the outcome
      outcome.push(
        '<div class="question">' + questions[i].question + '</div>' + '<div class="answers">' + answers.join('') + '</div>'
      );

    }
    quizContainer.innerHTML = outcome.join('');
  }
  // showQuestions(questions, quizContainer);

  function showScores(questions, quizContainer, scoresContainer){

    var answerContainers = quizContainer.querySelectorAll('.answers');

    // keeping track of users answers
    var userAnswer = '';
    var correctNum = 0;

    // loop through each question
    for(var i = 0; i < questions.length; i++){

      // target the selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

      // conditional to check for correct answers
      if(userAnswer === questions[i].correctAnswer){

        correctNum++;

        answerContainers[i].innerHTML = 'You got it right buster!';
      } else {
        answerContainers[i].innerHTML = 'You are damn wrong!';
      }

    }
    // display the total correct number of answewrs
    scoresContainer.innerHTML = correctNum + ' out of ' + questions.length;
  }

  showQuestions(questions, quizContainer);

  // when the user clicks on the submit button it shows them their score

  function clickHandler(){
    showScores(questions, quizContainer, scoresContainer);

  }

  submitButton.addEventListener('click', clickHandler);

  // clickHandler();

}
