import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";
import CartPage from "../../pages/CartPage";


When("I add the product {string} to the cart", (productName) => {
  cy.contains(".card-title a", productName).click();
  ProductPage.addToCart();
  cy.go("back");
});

When("I go to the cart", () => {
  CartPage.visit();
});

When("I place the order with name {string} and credit card {string}", (name, card) => {
  CartPage.placeOrder(name, card);
});

Then("I should see a confirmation message containing {string}", (expectedMessage) => {
  CartPage.verifyConfirmationMessage(expectedMessage);
});
