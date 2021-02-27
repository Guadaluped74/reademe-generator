// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// TODO: Create an array of questions for user input
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
return inquirer.prompt = ([
    {
        type: 'input',
        name: 'ProjectTitle',
        message: 'What is the name of the project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe the project?',
      },
      {
        type: 'input',
        name: 'tableOfContents',
        message: 'Table of contents (optional)?',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'How do you install the project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Enter your LinkedIn URL.',
      },
      {
        type: 'input',
        name: 'Features',
        message: 'Enter your LinkedIn URL.',
      },
      {
        type: 'input',
        name: 'How to Contribute',
        message: 'Enter your LinkedIn URL.',
      },
      {
        type: 'input',
        name: 'Test',
        message: 'Enter your LinkedIn URL.',
      },
    ])
    .then({
      projectTitle,
      TableofContents ,
      instruction,
      credit,
      license, 
      git
    });
  };



// TODO: Create a function to write README file
function writeToFile(README, data) {
    
    fs.writeFile("./example"+fileName,data,function(err) {
        if(err) {

        return console.log(err);
    }
    console.log(filename +  "created")
})
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((answers) => writeFileAsync('README.md', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to READ.md'))
    .catch((err) => console.error(err));
};


// Function call to initialize app
init();
