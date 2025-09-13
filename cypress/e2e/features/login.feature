Feature: Login functionality
  As a registered user
  I want to login into Demoblaze
  So that I can access my personal account

  Scenario: Login exitoso con credenciales válidas
    Given I am on the Demoblaze homepage
    When I open the login modal
    And I enter username "admin" and password "admin"
    And I click on login button
    Then I should see my username displayed in the navbar

  Scenario: Login fallido con credenciales inválidas
    Given I am on the Demoblaze homepage
    When I open the login modal
    And I enter username "wrongUser" and password "wrongPass"
    And I click on login button
    Then I should see an error message "User does not exist."
