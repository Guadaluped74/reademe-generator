// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown')

const licenseChoice = [
          "apache 2.0",
          "mozilla public license",
          "microsoft public license",
          "none"
        ]

// TODO: Create an array of questions for user input


const questions = ([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
      },
      {
        type: 'input',
        name: 'user',
        message: 'Enter your GitHub Username.',
      },
      {
        type: 'input',
        name: 'gmail',
        message: 'Enter your gmail.',
      },
      {    
        type: 'input',
        name: 'tableOfContents',
        message: 'Table of contents (optional)?',
       
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe the project?',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'How do you install the project?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Any license?',
        choices: licenseChoice
      },
      {
        type: 'input',
        name: 'features',
        message: 'What are some of the features of the project?',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'How can other people contribute?',
      },
      {
        type: 'input',
        name: 'application',
        message: 'Any tests done on the application.',
      }
    ])



 // TODO: Create a function to write README file  
 function writeToFile(fileName, data) {
    
    fs.writeFile(fileName,data,function(err) {
      console.log(data)  
      if(err) {
      return console.log(err);
    }
    console.log(fileName +  " created")
})
}


//TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(data) {
    writeToFile("README.md", generateMarkdown(data));
    console.log(data)
  })
};

// Function call to initialize app
init();
