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
        message: "Please enter your project title."
    },
    {
        type: "input",
        name: "githubName",
        message: "Please enter your GitHub username."
    },
    {
        type: "input",
        name: "emailAddress",
        message: "Please enter your email address."
    },
    {
        type: "input",
        name: "description",
        message: "Please briefly describe your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please describe step by step on the installation process."
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter project instructions, along with examples."
    },
    {
        type: "rawlist",
        name: "license",
        message: "Please select a license for your project.",
        choices: ["Apache 2.0 License", "BSD 3--Clause License", "GNU GPL v3", "MIT License", "None"]
    },
    {
        type: "input",
        name: "contributors",
        message: "Please provide details on how developers can contribute to your project."
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide any tests that were used for this project and how to run them."
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
    inquirer.prompt(questions).then(response => {
        console.log(response)
        // Takes blueprint of writeToFile and passes in values of 'readmeGenerator' and generateMarkdown(response)
        writeToFile("readmeGenerator.md", generateMarkdown(response));
    })
}

// Function call to initialize app
init();
