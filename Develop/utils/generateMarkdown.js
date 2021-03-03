// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  const apache = "Licensed under the [Apache License][![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0).";
  const gnu    = "Licensed under the [GNU GPLv3 License](https://spdx.org/licenses/GPL-3.0-or-later.html).";
  const mit    = "Licensed under the [MIT License](https://spdx.org/licenses/MIT.html).";
  const isc    = "Licensed under the [ISC License](https://spdx.org/licenses/ISC.html).";
  
  if(data.license === "Apache License 2.0"){
    data.license = apache;
} else if(data.license === "GNU GPLv3"){
    data.license = gnu;
} else if(data.license === "MIT"){
    data.license = mit;
} else if(data.license === "ISC"){
    data.license = isc;
} else {
    data.license = "This project is currently not licensed."
}
};



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
  [screenshot](${data.test})
  
  ## Contributors
    ${data.credit}
     Allow contributors in the future: 
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
  
  module.exports = renderLicenseSection;
  module.exports = generateMarkdown;
