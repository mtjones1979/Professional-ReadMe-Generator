// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   const apache = "Licensed under the [Apache License](https://spdx.org/licenses/Apache-2.0.html).";
//   const gnu    = "Licensed under the [GNU GPLv3 License](https://spdx.org/licenses/GPL-3.0-or-later.html).";
//   const mit    = "Licensed under the [MIT License](https://spdx.org/licenses/MIT.html).";
//   const isc    = "Licensed under the [ISC License](https://spdx.org/licenses/ISC.html).";
// }

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
  * [GitHub Repository Link](#Repository)
  * [Contact](#Contact) 
  
  ## Description 
    ${data.description}
  
  ## Installation
    ${data.install}
  
  ## Usage
    ${data.usage}
  
  ## Test
  [Screenshot]${data.test}
  
  ## Contributors
    ${data.credit}
  * Allow contributors in the future: *
    ${data.contributors}
  
  ## Licence
   ${data.licence}
    
  ## Repository
  * GitHub Username: ${data.github}
  * [Project Repo Link](${data.repolink})
  
  
  ## Contact
    If you have any further questions, please contact me at: ${data.email}.
    `;
    }
    
  module.exports = generateMarkdown;
