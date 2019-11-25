'use strict';

// things needed for the function
// quiz questions
// where to put the quiz
// where to put the scores
// a submit button

// // grabbing elements from html
// var quizContainer = document.getElementById('quiz');
// var scoresContainer = document.getElementById('scores');
// var submitButton = document.getElementById('submit');

// // array objects for our questions
// var ourQuestions = [
//   {
//     question: 'What saying is the joker known for?',
//     answers: {
//       a: 'Why so serious',
//       b: 'Knock knock',
//       c: 'The world is your oyster'
//     },
//     correctAnswer: 'a'
//   },
//   {
//     question: 'Against what opposing team did Babe Ruth hit his first career home run?',
//     answers: {
//       a: 'Seattle Mariners',
//       b: 'New York Yankees',
//       c: 'Houston Astros',
//     },
//     correctAnswer: 'b'
//   },
//   {
//     question: 'How did the Navy SEALs get their name?',
//     answers: {
//       a: 'Swimming ability',
//       b: 'Favorite animal of the President daughter',
//       c: 'Sea air land',
//     },
//     correctAnswer: 'c'

//   }

// ];

// showQuiz(ourQuestions, quizContainer, scoresContainer, submitButton);

// // function which holds the quiz questions
// function showQuiz(questions, quizContainer, scoresContainer, submitButton){

//   function showQuestions(questions, quizContainer){

//     var outcome = [];
//     var answers;
//     var letter;

//     // we loop through each questions
//     for(var i = 0; i < questions.length; i++){

//       // the current list of answers should be an empty array
//       answers = [];


//       // loop through each answer available to a question
//       for(letter in questions[i].answers){

//         // add an html checkbox
//         answers.push(
//           '<label' + '<input type="radio" name="question ' + i + ' " value=" ' + letter + ' "> ' + letter + ': ' + questions[i].answers[letter] + '</label>'
//         );
//       }

//       // pushing the question and the answer to the outcome
//       outcome.push(
//         '<div class="question">' + questions[i].question + '</div>' + '<div class="answers">' + answers.join('') + '</div>'
//       );

//     }
//     quizContainer.innerHTML = outcome.join('');
//   }
//   // showQuestions(questions, quizContainer);

//   function showScores(questions, quizContainer, scoresContainer){

//     var answerContainers = quizContainer.querySelectorAll('.answers');

//     // keeping track of users answers
//     var userAnswer = '';
//     var correctNum = 0;

//     // loop through each question
//     for(var i = 0; i < questions.length; i++){

//       // target the selected answer
//       userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

//       // conditional to check for correct answers
//       if(userAnswer === questions[i].correctAnswer){

//         correctNum++;

//         answerContainers[i].innerHTML = 'You got it right buster!';
//       } else {
//         answerContainers[i].innerHTML = 'You are damn wrong!';
//       }

//     }
//     // display the total correct number of answewrs
//     scoresContainer.innerHTML = correctNum + ' out of ' + questions.length;
//   }

//   showQuestions(questions, quizContainer);

//   // when the user clicks on the submit button it shows them their score

//   function clickHandler(){
//     showScores(questions, quizContainer, scoresContainer);

//   }

//   submitButton.addEventListener('click', clickHandler);

//   // clickHandler();

// }


// START SETTING UP TABLE

var container = document.getElementById('tableData');

var article = addElement('article', container); // Creates a container
var tableElem = addElement('table', article); // Creates a table

var personData = [
  {name:'Jitendra', score: 5},
  {name:'Jerome', score: 3},
  {name:'Joshua', score: 2},
  {name:'Sergey', score: 4},
  {name:'Daesy', score: 5},
];

// window.onload = () => {
//   loadTableData(personData)
// }

function addElement(tag, prevTag, text) {
  var element = document.createElement(tag);
  prevTag.appendChild(element);
  element.textContent = text;
  return element;
}

// function loadTableData(personData){
//   var tableBody = document.getElementById('tableData');
//   var dataHtml = "";


//   for(var person of personData){
//     dataHtml += `<tr><td>$(person.name)</td><td>$(person.score)</td></tr>`;
//     console.log(person.name);
//   }
  
//   console.log(dataHtml);

//   tableBody.innerHTML = dataHtml;
// }

// END OF TABLE

function loadTableData(personData){
  // Creates a header row
  var makeHeaderRow = function(){
    var headerRowElem = addElement('tr', tableElem);
    // addElement('th', headerRowElem, ' ');
    addElement('th', headerRowElem, 'Name');
    addElement('th', headerRowElem, 'Score');
  }

  makeHeaderRow()
  // ADD BODY OF TABLE
  var render = function() {
    
    // addElement('td', dataRowElem, this.name);
    for (var person of personData) {
      var dataRowElem = addElement('tr', tableElem);
      addElement('td', dataRowElem, person.name);
      addElement('td', dataRowElem, person.score);
    }
  }

  render()

  // SORTING
  var shouldSwitch,switching,rows,x,y;
  switching = true;
  rows=tableElem.rows;
  while (switching) {
    switching = false;
    for (var i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[1];
      y = rows[i + 1].getElementsByTagName("td")[1];
      
      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

// function sortTable() {
//   var table, rows, switching, i, x, y, shouldSwitch;
//   table = loadTableData();
//   switching = true;
//   /*Make a loop that will continue until
//   no switching has been done:*/
//   while (switching) {
//     //start by saying: no switching is done:
//     switching = false;
//     rows = table.rows;
//     /*Loop through all table rows (except the
//     first, which contains table headers):*/
//     for (i = 1; i < (rows.length - 1); i++) {
//       //start by saying there should be no switching:
//       shouldSwitch = false;
//       /*Get the two elements you want to compare,
//       one from current row and one from the next:*/
//       x = rows[i].getElementsByTagName("TD")[1];
//       y = rows[i + 1].getElementsByTagName("TD")[1];
//       //check if the two rows should switch place:
//       if (Number(x.innerHTML) > Number(y.innerHTML)) {
//         //if so, mark as a switch and break the loop:
//         shouldSwitch = true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       /*If a switch has been marked, make the switch
//       and mark that a switch has been done:*/
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//     }
//   }
// }

// sortTable();