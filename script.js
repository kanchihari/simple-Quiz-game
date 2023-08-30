document.addEventListener("DOMContentLoaded", () => {
const container = document.querySelector('.container'),
questionBox = document.querySelector('.question'),
choicesBox = document.querySelector('.choices'),
nextBtn = document.querySelector('.next-btn'),
scoreCard = document.querySelector('.scoreCard');

// make array of objects and store quiz qusetion,choices of question and answer in it.

const quiz=[

    {
        question :"Q. What does HTML stand for?",
        // store choices in array
        choices: [" Hyper Transfer Markup Language",
            " Hyper Text Makeup Language",
            " Hyper Text Markup Language",
            " High Text Markup Language"],
        Answer: " Hyper Text Markup Language",
    },
    {
        question :"Q. Which HTML tag is used to create a paragraph?",
        // store choices in array
        choices: [" Hyper Transfer Markup Language",
            " <p>",
            " <par>",
            " <para> ",
            "<paragraph>"],
        Answer: " <p>",
    },
    {
        question :"Q. What is the purpose of the HTML <meta> tag?",
        // store choices in array
        choices: [" To specify character encoding and viewport settings",
            " To create a hyperlink ",
            " To create a hyperlink",
            " To format text as bold"],
        Answer: " To specify character encoding and viewport settings",
    },
    {
        question :"Q. What does the HTML <a> tag attribute 'target='_blank'' do?",
        // store choices in array
        choices: [" Makes the link open in a new browser window or tab",
            " Adds a background color to the link",
            " Adds a border around the link",
            " Makes the link italic"],
        Answer: " Makes the link open in a new browser window or tab",
    },
    {
        question :"Q. Which keyword is used to declare a variable in JavaScript?",
        // store choices in array
        choices: [" var",
            " let",
            " const",
            " all of the above"],
        Answer: "all of the above ",
    },
    {
        question :"Q. What does the 'DOM' stand for in the context of JavaScript?",
        // store choices in array
        choices: [" Document Object Model",
            " Dynamic Object Management",
            " Data Object Model",
            " Document Oriented Module"],
        Answer: " Document Object Model",
    },
    {
        question :"Q. What is the result of the expression: 10 + '5' in JavaScript?",
        // store choices in array
        choices: [" 15",
            " '105'",
            " 105",
            " '10+5'"],
        Answer: " 105",
    },
    {
        question :"Q. What is the correct syntax for an 'if' statement in JavaScript?",
        // store choices in array
        choices: [" if (x > 5) then { }",
            " if x > 5 { }",
            " if (x > 5) { }",
            " if x > 5 then { }"],
        Answer: " if (x > 5) { }",
    },
    {
        question :"Q. What does the 'box-sizing' property in CSS define?",
        // store choices in array
        choices: [" The size of the border box",
            " The size of the margin box",
            " The size of the content box",
            " The size of the padding box"],
        Answer: " The size of the content box",
    },
    {
        question :"Q. How can you include comments within a CSS file?",
        // store choices in array
        choices: [" // This is a comment",
            " /* This is a comment */",
            " # This is a comment",
            " <!-- This is a comment -->"],
        Answer: " / This is a comment /",
    },
];
//Add a variable to show the currentQuestion index.
let currentQuestionIndex = 0; 
let score= 0;

//Arrow Function to show questions
const showQuestions = () =>{

    const questionDetails = quiz[currentQuestionIndex];

    // Set the text content of the 'questionBox' element to the current question.
    questionBox.textContent = questionDetails.question;

    // Clear any previous choices from the 'choicesBox' element
        choicesBox.textContent ="";

    // Loop through each choice in the current question's choices array
    for(let i=0;i<questionDetails.choices.length;i++){
        const currentchoice=questionDetails.choices[i];

    // Set the text content of the 'questionBox' element to the current question.
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent=currentchoice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);

    // Add a click event listener to each choice element ('choiceDiv')
        choiceDiv.addEventListener('click',() =>{
            if(choiceDiv.classList.contains('selected')){
                 // If it's selected, remove the 'selected' class to deselect the choice
                choiceDiv.classList.remove('selected');
            }
            else{
                choiceDiv.classList.add('selected');
                 // If it's not selected, add the 'selected' class to mark it as selected
            }
        })
    }
}

// Function to check answers
const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if(selectedChoice.textContent === quiz[currentQuestionIndex].Answer){
        alert("correct Answer");
        score++;
    }
    else{
        alert("worng answer")
    }
    currentQuestionIndex ++;
    if(currentQuestionIndex < quiz.length){
        showQuestions();
     }
     else{
        showScore();
     }
}

//function to showScore
const showScore= () => {
    // remove questionBox and choicesbox before displaying the scorecard.
    questionBox.textContent = "";
    choicesBox.textContent = "";
    scoreCard.textContent = `You Scored ${score} out of ${quiz.length}`
    nextBtn.textContent = "Play Again";
}

showQuestions();

nextBtn.addEventListener('click',() => {
    const selectedChoice =document.querySelector('.choice.selected');
    if(!selectedChoice){
        alert("select your answer")
    }else{
        checkAnswer();
    }

    

});




});