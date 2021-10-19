const { expect } = require("@jest/globals");
const Intern = require("../lib/intern");

test("should return the school when the getSchool method is called", () => {
  const name = "John Doe";
  const id = 1234;
  const email = "test@email.com";
  const school = "UNC";
  const intern = new Intern(name, id, email, school);
  expect(intern.getSchool()).toEqual(school);
});

test("should return Intern when the getRole method is called", () => {
    const name = "John Doe";
    const id = 1234;
    const email = "test@email.com";
    const school = "UNC";
    const role = "Intern";
    const intern = new Intern(name, id, email, school);
    expect(intern.getRole()).toEqual(role);
  });

