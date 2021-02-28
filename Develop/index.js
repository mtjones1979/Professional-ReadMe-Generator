// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

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
const writeFileAsync = util.promisify(fs.writeFile);

const writeToFile = (fileName, data) => {
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${fileName.data.name}</h1>
    <p class="lead">I am from ${fileName.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((fileName, data) => writeFileAsync('index.html', writeToFile(fileName, data)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
