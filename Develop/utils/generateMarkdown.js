//Created a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Github license](https://img.shields.io/badge/${license}-blue.svg)`;
  }
  return '';
}

//Created a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

//Created a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license !== 'None') {
    return `Licensed under the ${license} license.`;
  }
  return '';
}

//Created a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
${renderLicenseBadge(data.license)}

## Description
${data.Description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data['Installation Instructions']}

## Usage
${data['Usage Instructions']}

## License
${renderLicenseSection(data.license)}

## Contributing
${data['Contribution Guidelines']}

## Tests
${data['Test Instructions']}

## Questions
If you have any questions about the repo, or have any issues you can contact me directly at ${data['User Email']}. 
You can find more of my work at [${data['Github Username']}](https://github.com/${data['Github Username']}/).
`;
}

export default generateMarkdown;