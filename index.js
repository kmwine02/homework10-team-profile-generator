const inquirer = require("inquirer");

const managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "Enter the manager\'s name:"
    },
    {
        type: "input",
        name: "managerEmployeeID",
        message: "Enter the manager\'s employee ID:"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Enter the manager\'s email address:"
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "Enter the manager\'s office number:"
    }
]

const engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "Enter the engineer\'s name:"
    },
    {
        type: "input",
        name: "engineerEmployeeID",
        message: "Enter the engineer\'s employee ID:"
    },
    {
        type: "input",
        name: "engineerEmail",
        messsage: "Enter the engineer\'s email:"
    },
    {
        type: "input",
        name: "engineerGithubUsername",
        message: "Enter the engineer\'s GitHub username:"
    }
]

const internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "Enter the intern\'s name:"
    },
    {
        type: "input",
        name: "internEmployeeID",
        message: "Enter the intern\'s employee ID:"
    },
    {
        type: "input",
        name: "internEmail",
        message: "Enter the intern\'s email:"
    },
    {
        type: "input",
        name: "internSchool",
        message: "Enter the intern\'s school:"
    }
]

const addTeamMemberQuestion = [
    {
        type: "list",
        name: "addTeamMember",
        message: "Would you like to add an engineer, an intern, or is your team complete?",
        choices: ["Add an engineer", "Add an intern", "No, my team is complete"]
    }
]

function init() {
    inquirer.prompt(managerQuestions)
}

init();