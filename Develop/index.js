//Included packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

//Created an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is the description of your project?'
    },
    {
        type: 'input',
        name: 'Installation Instructions',
        message: 'How to install your project?'
    },
    {
        type: 'input',
        name: 'Usage Instructions',
        message: 'How will the user utilize your project?'
    },
    {
        type: 'input',
        name: 'Contribution Guidelines',
        message: 'What does the user need to know about contributing to the repository?'
    },
    {
        type: 'input',
        name: 'Test Instructions',
        message: 'How does the user test the repository?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license does your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'Github Username',
        message: 'Input your Github Username:'
    },
    {
        type: 'input',
        name: 'User Email',
        message: 'Input your email:'
    }
];

//Created a function to write README file
function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(fileName, data);
        console.log('README.md successfully created!');
    } catch (err) {
        console.error(err);
    }
}

//Creates a function to initialize app
async function init() {
    try {
        const responses = await inquirer.prompt(questions);
        writeToFile('README.md', generateMarkdown(responses));
    } catch (err) {
        console.error('Error:', err);
    }
}

// Function call to initialize app
init();