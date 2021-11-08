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
    fs.readFile("test.txt", "utf8", (err) =>
      err ? console.error(err) : console.log("HTML logged")
    );
  });
