const questions = [
  {
    id: 1,
    question: "Auf welcher japanischen Insel liegt die Hauptstadt Tokio?",
    options: [
      { text: "Hokkaido", correct: false },
      { text: "Honshu", correct: true },
      { text: "Kyushu", correct: false },
      { text: "Shikoku", correct: false },
    ],
  },
  {
    id: 2,
    question: "Was beschreibt der Begriff 'Sakura' in der japanischen Kultur?",
    options: [
      { text: "Die Kunst des Papierfaltens", correct: false },
      { text: "Die traditionelle Teezeremonie", correct: false },
      { text: "Die Kirschblüte", correct: true },
      { text: "Ein scharfes Gewürz aus Meerrettich", correct: false },
    ],
  },
  {
    id: 3,
    question: "Wie heißt der höchste Berg Japans, der auch ein heiliges Symbol ist?",
    options: [
      { text: "Mount Everest", correct: false },
      { text: "Mount Kita", correct: false },
      { text: "Mount Fuji", correct: true },
      { text: "Mount Aso", correct: false },
    ],
  },
  {
    id: 4,
    question: "Welches Gericht besteht traditionell aus gesäuertem Reis und oft rohem Fisch?",
    options: [
      { text: "Ramen", correct: false },
      { text: "Sashimi", correct: false },
      { text: "Sushi", correct: true },
      { text: "Tempura", correct: false },
    ],
  },
  {
    id: 5,
    question: "Wie nennt man die japanischen Ritter des Adelsstandes im vorindustriellen Japan?",
    options: [
      { text: "Ninja", correct: false },
      { text: "Samurai", correct: true },
      { text: "Shogun", correct: false },
      { text: "Ronin", correct: false },
    ],
  },
];
let questionsIndex = 0;

function startDisplay() {
  const startBody = `
  <h2 id="question-header"></h2>
      <div class="answer-container">
        <button id="btn-one" onclick="checkAnswer(0)"></button>
        <button id="btn-two" onclick="checkAnswer(1)"></button>
        <button id="btn-three" onclick="checkAnswer(2)"></button>
        <button id="btn-four" onclick="checkAnswer(3)"></button>
      </div>`;
  const quizBody = document.getElementById("quiz-frame");
  quizBody.innerHTML = startBody;
}

function newQuestion() {
  if (questionsIndex >= questions.length) {
    alert("neustart");
    questionsIndex = 0;
    randomizerQuestion();
  }
  startDisplay();
  //header title
  const header = document.getElementById("question-header");
  const currentQuestion = questions[questionsIndex];
  header.innerText = currentQuestion.question;

  for (let i = 0; i < 4; i++) {
    const option = questions[questionsIndex].options[i];
    btn = document.getElementById(`btn-${i}`);
    btn.innerText = option.text;
  }

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

  console.log(questionsIndex);
}
function checkAnswer(answerId) {
  const currentQuestion = questions[questionsIndex];
  const selectedOption = currentQuestion.options[answerId];
  const buttonIds = ["btn-one", "btn-two", "btn-three", "btn-four"];
  const clickedButton = document.getElementById(buttonIds[answerId]);
  console.log(questionsIndex);

  if (selectedOption.correct === true) {
    clickedButton.classList.add("true");
    alert(selectedOption.text + " war richtig!");
  } else {
    clickedButton.classList.add("false");
    alert(selectedOption.text + " war falsch!");
    // das suchen der richtigen antwort und makieren mit einer klasse
    const correktIndex = currentQuestion.options.findIndex((opt) => opt.correct === true);
    const correktButtonId = buttonIds[correktIndex];
    document.getElementById(correktButtonId).classList.add("true");
  }
  randomQuestion();
}
randomizerQuestion();
function randomQuestion() {
  questionsIndex++;
  // const step = Math.floor(Math.random() * questions.length);
  // questionsIndex = step;
}
function randomizerQuestion() {
  for (let i = questions.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = questions[i];
    questions[i] = questions[j];
    questions[j] = k;
  }
}
