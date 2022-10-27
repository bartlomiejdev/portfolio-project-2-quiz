const question = document.getElementById("question");
const options = document.querySelector(".quiz-options");
const totalQuestion2 = document.getElementById("total-question2");
const actualQuestion = document.getElementById("actual-question");
const checkButton = document.getElementById("check-answer");
const playAgainButton = document.getElementById("play-again");

let correctAnswer = "",
  correctScore = (askedCount = 0),
  totalQuestion = 15;

// fetch questions from API
async function loadQuestion() {
  const url =
    "https://the-trivia-api.com/api/questions?categories=sport_and_leisure&limit=15&difficulty=medium";
  const results = await fetch(`${url}`);
  const data = await results.json();
  result.innerHTML = "";
  showQuestion(data[0]);
}

// event listeners
function eventListeners() {
    checkButton.addEventListener("click", checkAnswer);
    playAgainButton.addEventListener("click", restartQuiz);
}

// display questions and options
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
    // Adding correct asnwer in random position in the list
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

// options selection
function selectOption() {
  options.querySelectorAll("li").forEach(function (option) {
    option.addEventListener("click", function () {
      if (options.querySelector(".selected")) {
        const activeOption = options.querySelector(".selected");
        activeOption.classList.remove("selected");
      }
      option.classList.add("selected");
    });
  });
}

// to convert html entities into normal text of correct answer if there is any
function HTMLDecode(textString) {
  let doc = new DOMParser().parseFromString(textString, "text/html");
  return doc.documentElement.textContent;
}
