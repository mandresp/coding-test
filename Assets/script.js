var startButton = document.querySelector('#start')
// This links startButton to the start quiz button in html
var questionBoxEl = document.querySelector('#questionBox')
// This links our questionBox section to the var
var questionTitle = document.querySelector('#titleText')
var a = document.querySelector('.choice-1')
var b = document.querySelector('.choice-2')
var c = document.querySelector('.choice-3')
var d = document.querySelector('.choice-4')
var currentIndex = 0
var correct = 0
var incorrect = 0
var questions = [
    {
        title: "Why is it this way?",
        choices: ["cuz", "cuuz", "Probably science", "Probably God"],
        answer: "cuuz",
    },
    {
        title: "Why is it that way?",
        choices: ["cuz", "cuuz", "Probably science", "Probably God"],
        answer: "cuz",

    },
    {
        title: "Why is it no way?",
        choices: ["yup", "yuup", "Probably science", "Porbably God"],
        answer: "Porbably God",
    },
    {
        title: "Why is it yes way?",
        choices: ["yerp", "yeerrp", "Porbably science", "Probably God"],
        answer: "Porbably science",
    },
    {
        title: "Why is it up way?",
        choices: ["up", "uup", "Probably science", "Probably God"],
        answer: "uup",
    }
]
// These are all of the questions that we have in the test as well as the choices you can select and the correct answer of those choices

function startQuiz() {
    alert('Begin!');
    chooseQuestion()
}

function chooseQuestion() {
    for (let i = 0; i < questions.length; i++) {
        questionTitle.innerText = questions[currentIndex].title
        a.innerText = questions[currentIndex].choices[0]
        b.innerText = questions[currentIndex].choices[1]
        c.innerText = questions[currentIndex].choices[2]
        d.innerText = + questions[currentIndex].choices[3]
    }
}

function checkAnswer() {
    if (event.target.innerText === questions[currentIndex].answer) {
        alert("Correct!");
        correct = correct + 1
        nextQuestion();
    } else {
        alert("Incorrect!");
        incorrect = incorrect + 1
        nextQuestion();
    }
}

function nextQuestion() {

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