class CartPage {
  visit() {
    cy.get("#cartur").click();
  }

  placeOrder(name, card) {
    cy.contains("Place Order").click();
    cy.get("#name").type(name);
    cy.get("#card").type(card);
    cy.contains("Purchase").click();
  }

  verifyConfirmationMessage(expectedText) {
    cy.get(".sweet-alert").should("contain.text", expectedText);
    cy.get(".confirm").click();
  }

  tryPlaceOrderWithoutProducts() {
    cy.contains("Place Order").click();
  }

  verifyEmptyCartAlert(expectedText) {
    let alertShown = false;
    cy.window().then(() => {
      cy.on("window:alert", (txt) => {
        alertShown = true;
        expect(txt).to.equal(expectedText);
      });
    });
    cy.wrap(null).then(() => {
      if (!alertShown) {
        throw new Error("Expected alert was not shown");
      }
    });
  }

  changeQuantity(qty) {
    cy.on("fail", (err) => {
      throw new Error("No se encontró la columna 'quantity' en la tabla del carrito.");
    });
    cy.get("table tbody tr:first-child td input")
    .clear()
    .type(String(qty));
  }

  verifyTotalPrice() {
    cy.get("@expectedTotal").then((expectedTotal) => {
      cy.get("#totalp")
        .invoke("text")
        .then((text) => {
          const actualTotal = parseInt(text);
          expect(actualTotal).to.eq(expectedTotal);
        });
    });
  }
}

module.exports = new CartPage();
