Feature: Flujo de compra completo
  As a customer
  I want to purchase a product
  So that I can complete my order successfully

  Scenario: Compra de un producto
    Given I am on the Demoblaze homepage
    When I add the product "Samsung galaxy s6" to the cart
    And I go to the cart
    And I place the order with name "Juan Perez" and credit card "1234567890123456"
    Then I should see a confirmation message containing "Thank you for your purchase!"
