// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
   
  ## Table of contents
  
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Test](#Test)
  * [Contributors](#Contributors)
  * [Licence](#Licence)
  * [Repository Link](#Repository)
  * [GitHub Info](#GitHub) 
  
  ## Description 
    ${data.description}
  
  ## Installation
    ${data.install}
  
  ## Usage
    ${data.usage}
  
  ## Test
    ${data.test}
  
  ## Contributors
    ${data.credit}
    Allow contributors in the future:
    ${data.contributors}
  
  ## Licence
  Licensed under the ${data.licence}
    
  ## Repository
  [Project Repo](${data.repolink})
  
  ## GitHub Contact
    - If you have any further questions, contact: ${data.username}.
    `;
    }
    
  module.exports = generateMarkdown;
