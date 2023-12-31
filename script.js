document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const questionBox = document.querySelector(".question");
  const choicesBox = document.querySelector(".choices");
  const nextBtn = document.querySelector(".nextBtn");
  const scoreCard = document.querySelector(".scoreCard");
  const alert = document.querySelector(".alert");
  const startBtn = document.querySelector(".startBtn");
  const timer = document.querySelector(".timer");

  // Make an array of objects that stores question, choices of question and answer
  const quiz = [
    {
      question: "Q. What does HTML stand for?",
      // store choices in array
      choices: [
        " Hyper Transfer Markup Language",
        " Hyper Text Makeup Language",
        " Hyper Text Markup Language",
        " High Transport Mark Language",
      ],
      Answer: " Hyper Text Markup Language",
    },
    {
      question: "Q. Which HTML tag is used to create a paragraph?",
      // store choices in array
      choices: [" <p>", " <par>", " <para> ", "<paragraph>"],
      Answer: " <p>",
    },
    {
      question: "Q. What is the purpose of the HTML <meta> tag?",
      // store choices in array
      choices: [
        " To specify character encoding and viewport settings",
        " To create a hyperlink ",
        " To create a emmit",
        " To format text as bold",
      ],
      Answer: " To specify character encoding and viewport settings",
    },
    {
      question: "Q. What does the HTML <a> tag attribute 'target='_blank'' do?",
      // store choices in array
      choices: [
        " Makes the link open in a new browser window or tab",
        " Adds a background color to the link",
        " Adds a border around the link",
        " Makes the link italic",
      ],
      Answer: " Makes the link open in a new browser window or tab",
    },
    {
      question: "Q. Which keyword is used to declare a variable in JavaScript?",
      // store choices in array
      choices: [" var", " let", " const", " all of the above"],
      Answer: "all of the above ",
    },
    {
      question:
        "Q. What does the 'DOM' stand for in the context of JavaScript?",
      // store choices in array
      choices: [
        " Document Object Model",
        " Dynamic Object Management",
        " Data Object Model",
        " Document Oriented Module",
      ],
      Answer: " Document Object Model",
    },
    {
      question:
        "Q. What is the result of the expression: 10 + '5' in JavaScript?",
      // store choices in array
      choices: [" 15", " '105'", " 105", " '10+5'"],
      Answer: " 105",
    },
    {
      question:
        "Q. What is the correct syntax for an 'if' statement in JavaScript?",
      // store choices in array
      choices: [
        " if (x > 5) then { }",
        " if x > 5 { }",
        " if (x > 5) { }",
        " if x > 5 then { }",
      ],
      Answer: " if (x > 5) { }",
    },
    {
      question: "Q. What does the 'box-sizing' property in CSS define?",
      // store choices in array
      choices: [
        " The size of the border box",
        " The size of the margin box",
        " The size of the content box",
        " The size of the padding box",
      ],
      Answer: " The size of the content box",
    },
    {
      question: "Q. How can you include comments within a CSS file?",
      // store choices in array
      choices: [
        " / This is a comment /",
        " /* This is a comment */",
        " # This is a comment",
        " <!-- This is a comment -->",
      ],
      Answer: " / This is a comment /",
    },
  ];

  // Making Variables
  let currentQuestionIndex = 0;
  let score = 0;
  let quizOver = false;
  let timeLeft = 15;
  let timerID = null;

  // Arrow Function to Show Questions
  const showQuestions = () => {
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;

    choicesBox.textContent = "";
    for (let i = 0; i < questionDetails.choices.length; i++) {
      const currentChoice = questionDetails.choices[i];
      const choiceDiv = document.createElement("div");
      choiceDiv.textContent = currentChoice;
      choiceDiv.classList.add("choice");
      choicesBox.appendChild(choiceDiv);

      choiceDiv.addEventListener("click", () => {
        if (choiceDiv.classList.contains("selected")) {
          choiceDiv.classList.remove("selected");
        } else {
          choiceDiv.classList.add("selected");
        }
      });
    }

    if (currentQuestionIndex < quiz.length) {
      startTimer();
    }
  };

  // Function to check answers
  const checkAnswer = () => {
    const selectedChoice = document.querySelector(".choice.selected");
    if (selectedChoice.textContent === quiz[currentQuestionIndex].Answer) {
      // alert("Correct Answer!");
      displayAlert("Correct Answer!");
      score++;
    } else {
      // alert("Wrong answer");
      displayAlert(
        `Wrong Answer! ${quiz[currentQuestionIndex].Answer} is the Correct Answer`
      );
    }
    timeLeft = 15;
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
      showQuestions();
    } else {
      stopTimer();
      showScore();
    }
  };

  // Function to show score
  const showScore = () => {
    questionBox.textContent = "";
    choicesBox.textContent = "";
    scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!`;
    displayAlert("You have completed this quiz!");
    nextBtn.textContent = "Play Again";
    quizOver = true;
    timer.style.display = "none";
  };

  // Function to Show Alert
  const displayAlert = (msg) => {
    alert.style.display = "block";
    alert.textContent = msg;
    setTimeout(() => {
      alert.style.display = "none";
    }, 2000);
  };

  // Function to Start Timer
  const startTimer = () => {
    clearInterval(timerID); // Check for any exist timers
    timer.textContent = timeLeft;

    const countDown = () => {
      timeLeft--;
      timer.textContent = timeLeft;
      if (timeLeft === 0) {
        const confirmUser = confirm(
          "Time Up!!! Do you want to play the quiz again"
        );
        if (confirmUser) {
          timeLeft = 15;
          startQuiz();
        } else {
          startBtn.style.display = "block";
          container.style.display = "none";
          return;
        }
      }
    };
    timerID = setInterval(countDown, 1000);
  };

  // Function to Stop Timer
  const stopTimer = () => {
    clearInterval(timerID);
  };

  // Function to shuffle question
  const shuffleQuestions = () => {
    for (let i = quiz.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
    }
    currentQuestionIndex = 0;
    showQuestions();
  };

  // Function to Start Quiz
  const startQuiz = () => {
    timeLeft = 15;
    timer.style.display = "flex";
    shuffleQuestions();
  };

  // Adding Event Listener to Start Button
  startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    container.style.display = "block";
    startQuiz();
  });

  nextBtn.addEventListener("click", () => {
    const selectedChoice = document.querySelector(".choice.selected");
    if (!selectedChoice && nextBtn.textContent === "Next") {
      // alert("Select your answer");
      displayAlert("Select your answer");
      return;
    }
    if (quizOver) {
      nextBtn.textContent = "Next";
      scoreCard.textContent = "";
      currentQuestionIndex = 0;
      quizOver = false;
      score = 0;
      startQuiz();
    } else {
      checkAnswer();
    }
  });
});
