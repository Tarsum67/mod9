const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    // Your questions here
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