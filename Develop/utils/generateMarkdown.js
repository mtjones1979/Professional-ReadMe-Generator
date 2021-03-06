// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

// console.log(data.license);
  return `
  # ${data.title}

  #### ![badge](https://img.shields.io/badge/License-${data.license}-blue.svg)
  
  ## Table of contents
  
  * [Description](#Description)
  * [Usage](#Usage)
  * [Installations Used](#Installation)
  * [Test](#Test)
  * [Contributors](#Contributors)
  * [License](#License)
  * [Contact](#Contact) 
  
  ## Description 
  ${data.description}

  ## Usage
  
  * Application Video:
  [Video Link](${data.usage})
  
  * Screenshots:
  ![alt text](${data.screenshot})

  ## Installation
  ${data.install}

  ## Test
  ${data.test}
  
  ## Contributors
  ${data.credit}
  
  *Allow contributors in the future:* 
  ${data.contributors}
  
  ## License
  This project is licensed under the ${data.license} License
    
  ## Contact
  If you have any further questions, please contact me at: ${data.email}.
    
  *GitHub Repository Information:*
  * GitHub Username: ${data.github}
  * [Repository Link](${data.repolink})
  `;
  }

  module.exports = generateMarkdown;
