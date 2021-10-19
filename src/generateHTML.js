const fs = require("fs");

const generateTeam = (team) => {
  return team.map((employee) => {
    if (employee.role === "Manager") {
      return `            
      <div class="col">
      <div class="card">
        <div class="card-header">
          <h3>${employee.name}</h3>
          <h4>Manager</h4>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: ${employee.email}</li>
            <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
          </ul>
        </div>
      </div>
    </div>`;
    } else if (employee.role === "Engineer") {
      return `
      <div class="col">
                <div class="card">
                  <div class="card-header">
                    <h3>${employee.name}</h3>
                    <h4>Engineer</h4>
                  </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID: ${employee.id}</li>
                      <li class="list-group-item">Email: ${employee.email}</li>
                      <li class="list-group-item">
                      <a href="https://github.com/${employee.githubUsername}">GitHub: ${employee.githubUsername}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>`;
    } else if (employee.role === "Intern") {
      return `
      <div class="col">
      <div class="card">
        <div class="card-header">
          <h3>${employee.name}</h3>
          <h4>Intern</h4>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: ${employee.email}</li>
            <li class="list-group-item">School: ${employee.school}</li>
          </ul>
        </div>
      </div>
    </div>
    `;
    }
  });
};

const generateHTML = (team) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="./style.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <title>Team Profile</title>
      </head>
      <body>
      <main>
      <div class="container-fluid my-auto">
        <h1 class="display-2 text-center text-dark">My Team</h1>
      </div>
      <div class="container">
        <div class="d-flex flex-row flex-wrap justify-content-center">
          <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
            ${generateTeam(team)}
          </div>
        </div>
      </div>
      </main>
    </body>
  </html>`;
};

module.exports = generateHTML;
