Feature: Cart functionality
  As a customer
  I want to validate cart behavior
  So that I can be sure it works properly

  Scenario: Checkout without products
    Given I am on the Demoblaze homepage
    When I go to the cart
    And I try to place an order without products
    Then I should see an alert message "Please add some products before checking out."

  Scenario: Update product quantity and validate total price
    Given I am on the Demoblaze homepage
    When I add the product "Samsung galaxy s6" to the cart
    And I go to the cart
    And I change the quantity of the product to "2"
    Then the total price should be updated correctly
