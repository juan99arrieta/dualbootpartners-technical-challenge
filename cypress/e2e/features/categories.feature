Feature: Categorías de productos
  As a customer
  I want to view products by category
  So that I can browse Phones, Laptops, and Monitors

  Scenario: Verificar que existen las categorías en el menú
    Given I am on the Demoblaze homepage
    Then I should see the categories "Phones", "Laptops", and "Monitors"

  Scenario Outline: Validar que cada categoría muestra productos correctos
    Given I am on the Demoblaze homepage
    When I select the category "<category>"
    Then I should see products related to "<category>"

    Examples:
      | category  |
      | Phones    |
      | Laptops   |
      | Monitors  |
