document.addEventListener("DOMContentLoaded", () => {
const container = document.querySelector('.container'),
question = document.querySelector('.question'),
choices = document.querySelector('.choices'),
nextBtn = document.querySelector('.next-btn');

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

//Arrow Function to show questions
const showQuestions = () =>{
    console.log("Question");
}

// Adding eventlistener to next button
nextBtn.addEventListener('click',() => {
    //Adding a showQuestions function
    showQuestions();
    return false; 
});




});