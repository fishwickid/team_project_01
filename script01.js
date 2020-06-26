// select all elements

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const divQuiz = document.getElementById("divQuiz");
const question = document.getElementById("question1");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const choiceE = document.getElementById("E");
const choiceF = document.getElementById("F");
const choiceG = document.getElementById("G");
const choiceH = document.getElementById("H");
const choiceI = document.getElementById("I");
const choiceJ = document.getElementById("J");
const choiceK = document.getElementById("K");
const choiceL = document.getElementById("L");
const scoreDiv = document.getElementById("scoreContainer");
const secondsDisplay = document.querySelector("#seconds");
var answerDisplay = document.getElementById("answerDisplay")
const saveInitial = document.getElementById("saveInitial");
const scoreRegister = document.getElementById("scoreRegister");


// create our questions
let questions = [
    {
        question: "What are you in the mood to eat with your wine?",
        choiceA : "Barbeque",
        choiceB : "Burgers",
        choiceC : "Chinese",
        choiceD : "Fried food",
        choiceE : "Indian",
        choiceG : "Italian",
        choiceH : "Pizza",
        choiceI : "Salad",
        choiceJ : "Sushi",
        choiceK : "Thai",
        choiceL : "Wings",
        Correct : "A",
    },

];

// create some variables

const lastQuestion = questions.length -1;
let runningQuestion = 0;
let score = 0;



// render a question
function renderQuestion(){
    let q = questions[runningQuestion]; {
    question.innerHTML = "<p>"+ q.question +"</p>";
    }
    
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    choiceE.innerHTML = q.choiceE;
    choiceF.innerHTML = q.choiceF;
    choiceG.innerHTML = q.choiceG;
    choiceH.innerHTML = q.choiceH;
    choiceI.innerHTML = q.choiceI;
    choiceJ.innerHTML = q.choiceJ;
    choiceK.innerHTML = q.choiceK;
    choiceL.innerHTML = q.choiceL;
    
}

// function removeUndefined() {
     
// }

// add listener to start button
start.addEventListener("click",startQuiz);


// start quiz
function startQuiz(){
    start.style.display = "none";
    intro.style.display = "none";
    divQuiz.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}
    
const wineRecommendations = {
    barbeque: {red: "Malbec", white: "Rose"},
    burgers: {red: "Cabernet Sauvignon", white: "Oaked Chardonnay"},
    chinese: {red: "Blaufrankisch", white: "German Riesling"},
    friedFood: {red: "Lambrusco", white: "Champagne"},
    Indian: {red: "Syrah", white: "German Riesling"},
    Italian: {red: "Chianti (Sangiovese)", white: "Pinot Frigio"},
    Pizza: {red: "Barbera", white: "Gruner Veltliner"},
    Salad: {red: "Pinot Noir", white: "Saivignon Blanc"},
    Sushi:{red: "Pinot Noir", white: "Chenin Blanc"},
    Thai: {red: "Gamay", white: "Gewürztraminer"},
    Wings: {red: "Zinfanadel", white: "Champagne"},
}   


// check Anwer

function checkAnswer(answer){
    // answer is correct
    if( answer === questions[runningQuestion].choiceA){
        console.log(wineRecommendations.barbeque);
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
    confirm("Sorry, that's incorrect");
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

// renderTodos();

// function renderTodos() {
//   // Clear todoList element and update todoCountSpan
//   todoList.innerHTML = "";
//   todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    // var li = document.createElement("li");
    // li.textContent = todo;
    // todoList.appendChild(li);
  }
// When form is submitted...
// todoForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var todoText = todoInput.value.trim();

//   // Return from function early if submitted todoText is blank
//   if (todoText === "") {
//     return;
//   }

//   // Add new todoText to todos array, clear the input
//   todos.push(todoText);
//   todoInput.value = "";

  // Re-render the list
//   renderTodos();
;