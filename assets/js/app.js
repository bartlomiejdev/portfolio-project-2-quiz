const question = document.getElementById("question");
const options = document.querySelector(".quiz-options");

let correctAnswer = "",
  correctScore = (askedCount = 0),
  totalQuestion = 15;

// fetch questions from API
async function loadQuestion() {
    const url = "https://the-trivia-api.com/api/questions?categories=sport_and_leisure&limit=15&difficulty=medium";
    const results = await fetch(`${url}`);
    const data = await results.json();
    result.innerHTML = "";
    showQuestion(data[0]);
}

function showQuestion(data) {

}