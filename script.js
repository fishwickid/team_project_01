//User form
// form.js
const formId = "save-later-form"; // ID of the form
const url = location.href; //  href for the page
const formIdentifier = `${url} ${formId}`; // Identifier used to identify the form
const saveButton = document.querySelector("#save"); // select save button
const alertBox = document.querySelector(".alert"); // select alert display div
let form = document.querySelector(`#${formId}`); // select form
let formElements = form.elements; // get the elements in the form
/**
 * This function gets the values in the form
 * and returns them as an object with the
 * [formIdentifier] as the object key
 * @returns {Object}
 */
const getFormData = () => {
  let data = { [formIdentifier]: {} };
  for (const element of formElements) {
    if (element.name.length > 0) {
      data[formIdentifier][element.name] = element.value;
    }
  }
  return data;
};
saveButton.onclick = event => {
  event.preventDefault();
  data = getFormData();
  localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
  const message = "Form draft has been saved!";
  displayAlert(message);
};
/**
 * This function populates the form
 * with data from localStorage
 *
 */
const populateForm = () => {
  if (localStorage.key(formIdentifier)) {
    const savedData = JSON.parse(localStorage.getItem(formIdentifier)); // get and parse the saved data from localStorage
    for (const element of formElements) {
      if (element.name in savedData) {
        element.value = savedData[element.name];
      }
    }
  }
};
document.onload = populateForm(); // populate the form when the document is loaded
// zomato function
//<a href="#" onclick="return getSuccessOutput();"> test success </a> | <a href="#" onclick="return getFailOutput(); return false;"> test failure</a>
//<div id="output">waiting for action</div>
function getSuccessOutput() {
  var apiKey = "9c2e8be76bd98aff754b5cded36af347"
  var requestUrl = "https://developers.zomato.com/api/v2.1/categories"
  var headers = {
    "Accept": 'application/json',
    "user-key": "9c2e8be76bd98aff754b5cded36af347"
  }
      $.ajax({
          url:requestUrl,
          headers: headers,
          complete: function (response) {
              $('#output').html(response.responseText);
          },
          error: function () {
              $('#output').html('Bummer: there was an error!');
          },
      });
      return false;
  }
$("save").on("click", function(){
  
});


// select all elements

const start = document.getElementById("start");
const nameForm = document.getElementById("#save-later-form");
const quiz = document.getElementById("quiz");
const divQuiz = document.getElementById("divQuiz");
const question = document.getElementById("question");
const floatingTimer = document.getElementById("floatingTimer");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const scoreDiv = document.getElementById("scoreContainer");
const secondsDisplay = document.querySelector("#seconds");
var answerDisplay = document.getElementById("answerDisplay")
const saveInitial = document.getElementById("saveInitial");
const scoreRegister = document.getElementById("scoreRegister");


// create our questions
let questions = [
    {
        question: "What are you in the mood to eat with your wine?",
        choiceA : "Italian food",
        choiceB : "Barbecue",
        choiceC : "Fried Food",
        choiceD : "Sushi",
        correct : "A"
    // },{
    //     question: "What is the occasion?",
    //     choiceA : "Casual dinner with friends",
    //     choiceB : "Romantic date",
    //     choiceC : "Work event",
    //     choiceD : "Formal dining",
    //     correct : "A"
    // },{
    //     question: "What is the occasion?",
    //     choiceA : "Casual dinner with friends",
    //     choiceB : "Romantic date",
    //     choiceC : "Work event",
    //     choiceD : "Formal dining",
    //     correct : "A"
    // },{
    //     question: "What is the occasion?",
    //     choiceA : "Casual dinner with friends",
    //     choiceB : "Romantic date",
    //     choiceC : "Work event",
    //     choiceD : "Formal dining",
    //     correct : "A"
    // },{
    //     question: "What is the occasion?",
    //     choiceA : "Casual dinner with friends",
    //     choiceB : "Romantic date",
    //     choiceC : "Work event",
    //     choiceD : "end of quiz",
    //     correct : "A"
    }
];


// create some variables

const lastQuestion = questions.length -1;
let runningQuestion = 0;
let score = 0;



// Get request from Zomato

const queryURL = "https://developers.zomato.com/api/v2.1/establishments"

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";
    
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

// add listener to start button
start.addEventListener("click",startQuiz);


// start quiz
function startQuiz(){
    start.style.display = "none";
    nameForm.style.display = "none";
    intro.style.display = "none";
    divQuiz.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    floatingTimer.style.display = "block";
    renderProgress();
    
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}


function checkAnswer(answer){
    // answer is correct
    if( answer == questions[runningQuestion].correct){
        score++;
        answerIsCorrect();
    }
     // answer is wrong
    else {
        answerIsWrong();
    }
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
       // clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    console.log("That's Correct");
}

// answer is Wrong
function answerIsWrong(){
    console.log("Sorry, that's incorrect");
}

// score render
function scoreRender(){
    document.getElementById('count').innerHTML= "You're Done!";
    clearInterval(interval);
    scoreDiv.style.display = "block";
    question.style.display = "none";
    choices.style.display = "none";
    answerDisplay.innerHTML += "<p>You Scored "+ score +"/5</p>";
}

// Adding your score to the tally

var todoInput = document.querySelector("#user-text");
var todoForm = document.querySelector("#user-form");
var todoList = document.querySelector("#user-list");
var todoCountSpan = document.querySelector("#user-count");

var todos = ["Rami", "Elise", "Chad"];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  }
}

// When form is submitted...
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Re-render the list
  renderTodos();
});