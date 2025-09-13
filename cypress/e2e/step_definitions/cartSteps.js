import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";
import CartPage from "../../pages/CartPage";

When("I try to place an order without products", () => {
  CartPage.tryPlaceOrderWithoutProducts();
});

Then("I should see an alert message {string}", (message) => {
  CartPage.verifyEmptyCartAlert(message);
});

Then("the total price should be updated correctly", () => {
  CartPage.verifyTotalPrice();
});

When('I change the quantity of the product to {string}', (qtyStr) => {
  const qty = parseInt(qtyStr, 10);
  CartPage.changeQuantity(qty);
})
