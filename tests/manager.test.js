const { expect } = require("@jest/globals");
const Manager = require("../lib/manager");

test("should return the office phone number when the getOfficeNumber method is called", () => {
    const name = "John Doe";
    const id = 1234;
    const email = "test@email.com";
    const officeNumber = "999-888-7777";
    const manager = new Manager(name, id, email, officeNumber);
    expect(manager.getOfficeNumber()).toEqual(officeNumber);
});

test("should return the office phone number when the getOfficeNumber method is called", () => {
    const name = "John Doe";
    const id = 1234;
    const email = "test@email.com";
    const officeNumber = "999-888-7777";
    const role = "Manager";
    const manager = new Manager(name, id, email, officeNumber);
    expect(manager.getRole()).toEqual(role);
});