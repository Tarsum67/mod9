// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquier');
const genReadMe = require('./utills/index');
const { log } = require('console');
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
        name:'description',


    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        choices: ['Apache 2.0', 'MIT', 'Boost 1.0', 'ISC', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'what command should be run to install dependencies?',
        default: 'npm i',
        name: 'cmddependencies',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        default: 'npm test',
        name: 'cmdtests',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'userepo',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribute',
    },


    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,(err) =>{
        if(err){
            console.error(err);
        }else{
            console.log('README.md Generated!');
        }

    });
    
}
// TODO: Create a function to initialize app
function init(){


}
// Function call to initialize app
init();
