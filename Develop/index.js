// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your Project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a short description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please link a video of how you use your application, if applicable. ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide screenshots of your project.',
        name: 'screenshot',
    },
    {
        type: 'input',
        message: 'What installations were required?',
        name: 'install',
    },
    {
        type:'input',
        message: 'Please provide test instructions, if applicable.',
        name: 'test',
    },
    {
        type: 'list',
        message: 'What license was used?',
        name: 'license',
        choices: ['MIT', 'GNU', 'Apache', 'None'],
    },
    {
        type: 'input',
        message: 'Please list contributors to your project:',
        name: 'credit',
    },
    {   
        type: 'list',
        message: 'Would you like other developers to contribute to your project?',
        name: 'contributors',
        choices: ['Yes', 'No'] 
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please attach your repository link:',
        name: 'repolink',
    },
    {
        type: 'input',
        message: 'Enter email for further questions:',
        name: 'email',
    },
   
    
];
// TODO: Create a function to write README file
function writeToFile (fileName, data,) {
     fs.writeFile(fileName, data, function(err){
         if(err) {
             console.log(err);
         }
            console.log("Successfully wrote to a Generated README.md!");
     });
}
// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt (questions)
    .then((data) => writeToFile('generatedREADME.md', generateMarkdown(data)))
};

// Function call to initialize app
init();