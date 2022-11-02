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

var startButton = document.getElementById('start')
// This links startButton to the start quiz button in html
var questionBoxEl = document.getElementById('questionBox')
// This links our questionBox section to the var

startButton.addEventListener('click', startQuiz);
// This is an event listener on the button that executes the function start quiz when the button is clicked

function startQuiz() {
    alert('Begin!');
}