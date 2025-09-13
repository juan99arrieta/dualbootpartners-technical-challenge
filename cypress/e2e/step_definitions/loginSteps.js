import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";

Given("I am on the Demoblaze homepage", () => {
  HomePage.visit();
});

When("I open the login modal", () => {
  HomePage.openLoginModal();
});

When(
  "I enter username {string} and password {string}",
  (username, password) => {
    LoginPage.typeCredentials(username, password);
  }
);

When("I click on login button", () => {
  LoginPage.submitLogin();
});

Then("I should see my username displayed in the navbar", () => {
  HomePage.loggedUser.should("be.visible").and("contain.text", "admin");
});

Then("I should see an error message {string}", (errorMessage) => {
  cy.on("window:alert", (txt) => {
    expect(txt).to.equal(errorMessage);
  });
});
