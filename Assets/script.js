var startButton = document.querySelector('#start')
// This links startButton to the start quiz button in html
var questionBoxEl = document.querySelector('#questionBox')
// This links our questionBox section to the var
var answerBox = document.querySelector('#answer-box')
var questionEl = document.getElementById("question")
var answerButton = document.getElementById("button")

var a = document.querySelector('.choice-1')
var b = document.querySelector('.choice-2')
var c = document.querySelector('.choice-3')
var d = document.querySelector('.choice-4')

var currentIndex = 0
let randomQuestion, currentIndex
var correct = 0
var incorrect = 0

// These are all of the questions that we have in the test as well as the choices you can select and the correct answer of those choices

var questions = [
    {
        title: "What's 2 + 2?",
        choices: ["4", "14", "68", "19"],
        answer: "4",
    },
    {
        title: "What's 5 + 5?",
        choices: ["5", "70", "10", "9"],
        answer: "10",
    },
    {
        title: "What's 7 + 5?",
        choices: ["2", "67", "10", "12"],
        answer: "12",
    },
    {
        title: "What's 5 + 16?",
        choices: ["22", "21", "23", "1,000"],
        answer: "21",
    },
    {
        title: "What's 23 + 16?",
        choices: ["39", "399", "3.9", "94"],
        answer: "39",
    },
    {
        title: "What's 5 + 0?",
        choices: ["0", "5", "6", "1,289"],
        answer: "5",
    },
    {
        title: "What's 26 + 13?",
        choices: ["3.9", "399", "39", "94"],
        answer: "39",
    },
    {
        title: "What's my name?",
        choices: ["39", "399", "Jefferton Spanks", "94"],
        answer: "Jefferton Spanks",
    },
    {
        title: "Why is it yes way?",
        choices: ["yerp", "yeerrp", "Porbably science", "Probably God"],
        answer: "Porbably science",
    },
    {
        title: "Why is it no way?",
        choices: ["noooope", "yeerrp", "Porbably science", "Probably God"],
        answer: "Porbably God",
    },
]

function startQuiz() {
    alert('Begin!');
    startButton.classList.add('hide')
    randomQuestion = questions.sort(() => Math.random() - .5)
    questionBoxEl.classList.remove('hide')
    nextQuestion()
}

function nextQuestion() {
    if (currentIndex < 10) {
    showQuestion(randomQuestion[currentIndex])
    } else {
        endGameScreen()
    }
}

function showQuestion(question) {
    questionEl.textContent = question.title
    a.innerText = question.choices[0]
    b.innerText = question.choices[1]
    c.innerText = question.choices[2]
    d.innerText = question.choices[3]
}

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

function endGameScreen() {
    currentIndex = 0
    startButton.classList.remove('hide')
    questionBoxEl.classList.add('hide')
    var total = correct + incorrect
    alert("You got " + Math.floor((correct / total) * 100) + "% correct!" )
}

// I need an event listener for selections on the 4 choice buttons 

a.addEventListener('click', function(event) {
    console.log(event.target.innerText);
    checkAnswer();
})
b.addEventListener('click', function(event) {
    console.log(event.target.innerText);
    checkAnswer();
})
c.addEventListener('click', function(event) {
    console.log(event.target.innerText);
    checkAnswer();
})
d.addEventListener('click', function(event) {
    console.log(event.target.innerText);
    checkAnswer();
})
// This is an event listener on the button that executes the function start quiz when the button is clicked
startButton.addEventListener('click', startQuiz);