// TODO: Include packages needed for this application
const inquirer = require("inquirer");
console.log(inquirer)
const generateMarkdown = require("./generateMarkdown")

const fs = require("fs");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "githubName",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "emailAddress",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "description",
        message: "Please briefly describe your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What command should I run to install dependencies?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about this repository?"
    },
    {
        type: "input",
        name: "license",
        message: "What licenses are used?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who else is going to be contributing to this repository?"
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be used to run a test?"
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Creating README file blueprint
    return fs.writeFile(fileName, data, err => {
        if (err) throw err;
    })
}

// TODO: Create a function to initialize app
function init() {
    // Pass in questions to inquirer.prompt and then grabbing the user answers
    inquirer.prompt(questions).then( response => {
        console.log(response)
        // Takes blueprint of writeToFile and passes in values of 'readmeGenerator' and generateMarkdown(response)
        writeToFile("readmeGenerator.md", generateMarkdown(response));
    })
}

// Function call to initialize app
init();
