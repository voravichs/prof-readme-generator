// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./utils/generateMarkdown.js')

// Create an array of questions for user input
const questions = [
    'Enter the name of your project.', // name
    'Provide a short description explaining the what, why, and how of your project.', // desc
    'If applicable, what are the steps required to install your project?', // install
    'Provide instructions and examples for use.', // usage
    'Choose the open source license that applies to this project.', // license
    'List your collaborators, if any, with links to their GitHub profiles.', // contrib
    'Provide tests and examples of how to run them if available.', // tests
    'Enter a GitHub username for questions and comments.', // github
    'Enter your email for questions and comments.' // email
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {    
    fs.writeFile(fileName,
        md.generateMarkdown(data),
        (err) => err
        ? console.error(err)
        : console.log('README written! You may find it in the readme-gens folder!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            { // project name
                type: 'input',
                message: questions[0],
                name: 'name',
            },
            { // desc
                type: 'input',
                message: questions[1],
                name: 'desc',
            },
            { // install
                type: 'input',
                message: questions[2],
                name: 'install',
            },
            { // usage
                type: 'input',
                message: questions[3],
                name: 'usage',
            },
            { // license
                type: 'input',
                message: questions[4],
                name: 'license',
            },
            { // contrib
                type: 'input',
                message: questions[5],
                name: 'contrib',
            },
            { // tests
                type: 'input',
                message: questions[6],
                name: 'tests',
            },
            { // github
                type: 'input',
                message: questions[7],
                name: 'github',
            },
            { // email
                type: 'input',
                message: questions[8],
                name: 'email',
            },
        ])
        .then((response) =>
            writeToFile('./readme-gens/README.md',response)
        );
}

// Function call to initialize app
init();
