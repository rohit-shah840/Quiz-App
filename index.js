const quizQB = [
  {
    question: "Q1 : Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<js>",
    c: "<script>",
    d: "<scripting>",
    ans: "ans3",
  },
  {
    question: 'Q2 : How do you write "Hello World" in an alert box?',
    a: 'alertBox("Hello World");',
    b: 'msgBox("Hello World");',
    c: 'msg("Hello World");',
    d: 'alert("Hello World");',
    ans: "ans4",
  },
  {
    question: "Q3 : How to write an IF statement in JavaScript?",
    a: "if(i == 5)",
    b: "if i = 5 then",
    c: "if i = 5",
    d: "if i ==5 then",
    ans: "ans1",
  },
  {
    question:
      "Q4 : Which event occurs when the user clicks on an HTML element?",
    a: "onmouseover",
    b: "onclick",
    c: "onmouseclick",
    d: "onchange",
    ans: "ans2",
  },
  {
    question: "Q5 : How do you create a function in JavaScript?",
    a: "function myFunction()",
    b: "function = myFuncttion()",
    c: "function:myFunction()",
    d: "function.myFunction()",
    ans: "ans1",
  },
];

const question = document.querySelector(".question");
//for id use #Option
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
//for submit
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showscore = document.querySelector("#showscore");

//for loading question
let qcount = 0;
let score = 0;
const loadQuestion = () => {
  const questionlist = quizQB[qcount];
  question.innerText = questionlist.question;
  option1.innerText = questionlist.a;
  option2.innerText = questionlist.b;
  option3.innerText = questionlist.c;
  option4.innerText = questionlist.d;
};

loadQuestion();

//score calculation
const getCheckAnswer = () => {
  let answer;

  answers.forEach((currAnsElement) => {
    if (currAnsElement.checked) {
      answer = currAnsElement.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((currAnsElement) => (currAnsElement.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  if (checkedAnswer === quizQB[qcount].ans) {
    score++;
  }

  qcount++;
  deselectAll();
  if (qcount < quizQB.length) {
    loadQuestion();
  } else {
    showscore.innerHTML = `
    <h3>YOU Scored ${score}/${quizQB.length} 🎊</h3>
    <button class="btn" onclick = "location.reload()"> Play again </button>
    `;
    showscore.classList.remove("scoreArea");
  }
});
