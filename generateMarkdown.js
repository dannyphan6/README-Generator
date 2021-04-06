// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    license = license.split(" ").join("%20");
    return `![GitHub License](https://img.shields.io/badge/License-${license}-blue.svg)`
  };
  return "";
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License](#license)`
  };
  return "";
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This project is licensed through ${license}`
  };
  return "";
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.projectTitle}
  ## Table of Contents 
  * [Project Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * ${renderLicenseLink(data.license)}
  * [Questions](#questions)

  ## Project Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## Contributors
  ${data.contributors}
  
  ## Tests
  ${data.tests}
  
  ${renderLicenseSection(data.license)}

  ## Questions
  If you have any questions, please feel free to contact the owner of this repository. Their contact info is listed below:

  ### 
  GitHub Username: ${data.githubName} \n
  GitHub Repository: https://github.com/${data.githubName} \n
  Email Address: ${data.emailAddress}
`;
}

module.exports = generateMarkdown;
