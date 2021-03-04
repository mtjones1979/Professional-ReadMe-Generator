// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('utils');
const renderLicenseSection = require('./utils/generateMarkdown.js');
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
        message: 'Please provide a short description explaining the what, why, and how of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What did you need to install for your application to work?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Please link the video of how you use your application: ',
        name: 'usage',
    },
    {
        type:'input',
        message: 'Please attach the screenshots of your test: ',
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
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please attach your repository link:',
        name: 'repolink',
    },
    {
        type: 'input',
        message: 'What is your email for further questions?',
        name: 'email',
    },
   
    
];
// TODO: Create a function to write README file
// const fileName = util.promisify(fs.writeFile);
function writeToFile (fileName, data,) {
     fs.writeFile(fileName, data, function(err){
         if(err) {
             console.log(err);
         }
            console.log("Data Entered!");
     });
}

   // TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt (questions)
    .then((data) => writeToFile('generatedREADME.md', generateMarkdown(data), renderLicenseSection(data)))
    // .then(() => console.log('Successfully wrote to README.md!'))
    // .catch((err) => console.error(err));
};

// Function call to initialize app
init();
