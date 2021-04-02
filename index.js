// TODO: Include packages needed for this application
const inquirer = require("inquirer");
console.log(inquirer)

const fs = require("fs");


// TODO: Create an array of questions for user input
const questions = ([
    {
        type: "input",
        name: "Project Title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "Please describe your project"
    }
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
