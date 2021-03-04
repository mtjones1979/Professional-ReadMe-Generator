// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {}
  



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  switch (data.license) {
    case 'Apache':
      license = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
      default:
        break;
        
  }
  // console.log(data.license);
  return `# ${data.title}
  
  ## Table of contents
  
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Test](#Test)
  * [Contributors](#Contributors)
  * [Licence](#Licence)
  * [GitHub Repository Link](#Repository)
  * [Contact](#Contact) 
  
  ## Description 
  ${data.description}
  
  ## Installation
  ${data.install}
  
  ## Video Using Application
  [Link](${data.usage})
  
  ## Screenshot of Tests
  ![alt text](${data.test})
  
  ## Contributors
  ${data.credit}
  
  *Allow contributors in the future:* 
  ${data.contributors}
  
  ## License
  ${data.license}
    
  ## Repository
  * GitHub Username: ${data.github}
  * [Project Repo Link](${data.repolink})
  
  
  ## Contact
  If you have any further questions, please contact me at: ${data.email}.
    `;
  }

  // module.exports = renderLicenseSection;
  module.exports = generateMarkdown;
