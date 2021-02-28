// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            message: 'What is the title of your Project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please provide a short description explaining the what, why, and how of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What steps were required to install your project?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Please provide instructions and examples for use.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please list your collaborators with links to their GitHub profiles.',
            name: 'credit',
        },
        {
            type: 'list',
            message: 'What license was used?',
            name: 'license',
            choices: ['MIT', 'ISC', 'Pearl', 'GNU', 'Apache', 'Creative Commons'],
        },
        {
            type:'input',
            message: 'Please provide test examples on how to run your project.',
            name: 'test',
        },
    ]);
};
// TODO: Create a function to write README file
// const writeFileAsync = util.promisify(fs.writeFile);

// const writeToFile = (fileName, data) 
   

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((data) => ('README.md', generate(data)))
    .then(() => console.log('Successfully wrote to README.md!'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
