class CategoriesPage {
  getCategoryLink(category) {
    return cy.contains('.list-group-item', category);
  }

  getProductCards() {
    return cy.get('.card-title');
  }

  verifyProductsBelongTo(category) {
    this.getProductCards().each(($el) => {
      cy.wrap($el).invoke('text').then((text) => {
        expect(text.length).to.be.greaterThan(0);
      });
    });
  }
}

module.exports = new CategoriesPage();
