const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a project description:',
  },
  {
      type: 'input',
      name: 'license',
      message: 'Enter the project license:',
      choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
  },
  {
    type: 'input',
    name: 'cmddependencies',
    message: 'Enter the command to install dependencies:',
    default: 'npm i',
},
{
    type: 'input',
    name: 'cmdtests',
    message: 'Enter the command to run tests:',
    default: 'npm test',
},
{
    type: 'input',
    name: 'userepo',
    message: 'info abou this repository:',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'What does the user need to know about contributing to the repo?',
  },
];

// Function to write the README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md Generated!');
    }
  });
}

// Function to initialize the app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Generate the README content based on user's answers
    const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## License
This project is licensed under the ${answers.license} license.

## Installation
To install the project dependencies, run the following command:
\`\`\`
${answers.cmddependencies}
\`\`\`

## Tests
To run tests, use the following command:
\`\`\`
${answers.cmdtests}
\`\`\`

## Usage
${answers.userepo}

## Contributing
${answers.contribute}
`;

    // Write the README content to a file
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize the app
init();
