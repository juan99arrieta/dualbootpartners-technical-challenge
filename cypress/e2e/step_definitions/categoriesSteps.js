import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";
import CategoriesPage from "../../pages/CategoriesPage";

Then(
  "I should see the categories {string}, {string}, and {string}",
  (cat1, cat2, cat3) => {
    CategoriesPage.getCategoryLink(cat1).should("be.visible");
    CategoriesPage.getCategoryLink(cat2).should("be.visible");
    CategoriesPage.getCategoryLink(cat3).should("be.visible");
  }
);

When("I select the category {string}", (category) => {
  CategoriesPage.getCategoryLink(category).click();
});

Then("I should see products related to {string}", (category) => {
  CategoriesPage.verifyProductsBelongTo(category);
});
