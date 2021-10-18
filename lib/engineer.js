const Employee = require("./employee")

class Engineer extends Employee {
    constructor(githubUsername) {
        this.githubUsername = githubUsername;
    };

    getGithub(githubUsername) {
        return `https://www.github.com/${githubUsername}`
    };

    getRole() {
        return "Engineer"
    };
};

module.exports = Engineer;