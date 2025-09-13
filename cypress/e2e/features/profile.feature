Feature: Modificación de Datos Personales

  Scenario: Simular la actualización de los datos personales del usuario
    Given I open the Contact modal
    When I fill in the contact form with new user information
    And I submit the contact form
    Then I should see a confirmation message indicating the profile update
