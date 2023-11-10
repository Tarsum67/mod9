// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU GPLv3') {
    return '[![License: GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/GPL-3.0)';
  } else {

    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU GPLv3') {
    return '[![License: GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/GPL-3.0)';
  } else {
    // Return an empty string for unknown licenses
    return '';
  }
}




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `
## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
    `;
  } else if (license === 'Apache 2.0') {
    return `
## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).
    `;
  } else if (license === 'GNU GPLv3') {
    return `
## License

This project is licensed under the [GNU General Public License v3.0](https://opensource.org/licenses/GPL-3.0).
    `;
  } else {
    // Return an empty string for unknown licenses
    return '';
  }

    
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions or need further assistance, feel free to reach out via email at ${data.email}.
  
  ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
