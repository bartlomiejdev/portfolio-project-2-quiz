const question = document.getElementById("question");
const options = document.querySelector(".quiz-options");
const totalQuestion2 = document.getElementById("total-question2");
const actualQuestion = document.getElementById("actual-question");
const checkButton = document.getElementById("check-answer");

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
    actualQuestion.innerHTML = askedCount;
    totalQuestion2.textContent = totalQuestion;

    checkButton.disabled = false;
    correctAnswer = data.correctAnswer;
    let incorrectAnswer = data.incorrectAnswers;

    let optionsList = incorrectAnswer;
    optionsList.splice(
      Math.floor(Math.random() * (incorrectAnswer.length + 1)),
      0,
      correctAnswer
    );

    question.innerHTML = `${data.question} <br> <span class = "category"> ${data.category} </span>`;
    options.innerHTML = `
          ${optionsList
            .map(
              (option, index) => `
              <li> ${index + 1}. <span>${option}</span> </li>
          `
            )
            .join("")}
      `;
    selectOption();
}