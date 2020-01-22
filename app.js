const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");

let teamMembers = [];

function startApp(){
inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your ID?",
      name: "ID",
    },
    {
      type: "input",
      message: "What is your Office Number?",
      name: "officenumber",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "officenumber",
    },
  ]).then(function(response) {
      console.log("Name: ", response.name); 
      console.log("ID: ", response.ID); 
      console.log("Office Number: ", response.officenumber); 
      console.log("Email: ", response.email); 

      let manager = new Manager(response.name, response.id, response.email, response.officeNumber);

      teamMembers.push(manager);
      console.log(teamMembers);

      createTeam();
  });
};

function createTeam(){
    inquirer.prompt([
    {
        type: "list",
        message: "Who would you like to add to your team?",
        choices: ["Engineer", "Intern", "Exit"],
        name: "team",
    },
    ]).then(function(response){
        console.log("HERE:", response);
    if (response.team === "Engineer")
    createEngineer();
    if (response.team === "Intern")
    createIntern();
    if (response.team === "Exit")
    exit();
    })
}

function createEngineer(){
    inquirer.prompt([
        {
          type: "input",
          message: "What is your Engineers Github?",
          name: "github",
        },
      ]).then(function(response) {
          console.log("Github: ", response.github); 
    
          let engineer = new Engineer(response.name, response.id, response.email, response.officeNumber);
    
          teamMembers.push(engineer);
          console.log(teamMembers);
    
          createTeam();
      });

    console.log("Engineer!");
}

function createIntern(){
        inquirer.prompt([
        {
          type: "input",
          message: "What school does your itern go to?",
          name: "school",
        },
      ]).then(function(response) {
          console.log("School: ", response.school); 
    
          let intern = new Intern(response.name, response.id, response.email, response.officeNumber);
    
          teamMembers.push(intern);
          console.log(teamMembers);
    
          createTeam();
      });

    console.log("intern!");
}

function exit(){
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}

startApp();