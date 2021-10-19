const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const generateHTML = require("./src/generateHTML");
const fs = require("fs");

const employees = [];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the manager's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the manager's employee ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the manager's email address:",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter the manager's office number:",
  }
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the engineer's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the engineer's employee ID:",
  },
  {
    type: "input",
    name: "email",
    messsage: "Enter the engineer's email:",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Enter the engineer's GitHub username:",
  }
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the intern's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the intern's employee ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the intern's email:",
  },
  {
    type: "input",
    name: "school",
    message: "Enter the intern's school:",
  }
];

const addTeamMemberQuestion = [
  {
    type: "list",
    name: "teamMemberRole",
    message:
      "Would you like to add an engineer, an intern, or is your team complete?",
    choices: ["Engineer", "Intern", "No, my team is complete"],
  },
];

async function init() {
  let managerDetails = await inquirer.prompt(managerQuestions);
  const newManager = new Manager(
    managerDetails.name,
    managerDetails.id,
    managerDetails.email,
    managerDetails.officeNumber
  );
  employees.push(newManager);
  const addTeamMember = await inquirer.prompt(addTeamMemberQuestion);
  nextTeamMember(addTeamMember.teamMemberRole);
}

const nextTeamMember = async role => {
  if (role === "Engineer") {
    console.log("Please enter the engineer's information:");
    const engineerDetails = await inquirer.prompt(engineerQuestions);
    const newEngineer = new Engineer(
      engineerDetails.name,
      engineerDetails.id,
      engineerDetails.email,
      engineerDetails.githubUsername
    );
    const addTeamMember = await inquirer.prompt(addTeamMemberQuestion);
    employees.push(newEngineer);
    nextTeamMember(addTeamMember.teamMemberRole);
  } else if (role === "Intern") {
    console.log("Please enter the intern's information:");
    const internDetails = await inquirer.prompt(internQuestions);
    const newIntern = new Intern(
      internDetails.name,
      internDetails.id,
      internDetails.email,
      internDetails.school
    );
    const addTeamMember = await inquirer.prompt(addTeamMemberQuestion);
    employees.push(newIntern);
    nextTeamMember(addTeamMember.teamMemberRole);
  } else {
    console.log("Your team dashboard is being created.");
    console.log(employees);
    const data = generateHTML(employees);
    writeToFile(data);
  }
}

function writeToFile(data) {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("Dashboard has been generated.");
    }
  });
}

init();
