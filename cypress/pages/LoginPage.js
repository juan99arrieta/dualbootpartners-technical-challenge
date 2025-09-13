class LoginPage {
  get usernameInput() {
    return cy.get('#loginusername');
  }

  get passwordInput() {
    return cy.get('#loginpassword');
  }

  get submitButton() {
    return cy.get('button[onclick="logIn()"]'); // botón login dentro modal
  }

  typeCredentials(username, password) {
    this.usernameInput.clear().type(username);
    this.passwordInput.clear().type(password);
  }

  submitLogin() {
    this.submitButton.click();
  }
}

module.exports = new LoginPage();
