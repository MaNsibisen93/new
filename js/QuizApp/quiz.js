// [{},{},{}]=> json formt

const question = [
  {
    question: "which one from these  is language for front hand?",
    answers: [
      { text: "html", corret: true },
      { text: "js", corret: false },
      { text: "node-js", corret: false },
      { text: "java", corret: false },
    ],
  },
  {
    question: "which one from these  is language for front hand?",
    answers: [
      { text: "html", corret: true },
      { text: "js", corret: false },
      { text: "node-js", corret: false },
      { text: "java", corret: false },
    ],
  },
  {
    question: "which one from these  is language for front hand?",
    answers: [
      { text: "html", corret: true },
      { text: "js", corret: false },
      { text: "node-js", corret: false },
      { text: "java", corret: false },
    ],
  },
  {
    question: "which one from these  is language for front hand?",
    answers: [
      { text: "html", corret: true },
      { text: "js", corret: false },
      { text: "node-js", corret: false },
      { text: "java", corret: false },
    ],
  },
  {
    question: "which one from these  is language for front hand?",
    answers: [
      { text: "html", corret: true },
      { text: "js", corret: false },
      { text: "node-js", corret: false },
      { text: "java", corret: false },
    ],
  },
  {
    question: "which one from these  is language for front hand?",
    answers: [
      { text: "html", corret: true },
      { text: "js", corret: false },
      { text: "node-js", corret: false },
      { text: "java", corret: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex;
let Score;

function startQuiz() {
  currentQuestionIndex = 0;
  Score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;

  questionElement.innerHTML = questionNo + " . " + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);

    if (answer.corret) {
      button.dataset.corret = answer.corret;
    }
    button.addEventListener("click",selectAnswer);
    
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}


function selectAnswer(event){
const selectedBtn=event.target;
const iscorrect=selectedBtn.dataset.corret==="true";


if(iscorrect){
    selectedBtn.classList.add("correct");
    Score++;
}
else{
  selectedBtn.classList.add("incorrect");
}

Array.from(answerButton.children).forEach((button)=>{


  if(button.dataset.corret==="true"){
    button.classList.add("correct");
  }
  button.disabled=true;


});

nextButton.style.display="block"


}


function showScore(){
  resetState();
  questionElement.innerHTML=`Your score is ${Score}`
  nextButton.innerHTML="play again"
  nextButton.style.display="block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex<question.length){
    showQuestion();
  }
  else{
    showScore();
  }
}


nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex<question.length){
    handleNextButton();

  }
  else{
        startQuiz();
  }
})

startQuiz();
