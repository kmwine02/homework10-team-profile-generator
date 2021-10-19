const { expect } = require("@jest/globals");
const Engineer = require("../lib/engineer");

test("should return the github username when the getGithub method is called", () => {
  const name = "John Doe";
  const id = 1234;
  const email = "test@email.com";
  const githubUsername = "github";
  const engineer = new Engineer(name, id, email, githubUsername);
  expect(engineer.getGithub()).toEqual(githubUsername);
});

test("should return engineer when the getRole method is called", () => {
    const name = "John Doe";
    const id = 1234;
    const email = "test@email.com";
    const githubUsername = "github";
    const role = "Engineer";
    const engineer = new Engineer(name, id, email, githubUsername);
    expect(engineer.getRole()).toEqual(role);
});
