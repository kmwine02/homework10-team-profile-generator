const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        const role = "Manager";
        super(name, id, email, role);
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    };
};

module.exports = Manager;