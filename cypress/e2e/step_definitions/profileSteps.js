import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ContactPage from "../../pages/ContactPage";

Given("I open the Contact modal", () => {
  ContactPage.open();
});

When("I fill in the contact form with new user information", () => {
  ContactPage.fillContactForm(
    "newuser@example.com",
    "New User",
    "Updating profile information"
  );
});

When("I submit the contact form", () => {
  ContactPage.submitForm();
});

Then("I should see a confirmation message indicating the profile update", () => {
  ContactPage.verifyConfirmation();
});
