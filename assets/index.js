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
      message: "What is the name of your project",
      name: "name",
    },
    {
      type: "input",
      message: "Give an overview of the project?",
      name: "description",
    },
    // {
    //   type: "input",
    //   message: "What is your bio",
    //   name: "bio",
    // },
    {
      type: "input",
      message: "What is your web deployment URl",
      name: "weblink",
    },
    {
      type: "input",
      message: "What is your Github link",
      name: "github",
    },
  ])
  .then((response) => {
    console.log(response);
    const { name, description, weblink, github } = response;
    fs.writeFile(
      "README.md",
      `# ${name}
## Description
${description}
## Installation
The repo is uploaded to github at the link ${github} and is accessible at the url link ${weblink}.
## Usage
The following images may help:`,
      (err) => (err ? console.error(err) : console.log("HTML logged"))
    );
  });
