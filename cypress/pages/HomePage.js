class HomePage {
  visit() {
    cy.visit('https://www.demoblaze.com/');
  }

  get loginButton() {
    return cy.get('#login2'); // botón para abrir modal de login
  }

  openLoginModal() {
    this.loginButton.click();
  }

  get loggedUser() {
    return cy.get('#nameofuser'); // navbar con nombre de usuario logueado
  }
}

module.exports = new HomePage();
