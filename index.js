// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    'Provide a short description explaining the what, why, and how of your project.', // description
    'If applicable, what are the steps required to install your project?', // installation guide
    'Provide instructions and examples for use.', // Usage
    'Choose the open source license that applies to this project.', // License
    'List your collaborators, if any, with links to their GitHub profiles.', // Contributing
    'Provide tests and examples of how to run them if available.', // Tests
    'Enter a GitHub username for questions and comments.', // Github
    'Enter your email for questions and comments.'
];

// TODO: Create a function to write README file
function writeToFile('./readme-gens/README.md', data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
