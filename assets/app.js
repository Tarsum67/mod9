// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquier');
// const genREADME = require('./genREADME.md')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
       message: "What is your GitHub username?",
        name: 'username'
    },


    {
        type:'email',
        message:'What is your email address?',
        name: 'Email',
    },


    {
        type:'text',
        message:'What is your project name?',
        name:'Project name',


    },
    {
        type:'text',
        message:'Please write a short description of your project',
        name:'bio',


    },

    ];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    
// }
inquirer
.prompt([
    {
        type: "input",
       message: "What is your GitHub username?",
        name: 'username'
    },


    {
        type:'email',
        message:'What is your email address?',
        name: 'Email',
    },


    {
        type:'text',
        message:'What is your project name?',
        name:'Project name',


    },
    {
        type:'text',
        message:'Please write a short description of your project',
        name:'bio',


    },

    ])
    .then((response) =>
    fs.writeFile('README.md', genREADME(response), (err) => 
    err ? console.error(err) : console.log('success!'))
  );
  function genREADME(response){
    return ''
  }







  

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
