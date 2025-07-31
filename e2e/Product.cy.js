describe('Simple Product Tests', () => {
  beforeEach(() => {
    cy.visit('https://demowebshop.tricentis.com/');
    cy.get('.product-title a').first().click();
  });

  it('should display product details', () => {
    cy.get('.product-name').should('be.visible');
    cy.get('.product-price').should('be.visible');
    cy.get('.add-to-cart-button').should('be.visible');
  });

  it('should change product quantity', () => {
    cy.get(':nth-child(3) > .product-item > .picture > a > img');
    cy.get('.add-to-cart-button').click();
    cy.get('#bar-notification').should('be.visible');
  });

  it('should show error when adding zero quantity', () => {
    cy.get('#addtocart_2_EnteredQuantity').clear().type('0');
    cy.get('#add-to-cart-button-2').click();
    cy.contains('Quantity should be positive').should('be.visible');
  });
});