// Variable declarations
var questions = [
    {
        title: "Why is it this way?",
        choices: ["cuz", "cuuz", "Probably science"],
        answer: "cuuz",
    },
    {
        title: "Why is it that way?",
        choices: ["cuz", "cuuz", "Probably science"],
        answer: "cuz",

    },
    {
        title: "Why is it no way?",
        choices: ["yup", "yuup", "Probably science"],
        answer: "yuup",
    },
    {
        title: "Why is it yes way?",
        choices: ["yerp", "yeerrp", "Probably science"],
        answer: "Probably science",
    },
    {
        title: "Why is it up way?",
        choices: ["up", "uup", "Probably science"],
        answer: "uup",
    }
]

var correct = 0
var incorrect = 0
var questionBox = document.querySelector(".questionBox");
var btnEl = document.querySelector("button");
var currentIndex = 0;


function displayQuestions()
{
    for (let i = 0; i < questions.length; i++) {
        var liEl = document.createElement("li");
        liEl.innertext = questions[currentIndex].title
        liEl
    }
}

function displayAnswers(currentQ) {
    clearState()
    currentQ.choices.forEach((currentA) => {
        console.log(currentA)
        var button = document.createElement("button")
        button.innerText = currentA
        ulText.appendChild(button)
        button.addEventListener("click", selectedAnswer)
    })
}

function selectedAnswer(event) {
    var selectedButton = event.target.innerText
    var correctAnswer = questions[currentIndex].answer
    if(selectedAnswer == correctAnswer) {
        alert("Correct")
    }   else {
        alert("Incorrect")
    }
    nextQuestion()
}

function nextQuestion() {
    if (questions[currentIndex] !== undefined) {
        displayQuestions(questions[currentIndex])
    } else {
        alert("Game Over")
    }
}

function clearState() {
    var buttonChoices = document.querySelector("button")
    buttonChoices.textContent = ""
}

btnEl.addEventListener("click", function() {
    displayQuestions()
})