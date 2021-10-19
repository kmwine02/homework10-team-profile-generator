const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        const role = "Engineer";
        super(name, id, email, role);
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
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