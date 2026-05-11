const questions = [
  {
    id: 1,
    question: "Auf welcher japanischen Insel liegt die Hauptstadt Tokio?",
    options: [
      { id: "a", text: "Hokkaido", correct: false },
      { id: "b", text: "Honshu", correct: true },
      { id: "c", text: "Kyushu", correct: false },
      { id: "d", text: "Shikoku", correct: false },
    ],
  },
  {
    id: 2,
    question: "Was beschreibt der Begriff 'Sakura' in der japanischen Kultur?",
    options: [
      { id: "a", text: "Die Kunst des Papierfaltens", correct: false },
      { id: "b", text: "Die traditionelle Teezeremonie", correct: false },
      { id: "c", text: "Die Kirschblüte", correct: true },
      { id: "d", text: "Ein scharfes Gewürz aus Meerrettich", correct: false },
    ],
  },
  {
    id: 3,
    question: "Wie heißt der höchste Berg Japans, der auch ein heiliges Symbol ist?",
    options: [
      { id: "a", text: "Mount Everest", correct: false },
      { id: "b", text: "Mount Kita", correct: false },
      { id: "c", text: "Mount Fuji", correct: true },
      { id: "d", text: "Mount Aso", correct: false },
    ],
  },
  {
    id: 4,
    question: "Welches Gericht besteht traditionell aus gesäuertem Reis und oft rohem Fisch?",
    options: [
      { id: "a", text: "Ramen", correct: false },
      { id: "b", text: "Sashimi", correct: false },
      { id: "c", text: "Sushi", correct: true },
      { id: "d", text: "Tempura", correct: false },
    ],
  },
  {
    id: 5,
    question: "Wie nennt man die japanischen Ritter des Adelsstandes im vorindustriellen Japan?",
    options: [
      { id: "a", text: "Ninja", correct: false },
      { id: "b", text: "Samurai", correct: true },
      { id: "c", text: "Shogun", correct: false },
      { id: "d", text: "Ronin", correct: false },
    ],
  },
];
let questionsIndex = 0;

function startDisplay() {
  const startBody = `
  <h2 id="question-header"></h2>
      <div class="answer-container">
        <button id="btn-one" onclick="checkAnwer(btn-one)"></button>
        <button id="btn-two" onclick="checkAnwer(btn-two)"></button>
        <button id="btn-three" onclick="checkAnwer(btn-three)"></button>
        <button id="btn-four" onclick="checkAnwer(btn-four)"></button>
      </div>`;
  const quizBody = document.getElementById("quiz-frame");
  quizBody.innerHTML = startBody;
}
function endDisplay() {
  const startBody = `
  <h2 id="question-header">Du hast alle Fragen durch!</h2>
   <h2 id="question-header">Klicke auf weiter zum neustarten.</h2>
  `;
  const quizBody = document.getElementById("quiz-frame");
  quizBody.innerHTML = startBody;
}

function newQuestion() {
  if (questionsIndex < questions.length) {
    startDisplay();
    //header title
    const header = document.getElementById("question-header");
    const currentQuestion = questions[questionsIndex];
    header.innerText = currentQuestion.question;
    //Quiz options
    const optionsOne = questions[questionsIndex].options[0];
    const optionsTwo = questions[questionsIndex].options[1];
    const optionsThree = questions[questionsIndex].options[2];
    const optionsFour = questions[questionsIndex].options[3];

    const btnOne = document.getElementById("btn-one");
    const btnTwo = document.getElementById("btn-two");
    const btnThree = document.getElementById("btn-three");
    const btnFour = document.getElementById("btn-four");
    btnOne.innerText = optionsOne.text;
    btnTwo.innerText = optionsTwo.text;
    btnThree.innerText = optionsThree.text;
    btnFour.innerText = optionsFour.text;

    questionsIndex++;
  } else {
    endDisplay();
    questionsIndex = 0;
  }
}
function checkAnwer(answerId) {
  const btnOne = document.getElementById("btn-one");
  const btnTwo = document.getElementById("btn-two");
  const btnThree = document.getElementById("btn-three");
  const btnFour = document.getElementById("btn-four");
  const selectedButton = document.getElementById(answerId);
  if (questions[questionsIndex].options[answerId].correct === true) {
    selectedButton.classList.add("true");
    console.log("Richtig geantwortet!");
  } else {
    selectedButton.classList.add("false");
    console.log("Leider falsch.");
  }

  console.log("Gewählte ID:", answerId);
}
