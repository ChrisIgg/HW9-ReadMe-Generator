const inquirer = require("inquirer");
const fs = require("fs");
//

// fs.readFile('utf8' , (err, data) => {
//   if (err) {
//     console.error(err);
//     return
//   }
//   console.log(data);
// });

//
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name",
      name: "name",
    },
    {
      type: "input",
      message: "Where are you located?",
      name: "location",
    },
    {
      type: "input",
      message: "What is your bio",
      name: "bio",
    },
    {
      type: "input",
      message: "What is your linkedin URl",
      name: "linkedin",
    },
    {
      type: "input",
      message: "What is your Github profile",
      name: "github",
    },
  ])
  .then((response) => {
    console.log(response);
    const { name, location, bio, linkedin, github } = response;
    fs.writeFile(
      "README.md",
      `# Personal Portfolio Page
## Description
This site is meant to act as a landing page for content I create. It should be accessible to others and able to demonstrate my work.
## Installation
The repo is uploaded to github at the link https://github.com/ChrisIgg/personal-page and is accessible at the url link https://chrisigg.github.io/personal-page/.
## Usage
The following images may help:`,
      (err) => (err ? console.error(err) : console.log("HTML logged"))
    );
  });
