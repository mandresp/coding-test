var startButton = document.querySelector('#start')
var submit = document.querySelector('#submit')
var submitButton = document.querySelector('#submit-button')
var questionBoxEl = document.querySelector('#questionBox')
var questionEl = document.getElementById("question")
var answerButtons = document.getElementById("answer-buttons")
var highScores = JSON.parse(localStorage.getItem("highScoresList")) || [];
var namesList = JSON.parse(localStorage.getItem("namesList")) || [];
var list = document.querySelector('#list')
var listItems = document.getElementById("li");

var a = document.querySelector('.choice-1')
var b = document.querySelector('.choice-2')
var c = document.querySelector('.choice-3')
var d = document.querySelector('.choice-4')

var currentIndex = 0
let randomQuestion
var correct = 0
var incorrect = 0

var questions = [
    {
        title: "What's 2 + 2?",
        choices: ["4", "14", "68", "19"],
        answer: "4",
    },
    {
        title: "What's my name?",
        choices: ["Andre", "Andreas", "Andres", "Jefferton Spanks"],
        answer: "Andres",
    },
    {
        title: "What are we studying?",
        choices: ["Music", "Humanity", "10", "Coding"],
        answer: "Coding",
    },
    {
        title: "What's my go-to gym music?",
        choices: ["Metal", "Caramella Girls", "Jazz", "Taylor Swift"],
        answer: "Caramella Girls",
    },
    {
        title: "Why is it no way?",
        choices: ["noooope", "yeerrp", "Probably science", "Porbably God"],
        answer: "Porbably God",
    },
]
// These are all of the questions that we have in the test as well as the choices you can select and the correct answer of those choices

function startQuiz() {
    alert('Begin!');
    startButton.classList.add('hide')
    randomQuestion = questions.sort(() => Math.random() - .5)
    questionBoxEl.classList.remove('hide')
    nextQuestion()
}
// This is the very first function which hides the start button then unhides the questionBoxEl so that we can see the questions and choices

function showQuestion(questions) {
    questionEl.textContent = questions.title
    a.innerText = questions.choices[0]
    b.innerText = questions.choices[1]
    c.innerText = questions.choices[2]
    d.innerText = questions.choices[3]
}
// This function adds the text content from the array to the title and each of the buttons

function nextQuestion() {
    if (currentIndex < 5) {
        showQuestion(randomQuestion[currentIndex])
    } else {
        endGameScreen()
    }
}
//This function displays the next question as long as the index is still less than 1 more than the total amount of the array

function checkAnswer() {
    if (event.target.innerText === randomQuestion[currentIndex].answer) {
        alert("Correct!");
        correct++;
        currentIndex++;
        nextQuestion();
    } else {
        alert("Incorrect!");
        incorrect++;
        currentIndex++;
        nextQuestion();
    }
}
// This function checks the answer by matching the inner text of the button click with the answer array. If you are correct it adds one to your score and goes to the question if you got it wrong it will add 1 to your incorrect and go to the next question

function endGameScreen() {
    let currentIndex = 0
    console.log(currentIndex);
    var total = correct + incorrect;
    var scorePercent = Math.floor((correct / total) * 100);
    questionEl.textContent = "You got " + scorePercent + "% correct!";
    answerButtons.classList.add('hide');
    submit.classList.remove('hide');
    highScores.push(scorePercent);
    localStorage.setItem("highScoresList", JSON.stringify(highScores));
}
//This function displays the end screen after all the questions have been answered. It tallys the score and gives you the percentage that you got correct back

function saveHighscore() {
    console.log("Submitted~~~");
    var nameInput = document.getElementById("username").value;
    console.log(nameInput);
    namesList.push(JSON.stringify(nameInput));
    localStorage.setItem("namesList", JSON.stringify(nameInput));
    reset();
}
// This function SHOULD be saving the user name input but I can't get it to display properly as a string when I go to add it to the high scores list

function reset(){
    let currentIndex = 0
    submit.classList.add('hide');
    questionEl.classList.add('hide');
    startButton.classList.remove('hide');
    console.log(currentIndex);
    let playAgain = confirm("Would you like to play again?")
    if (playAgain === true) {
        startQuiz();
    } else {

    }
}
// This resets everything once you decide to play again if you cancel it will do nothing

function getScores() {
    for (let i = 0; i < 10; i += 2) {
        var entry = document.createElement('li');
        highScores.sort(function (a, b) {return a.score - b.score});
        entry.appendChild(document.createTextNode(highScores[i]));
        list.appendChild(entry)
    }
}
// This adds the high scores to the front page and sorts them but I was unable to add the name to the high score without it taking each character of index [0] rather than the whole string of index [0]

a.addEventListener('click', function(event) {
    console.log(event.target.innerText);
    checkAnswer(event);
})
b.addEventListener('click', function(event) {
    console.log(event.target.innerText);
    checkAnswer(event);
})
c.addEventListener('click', function(event) {
    console.log(event.target.innerText);
    checkAnswer(event);
})
d.addEventListener('click', function(event) {
    console.log(event.target.innerText);
    checkAnswer(event);
})
// These button listeners collect the value of the clicked button and feed it into the check answer function 

startButton.addEventListener('click', startQuiz);
// This is an event listener on the button that executes the function start quiz when the button is clicked

getScores()
// This runs the score updater when the page loads