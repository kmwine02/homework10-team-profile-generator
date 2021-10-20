const fs = require("fs");

const generateTeam = (team) => {
  return team.map((employee) => {
    if (employee.getRole() === "Manager") {
      return `            
      <div class="col cols-1 cols-md-3 justify-content-center">
      <div class="card">
        <div class="card-header">
          <h3>${employee.name}</h3>
          <h4>Manager</h4>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
            <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
          </ul>
        </div>
      </div>
    </div>`;
    } else if (employee.getRole() === "Engineer") {
      return `
      <div class="col cols-1 cols-md-3 justify-content-center">
                <div class="card">
                  <div class="card-header">
                    <h3>${employee.name}</h3>
                    <h4>Engineer</h4>
                  </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID: ${employee.id}</li>
                      <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                      <li class="list-group-item">GitHub: <a href="https://github.com/${employee.githubUsername}" target="_blank">${employee.githubUsername}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>`;
    } else if (employee.getRole() === "Intern") {
      return `
      <div class="col cols-1 cols-md-3 justify-content-center">
      <div class="card">
        <div class="card-header">
          <h3>${employee.name}</h3>
          <h4>Intern</h4>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
            <li class="list-group-item">School: ${employee.school}</li>
          </ul>
        </div>
      </div>
    </div>
    `;
    }
  }).join("");
};

const generateHTML = (team) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" type="text/css" href="./style.css" />
        <title>Team Profile</title>
      </head>
      <body>
      <main>
      <header>
      <div class="container-fluid my-auto">
        <h1 class="display-2 text-center text-dark">My Team</h1>
      </div>
      </header>
      <div class="container">
        <div class="d-flex flex-row flex-wrap justify-content-center">
          <div class="row">
            ${generateTeam(team)}
          </div>
        </div>
      </div>
      </main>
    </body>
  </html>`;
};

module.exports = generateHTML;
