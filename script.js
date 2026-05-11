const questions = [
  {
    id: 1,
    question: "Was ist die Haupstadt von Deutschland",
    options: [
      { id: "a", text: "Hamburg", correct: false },
      { id: "b", text: "Berlin", correct: true },
      { id: "c", text: "München", correct: false },
      { id: "d", text: "Hannover", correct: false },
    ],
  },
  {
    id: 3,
    question: "Welcher Fluss fließt durch Hamburg?",
    options: [
      { id: "a", text: "Rhein", correct: false },
      { id: "b", text: "Donau", correct: false },
      { id: "c", text: "Elbe", correct: true },
      { id: "d", text: "Weser", correct: false },
    ],
  },
  {
    id: 4,
    question: "Wie viele Bundesländer hat Deutschland?",
    options: [
      { id: "a", text: "12", correct: false },
      { id: "b", text: "14", correct: false },
      { id: "c", text: "16", correct: true },
      { id: "d", text: "18", correct: false },
    ],
  },
  {
    id: 5,
    question: "Was ist das chemische Symbol für Wasser?",
    options: [
      { id: "a", text: "O2", correct: false },
      { id: "b", text: "H2O", correct: true },
      { id: "c", text: "CO2", correct: false },
      { id: "d", text: "HO", correct: false },
    ],
  },
];
let questionsIndex = 0;

function newQuestion() {
  if (questionsIndex < questions.length) {
    //body
    const startBody = `
  <h2 id="question-header"></h2>
      <div class="answer-container">
        <button id="btn-one"></button>
        <button id="btn-two"></button>
        <button id="btn-three"></button>
        <button id="btn-four"></button>
      </div>`;
    const quizBody = document.getElementById("quiz-frame");
    quizBody.innerHTML = startBody;

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
    const startBody = `
  <h2 id="question-header">Du hast alle Fragen durch!</h2>
  `;
    const quizBody = document.getElementById("quiz-frame");
    quizBody.innerHTML = startBody;
  }
  console.log(questionsIndex);
}
