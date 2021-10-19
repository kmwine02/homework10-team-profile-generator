const { expect } = require("@jest/globals");
const Employee = require("../lib/employee");

test("should return the name when the getName method is called", () => {
  const name = "John Doe";
  const id = 1234;
  const email = "test@email.com";
  const employee = new Employee(name, id, email);
  expect(employee.getName()).toEqual(name);
});

test("should return the employee id when getID method is called", () => {
  const name = "John Doe";
  const id = 1234;
  const email = "test@email.com";
  const employee = new Employee(name, id, email);
  expect(employee.getId()).toEqual(id);
});
