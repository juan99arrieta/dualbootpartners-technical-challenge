class ProductPage {
  addToCart() {
    cy.contains("Add to cart").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contain("Product added");
    });
  }
}

module.exports = new ProductPage();
