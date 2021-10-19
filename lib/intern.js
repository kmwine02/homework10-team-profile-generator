const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        const role = "Intern";
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.school = school;
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return "Intern";
    };
};

module.exports = Intern;