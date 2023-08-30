const container = document.querySelector('.container'),
question = document.querySelector('.question'),
choices = document.querySelector('.choices'),
nextBtn = document.querySelector('.next-btn');

// make array of objects and store quiz qusetions in it.

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
];

