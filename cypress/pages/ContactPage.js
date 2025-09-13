class ContactPage {
  open() {
    cy.visit("https://www.demoblaze.com");
    cy.get('a[data-target="#exampleModal"]').click({ force: true });
  }

  fillContactForm(email, name, message) {
    cy.get("#recipient-email").type(email);
    cy.get("#recipient-name").type(name);
    cy.get("#message-text").type(message);
  }

  submitForm() {
    cy.get("button[onclick='send()']").click();
  }

  verifyConfirmation() {
    cy.on("window:alert", (txt) => {
      expect(txt).to.equal("Thanks for the message!!");
    });
  }
}

export default new ContactPage();
