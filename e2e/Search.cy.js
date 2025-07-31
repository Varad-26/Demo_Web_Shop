describe('Simple Search Tests', () => {
  beforeEach(() => {
    cy.visit('https://demowebshop.tricentis.com/');
  });

  it('should find products with valid search term', () => {
    cy.get('#small-searchterms').type('computer{enter}');
    cy.get('.product-item').should('have.length.greaterThan', 0);
  });

  it('should show no results message for invalid term', () => {
    cy.get('#small-searchterms').type('invalidproductxyz{enter}');
    cy.contains('No products were found').should('be.visible');
  });

  it('should allow clicking on search results', () => {
    cy.get('#small-searchterms').type('book{enter}');
    cy.get('.product-title a').first().click();
    cy.get('.product-name').should('be.visible');
  });
});