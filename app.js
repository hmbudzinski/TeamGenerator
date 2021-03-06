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
      name: "id",
    },
    {
      type: "input",
      message: "What is your Office Number?",
      name: "officenumber",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
  ]).then(function(response) {
      console.log("Name: ", response.name); 
      console.log("ID: ", response.id); 
      console.log("Office Number: ", response.officenumber); 
      console.log("Email: ", response.email); 

      let manager = new Manager(response.name, response.id, response.email, response.officenumber);

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
    if (response.team === "Engineer")
    createEngineer();
    if (response.team === "Intern")
    createIntern();
    if (response.team === "Exit")
    exit();
    })
};

function createEngineer(){
    inquirer.prompt([
        {
        type: "input",
        message: "What is your Engieers name?",
        name: "name",
        },
        {
        type: "input",
        message: "What is your Engineers ID?",
        name: "id",
        },
        {
        type: "input",
        message: "What is your Engineers email?",
        name: "email",
        },
        {
          type: "input",
          message: "What is your Engineers Github?",
          name: "github",
        },
      ]).then(function(response) {
          console.log("Github: ", response.github); 
    
          let engineer = new Engineer(response.name, response.id, response.email, response.github);
    
          teamMembers.push(engineer);
          console.log(teamMembers);
    
          createTeam();
      });
};

function createIntern(){
    inquirer.prompt([
        {
        type: "input",
        message: "What is your Interns name?",
        name: "name",
        },
        {
        type: "input",
        message: "What is your Interns ID?",
        name: "id",
        },
        {
        type: "input",
        message: "What is your Interns email?",
        name: "email",
        },
        {
        type: "input",
        message: "What school does your intern go to?",
        name: "school",
        },
    ]).then(function(response) {
        console.log("School: ", response.school); 

        let intern = new Intern(response.name, response.id, response.email, response.school);

        teamMembers.push(intern);
        console.log(teamMembers);

        createTeam();
    });
};

function exit(){
    console.log(teamMembers);
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
};

startApp();